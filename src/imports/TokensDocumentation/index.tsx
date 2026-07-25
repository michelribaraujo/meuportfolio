import svgPaths from "./svg-z2yrbkauuv";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#16a34a] h-[24px] relative rounded-[3px] shrink-0 w-[12px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[14px] uppercase whitespace-nowrap">Reference Registry</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[800px]" data-name="Frame">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] min-w-full not-italic relative shrink-0 text-[#111511] text-[40px] w-[min-content]">Mikhaelangelo Design System — Tokens</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#555e55] text-[16px] w-[min-content]">Sistema de referência com primitivos de marca, mapeamentos semânticos, coordenadas e escalas da biblioteca Mikhaelangelo. Projetado para alinhamento visual rigoroso entre layouts e telas.</p>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="check">
          <path d={svgPaths.p221839c0} id="Vector" stroke="var(--stroke-0, #16A34A)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Frame">
      <Check />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[12px] whitespace-nowrap">STATUS DO SISTEMA: ESTÁVEL (v2.4)</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1c1917] text-[20px] w-full">01 / Cores Primitivas</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[14px] w-full">77 tokens em 9 rampas: night, slate, cosmos, neutral, amber, red, yellow, blue, feedback. Otimizado para contraste de acessibilidade e pareamento claro/escuro.</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, #C8D2E1)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Color() {
  return (
    <div className="bg-[#ebf0ff] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="50">
      <Color />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#EBF0FF</p>
    </div>
  );
}

function Color1() {
  return (
    <div className="bg-[#d2defa] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="100">
      <Color1 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#D2DEFA</p>
    </div>
  );
}

function Color2() {
  return (
    <div className="bg-[#afc3f2] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="200">
      <Color2 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#AFC3F2</p>
    </div>
  );
}

function Color3() {
  return (
    <div className="bg-[#829ee6] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="300">
      <Color3 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#829EE6</p>
    </div>
  );
}

function Color4() {
  return (
    <div className="bg-[#5573d2] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="400">
      <Color4 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#5573D2</p>
    </div>
  );
}

function Color5() {
  return (
    <div className="bg-[#3855b9] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color5 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#3855B9</p>
    </div>
  );
}

function Color6() {
  return (
    <div className="bg-[#253e96] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color6 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#253E96</p>
    </div>
  );
}

function Color7() {
  return (
    <div className="bg-[#1c2d78] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="700">
      <Color7 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#1C2D78</p>
    </div>
  );
}

function Color8() {
  return (
    <div className="bg-[#121c4b] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="800">
      <Color8 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#121C4B</p>
    </div>
  );
}

function Color9() {
  return (
    <div className="bg-[#0c1232] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="900">
      <Color9 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#0C1232</p>
    </div>
  );
}

function Color10() {
  return (
    <div className="bg-[#080c20] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="950">
      <Color10 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#080C20</p>
    </div>
  );
}

function Swatches() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component1 />
      <Component6 />
      <Component11 />
      <Component16 />
      <Component21 />
      <Component26 />
      <Component34 />
      <Component42 />
      <Component47 />
      <Component52 />
      <Component57 />
    </div>
  );
}

function Night() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="night">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">NIGHT</p>
      <Swatches />
    </div>
  );
}

function Color11() {
  return (
    <div className="bg-[#f5f8fc] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="50">
      <Color11 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F5F8FC</p>
    </div>
  );
}

function Color12() {
  return (
    <div className="bg-[#e4e8f0] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="100">
      <Color12 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#E4E8F0</p>
    </div>
  );
}

function Color13() {
  return (
    <div className="bg-[#c8d2e1] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="200">
      <Color13 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#C8D2E1</p>
    </div>
  );
}

function Color14() {
  return (
    <div className="bg-[#a0afc8] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="300">
      <Color14 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#A0AFC8</p>
    </div>
  );
}

function Color15() {
  return (
    <div className="bg-[#788caa] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="400">
      <Color15 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#788CAA</p>
    </div>
  );
}

function Color16() {
  return (
    <div className="bg-[#5a698c] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component27() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color16 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#5A698C</p>
    </div>
  );
}

function Color17() {
  return (
    <div className="bg-[#415073] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color17 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#415073</p>
    </div>
  );
}

function Color18() {
  return (
    <div className="bg-[#303c5a] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component43() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="700">
      <Color18 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#303C5A</p>
    </div>
  );
}

function Color19() {
  return (
    <div className="bg-[#1e2841] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component48() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="800">
      <Color19 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#1E2841</p>
    </div>
  );
}

function Color20() {
  return (
    <div className="bg-[#12192d] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component53() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="900">
      <Color20 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#12192D</p>
    </div>
  );
}

function Color21() {
  return (
    <div className="bg-[#0a0f1e] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component58() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="950">
      <Color21 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#0A0F1E</p>
    </div>
  );
}

function Swatches1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component2 />
      <Component7 />
      <Component12 />
      <Component17 />
      <Component22 />
      <Component27 />
      <Component35 />
      <Component43 />
      <Component48 />
      <Component53 />
      <Component58 />
    </div>
  );
}

function Slate() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="slate">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">SLATE</p>
      <Swatches1 />
    </div>
  );
}

function Color22() {
  return (
    <div className="bg-[#f5f0ff] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="50">
      <Color22 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F5F0FF</p>
    </div>
  );
}

function Color23() {
  return (
    <div className="bg-[#e8defc] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="100">
      <Color23 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#E8DEFC</p>
    </div>
  );
}

function Color24() {
  return (
    <div className="bg-[#d2c0f8] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="200">
      <Color24 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#D2C0F8</p>
    </div>
  );
}

function Color25() {
  return (
    <div className="bg-[#b49bf0] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="300">
      <Color25 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#B49BF0</p>
    </div>
  );
}

function Color26() {
  return (
    <div className="bg-[#9473e4] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="400">
      <Color26 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#9473E4</p>
    </div>
  );
}

function Color27() {
  return (
    <div className="bg-[#7c58d7] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color27 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#7C58D7</p>
    </div>
  );
}

function Color28() {
  return (
    <div className="bg-[#6c41c3] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color28 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#6C41C3</p>
    </div>
  );
}

function Color29() {
  return (
    <div className="bg-[#5a30aa] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component44() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="700">
      <Color29 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#5A30AA</p>
    </div>
  );
}

function Color30() {
  return (
    <div className="bg-[#48208c] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component49() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="800">
      <Color30 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#48208C</p>
    </div>
  );
}

function Color31() {
  return (
    <div className="bg-[#341469] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="900">
      <Color31 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#341469</p>
    </div>
  );
}

function Color32() {
  return (
    <div className="bg-[#230c48] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component59() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="950">
      <Color32 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#230C48</p>
    </div>
  );
}

function Swatches2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component3 />
      <Component8 />
      <Component13 />
      <Component18 />
      <Component23 />
      <Component28 />
      <Component36 />
      <Component44 />
      <Component49 />
      <Component54 />
      <Component59 />
    </div>
  );
}

function Cosmos() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="cosmos">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">COSMOS</p>
      <Swatches2 />
    </div>
  );
}

function Color33() {
  return (
    <div className="bg-white h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="0">
      <Color33 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">0</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FFFFFF</p>
    </div>
  );
}

function Color34() {
  return (
    <div className="bg-[#fafaf9] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="50">
      <Color34 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FAFAF9</p>
    </div>
  );
}

function Color35() {
  return (
    <div className="bg-[#f5f5f4] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="100">
      <Color35 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F5F5F4</p>
    </div>
  );
}

function Color36() {
  return (
    <div className="bg-[#e7e5e4] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="200">
      <Color36 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#E7E5E4</p>
    </div>
  );
}

function Color37() {
  return (
    <div className="bg-[#d6d3d1] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component19() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="300">
      <Color37 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#D6D3D1</p>
    </div>
  );
}

function Color38() {
  return (
    <div className="bg-[#a8a29e] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="400">
      <Color38 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#A8A29E</p>
    </div>
  );
}

function Color39() {
  return (
    <div className="bg-[#78716c] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color39 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#78716C</p>
    </div>
  );
}

function Color40() {
  return (
    <div className="bg-[#57534e] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color40 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#57534E</p>
    </div>
  );
}

function Color41() {
  return (
    <div className="bg-[#44403c] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component45() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="700">
      <Color41 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#44403C</p>
    </div>
  );
}

function Color42() {
  return (
    <div className="bg-[#292524] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="800">
      <Color42 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#292524</p>
    </div>
  );
}

function Color43() {
  return (
    <div className="bg-[#1c1917] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component55() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="900">
      <Color43 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#1C1917</p>
    </div>
  );
}

function Color44() {
  return (
    <div className="bg-[#0c0a09] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="950">
      <Color44 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#0C0A09</p>
    </div>
  );
}

function Swatches3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component />
      <Component4 />
      <Component9 />
      <Component14 />
      <Component19 />
      <Component24 />
      <Component29 />
      <Component37 />
      <Component45 />
      <Component50 />
      <Component55 />
      <Component60 />
    </div>
  );
}

function Neutral() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="neutral">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">NEUTRAL</p>
      <Swatches3 />
    </div>
  );
}

function Color45() {
  return (
    <div className="bg-[#fffceb] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="50">
      <Color45 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FFFCEB</p>
    </div>
  );
}

function Color46() {
  return (
    <div className="bg-[#fef5d2] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="100">
      <Color46 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">100</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FEF5D2</p>
    </div>
  );
}

function Color47() {
  return (
    <div className="bg-[#fce8a8] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="200">
      <Color47 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">200</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FCE8A8</p>
    </div>
  );
}

function Color48() {
  return (
    <div className="bg-[#fad273] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="300">
      <Color48 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">300</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FAD273</p>
    </div>
  );
}

function Color49() {
  return (
    <div className="bg-[#f8b941] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component25() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="400">
      <Color49 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">400</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F8B941</p>
    </div>
  );
}

function Color50() {
  return (
    <div className="bg-[#f0a019] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color50 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F0A019</p>
    </div>
  );
}

function Color51() {
  return (
    <div className="bg-[#d7820f] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color51 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#D7820F</p>
    </div>
  );
}

function Color52() {
  return (
    <div className="bg-[#b4640c] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="700">
      <Color52 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">700</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#B4640C</p>
    </div>
  );
}

function Color53() {
  return (
    <div className="bg-[#944e0f] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="800">
      <Color53 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">800</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#944E0F</p>
    </div>
  );
}

function Color54() {
  return (
    <div className="bg-[#783e12] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component56() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="900">
      <Color54 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#783E12</p>
    </div>
  );
}

function Color55() {
  return (
    <div className="bg-[#462308] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component61() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="950">
      <Color55 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">950</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#462308</p>
    </div>
  );
}

function Swatches4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component5 />
      <Component10 />
      <Component15 />
      <Component20 />
      <Component25 />
      <Component30 />
      <Component38 />
      <Component46 />
      <Component51 />
      <Component56 />
      <Component61 />
    </div>
  );
}

function Amber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="amber">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">AMBER</p>
      <Swatches4 />
    </div>
  );
}

function Color56() {
  return (
    <div className="bg-[#ef4444] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color56 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#EF4444</p>
    </div>
  );
}

function Color57() {
  return (
    <div className="bg-[#dc2626] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color57 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#DC2626</p>
    </div>
  );
}

function Swatches5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component31 />
      <Component39 />
    </div>
  );
}

function Red() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="red">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">RED</p>
      <Swatches5 />
    </div>
  );
}

function Color58() {
  return (
    <div className="bg-[#eab308] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color58 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#EAB308</p>
    </div>
  );
}

function Color59() {
  return (
    <div className="bg-[#ca8a04] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color59 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#CA8A04</p>
    </div>
  );
}

function Swatches6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component32 />
      <Component40 />
    </div>
  );
}

function Yellow() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="yellow">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">YELLOW</p>
      <Swatches6 />
    </div>
  );
}

function Color60() {
  return (
    <div className="bg-[#3b82f6] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="500">
      <Color60 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">500</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#3B82F6</p>
    </div>
  );
}

function Color61() {
  return (
    <div className="bg-[#2563eb] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="600">
      <Color61 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">600</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#2563EB</p>
    </div>
  );
}

function Swatches7() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Component33 />
      <Component41 />
    </div>
  );
}

function Blue() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="blue">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">BLUE</p>
      <Swatches7 />
    </div>
  );
}

function Color62() {
  return (
    <div className="bg-[#16a34a] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Green() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="green">
      <Color62 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">green</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#16A34A</p>
    </div>
  );
}

function Color63() {
  return (
    <div className="bg-[#ca8a04] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Amber1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="amber">
      <Color63 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">amber</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#CA8A04</p>
    </div>
  );
}

function Color64() {
  return (
    <div className="bg-[#dc2626] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Red1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="red">
      <Color64 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">red</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#DC2626</p>
    </div>
  );
}

function Color65() {
  return (
    <div className="bg-[#15803d] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function GreenDark() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="green-dark">
      <Color65 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">green-dark</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#15803D</p>
    </div>
  );
}

function Color66() {
  return (
    <div className="bg-[#92400e] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function AmberDark() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="amber-dark">
      <Color66 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">amber-dark</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#92400E</p>
    </div>
  );
}

function Color67() {
  return (
    <div className="bg-[#b91c1c] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function RedDark() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="red-dark">
      <Color67 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">red-dark</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#B91C1C</p>
    </div>
  );
}

function Color68() {
  return (
    <div className="bg-[#4ade80] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function GreenBright() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="green-bright">
      <Color68 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">green-bright</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#4ADE80</p>
    </div>
  );
}

function Color69() {
  return (
    <div className="bg-[#fbbf24] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function AmberBright() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="amber-bright">
      <Color69 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">amber-bright</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FBBF24</p>
    </div>
  );
}

function Color70() {
  return (
    <div className="bg-[#f87171] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function RedBright() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="red-bright">
      <Color70 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">red-bright</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F87171</p>
    </div>
  );
}

function Color71() {
  return (
    <div className="bg-[#f0fdf4] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Green1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="green-50">
      <Color71 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">green-50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#F0FDF4</p>
    </div>
  );
}

function Color72() {
  return (
    <div className="bg-[#14532d] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Green2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="green-900">
      <Color72 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">green-900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#14532D</p>
    </div>
  );
}

function Color73() {
  return (
    <div className="bg-[#fef2f2] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Red2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="red-50">
      <Color73 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">red-50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#FEF2F2</p>
    </div>
  );
}

function Color74() {
  return (
    <div className="bg-[#450a0a] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Red3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="red-900">
      <Color74 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">red-900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#450A0A</p>
    </div>
  );
}

function Color75() {
  return (
    <div className="bg-[#eff6ff] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Blue1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="blue-50">
      <Color75 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">blue-50</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#EFF6FF</p>
    </div>
  );
}

function Color76() {
  return (
    <div className="bg-[#1e3a8a] h-[56px] relative rounded-[6px] shrink-0 w-full" data-name="color">
      <div aria-hidden className="absolute border-[#c8d2e1] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Blue2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[80px]" data-name="blue-900">
      <Color76 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[10px] whitespace-nowrap">blue-900</p>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[9px] whitespace-nowrap">#1E3A8A</p>
    </div>
  );
}

function Swatches8() {
  return (
    <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0" data-name="swatches">
      <Green />
      <Amber1 />
      <Red1 />
      <GreenDark />
      <AmberDark />
      <RedDark />
      <GreenBright />
      <AmberBright />
      <RedBright />
      <Green1 />
      <Green2 />
      <Red2 />
      <Red3 />
      <Blue1 />
      <Blue2 />
    </div>
  );
}

function Feedback() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="feedback">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] whitespace-nowrap">FEEDBACK</p>
      <Swatches8 />
    </div>
  );
}

function Ramps() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-name="ramps">
      <Night />
      <Slate />
      <Cosmos />
      <Neutral />
      <Amber />
      <Red />
      <Yellow />
      <Blue />
      <Feedback />
    </div>
  );
}

function ColorPrimitives() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name="Color Primitives">
      <Header />
      <Ramps />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-name="header">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1c1917] text-[20px] w-full">02 / Cores Semânticas</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[14px] w-full">47 tokens com suporte Light/Dark. Mapeia rampas primitivas para papéis funcionais em 8 grupos.</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, #C8D2E1)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Primary() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="primary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/bg/primary</p>
    </div>
  );
}

function Secondary() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="secondary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F8FC)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/bg/secondary</p>
    </div>
  );
}

function Tertiary() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="tertiary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #E4E8F0)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/bg/tertiary</p>
    </div>
  );
}

function Inverse() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="inverse">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1C1917)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/bg/inverse</p>
    </div>
  );
}

function Brand() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="brand">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #EBF0FF)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/bg/brand</p>
    </div>
  );
}

function Cosmos1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="cosmos">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F5F0FF)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/bg/cosmos</p>
    </div>
  );
}

function Bg() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="bg">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">BG</p>
      <Primary />
      <Secondary />
      <Tertiary />
      <Inverse />
      <Brand />
      <Cosmos1 />
    </div>
  );
}

function Default() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="default">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/surface/default</p>
    </div>
  );
}

function Raised() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="raised">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/surface/raised</p>
    </div>
  );
}

function Overlay() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="overlay">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/surface/overlay</p>
    </div>
  );
}

function Sunken() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="sunken">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #E4E8F0)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/surface/sunken</p>
    </div>
  );
}

function Glass() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="glass">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/surface/glass</p>
    </div>
  );
}

function Surface() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="surface">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">SURFACE</p>
      <Default />
      <Raised />
      <Overlay />
      <Sunken />
      <Glass />
    </div>
  );
}

function Primary1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="primary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1C1917)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/primary</p>
    </div>
  );
}

function Secondary1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="secondary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #57534E)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/secondary</p>
    </div>
  );
}

function Tertiary1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="tertiary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #5A698C)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/tertiary</p>
    </div>
  );
}

function Inverse1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="inverse">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, white)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/inverse</p>
    </div>
  );
}

function Brand1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="brand">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1C2D78)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/brand</p>
    </div>
  );
}

function Cosmos2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="cosmos">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #5A30AA)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/cosmos</p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="link">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1C2D78)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/text/link</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="text">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">TEXT</p>
      <Primary1 />
      <Secondary1 />
      <Tertiary1 />
      <Inverse1 />
      <Brand1 />
      <Cosmos2 />
      <Link />
    </div>
  );
}

function Default1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="default">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #C8D2E1)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/default</p>
    </div>
  );
}

function Subtle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="subtle">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #E4E8F0)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/subtle</p>
    </div>
  );
}

function Strong() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="strong">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #A8A29E)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/strong</p>
    </div>
  );
}

function Brand2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="brand">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #3855B9)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/brand</p>
    </div>
  );
}

function Focus() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="focus">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #7C58D7)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/focus</p>
    </div>
  );
}

function Glow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="glow">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #B49BF0)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/glow</p>
    </div>
  );
}

function Glass1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="glass">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #C8D2E1)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/border/glass</p>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="border">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">BORDER</p>
      <Default1 />
      <Subtle />
      <Strong />
      <Brand2 />
      <Focus />
      <Glow />
      <Glass1 />
    </div>
  );
}

function Primary2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="primary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1C2D78)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/interactive/primary</p>
    </div>
  );
}

function PrimaryHover() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="primary-hover">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #121C4B)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/interactive/primary-hover</p>
    </div>
  );
}

function PrimaryPressed() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="primary-pressed">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #121C4B)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/interactive/primary-pressed</p>
    </div>
  );
}

function Secondary2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="secondary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #6C41C3)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/interactive/secondary</p>
    </div>
  );
}

function SecondaryHover() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="secondary-hover">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #5A30AA)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/interactive/secondary-hover</p>
    </div>
  );
}

function Interactive() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="interactive">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">INTERACTIVE</p>
      <Primary2 />
      <PrimaryHover />
      <PrimaryPressed />
      <Secondary2 />
      <SecondaryHover />
    </div>
  );
}

function Success() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="success">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #15803D)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/success</p>
    </div>
  );
}

function SuccessBg() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="success-bg">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F0FDF4)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/success-bg</p>
    </div>
  );
}

function Warning() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="warning">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #92400E)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/warning</p>
    </div>
  );
}

function WarningBg() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="warning-bg">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FFFCEB)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/warning-bg</p>
    </div>
  );
}

function Error() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="error">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #B91C1C)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/error</p>
    </div>
  );
}

function ErrorBg() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="error-bg">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FEF2F2)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/error-bg</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="info">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2563EB)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/info</p>
    </div>
  );
}

function InfoBg() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="info-bg">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #EFF6FF)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/feedback/info-bg</p>
    </div>
  );
}

function Feedback1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="feedback">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">FEEDBACK</p>
      <Success />
      <SuccessBg />
      <Warning />
      <WarningBg />
      <Error />
      <ErrorBg />
      <Info />
      <InfoBg />
    </div>
  );
}

function Primary3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="primary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #44403C)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/icon/primary</p>
    </div>
  );
}

function Secondary3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="secondary">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #A8A29E)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/icon/secondary</p>
    </div>
  );
}

function Brand3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="brand">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #253E96)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/icon/brand</p>
    </div>
  );
}

function Cosmos3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="cosmos">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #6C41C3)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/icon/cosmos</p>
    </div>
  );
}

function Default2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="default">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #1C1917)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/icon/default</p>
    </div>
  );
}

function Inverse2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="inverse">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FAFAF9)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/icon/inverse</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="icon">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">ICON</p>
      <Primary3 />
      <Secondary3 />
      <Brand3 />
      <Cosmos3 />
      <Default2 />
      <Inverse2 />
    </div>
  );
}

function Glow1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="glow">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #7C58D7)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/accent/glow</p>
    </div>
  );
}

function Amber2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="amber">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #F0A019)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/accent/amber</p>
    </div>
  );
}

function Moon() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip relative shrink-0 w-full" data-name="moon">
      <div className="relative shrink-0 size-[24px]" data-name="swatch">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #FCE8A8)" id="swatch" r="11.75" stroke="var(--stroke-0, #C8D2E1)" strokeWidth="0.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[11px] whitespace-nowrap">color/accent/moon</p>
    </div>
  );
}

function Accent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-[240px]" data-name="accent">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#57534e] text-[12px] tracking-[0.96px] w-full">ACCENT</p>
      <Glow1 />
      <Amber2 />
      <Moon />
    </div>
  );
}

function Groups() {
  return (
    <div className="content-start flex flex-wrap gap-[32px_24px] items-start overflow-clip relative shrink-0 w-full" data-name="groups">
      <Bg />
      <Surface />
      <Text />
      <Border />
      <Interactive />
      <Feedback1 />
      <Icon />
      <Accent />
    </div>
  );
}

function SemanticColors() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name="Semantic Colors">
      <Header1 />
      <Groups />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[22px] w-full">03 / Escala de Espaçamento</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#555e55] text-[14px] w-full">Escala de progressão geométrica que define grid, padding de componentes, gaps de layout e gutters responsivos.</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, #E5E8E5)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-0</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">0px</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[11px] whitespace-nowrap">None</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-1</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">1px</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-px" data-name="Rectangle" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-2</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">2px</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-4</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">4px</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-6</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">6px</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[6px]" data-name="Rectangle" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-8</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">8px</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] relative rounded-[4px] shrink-0 size-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame29 />
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-10</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">10px</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[10px]" data-name="Rectangle" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-12</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">12px</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[12px]" data-name="Rectangle" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame36 />
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-16</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">16px</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[16px]" data-name="Rectangle" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame40 />
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-20</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">20px</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[20px]" data-name="Rectangle" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame44 />
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-24</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">24px</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[24px]" data-name="Rectangle" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-32</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">32px</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Rectangle" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-40</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">40px</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[40px]" data-name="Rectangle" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame56 />
      <Frame57 />
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-48</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">48px</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[48px]" data-name="Rectangle" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame60 />
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-56</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">56px</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Rectangle" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame64 />
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-64</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">64px</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[64px]" data-name="Rectangle" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame68 />
      <Frame69 />
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-80</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">80px</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[80px]" data-name="Rectangle" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame72 />
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-96</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">96px</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[96px]" data-name="Rectangle" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame76 />
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-120</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">120px</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[120px]" data-name="Rectangle" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame80 />
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[80px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#111511] text-[12px] whitespace-nowrap">space-160</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[60px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#555e55] text-[12px] whitespace-nowrap">160px</p>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <div className="bg-[#16a34a] h-[8px] relative rounded-[4px] shrink-0 w-[160px]" data-name="Rectangle" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[16px] items-center py-[6px] relative shrink-0 w-full" data-name="Frame">
      <Frame84 />
      <Frame85 />
      <Frame86 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e8e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[24px] relative size-full">
        <Frame7 />
        <Frame11 />
        <Frame15 />
        <Frame19 />
        <Frame23 />
        <Frame27 />
        <Frame31 />
        <Frame35 />
        <Frame39 />
        <Frame43 />
        <Frame47 />
        <Frame51 />
        <Frame55 />
        <Frame59 />
        <Frame63 />
        <Frame67 />
        <Frame71 />
        <Frame75 />
        <Frame79 />
        <Frame83 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[22px] w-full">04 / Escala de Raio</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#555e55] text-[14px] w-full">Cantos padronizados que definem a estrutura arquitetônica, de cantos retos (none) a parâmetros circulares (full).</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, #E5E8E5)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">0px</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-none</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">0px</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame91 />
      <Frame92 />
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[2px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">2px</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-xs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">2px</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">4px</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-sm</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">4px</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame97 />
      <Frame98 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">8px</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-md</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">8px</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame100 />
      <Frame101 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">12px</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-lg</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">12px</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame103 />
      <Frame104 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">16px</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">16px</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[20px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">20px</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-2xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">20px</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Frame112() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">24px</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-3xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">24px</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame112 />
      <Frame113 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-center justify-center relative rounded-[40px] shrink-0 size-[80px]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-[#16a34a] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[10px] whitespace-nowrap">99+</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-center leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#111511] text-[12px]">radius-full</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[10px]">full</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[100px]" data-name="Frame">
      <Frame115 />
      <Frame116 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#fcfcfb] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e5e8e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-start flex flex-wrap gap-[24px] items-start p-[32px] relative size-full">
        <Frame90 />
        <Frame93 />
        <Frame96 />
        <Frame99 />
        <Frame102 />
        <Frame105 />
        <Frame108 />
        <Frame111 />
        <Frame114 />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#16a34a] text-[22px] w-full">05 / Escala Tipográfica</p>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#555e55] text-[14px] w-full">Escala de hierarquia tipográfica ajustada para legibilidade em tela, do micro-texto de metadados aos títulos display.</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, #E5E8E5)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame121() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-xs</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 12px  /  Line height: 16px`}</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-w-px not-italic relative text-[#111511] text-[12px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-sm</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 14px  /  Line height: 20px`}</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-w-px not-italic relative text-[#111511] text-[14px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame124 />
      <Frame125 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-base</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 16px  /  Line height: 24px`}</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[24px] min-w-px not-italic relative text-[#111511] text-[16px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-lg</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 18px  /  Line height: 28px`}</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-px not-italic relative text-[#111511] text-[18px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 20px  /  Line height: 28px`}</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[28px] min-w-px not-italic relative text-[#111511] text-[20px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame133 />
      <Frame134 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-2xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 24px  /  Line height: 32px`}</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[32px] min-w-px not-italic relative text-[#111511] text-[24px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame136 />
      <Frame137 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-3xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 30px  /  Line height: 36px`}</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[36px] min-w-px not-italic relative text-[#111511] text-[30px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame139 />
      <Frame140 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-4xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 36px  /  Line height: 40px`}</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[40px] min-w-px not-italic relative text-[#111511] text-[36px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame142 />
      <Frame143 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-5xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 48px  /  Line height: 1`}</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#111511] text-[48px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-6xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 60px  /  Line height: 1`}</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#111511] text-[60px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame148 />
      <Frame149 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-7xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 72px  /  Line height: 1`}</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#111511] text-[72px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-[220px]" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#111511] text-[16px] whitespace-nowrap">font-size-8xl</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#555e55] text-[12px] whitespace-pre">{`Size: 96px  /  Line height: 1`}</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[normal] min-w-px not-italic relative text-[#111511] text-[96px]">Aa — The quick brown fox jumps</p>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex gap-[32px] items-center py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e5e8e5] border-b border-solid inset-0 pointer-events-none" />
      <Frame154 />
      <Frame155 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame120 />
      <Frame123 />
      <Frame126 />
      <Frame129 />
      <Frame132 />
      <Frame135 />
      <Frame138 />
      <Frame141 />
      <Frame144 />
      <Frame147 />
      <Frame150 />
      <Frame153 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip pb-[16px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#1c1917] text-[20px] w-full">06 / Escala de Dimensões</p>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[14px] w-full">Tokens de dimensão padronizados para componentes, ícones e alvos de toque. Inclui sizing específico para iconografia consistente.</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <line id="Line" stroke="var(--stroke-0, #C8D2E1)" x2="1280" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return <div className="bg-[#1c2d78] h-[8px] relative rounded-[4px] shrink-0 w-[16px]" data-name="bar" />;
}

function Frame159() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[12px] w-[200px]">sizing/icon-sm</p>
      <Bar />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[12px] whitespace-nowrap">16px</p>
    </div>
  );
}

function Bar1() {
  return <div className="bg-[#1c2d78] h-[8px] relative rounded-[4px] shrink-0 w-[20px]" data-name="bar" />;
}

function Frame160() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[12px] w-[200px]">sizing/icon-md</p>
      <Bar1 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[12px] whitespace-nowrap">20px</p>
    </div>
  );
}

function Bar2() {
  return <div className="bg-[#1c2d78] h-[8px] relative rounded-[4px] shrink-0 w-[24px]" data-name="bar" />;
}

function Frame161() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[12px] w-[200px]">sizing/icon-lg</p>
      <Bar2 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[12px] whitespace-nowrap">24px</p>
    </div>
  );
}

function Bar3() {
  return <div className="bg-[#1c2d78] h-[8px] relative rounded-[4px] shrink-0 w-[32px]" data-name="bar" />;
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#1c1917] text-[12px] w-[200px]">sizing/icon-xl</p>
      <Bar3 />
      <p className="[word-break:break-word] font-['Geist_Mono:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#57534e] text-[12px] whitespace-nowrap">32px</p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Frame159 />
      <Frame160 />
      <Frame161 />
      <Frame162 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[1280px]" data-name="Frame">
      <Frame157 />
      <Frame158 />
    </div>
  );
}

export default function TokensDocumentation() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[64px] items-start pb-[96px] pt-[64px] px-[80px] relative size-full" data-name="tokens-documentation">
      <Frame />
      <ColorPrimitives />
      <SemanticColors />
      <Frame4 />
      <Frame87 />
      <Frame117 />
      <Frame156 />
    </div>
  );
}