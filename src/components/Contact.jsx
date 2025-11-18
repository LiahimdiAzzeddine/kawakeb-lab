import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, User, MessageSquare, Send } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kawakeb",
          from_email: form.email,
          to_email: "kawakeb.company.dubai@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="relative z-50 w-full max-w-full overflow-x-hidden">
      {/* Header Section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="Microgram pb-1 uppercase flex flex-col gap-6 mt-16 sm:mt-0 text-3xl sm:text-4xl font-bold text-white max-w-[600px]"
      >
        <span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8e8e8] to-[#00a8b5]">
            Let's start a conversation
          </span>
        </span>
      </motion.div>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      {/* Contact Form Card with 3D Model Space */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 w-full max-w-full">
        {/* Form Section */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="group relative min-w-0"
        >
          <div className="relative bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f0d2e]/40 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm max-w-full">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating gradient orb */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 max-w-none pointer-events-none" />

            {/* Form Content */}
            <div className="relative p-6 sm:p-8 md:p-12">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <label className="block text-gray-400 text-sm uppercase tracking-wide mb-3 Microgram">
                    Your Name
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="What's your good name?"
                      className="w-full pl-20 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 Microgram"
                      required
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="block text-gray-400 text-sm uppercase tracking-wide mb-3 Microgram">
                    Your Email
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="What's your email address?"
                      className="w-full pl-20 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 Microgram"
                      required
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <label className="block text-gray-400 text-sm uppercase tracking-wide mb-3 Microgram">
                    Your Message
                  </label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-6 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <textarea
                      rows={7}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="What would you like to tell us?"
                      className="w-full pl-20 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-purple-400/50 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none Microgram"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-500 disabled:to-gray-600 transition-all duration-300 text-white font-semibold text-lg group/btn MicrogramBold shadow-lg shadow-cyan-500/25"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Bottom gradient line */}
                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full" />
              </form>
            </div>
          </div>
        </motion.div>

        {/* 3D Model Section */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="group relative min-w-0"
        >
          <div className="relative h-full bg-gradient-to-br from-[#1e1b4b]/40 to-[#0f0d2e]/40 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 backdrop-blur-sm max-w-full">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-cyan-400 rounded-tr-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-purple-400 rounded-bl-3xl opacity-50" />

            {/* Floating gradient orbs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-600 opacity-20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 max-w-none pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700 max-w-none pointer-events-none" />

            {/* 3D Model Container */}
            <div className="relative h-full flex items-center justify-center p-6 sm:p-8 max-w-full overflow-hidden">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
                  <MessageSquare className="w-16 h-16 text-white" strokeWidth={2} />
                </div>
             
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-600 rounded-full" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact", "z-50");
