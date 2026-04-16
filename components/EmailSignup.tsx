"use client";
import { useState } from "react";
import FadeIn from "./FadeIn";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section className="px-6 py-20 border-t border-[#151515]">
      <FadeIn>
        <div className="max-w-[480px] mx-auto text-center">
          <div className="font-mono text-[8px] tracking-[5px] text-accent mb-4">DROP 001 · SUMMER 2026</div>
          <h2 className="font-mono text-[clamp(18px,5vw,26px)] tracking-[6px] mb-3">GET NOTIFIED</h2>
          <p className="text-[12px] text-[#555] leading-[1.8] mb-8 font-light">
            Når drop 001 er klar, sender vi én melding. Ingen spam.
          </p>
          {sent ? (
            <p className="font-mono text-[10px] tracking-[4px] text-accent">DU ER PÅ LISTA.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-[1px]">
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="din@epost.no"
                className="flex-1 bg-[#111] border border-[#1c1c1c] px-4 py-3 text-[11px] text-[#999] font-mono tracking-[1px] placeholder:text-[#333] outline-none focus:border-[#333] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#111] border border-[#1c1c1c] border-l-0 px-5 py-3 font-mono text-[9px] tracking-[3px] text-[#555] hover:text-ben hover:border-[#333] transition-colors cursor-pointer"
              >
                NOTIFY
              </button>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}
