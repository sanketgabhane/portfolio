"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/data/content";

type Values = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;
type Status = "idle" | "sending" | "success";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY: Values = { name: "", email: "", message: "" };
const SUCCESS_MS = 3000; // itni der "Sent successfully" dikhega

function check(field: keyof Values, raw: string): string {
  const v = raw.trim();

  if (field === "name") {
    if (!v) return "Please enter your name.";
    if (v.length < 2) return "Name is too short.";
    if (v.length > 60) return "Name must be under 60 characters.";
  }
  if (field === "email") {
    if (!v) return "Please enter your email.";
    if (!EMAIL_RE.test(v)) return "Enter a valid email, like jane@company.com.";
  }
  if (field === "message") {
    if (!v) return "Please write a message.";
    if (v.length < 10) return "Message is too short (at least 10 characters).";
    if (v.length > 1000) return "Message must be under 1000 characters.";
  }
  return "";
}

function validateAll(v: Values): Errors {
  const out: Errors = {};
  (Object.keys(v) as (keyof Values)[]).forEach((k) => {
    const msg = check(k, v[k]);
    if (msg) out[k] = msg;
  });
  return out;
}

export default function ContactForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  // page chhodne par timer saaf
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  const onChange =
    (field: keyof Values) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setValues((p) => ({ ...p, [field]: value }));
      // error dikh raha ho to typing ke saath live check
      if (errors[field]) {
        setErrors((p) => ({ ...p, [field]: check(field, value) }));
      }
    };

  const onBlur = (field: keyof Values) => () => {
    setErrors((p) => ({ ...p, [field]: check(field, values[field]) }));
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setServerError("");

    const found = validateAll(values);
    setErrors(found);
    const first = (Object.keys(found) as (keyof Values)[])[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // honeypot: real user ko ye field dikhta hi nahi
    const company = String(new FormData(e.currentTarget).get("company") ?? "");

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, company }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.fieldErrors) setErrors(data.fieldErrors);
        setServerError(
          data.error ??
            `Something went wrong. Please try again or email me at ${profile.email}.`,
        );
        setStatus("idle");
        return;
      }

      setValues(EMPTY);
      setErrors({});
      setStatus("success");

      // thodi der baad button wapas normal
      clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setStatus("idle"), SUCCESS_MS);
    } catch {
      setServerError(
        `Network error. Please try again or email me at ${profile.email}.`,
      );
      setStatus("idle");
    }
  };

  const sending = status === "sending";
  const success = status === "success";

  return (
    <form
      ref={formRef}
      onSubmit={submit}
      noValidate
      className="form reveal"
      aria-busy={sending}
    >
      <label>
        Your name
        <input
          name="name"
          autoComplete="name"
          placeholder="Jane Doe"
          value={values.name}
          onChange={onChange("name")}
          onBlur={onBlur("name")}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "err-name" : undefined}
          className={errors.name ? "is-invalid" : undefined}
        />
        {errors.name && (
          <span id="err-name" className="form__error" role="alert">
            {errors.name}
          </span>
        )}
      </label>

      <label>
        Your email
        <input
          name="email"
          type="email"
          autoComplete="email"
          placeholder="jane@company.com"
          value={values.email}
          onChange={onChange("email")}
          onBlur={onBlur("email")}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "err-email" : undefined}
          className={errors.email ? "is-invalid" : undefined}
        />
        {errors.email && (
          <span id="err-email" className="form__error" role="alert">
            {errors.email}
          </span>
        )}
      </label>

      <label>
        Message
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about the role or project…"
          value={values.message}
          onChange={onChange("message")}
          onBlur={onBlur("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={errors.message ? "is-invalid" : undefined}
        />
        <span className="form__count" aria-hidden="true">
          {values.message.trim().length}/1000
        </span>
        {errors.message && (
          <span id="err-message" className="form__error" role="alert">
            {errors.message}
          </span>
        )}
      </label>

      {/* honeypot (spam bots ke liye) */}
      <div className="form__hp" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        className="btn btn--solid form__submit"
        data-state={status}
        disabled={sending || success}
        aria-live="polite"
      >
        {sending && (
          <>
            Sending…
            <Loader2 size={16} className="spin" aria-hidden="true" />
          </>
        )}
        {success && (
          <>
            Sent successfully
            <CheckCircle2 size={16} aria-hidden="true" />
          </>
        )}
        {status === "idle" && (
          <>
            Send message
            <ArrowUpRight size={16} aria-hidden="true" />
          </>
        )}
      </button>

      {serverError && (
        <p role="alert" className="form__error form__error--box">
          {serverError}
        </p>
      )}
    </form>
  );
}
