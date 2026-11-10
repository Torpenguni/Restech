import BrochureForm from "@/components/forms/BrochureForm";
import { PageHero } from "@/components/Sections";

export const metadata = { title: "Join Mailing List & Download Brochure" };

export default function JoinMailingList() {
  return (
    <>
      <PageHero eyebrow="Media Centre" title="Join Our Mailing List & Download the Brochure" intro="Get the Restech brochure — visitor profile, floor plan and packages — and stay updated on the show." />
      <section className="py-16">
        <div className="container-x max-w-xl"><BrochureForm /></div>
      </section>
    </>
  );
}
