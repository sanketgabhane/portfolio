// lib/site.ts
// Deploy ke baad apna real domain yahan ya .env mein NEXT_PUBLIC_SITE_URL set karo
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sanketgabhane.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Sanket Gabhane";
