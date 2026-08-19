import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPinOff } from "lucide-react";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-[#f2f5f8] px-5 py-10 text-[#101828]">
    <section className="w-full max-w-[560px] overflow-hidden rounded-[22px] border border-[#dbe2ea] bg-white shadow-[0_24px_70px_rgba(24,39,63,.12)]">
      <header className="flex items-center gap-3 border-b border-[#e5e9ef] px-6 py-5">
        <span className="relative size-9"><Image src="/brand/navbea-icon-light.svg" alt="" fill sizes="36px" className="object-contain"/></span>
        <span><strong className="block text-[13px] tracking-[.16em]">NAVBEA</strong><small className="mt-0.5 block text-[10px] text-[#3978d7]">OneClick</small></span>
      </header>
      <div className="px-6 py-9 sm:px-9 sm:py-11">
        <span className="grid size-12 place-items-center rounded-[14px] bg-[#edf4ff] text-[#286fd5]"><MapPinOff className="size-5"/></span>
        <p className="mt-7 text-[10px] font-bold tracking-[.13em] text-[#66809f]">404 · SAYFA BULUNAMADI</p>
        <h1 className="mt-3 text-[30px] font-semibold tracking-[-.045em]">Bu çalışma alanı mevcut değil.</h1>
        <p className="mt-3 max-w-[430px] text-[13px] leading-6 text-[#6f7d91]">Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Ana çalışma alanına dönerek devam edebilirsiniz.</p>
        <Link href="/" className="mt-7 inline-flex h-11 items-center gap-2 rounded-[11px] bg-[#176bdd] px-4 text-[12px] font-semibold text-white outline-none transition-colors hover:bg-[#105fc9] focus-visible:ring-2 focus-visible:ring-[#176bdd] focus-visible:ring-offset-2"><ArrowLeft className="size-4"/>Ana sayfaya dön</Link>
      </div>
    </section>
  </main>;
}
