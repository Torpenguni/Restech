import Link from "next/link";
import { cta, event } from "@/lib/site";

export const metadata = { title: "ภาษาไทย" };

// Thai landing page (FHA has a Chinese-language home at /cn-home). TODO: full Thai translation.
export default function ThaiHome() {
  return (
    <section className="bg-hero py-24 text-white">
      <div className="container-x max-w-3xl text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.webp" alt="Restech 2026" className="mx-auto mb-8 w-full max-w-md" />
        <p className="eyebrow !text-brand">27–29 สิงหาคม 2569 · อิมแพ็ค เมืองทองธานี ฮอลล์ 5–6</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">งานแสดงเทคโนโลยีร้านอาหาร 2569 : ก้าวสู่อนาคต</h1>
        <p className="mt-6 text-lg text-white/70">พบผู้ให้บริการระบบ POS, เดลิเวอรี, CRM, ครัวอัตโนมัติ และ AI สำหรับธุรกิจร้านอาหารในที่เดียว</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={cta.register.href} className="btn-primary">ลงทะเบียนเข้าชมงาน</Link>
          <Link href={cta.bookStand.href} className="btn-blue">จองบูธ</Link>
          <Link href={cta.brochure.href} className="btn-ghost">ดาวน์โหลดโบรชัวร์</Link>
        </div>
      </div>
    </section>
  );
}
