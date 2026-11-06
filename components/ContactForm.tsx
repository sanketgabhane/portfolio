"use client";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/content";

/** No backend needed: opens the visitor's email app with the message prefilled. */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={submit} className="form reveal">
      <label>Your name<input name="name" required placeholder="Jane Doe" /></label>
      <label>Your email<input name="email" type="email" required placeholder="jane@company.com" /></label>
      <label>Message<textarea name="message" required rows={5} placeholder="Tell me about the role or project…" /></label>
      <button type="submit" className="btn btn--solid">Send message <ArrowUpRight size={16} /></button>
      {sent && <p role="status" className="form__note">Your email app should have opened with the message ready to send.</p>}
    </form>
  );
}
