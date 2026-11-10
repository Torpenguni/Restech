import Link from "next/link";
import { PageHero } from "@/components/Sections";
import { footerLinks, nav } from "@/lib/site";

export const metadata = { title: "Site Map" };

export default function SiteMap() {
  return (
    <>
      <PageHero eyebrow="Navigation" title="Site Map" />
      <section className="py-16">
        <div className="container-x grid gap-10 md:grid-cols-3 lg:grid-cols-5">
          {nav.map((item) => (
            <div key={item.label}>
              <h2 className="mb-3 font-bold">{item.label}</h2>
              <ul className="space-y-1.5 text-sm">
                {[...new Map(item.groups.flatMap((g) => g.links).map((l) => [l.href, l])).values()].map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-ink/70 hover:text-brand">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container-x mt-10 flex flex-wrap gap-4 text-sm">
          {footerLinks.map((l) => <Link key={l.href} href={l.href} className="text-ink/60 hover:text-brand">{l.label}</Link>)}
        </div>
      </section>
    </>
  );
}
