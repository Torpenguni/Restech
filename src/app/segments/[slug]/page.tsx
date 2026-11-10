import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, PageHero } from "@/components/Sections";
import { cta, segmentGroups } from "@/lib/site";

export const dynamicParams = false;

const all = segmentGroups.flatMap((g) => g.items.map((s) => ({ ...s, group: g.title })));

export function generateStaticParams() {
  return all.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: all.find((s) => s.slug === slug)?.name };
}

export default async function SegmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const seg = all.find((s) => s.slug === slug);
  if (!seg) notFound();
  const siblings = all.filter((s) => s.group === seg.group && s.slug !== seg.slug);
  return (
    <>
      <PageHero eyebrow={seg.group} title={`${seg.icon} ${seg.name}`} intro={seg.desc}>
        <Link href={cta.bookStand.href} className="btn-primary uppercase">Exhibit in this segment</Link>
        <Link href={cta.register.href} className="btn-ghost uppercase">{cta.register.label}</Link>
      </PageHero>
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">Who you&apos;ll meet</h2>
              <p className="mt-3 text-ink/70">Restaurant owners, chain operators and functional heads actively sourcing {seg.name.toLowerCase()} solutions.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Exhibitors in this segment</h2>
              <p className="mt-3 text-ink/70">The exhibitor list for this segment will be published as stands are confirmed.</p>
            </div>
          </div>
          <aside className="h-fit rounded-2xl bg-mist p-6">
            <h3 className="font-bold">More in {seg.group}</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {siblings.map((s) => (
                <li key={s.slug}><Link href={`/segments/${s.slug}`} className="hover:text-brand">{s.icon} {s.name}</Link></li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
      <CtaBand title={`Showcase your ${seg.name} solution`} mode="exhibit" />
    </>
  );
}
