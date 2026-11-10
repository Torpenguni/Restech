import BrochureForm from "@/components/forms/BrochureForm";
import { PageHero } from "@/components/Sections";

export const metadata = { title: "Download Brochure" };

export default function Brochure() {
  return (
    <>
      <PageHero eyebrow="Resources" title="Download the Restech brochure" intro="Visitor profile, floor plan, packages and pricing — all in one PDF." />
      <section className="py-16">
        <div className="container-x max-w-xl"><BrochureForm /></div>
      </section>
    </>
  );
}
