import imgHero from "./bf677e7936a0f3eccce62e487ed5fef8a3cb40b9.png";

function Frame1() {
  return (
    <div className="content-stretch flex font-['Geist:Medium',sans-serif] font-medium gap-[32px] items-start relative shrink-0 text-[13px] uppercase" data-name="Frame">
      <p className="relative shrink-0">Destinations</p>
      <p className="relative shrink-0">Business Class</p>
      <p className="relative shrink-0">Lounges</p>
      <p className="relative shrink-0">Corporate</p>
      <p className="relative shrink-0">Book</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[48px] items-center leading-[normal] relative shrink-0 text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Fraunces:Bold',sans-serif] font-bold relative shrink-0 text-[28px]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        AIRAVIA
      </p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">NL</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">EN</p>
      <div className="bg-[#c5a059] h-[1.5px] relative shrink-0 w-[14px]" data-name="Rectangle" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">DE</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-white whitespace-nowrap">FR</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[10px] relative rounded-[2px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#c5a059] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#c5a059] text-[12px] uppercase whitespace-nowrap">Miles Program</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[13px] text-white whitespace-nowrap">Sign In</p>
      <Frame9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Frame">
      <Frame3 />
      <Frame8 />
    </div>
  );
}

function GlobalNav() {
  return (
    <div className="absolute content-stretch flex h-[90px] items-center justify-between left-0 px-[80px] top-0 w-[1440px]" data-name="global-nav">
      <Frame />
      <Frame2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[800px]" data-name="Frame">
      <p className="font-['Fraunces:Bold',sans-serif] font-bold leading-none relative shrink-0 text-[80px] text-white w-full" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
        Where Business Meets the Sky
      </p>
      <p className="font-['Geist:Regular',sans-serif] font-normal leading-[normal] opacity-80 relative shrink-0 text-[#e2e8f0] text-[20px] w-full">Long-haul Business Class departing Amsterdam · Frankfurt · Brussels · Paris</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[24px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c5a059] text-[10px] uppercase">Origin</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-white">Amsterdam (AMS)</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[24px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c5a059] text-[10px] uppercase">Destination</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-white">New York (JFK)</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[24px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c5a059] text-[10px] uppercase">Dates</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-white">15 Jul — 22 Jul</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Frame">
      <div aria-hidden className="absolute border-0 border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] p-[24px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#c5a059] text-[10px] uppercase">{`Passengers & Class`}</p>
        <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[16px] text-white">1 Passenger, Business</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#c5a059] content-stretch flex items-center justify-center relative self-stretch shrink-0 w-[200px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#080c14] text-[16px] uppercase whitespace-nowrap">Search Flights</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#080c14] relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame13 />
        <Frame14 />
        <Frame15 />
        <Frame16 />
        <Frame17 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#c5a059] relative rounded-[4px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[12px] text-white uppercase whitespace-nowrap">3 nonstop Business Class routes added — Winter 2026</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <Frame12 />
      <Frame18 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[880px] items-start justify-end pb-[80px] px-[80px] relative shrink-0 w-[1440px]" data-name="hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0" />
      </div>
      <GlobalNav />
      <Frame10 />
    </div>
  );
}

export default function HomepageHero() {
  return (
    <div className="bg-[#080c14] content-stretch flex flex-col items-start relative size-full" data-name="homepage-hero">
      <Hero />
    </div>
  );
}