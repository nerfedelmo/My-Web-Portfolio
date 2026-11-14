import { useState } from "react";
import { contacts } from "../data/contacts";
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  PhoneIcon,
  SendIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon,
} from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneContact = contacts.find((c) => c.type === "phone");

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCopyPhone(e) {
    e.preventDefault();
    if (!phoneContact) return;
    navigator.clipboard.writeText(phoneContact.display);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: "error", message: "Please fill out all required fields." });
      return;
    }

    setStatus({ state: "submitting", message: "" });

    // Build mailto URL as client-side fallback
    const mailtoUrl = `mailto:jmanansalaaa17@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus({
        state: "success",
        message: "Opening your default email client... You can also reach me directly at jmanansalaaa17@gmail.com!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 600);
  }

  return (
    <section id="contact" className="py-12 px-4 sm:px-8 lg:px-20 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <MailIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Let's Connect
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Contact Form */}
        <div className="lg:col-span-7 modern-card rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Send a Direct Message
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
            Have a project idea, security inquiry, or job opportunity? Drop your note below and I will respond promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. Alex Rivera"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Collaboration / Job Opportunity / Question"
                className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder="Tell me about your project, timeline, or open role..."
                className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 transition-all resize-y"
              />
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs sm:text-sm font-medium ${
                  status.state === "success"
                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                    : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === "submitting"}
              className="glow-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-slate-900 text-white dark:bg-white dark:text-slate-900 transition-all disabled:opacity-50"
            >
              <SendIcon className="w-4 h-4" />
              {status.state === "submitting" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Column: Direct Channels & Phone */}
        <div className="lg:col-span-5 space-y-4">
          <div className="modern-card rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Direct Contact Channels
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Feel free to reach out via your preferred platform below.
            </p>

            <div className="space-y-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/joshua-manansala-577bb9390/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-[#0077b5]/10 text-[#0077b5] shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">LinkedIn</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      joshua-manansala-577bb9390
                    </p>
                  </div>
                </div>
                <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nerfedelmo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-slate-900/10 text-slate-900 dark:text-white dark:bg-white/10 shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">GitHub</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      github.com/nerfedelmo
                    </p>
                  </div>
                </div>
                <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 shrink-0" />
              </a>

              {/* Gmail Direct */}
              <a
                href="mailto:jmanansalaaa17@gmail.com"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 shrink-0">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">Gmail</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      jmanansalaaa17@gmail.com
                    </p>
                  </div>
                </div>
                <ExternalLinkIcon className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 shrink-0" />
              </a>

              {/* Phone Number with Click-to-call & Copy */}
              {phoneContact && (
                <div className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
                  <a href={phoneContact.url} className="flex items-center gap-3 min-w-0 flex-1 hover:opacity-80">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 shrink-0">
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Phone / SMS</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {phoneContact.display}
                      </p>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    title="Copy phone number"
                    className="p-2 rounded-xl text-slate-500 hover:text-cyan-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    {copiedPhone ? (
                      <CheckIcon className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <CopyIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
