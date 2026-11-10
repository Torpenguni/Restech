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
      <section className="py-16">
        {page.children && (
          <div className="container-x mb-12"><CardGrid items={page.children} numbered={false} /></div>
        )}
        <div className="container-x max-w-3xl space-y-10">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-2xl font-bold">{s.heading}</h2>
              <p className="mt-3 text-ink/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
      {page.cta && <CtaBand title="Join us at Restech 2026" mode={page.cta} />}
    </>
  );
}
