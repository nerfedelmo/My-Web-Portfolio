import { useState } from "react";
import {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  PhoneIcon,
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  SendIcon,
} from "./Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [copiedPhone, setCopiedPhone] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCopyPhone(e) {
    e.preventDefault();
    navigator.clipboard.writeText("+63 991 350 4912");
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

    const mailtoUrl = `mailto:jmanansalaaa17@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setStatus({
        state: "success",
        message: "Opening your default email client... You can also reach me directly at jmanansalaaa17@gmail.com!",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 500);
  }

  return (
    <div className="max-w-7xl mx-auto py-16 sm:py-20 px-4 sm:px-8 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Structural Info & Direct Interactive Links */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Header Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-400">
                <MailIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                Contact & Inquiries
              </span>
            </div>

            {/* Display Headline in Portfolio Font Style */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              Let's build <br />
              <span className="text-cyan-600 dark:text-cyan-400">something great.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mt-4 max-w-md leading-relaxed font-normal">
              Have a project, a security inquiry, or an open role? Drop a message or reach out directly through any of the channels below.
            </p>

            {/* Direct Links List */}
            <div className="mt-8 space-y-3.5 text-sm">
              {/* Email */}
              <a
                href="mailto:jmanansalaaa17@gmail.com"
                className="group flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <MailIcon className="w-4 h-4" />
                </span>
                <span className="group-hover:underline underline-offset-4 font-mono text-xs sm:text-sm font-medium">
                  jmanansalaaa17@gmail.com
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/nerfedelmo"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </span>
                <span className="group-hover:underline underline-offset-4 font-mono text-xs sm:text-sm font-medium">
                  github.com/nerfedelmo
                </span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/joshua-manansala-577bb9390/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span className="p-2 rounded-xl bg-[#0077b5]/10 text-[#0077b5] shrink-0">
                  <LinkedinIcon className="w-4 h-4" />
                </span>
                <span className="group-hover:underline underline-offset-4 font-mono text-xs sm:text-sm font-medium">
                  in/joshua-manansala-577bb9390
                </span>
                <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Phone */}
              <div className="group flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <a
                  href="tel:+639913504912"
                  className="flex items-center gap-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 shrink-0">
                    <PhoneIcon className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-medium">+63 999 413 2900</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  title="Copy phone number"
                  className="p-1 rounded text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <CopyIcon className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 pt-1 text-xs sm:text-sm">
                <span className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="font-medium">Angeles City, Pampanga, Philippines</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="/PDF-Copy/Resume_JoshuaManansala.pdf"
                download="Resume_JoshuaManansala.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 hover:border-slate-900 dark:hover:border-white text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Seamless Clean Form in Portfolio Theme */}
        <div className="lg:col-span-6 lg:pl-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Your name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Your email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="JohnDoe@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 transition-all shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Your message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="What would you like to discuss?"
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/25 focus:border-cyan-500 transition-all shadow-xs resize-y"
              />
            </div>

            {status.message && (
              <div
                className={`p-3 rounded-xl text-xs font-medium ${status.state === "success"
                    ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
                    : "bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20"
                  }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === "submitting"}
              className="glow-button w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 active:scale-[0.99] transition-all cursor-pointer shadow-md disabled:opacity-50 inline-flex items-center justify-center gap-2"
            >
              <SendIcon className="w-4 h-4" />
              {status.state === "submitting" ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
