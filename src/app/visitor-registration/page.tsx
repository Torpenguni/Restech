import VisitorForm from "@/components/forms/VisitorForm";
import { PageHero } from "@/components/Sections";
import { event } from "@/lib/site";

export const metadata = { title: "Visitor Registration" };

export default function Register() {
  return (
    <>
      <PageHero eyebrow="Visit" title="Register for your free trade pass" intro={`${event.dateLabel} · ${event.venue}. Trade visitors only, aged 18+.`} />
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <VisitorForm />
          <aside className="h-fit space-y-3 rounded-2xl bg-mist p-6 text-sm text-ink/70">
            <h3 className="text-lg font-bold text-ink">Your pass includes</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access to all exhibition halls</li>
              <li>Main Stage and conference sessions</li>
              <li>Tech Demo Kitchen</li>
              <li>Business matching with exhibitors</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
