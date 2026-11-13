import React, { Component, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Points, PointMaterial } from "@react-three/drei";

// Random points inside a sphere shell, generated once.
const makeParticles = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

const ParticleField = ({ dark }) => {
  const ref = useRef();
  const isSmall = typeof window !== "undefined" && window.innerWidth < 768;
  const positions = useMemo(() => makeParticles(isSmall ? 900 : 2200, 9), [isSmall]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x += delta * 0.01;
    // Gentle parallax towards the pointer.
    ref.current.position.x += (state.pointer.x * 0.4 - ref.current.position.x) * 0.03;
    ref.current.position.y += (state.pointer.y * 0.3 - ref.current.position.y) * 0.03;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      position={[0, 0, -4]}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color={dark ? "#a78bfa" : "#7c3aed"}
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={dark ? 0.8 : 0.55}
      />
    </Points>
  );
};

const Blob = ({ dark }) => {
  const group = useRef();
  const { viewport } = useThree();
  // Sit behind the photo on wide screens, centred and smaller on mobile.
  const wide = viewport.width > 9;
  const x = wide ? viewport.width * 0.17 : 0;
  const scale = wide ? 1.6 : 1.1;

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15 + state.pointer.x * 0.4;
    group.current.rotation.x = state.pointer.y * -0.3;
  });

  return (
    <group ref={group} position={[x, wide ? 0 : -0.6, -1]} scale={scale}>
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
        {/* The solid blob bulged unevenly from behind the photo on desktop,
            so there only the wireframe halo is drawn. */}
        {!wide && (
          <mesh>
            <icosahedronGeometry args={[1.2, 32]} />
            <MeshDistortMaterial
              color={dark ? "#6d28d9" : "#8b5cf6"}
              emissive={dark ? "#4c1d95" : "#7c3aed"}
              emissiveIntensity={dark ? 0.6 : 0.25}
              roughness={0.25}
              metalness={0.4}
              distort={0.42}
              speed={1.6}
              transparent
              opacity={0.35}
            />
          </mesh>
        )}
        <mesh scale={1.35}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial
            color={dark ? "#a78bfa" : "#7c3aed"}
            wireframe
            transparent
            opacity={wide ? (dark ? 0.35 : 0.28) : dark ? 0.25 : 0.18}
          />
        </mesh>
      </Float>
    </group>
  );
};

// If WebGL is unavailable the hero simply renders without the scene.
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

const HeroScene = ({ dark, active, eventSource }) => (
  <SceneBoundary>
    <Canvas
      eventSource={eventSource}
      eventPrefix="client"
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={dark ? 0.5 : 0.9} />
      <directionalLight position={[4, 5, 5]} intensity={1.4} />
      <pointLight position={[-4, -2, 2]} intensity={dark ? 25 : 12} color="#6366f1" />
      <ParticleField dark={dark} />
      <Blob dark={dark} />
    </Canvas>
  </SceneBoundary>
);

export default HeroScene;
