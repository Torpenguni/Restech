import ExhibitorForm from "@/components/forms/ExhibitorForm";
import { PageHero } from "@/components/Sections";

export const metadata = { title: "Book a Stand" };

export default function BookAStand() {
  return (
    <>
      <PageHero eyebrow="Exhibit" title="Book a stand at Restech" intro="Tell us about your business. We'll reply within 2 working days with the floor plan, packages and pricing." />
      <section className="py-16">
        <div className="container-x grid gap-12 lg:grid-cols-[2fr_1fr]">
          <ExhibitorForm />
          <aside className="h-fit space-y-4 rounded-2xl bg-mist p-6 text-sm">
            <h3 className="text-lg font-bold">What happens next?</h3>
            <ol className="list-decimal space-y-2 pl-5 text-ink/70">
              <li>Our sales team reviews your enquiry.</li>
              <li>We share the floor plan and recommended packages.</li>
              <li>You choose your stand and confirm.</li>
            </ol>
          </aside>
        </div>
      </section>
    </>
  );
}
