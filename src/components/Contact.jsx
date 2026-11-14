import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contact } from "../data/profile";
import { Reveal, SectionHeader } from "./ui";

const inputClass =
  "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 transition-colors focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-white/10 dark:bg-ink-900 dark:text-gray-100 dark:placeholder:text-gray-500";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // No backend: open the visitor's mail client with the message pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${formData.name}`;
    const body = `${formData.message}\n\n${formData.name}\n${formData.email}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: contact.email,
      link: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      content: contact.phone,
      link: contact.phoneHref,
    },
    {
      icon: MapPin,
      title: "Location",
      content: contact.location,
      link: "https://www.google.com/maps/place/Pune,+Maharashtra",
    },
  ];

  return (
    <section id="contact" className="section-padding section-base">
      <div className="container-max">
        <SectionHeader
          index="06"
          title="Contact"
          subtitle="Open to full-stack and backend opportunities, collaborations, or just a chat about tech."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <Reveal className="space-y-3">
            {contactInfo.map(({ icon: Icon, title, content, link }) => (
              <a
                key={title}
                href={link}
                {...(link.startsWith("http") && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="card group flex items-center gap-4 p-4 transition-colors hover:border-violet-400 dark:hover:border-violet-400/50"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                  <p className="truncate font-medium text-gray-900 group-hover:text-violet-700 dark:text-white dark:group-hover:text-violet-300">
                    {content}
                  </p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.06} className="card p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className={inputClass}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className={inputClass}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                <Send size={18} />
                Send Message
              </button>
              {sent && (
                <p className="text-center text-sm text-gray-600 dark:text-gray-300" role="status">
                  Your email app should open with the message ready to send. If
                  it doesn't, write to{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-violet-700 underline dark:text-violet-300"
                  >
                    {contact.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
