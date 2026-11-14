"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/Icons";
import confetti from "canvas-confetti";
import {
  Mail,
  Copy,
  Check,
  Send,
  Loader2,
  ArrowUpRight,
  Phone,
  Download,
} from "lucide-react";
export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };
  const handleCopyPhone = () => {
    navigator.clipboard.writeText(portfolioData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Realistic API interaction simulation
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setSubmittedData(data);
    // Trigger multi-stage celebratory confetti explosion
    try {
      // First burst
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#c5ff4a", "#ffffff", "#38bdf8"],
      });
      // Second burst with delay for maximum visual delight
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0.2, y: 0.7 },
          colors: ["#c5ff4a", "#a855f7", "#f43f5e"],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 0.8, y: 0.7 },
          colors: ["#c5ff4a", "#38bdf8", "#10b981"],
        });
      }, 250);
    } catch {
      // Confetti fallback
    }
    reset();
  };
  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background ambient glow element */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 dark:bg-[#c5ff4a]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <SectionHeading
          label="Inquiries"
          title="Have a Project"
          highlight="in Mind?"
          description="Let's build something meaningful together. Whether you need full frontend architecture, a design system, or a technical consultation, my inbox is open."
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          {/* Left Column: Direct Contact & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#111115] border border-black/[0.08] dark:border-white/[0.08] shadow-sm space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Direct Line & Contact
                </span>
                
                {/* Email Item */}
                <div className="mt-2 flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a] shrink-0" />
                    <span className="text-sm font-mono text-zinc-900 dark:text-white truncate">
                      {portfolioData.email}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    aria-label="Copy email address"
                    className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors shrink-0"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-[#c5ff4a] mt-1.5 pl-1">
                    ✓ Email copied to clipboard
                  </p>
                )}

                {/* Phone Item */}
                <div className="mt-2.5 flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/5">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Phone className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a] shrink-0" />
                    <span className="text-sm font-mono text-zinc-900 dark:text-white truncate">
                      {portfolioData.phone}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    type="button"
                    aria-label="Copy phone number"
                    className="p-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors shrink-0"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-[#c5ff4a]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedPhone && (
                  <p className="text-[11px] font-mono text-emerald-600 dark:text-[#c5ff4a] mt-1.5 pl-1">
                    ✓ Phone number copied to clipboard
                  </p>
                )}

                {/* Download CV Card */}
                <div className="mt-3.5">
                  <a
                    href={portfolioData.resumeUrl}
                    download="Kavish_Bhatt_Resume.pdf"
                    className="w-full flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-[#c5ff4a] dark:hover:bg-[#b4f535] dark:text-black font-semibold text-xs sm:text-sm transition-all shadow-md dark:shadow-[0_0_15px_rgba(197,255,74,0.3)]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Complete CV (PDF)</span>
                  </a>
                </div>
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Location & Availability
                </span>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 font-sans">
                  {portfolioData.location} (IST / UTC +5:30)
                </p>
                <div className="mt-2 inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Accepting projects for {portfolioData.availability}</span>
                </div>
              </div>
              <div className="pt-4 border-t border-black/[0.06] dark:border-white/5">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-3">
                  Professional Networks
                </span>
                <div className="flex flex-col gap-2">
                  {portfolioData.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-white/[0.02] dark:hover:bg-white/[0.06] border border-black/[0.06] dark:border-white/5 text-sm text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        {social.name === "GitHub" && <GitHubIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />}
                        {social.name === "LinkedIn" && <LinkedInIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />}
                        {social.name === "Instagram" && <InstagramIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />}
                        <span className="font-medium">{social.name}</span>
                      </div>
                      <span className="text-xs font-mono text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-[#c5ff4a] flex items-center gap-1">
                        {social.handle}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Right Column: React Hook Form + Zod Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-[#111115] border border-black/[0.08] dark:border-white/[0.08] shadow-sm relative">
              {submittedData ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-[#c5ff4a]/20 border border-emerald-500 dark:border-[#c5ff4a] text-emerald-600 dark:text-[#c5ff4a] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(22,163,74,0.2)] dark:shadow-[0_0_20px_rgba(197,255,74,0.3)]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Message Dispatched!</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you <strong className="text-zinc-900 dark:text-white">{submittedData.name}</strong>. Your message regarding{" "}
                    <span className="text-emerald-600 dark:text-[#c5ff4a]">"{submittedData.subject}"</span> was processed successfully.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="px-6 py-2.5 rounded-full text-xs font-mono bg-zinc-100 hover:bg-zinc-200 dark:bg-white/10 dark:hover:bg-white/15 text-zinc-900 dark:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                      >
                        Your Name <span className="text-emerald-600 dark:text-[#c5ff4a]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Vance"
                        {...register("name")}
                        className={`w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-black/[0.1] focus:border-emerald-600 dark:border-white/10 dark:focus:border-[#c5ff4a]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs font-mono text-red-500 dark:text-red-400 mt-1.5">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                      >
                        Email Address <span className="text-emerald-600 dark:text-[#c5ff4a]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="alex@example.com"
                        {...register("email")}
                        className={`w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-black/[0.1] focus:border-emerald-600 dark:border-white/10 dark:focus:border-[#c5ff4a]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs font-mono text-red-500 dark:text-red-400 mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Project Subject <span className="text-emerald-600 dark:text-[#c5ff4a]">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. Next.js SaaS Web App Development"
                      {...register("subject")}
                      className={`w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none transition-colors ${
                        errors.subject
                          ? "border-red-500/70 focus:border-red-500"
                          : "border-black/[0.1] focus:border-emerald-600 dark:border-white/10 dark:focus:border-[#c5ff4a]"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-xs font-mono text-red-500 dark:text-red-400 mt-1.5">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2"
                    >
                      Message & Scope <span className="text-emerald-600 dark:text-[#c5ff4a]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder="Tell me about your product timeline, goals, and technical requirements..."
                      {...register("message")}
                      className={`w-full px-4 py-3.5 rounded-xl bg-zinc-50 dark:bg-white/[0.03] border text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500/70 focus:border-red-500"
                          : "border-black/[0.1] focus:border-emerald-600 dark:border-white/10 dark:focus:border-[#c5ff4a]"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs font-mono text-red-500 dark:text-red-400 mt-1.5">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-[#c5ff4a] dark:hover:bg-[#b4f535] dark:text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md dark:shadow-[0_0_20px_rgba(197,255,74,0.3)] dark:hover:shadow-[0_0_28px_rgba(197,255,74,0.5)] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] font-mono text-zinc-500">
                      Zero SPAM • Replies within 24h
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
