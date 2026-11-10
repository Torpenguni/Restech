"use client";

import { useSubmit } from "./useSubmit";

export default function NewsletterForm() {
  const { status, onSubmit } = useSubmit("/api/subscribe");
  if (status.state === "success") return <p className="text-sm text-lime">Thanks — you&apos;re subscribed.</p>;
  return (
    <form onSubmit={onSubmit} className="relative flex flex-wrap gap-2">
      <div aria-hidden className="absolute -left-[9999px]"><input name="website_url" tabIndex={-1} autoComplete="off" /></div>
      <input type="hidden" name="source" value="newsletter" />
      <input name="email" type="email" required placeholder="Your email" className="min-w-0 flex-1 rounded-full bg-white/10 px-4 py-2.5 text-sm outline-none placeholder:text-white/40 focus:ring-2 focus:ring-lime" />
      <button disabled={status.state === "loading"} className="btn-lime !px-4 !py-2.5">Sign up</button>
      {status.state === "error" && <p className="w-full text-xs text-red-300" role="alert">{status.message}</p>}
    </form>
  );
}
