import Link from "next/link";
import { cta, event } from "@/lib/site";

export const metadata = { title: "ภาษาไทย" };

// Thai landing page (FHA has a Chinese-language home at /cn-home). TODO: full Thai translation.
export default function ThaiHome() {
  return (
    <section className="bg-ink py-28 text-white">
      <div className="container-x max-w-3xl text-center">
        <p className="eyebrow !text-lime">{event.dateLabel} · กรุงเทพฯ</p>
        <h1 className="mt-4 text-4xl font-black md:text-6xl">งานแสดงเทคโนโลยีและการบริหารร้านอาหารแห่งเอเชีย</h1>
        <p className="mt-6 text-lg text-white/70">พบผู้ให้บริการระบบ POS, เดลิเวอรี, CRM, ครัวอัตโนมัติ และ AI สำหรับธุรกิจร้านอาหารในที่เดียว</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={cta.register.href} className="btn-primary">ลงทะเบียนเข้าชมงาน</Link>
          <Link href={cta.bookStand.href} className="btn-lime">จองบูธ</Link>
          <Link href={cta.brochure.href} className="btn-ghost">ดาวน์โหลดโบรชัวร์</Link>
        </div>
      </div>
    </section>
  );
}
