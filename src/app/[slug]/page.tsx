import { notFound } from "next/navigation";
import { CardGrid, CtaBand, PageHero } from "@/components/Sections";
import { infoPages } from "@/lib/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(infoPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return { title: infoPages[slug]?.title };
}

export default async function InfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = infoPages[slug];
  if (!page) notFound();
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
      <section className="section-y">
        {page.children && (
          <div className="container-x mb-10"><CardGrid items={page.children} numbered={false} /></div>
        )}
        <div className="container-x max-w-3xl space-y-8">
          {/* Sections still marked TODO in pages.ts are not shown publicly */}
          {page.sections
            .filter((s) => !s.body.trim().startsWith("TODO"))
            .map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-semibold md:text-2xl">{s.heading}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-ink/70 md:text-base">{s.body.replace(/\s*TODO:.*$/, "")}</p>
              </div>
            ))}
          {page.sections.some((s) => s.body.trim().startsWith("TODO")) && (
            <p className="rounded-2xl border border-line bg-white/60 px-5 py-4 text-sm text-ink/60">
              More details will be announced closer to the show. Questions? <a href="/contact-us" className="font-semibold text-brand hover:underline">Contact the Restech team</a>.
            </p>
          )}
        </div>
      </section>
      {page.cta && <CtaBand title="Join us at Restech 2027" mode={page.cta} />}
    </>
  );
}
