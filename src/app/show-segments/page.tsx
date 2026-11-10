import { CtaBand, PageHero, SegmentGrid } from "@/components/Sections";

export const metadata = { title: "Show Segments" };

export default function ShowSegments() {
  return (
    <>
      <PageHero eyebrow="Show Information" title="Show Segments" intro="Restech is organised around the systems a modern restaurant runs on — front of house and back of house." />
      <section className="bg-mist py-16"><div className="container-x"><SegmentGrid /></div></section>
      <CtaBand title="Find your segment on the show floor" />
    </>
  );
}
