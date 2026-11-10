import { CtaBand, PageHero } from "@/components/Sections";
import { segments } from "@/lib/site";

export const metadata = { title: "Show Segments" };

export default function ShowSegments() {
  return (
    <>
      <PageHero eyebrow="The Event" title="Show Segments" intro="Restech is organised around the systems a modern restaurant runs on." />
      <section className="py-16">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {segments.map((s) => (
            <article key={s.slug} id={s.slug} className="scroll-mt-32 rounded-2xl border border-ink/10 p-6">
              <div className="text-4xl">{s.icon}</div>
              <h2 className="mt-3 text-xl font-bold">{s.name}</h2>
              <p className="mt-2 text-ink/70">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand title="Find your segment on the show floor" />
    </>
  );
}
