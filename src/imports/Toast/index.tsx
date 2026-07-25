function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[32px] px-[32px] relative size-full">
          <p className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[#1c1917] text-[24px] w-full">Toast</p>
          <p className="font-['Geist:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#57534e] text-[14px] w-full">Notification toast with success, warning, error, and info variants.</p>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return <div className="bg-[#e4e8f0] h-px relative shrink-0 w-full" data-name="Divider" />;
}

function Content() {
  return (
    <div className="h-[432px] relative shrink-0 w-full" data-name="content">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="relative size-full" />
      </div>
    </div>
  );
}

export default function Toast() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Toast">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Divider />
        <Content />
      </div>
      <div aria-hidden className="absolute border border-[#e4e8f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}