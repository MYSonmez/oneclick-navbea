"use client";

import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <html lang="tr"><body><main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"24px",background:"#f2f5f8",color:"#101828",fontFamily:"Inter,ui-sans-serif,system-ui,sans-serif"}}><section style={{width:"100%",maxWidth:520,border:"1px solid #dbe2ea",borderRadius:20,background:"#fff",padding:36,boxShadow:"0 20px 60px rgba(24,39,63,.1)"}}><span style={{display:"grid",width:48,height:48,placeItems:"center",borderRadius:14,background:"#fff0f2",color:"#d74259"}}><AlertTriangle size={20}/></span><p style={{margin:"28px 0 0",color:"#b04b5b",fontSize:10,fontWeight:700,letterSpacing:".13em"}}>UYGULAMA HATASI</p><h1 style={{margin:"12px 0 0",fontSize:27,letterSpacing:"-.04em"}}>OneClick yüklenemedi.</h1><p style={{margin:"12px 0 0",color:"#6f7d91",fontSize:13,lineHeight:1.7}}>Geçici bir sorun oluştu. Uygulamayı yeniden yükleyerek devam edebilirsiniz.</p><button type="button" onClick={reset} style={{display:"inline-flex",height:44,alignItems:"center",gap:8,marginTop:28,border:0,borderRadius:11,background:"#176bdd",padding:"0 16px",color:"#fff",fontSize:12,fontWeight:600,cursor:"pointer"}}><RotateCcw size={16}/>Tekrar dene</button></section></main></body></html>;
}
