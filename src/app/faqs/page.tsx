import { CtaBand, Faq, PageHero } from "@/components/Sections";

export const metadata = { title: "FAQs" };

export default function Faqs() {
  return (
    <>
      <PageHero eyebrow="Have a question?" title="Frequently Asked Questions" />
      <section className="py-16"><div className="container-x"><Faq /></div></section>
      <CtaBand title="Still have questions?" text="Contact our team — we're happy to help." />
    </>
  );
}
