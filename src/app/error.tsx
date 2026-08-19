"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";
import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <main className="grid min-h-[calc(100dvh-58px)] place-items-center bg-[#f2f5f8] px-5 py-10 text-[#101828]">
    <section className="w-full max-w-[520px] rounded-[20px] border border-[#dbe2ea] bg-white p-7 shadow-[0_20px_60px_rgba(24,39,63,.1)] sm:p-9">
      <span className="grid size-12 place-items-center rounded-[14px] bg-[#fff0f2] text-[#d74259]"><AlertTriangle className="size-5"/></span>
      <p className="mt-7 text-[10px] font-bold tracking-[.13em] text-[#b04b5b]">ÇALIŞMA ALANI HATASI</p>
      <h1 className="mt-3 text-[27px] font-semibold tracking-[-.04em]">Sayfa yüklenemedi.</h1>
      <p className="mt-3 text-[13px] leading-6 text-[#6f7d91]">Geçici bir sorun oluştu. Çalışma alanını yeniden yükleyerek devam edebilirsiniz.</p>
      {error.digest && <p className="mt-4 font-mono text-[10px] text-[#8a96a6]">Referans: {error.digest}</p>}
      <button type="button" onClick={reset} className="mt-7 inline-flex h-11 items-center gap-2 rounded-[11px] bg-[#176bdd] px-4 text-[12px] font-semibold text-white outline-none transition-colors hover:bg-[#105fc9] focus-visible:ring-2 focus-visible:ring-[#176bdd] focus-visible:ring-offset-2"><RotateCcw className="size-4"/>Tekrar dene</button>
    </section>
  </main>;
}
