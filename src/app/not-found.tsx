import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="h2 mt-2">Page not found</h1>
      <Link href="/" className="btn-primary mt-8">Back to home</Link>
    </section>
  );
}
