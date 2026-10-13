import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { contact } from "../data/profile";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: contact.email,
      link: `mailto:${contact.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: contact.phone,
      link: contact.phoneHref,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      content: contact.location,
      link: "https://www.google.com/maps/place/Pune,+Maharashtra",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Open to full-stack and backend opportunities, collaborations, or
            just a chat about tech. My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
              Let's Start a Conversation
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  {...(info.link.startsWith("http") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="flex items-center p-3 sm:p-4 bg-gray-100 dark:bg-gray-900 rounded-lg hover:shadow-md hover:shadow-violet-500/20 dark:hover:shadow-violet-500/10 transition-shadow duration-300"
                >
                  <div className="text-violet-600 dark:text-violet-400 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 rounded-lg"
            >
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                What I Bring
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                <li>• Production experience as a Software Engineer at humancloud</li>
                <li>• End-to-end ownership: React/Angular UI to Spring Boot APIs</li>
                <li>• Microservices, Kafka and Kubernetes hands-on experience</li>
                <li>• Clean, tested and well-documented code</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
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
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center"
              >
                <Send size={20} />
                Send Message
              </button>
              {sent && (
                <p className="text-sm text-center text-gray-600 dark:text-gray-300" role="status">
                  Your email app should open with the message ready to send. If
                  it doesn't, write to{" "}
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-violet-600 dark:text-violet-400 underline"
                  >
                    {contact.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
