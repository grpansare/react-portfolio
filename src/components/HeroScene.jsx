import React, { useEffect, useRef } from "react";

// Lightweight replacement for the old three.js scene: a slowly rotating sphere
// of particles drawn on a 2D canvas, with a gentle parallax towards the pointer.

const RADIUS = 9;
const CAMERA_Z = 6;
const SCENE_Z = -4; // the cloud sits behind the text, like the old scene
const FOV = (55 * Math.PI) / 180;

const makeParticles = (count) => {
  const pts = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = RADIUS * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    pts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    pts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    pts[i * 3 + 2] = r * Math.cos(phi);
  }
  return pts;
};

const HeroScene = ({ dark, active, eventSource }) => {
  const canvasRef = useRef(null);
  const state = useRef({ rotX: 0, rotY: 0, px: 0, py: 0, tx: 0, ty: 0 });
  const darkRef = useRef(dark);
  darkRef.current = dark;

  // Pointer parallax, measured over the whole hero section.
  useEffect(() => {
    const el = eventSource?.current;
    if (!el) return undefined;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      state.current.tx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      state.current.ty = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [eventSource]);

  useEffect(() => {
    if (!active) return undefined;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return undefined;

    const isSmall = window.innerWidth < 768;
    const pts = makeParticles(isSmall ? 900 : 2200);
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let focal = 0;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      focal = height / 2 / Math.tan(FOV / 2);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let frame;
    let last = performance.now();
    const draw = (now) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const s = state.current;
      s.rotY += dt * 0.03;
      s.rotX += dt * 0.01;
      s.px += (s.tx * 0.4 - s.px) * 0.03;
      s.py += (s.ty * 0.3 - s.py) * 0.03;

      const cy = Math.cos(s.rotY);
      const sy = Math.sin(s.rotY);
      const cx = Math.cos(s.rotX);
      const sx = Math.sin(s.rotX);
      const isDark = darkRef.current;

      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = isDark ? "#60a5fa" : "#2563eb";
      ctx.globalAlpha = isDark ? 0.8 : 0.55;

      for (let i = 0; i < pts.length; i += 3) {
        const x0 = pts[i];
        const y0 = pts[i + 1];
        const z0 = pts[i + 2];
        // rotate around X, then Y
        const y1 = y0 * cx - z0 * sx;
        const z1 = y0 * sx + z0 * cx;
        const x2 = x0 * cy + z1 * sy;
        const z2 = -x0 * sy + z1 * cy;
        const depth = CAMERA_Z - (z2 + SCENE_Z);
        if (depth <= 0.1) continue;
        const scale = focal / depth;
        // Same point sizing as three.js PointMaterial (size * halfHeight / depth), capped
        // so particles right in front of the camera don't turn into big squares.
        const size = Math.min(Math.max((0.035 * height) / 2 / depth, 0.6), 2.5);
        ctx.fillRect(
          width / 2 + (x2 + s.px) * scale - size / 2,
          height / 2 - (y1 + s.py) * scale - size / 2,
          size,
          size
        );
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [active]);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
};

export default HeroScene;
