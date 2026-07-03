import svgPaths from "./svg-05d1e9kjov";
import imgContainer from "./3a3bf8c5f9f35839af0feab466c76e50f1cf3144.png";
import imgRectangle6 from "./ae1e502f1772e46eef2cf58464713951a6d2cc5e.png";
import imgImageWithFallback from "./cf2bda0743d055d11d1ec1dacdad127eb272cd7e.png";
import imgImageWithFallback1 from "./bad941148dc2700dcf112d1b2dc2d8102c06886e.png";
import imgRectangle5 from "./ba5c0f9cc42967709fd1f4394c0a4cf3c97e7dc4.png";
import imgImageWithFallback2 from "./3b2e0d50a282f8e51d4dce8549c0ef28982b5333.png";
import imgContainer1 from "./ddd0c0ea71afecfedaee0387e4a855d2b81a6e34.png";
import imgImageWithFallback3 from "./9dff36309149d3d14e9e61b232084c3f3297cffc.png";
import imgImageWithFallback4 from "./35796027b212d124e5be1d8ac48271ab721141d3.png";
import imgImageWithFallback5 from "./f92f48a45ebc38766c1f3bf20103313d7385408d.png";

function Container1() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,8,23,0.8)] h-[591px] left-0 to-[rgba(0,0,0,0)] top-[249px] w-[1894px]" data-name="Container" />;
}

function Group() {
  return (
    <div className="absolute h-[19.286px] left-0 top-0 w-[42.282px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2817 19.2862">
        <g id="Group 2">
          <path d={svgPaths.p12d5840} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p39397080} fill="var(--fill-0, white)" id="Rectangle 2" />
          <path d={svgPaths.p2863de00} fill="var(--fill-0, white)" id="Rectangle 3" />
          <path d={svgPaths.p18d1e100} fill="var(--fill-0, white)" fillOpacity="0.87" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group1 />
    </div>
  );
}

function LogoColor() {
  return (
    <div className="absolute h-[19.287px] left-0 top-[1.12px] w-[42.282px]" data-name="Logo - Color">
      <Group2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-0 top-[1.12px]">
      <LogoColor />
      <div className="absolute h-[19.368px] left-[23.21px] top-[1.12px] w-[14.215px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2148 19.3682">
          <path d={svgPaths.p18aaa500} fill="var(--fill-0, white)" fillOpacity="0.87" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-0 top-[1.12px]">
      <Group6 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[42.28px] top-0">
      <div className="absolute h-[13.4px] left-[64.12px] top-[5.66px] w-[24.13px]" data-name="IR">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1305 13.3999">
          <g id="IR">
            <path d={svgPaths.p2811f340} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ce17400} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:ExtraBold',sans-serif] leading-[normal] left-[42.28px] not-italic text-[19.968px] text-white top-0 tracking-[-0.9984px] whitespace-nowrap">A</p>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[42.28px] top-0">
      <div className="absolute h-[13.4px] left-[93.05px] top-[5.66px] w-[61.234px]" data-name="AVIA">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.2338 13.3999">
          <g id="AVIA">
            <path d={svgPaths.p27e90740} fill="var(--fill-0, white)" fillOpacity="0.87" />
            <path d={svgPaths.p18c8abf2} fill="var(--fill-0, white)" fillOpacity="0.87" />
            <path d={svgPaths.p38bce400} fill="var(--fill-0, white)" fillOpacity="0.87" />
            <path d={svgPaths.p1f4f64f2} fill="var(--fill-0, white)" fillOpacity="0.87" />
          </g>
        </svg>
      </div>
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group8 />
      <Group9 />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.286px]" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group11 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] text-center tracking-[0.3px] uppercase whitespace-nowrap">Destinations</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] text-center tracking-[0.3px] uppercase whitespace-nowrap">Business Class</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] text-center tracking-[0.3px] uppercase whitespace-nowrap">Lounges</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] text-center tracking-[0.3px] uppercase whitespace-nowrap">Corporate</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.75)] text-center tracking-[0.3px] uppercase whitespace-nowrap">Book</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[690.754px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center justify-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </div>
  );
}

function Text() {
  return <div className="bg-[#c9a84c] h-[1.494px] relative rounded-[20971500px] shrink-0 w-[13.994px]" data-name="Text" />;
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">EN</p>
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="h-[1.494px] relative rounded-[20971500px] shrink-0 w-[13.994px]" data-name="Text" />;
}

function Button6() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">NL</p>
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return <div className="h-[1.494px] relative rounded-[20971500px] shrink-0 w-[13.994px]" data-name="Text" />;
}

function Button7() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">DE</p>
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="h-[1.494px] relative rounded-[20971500px] shrink-0 w-[13.994px]" data-name="Text" />;
}

function Button8() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center whitespace-nowrap">FR</p>
        <Text3 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[15.996px] relative shrink-0 w-[0.996px]" data-name="Container" />;
}

function Button9() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.8)] text-center whitespace-nowrap">Sign In</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[#c9a84c] border-[0.625px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[16.625px] py-[8.625px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#c9a84c] text-[12px] text-center tracking-[0.3px] uppercase whitespace-nowrap">Miles Program</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container5 />
        <Container6 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[24px] h-[71.992px] items-center max-w-[1280px] px-[24px] relative shrink-0" data-name="Container">
      <Logo />
      <Container3 />
      <Container4 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function GlobalNav() {
  return (
    <div className="absolute bg-[rgba(0,31,107,0.95)] content-stretch flex flex-col items-start left-0 pb-[0.625px] top-0 w-[1894.375px]" data-name="GlobalNav">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <ContainerMargin />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[840px] left-0 top-0 w-[1894.375px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[128.33%] left-[-7.01%] max-w-none top-[-8.33%] w-[132.71%]" src={imgContainer} />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.56)]" />
      </div>
      <div className="absolute h-[964px] left-[-116px] top-[-124px] w-[2046px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <Container1 />
      <GlobalNav />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[72px] text-white tracking-[-1.44px] w-[1186px]">Trip to everywhere and beyond</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="max-w-[672px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[32.5px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.75)] whitespace-nowrap">Long-haul Business Class departing Amsterdam · Frankfurt · Brussels · Paris</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="max-w-[768px] relative shrink-0 w-[768px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#c9a84c] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Origin</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Amsterdam (AMS)</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[20px] relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function BookingField() {
  return (
    <div className="flex-[274.844_0_0] h-full min-w-px relative" data-name="BookingField">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.625px] relative size-full">
        <Container10 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#c9a84c] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Destination</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">New York (JFK)</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[20px] relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function BookingField1() {
  return (
    <div className="flex-[274.844_0_0] h-full min-w-px relative" data-name="BookingField">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.625px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#c9a84c] text-[10px] tracking-[1px] uppercase whitespace-nowrap">Dates</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">15 Jul — 22 Jul</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[20px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function BookingField2() {
  return (
    <div className="flex-[274.844_0_0] h-full min-w-px relative" data-name="BookingField">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[0.625px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#c9a84c] text-[10px] tracking-[1px] uppercase whitespace-nowrap">{`Passengers & Class`}</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[23.994px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">1 Passenger, Business</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[20px] relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function BookingField3() {
  return (
    <div className="flex-[274.219_0_0] h-full min-w-px relative" data-name="BookingField">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container13 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p220e9c00} id="Vector" stroke="var(--stroke-0, #080C14)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1de9fb00} id="Vector_2" stroke="var(--stroke-0, #080C14)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#c9a84c] h-full relative shrink-0 w-[180px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#080c14] text-[14px] text-center tracking-[0.35px] uppercase whitespace-nowrap">Search Flights</p>
      </div>
    </div>
  );
}

function BookingWidget() {
  return (
    <div className="bg-[#080c14] h-[84.238px] relative rounded-[4px] shrink-0 w-[1280px]" data-name="BookingWidget">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <BookingField />
        <BookingField1 />
        <BookingField2 />
        <BookingField3 />
        <Button11 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Text4() {
  return <div className="bg-[#c9a84c] relative rounded-[4px] shrink-0 size-[7.998px]" data-name="Text" />;
}

function Paragraph9() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase whitespace-nowrap">3 nonstop Business Class routes added — Winter 2026</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Text4 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <BookingWidget />
        <Container14 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[307.19px] max-w-[1280px] top-[403px] w-[1280px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="h-[840px] relative shrink-0 w-full" data-name="HeroSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container />
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c9a84c] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Premium Experience</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[1232.012px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#09102b] text-[30px] tracking-[-0.6px] whitespace-nowrap">Fly Better. Every Route.</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[1232.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph10 />
        <Heading1 />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[191.992px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[191.992px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.998 17.998">
        <g id="Icon">
          <path d={svgPaths.pba6ee70} id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#09102b] text-[18px] whitespace-nowrap">Business Class</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text5 />
        <Heading2 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="flex-[45.508_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#5b6580] text-[14px] w-[357px]">Fully-flat beds, award-winning dining, and priority service across 40+ long-haul routes.</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.998 12.998">
        <g id="Icon">
          <path d="M2.70792 6.499H10.2901" id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d={svgPaths.p1b0c7a80} id="Vector_2" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#001f6b] text-[14px] text-center whitespace-nowrap">Explore Business</p>
        <Icon2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[157.48_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container20 />
        <Paragraph11 />
        <Button12 />
      </div>
    </div>
  );
}

function PremiumCard() {
  return (
    <div className="absolute bg-white h-[350.723px] left-0 rounded-[4px] top-0 w-[397.334px]" data-name="PremiumCard">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container18 />
        <Container19 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[191.992px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[191.992px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.998 17.998">
        <g clipPath="url(#clip0_14_2248)" id="Icon">
          <path d="M7.49917 1.49983V2.99967" id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
          <path d="M10.4988 1.49983V2.99967" id="Vector_2" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
          <path d={svgPaths.pca7cbc0} id="Vector_3" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
          <path d="M4.4995 1.49983V2.99967" id="Vector_4" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
        </g>
        <defs>
          <clipPath id="clip0_14_2248">
            <rect fill="white" height="17.998" width="17.998" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#09102b] text-[18px] whitespace-nowrap">Airport Lounges</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text6 />
        <Heading3 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="flex-[45.508_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#5b6580] text-[14px] w-[357px]">25 partner lounges across CDG, AMS, JFK, DXB and more. Complimentary for Business Class passengers.</p>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.998 12.998">
        <g id="Icon">
          <path d="M2.70792 6.499H10.2901" id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d={svgPaths.p1b0c7a80} id="Vector_2" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#001f6b] text-[14px] text-center whitespace-nowrap">Find a Lounge</p>
        <Icon4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[157.48_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container23 />
        <Paragraph12 />
        <Button13 />
      </div>
    </div>
  );
}

function PremiumCard1() {
  return (
    <div className="absolute bg-white h-[350.723px] left-[417.33px] rounded-[4px] top-0 w-[397.334px]" data-name="PremiumCard">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container21 />
        <Container22 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#001f6b] h-[191.992px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[391px] relative shrink-0 w-[425px]">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle5} />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.998 17.998">
        <g clipPath="url(#clip0_14_2269)" id="Icon">
          <path d={svgPaths.p33f9f4c0} id="Vector" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
          <path d={svgPaths.p3bd14680} id="Vector_2" stroke="var(--stroke-0, #C9A84C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.49983" />
        </g>
        <defs>
          <clipPath id="clip0_14_2269">
            <rect fill="white" height="17.998" width="17.998" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[28px] relative shrink-0 text-[#09102b] text-[18px] whitespace-nowrap">Corporate Programs</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text7 />
        <Heading4 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="flex-[45.508_0_0] min-h-px relative w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[#5b6580] text-[14px] w-[357px]">Dedicated account management, flexible booking policies, and volume rates for enterprise travel.</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.998 12.998">
        <g id="Icon">
          <path d="M2.70792 6.499H10.2901" id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d={svgPaths.p1b0c7a80} id="Vector_2" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#001f6b] text-[14px] text-center whitespace-nowrap">Corporate Solutions</p>
        <Icon6 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[157.48_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container26 />
        <Paragraph13 />
        <Button14 />
      </div>
    </div>
  );
}

function PremiumCard2() {
  return (
    <div className="absolute bg-white h-[350.723px] left-[834.67px] rounded-[4px] top-0 w-[397.334px]" data-name="PremiumCard">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container24 />
        <Container25 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[350.723px] relative shrink-0 w-[1232.012px]" data-name="Container">
      <PremiumCard />
      <PremiumCard1 />
      <PremiumCard2 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container16 />
      <ContainerMargin2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function PremiumSection() {
  return (
    <div className="bg-[#f4f6fb] relative shrink-0 w-full" data-name="PremiumSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[56px] relative size-full">
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c9a84c] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Our Network</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[476.211px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[#09102b] text-[30px] tracking-[-0.6px] whitespace-nowrap">Long-Haul Routes</p>
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[28px] max-w-[512px] relative shrink-0 w-[476.211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#5b6580] text-[14px] whitespace-nowrap">{`Fly direct to the world's major business hubs. Business Class on every route.`}</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[476.211px]" data-name="Container">
      <Paragraph14 />
      <Heading5 />
      <Paragraph15 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[13.994px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9941 13.9941">
        <g id="Icon">
          <path d="M2.91544 6.99705H11.0787" id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16618" />
          <path d={svgPaths.p130640c0} id="Vector_2" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16618" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute content-stretch flex gap-[6px] h-[40px] items-center left-[1077.08px] px-[20.625px] py-[0.625px] rounded-[4px] top-[51.98px]" data-name="Button">
      <div aria-hidden className="absolute border-[#001f6b] border-[0.625px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#001f6b] text-[14px] text-center whitespace-nowrap">View all routes</p>
      <Icon7 />
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[91.982px] relative shrink-0 w-[1232.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container29 />
        <Button15 />
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[160px] left-0 top-0 w-[229.15px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer1} />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute bg-[#001f6b] left-[11.99px] rounded-[2px] top-[128.03px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Business</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback2 />
        <Container32 />
        <Text8 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">AMS</p>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Amsterdam</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-[61.748px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph16 />
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Container38() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[19.746_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="absolute flex items-center justify-center left-[-0.5px] size-[12.992px] top-[-0.5px]">
      <div className="flex-none rotate-5">
        <div className="relative size-[11.992px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
            <g clipPath="url(#clip0_14_2241)" id="Icon">
              <path d={svgPaths.pf235bc0} id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
            </g>
            <defs>
              <clipPath id="clip0_14_2241">
                <rect fill="white" height="11.9922" width="11.9922" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container39() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[19.746_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Container37() {
  return (
    <div className="relative shrink-0 w-[59.473px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container38 />
        <IconTransform />
        <Container39 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="flex-[59.473_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">3h 20m</p>
        <Container37 />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">Direct</p>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">CDG</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Paris</p>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-[43.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph19 />
        <Paragraph20 />
        <Paragraph21 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container35 />
        <Container36 />
        <Container40 />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] uppercase whitespace-nowrap">From</p>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#09102b] text-[20px] whitespace-nowrap">€140</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[48.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
        <g id="Icon">
          <path d="M2.49837 5.9961H9.49383" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
          <path d={svgPaths.pffb8b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#001f6b] h-[35.996px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Select</p>
        <Icon9 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,31,107,0.12)] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12.625px] relative size-full">
        <Container42 />
        <Button16 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[171.602_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container34 />
        <Container41 />
      </div>
    </div>
  );
}

function RouteCard() {
  return (
    <div className="bg-white h-[332.852px] relative rounded-[4px] shrink-0 w-[230.4px]" data-name="RouteCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container31 />
        <Container33 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container44() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,8,23,0.6)] h-[160px] left-0 to-[rgba(0,0,0,0)] top-0 w-[229.15px]" data-name="Container" />;
}

function Text9() {
  return (
    <div className="absolute bg-[#001f6b] left-[11.99px] rounded-[2px] top-[128.03px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Business</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback3 />
        <Container44 />
        <Text9 />
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">AMS</p>
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Amsterdam</p>
      </div>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[61.748px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Container50() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[19.746_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Icon10() {
  return (
    <div className="absolute flex items-center justify-center left-[-0.5px] size-[12.992px] top-[-0.5px]">
      <div className="flex-none rotate-5">
        <div className="relative size-[11.992px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
            <g clipPath="url(#clip0_14_2241)" id="Icon">
              <path d={svgPaths.pf235bc0} id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
            </g>
            <defs>
              <clipPath id="clip0_14_2241">
                <rect fill="white" height="11.9922" width="11.9922" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform1() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container51() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[19.746_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Container49() {
  return (
    <div className="relative shrink-0 w-[59.473px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container50 />
        <IconTransform1 />
        <Container51 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[59.473_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">6h 20m</p>
        <Container49 />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">Direct</p>
      </div>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">DXB</p>
      </div>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Dubai</p>
      </div>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[43.945px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph27 />
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container47 />
        <Container48 />
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] uppercase whitespace-nowrap">From</p>
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#09102b] text-[20px] whitespace-nowrap">€890</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-[48.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph30 />
        <Paragraph31 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
        <g id="Icon">
          <path d="M2.49837 5.9961H9.49383" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
          <path d={svgPaths.pffb8b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#001f6b] h-[35.996px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Select</p>
        <Icon11 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,31,107,0.12)] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12.625px] relative size-full">
        <Container54 />
        <Button17 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="flex-[171.602_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container46 />
        <Container53 />
      </div>
    </div>
  );
}

function RouteCard1() {
  return (
    <div className="bg-white h-[332.852px] relative rounded-[4px] shrink-0 w-[230.4px]" data-name="RouteCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container43 />
        <Container45 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function Container56() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,8,23,0.6)] h-[160px] left-0 to-[rgba(0,0,0,0)] top-0 w-[229.15px]" data-name="Container" />;
}

function Text10() {
  return (
    <div className="absolute bg-[#001f6b] left-[11.99px] rounded-[2px] top-[128.03px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Business</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback4 />
        <Container56 />
        <Text10 />
      </div>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">BRU</p>
      </div>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Brussels</p>
      </div>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-[45.244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph32 />
        <Paragraph33 />
        <Paragraph34 />
      </div>
    </div>
  );
}

function Container62() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[23.174_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Icon12() {
  return (
    <div className="absolute flex items-center justify-center left-[-0.5px] size-[12.992px] top-[-0.5px]">
      <div className="flex-none rotate-5">
        <div className="relative size-[11.992px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
            <g clipPath="url(#clip0_14_2241)" id="Icon">
              <path d={svgPaths.pf235bc0} id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
            </g>
            <defs>
              <clipPath id="clip0_14_2241">
                <rect fill="white" height="11.9922" width="11.9922" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform2() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container63() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[23.184_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Container61() {
  return (
    <div className="relative shrink-0 w-[66.338px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container62 />
        <IconTransform2 />
        <Container63 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[66.338_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">12h 55m</p>
        <Container61 />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">Direct</p>
      </div>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">SIN</p>
      </div>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Singapore</p>
      </div>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-[53.584px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph35 />
        <Paragraph36 />
        <Paragraph37 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container59 />
        <Container60 />
        <Container64 />
      </div>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] uppercase whitespace-nowrap">From</p>
      </div>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#09102b] text-[20px] whitespace-nowrap">€1,460</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-[72.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph38 />
        <Paragraph39 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
        <g id="Icon">
          <path d="M2.49837 5.9961H9.49383" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
          <path d={svgPaths.pffb8b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#001f6b] h-[35.996px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Select</p>
        <Icon13 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,31,107,0.12)] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12.625px] relative size-full">
        <Container66 />
        <Button18 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[171.602_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container58 />
        <Container65 />
      </div>
    </div>
  );
}

function RouteCard2() {
  return (
    <div className="bg-white h-[332.852px] relative rounded-[4px] shrink-0 w-[230.4px]" data-name="RouteCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container55 />
        <Container57 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container68() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,8,23,0.6)] h-[160px] left-0 to-[rgba(0,0,0,0)] top-0 w-[229.15px]" data-name="Container" />;
}

function Text11() {
  return (
    <div className="absolute bg-[#001f6b] left-[11.99px] rounded-[2px] top-[128.03px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Business</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback5 />
        <Container68 />
        <Text11 />
      </div>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">CDG</p>
      </div>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Paris</p>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-[49.043px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph40 />
        <Paragraph41 />
        <Paragraph42 />
      </div>
    </div>
  );
}

function Container74() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[26.543_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Icon14() {
  return (
    <div className="absolute flex items-center justify-center left-[-0.5px] size-[12.992px] top-[-0.5px]">
      <div className="flex-none rotate-5">
        <div className="relative size-[11.992px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
            <g clipPath="url(#clip0_14_2241)" id="Icon">
              <path d={svgPaths.pf235bc0} id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
            </g>
            <defs>
              <clipPath id="clip0_14_2241">
                <rect fill="white" height="11.9922" width="11.9922" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform3() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Container75() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[26.543_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Container73() {
  return (
    <div className="relative shrink-0 w-[73.066px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container74 />
        <IconTransform3 />
        <Container75 />
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="flex-[73.066_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">11h 40m</p>
        <Container73 />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">Direct</p>
      </div>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">NRT</p>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Tokyo</p>
      </div>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container76() {
  return (
    <div className="relative shrink-0 w-[43.057px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph43 />
        <Paragraph44 />
        <Paragraph45 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container71 />
        <Container72 />
        <Container76 />
      </div>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] uppercase whitespace-nowrap">From</p>
      </div>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#09102b] text-[20px] whitespace-nowrap">€1,680</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0 w-[72.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph46 />
        <Paragraph47 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
        <g id="Icon">
          <path d="M2.49837 5.9961H9.49383" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
          <path d={svgPaths.pffb8b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#001f6b] h-[35.996px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Select</p>
        <Icon15 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,31,107,0.12)] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12.625px] relative size-full">
        <Container78 />
        <Button19 />
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[171.602_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container70 />
        <Container77 />
      </div>
    </div>
  );
}

function RouteCard3() {
  return (
    <div className="bg-white h-[332.852px] relative rounded-[4px] shrink-0 w-[230.4px]" data-name="RouteCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container67 />
        <Container69 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Container80() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,8,23,0.6)] h-[160px] left-0 to-[rgba(0,0,0,0)] top-0 w-[229.15px]" data-name="Container" />;
}

function Text12() {
  return (
    <div className="absolute bg-[#001f6b] left-[11.99px] rounded-[2px] top-[128.03px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[10px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-white whitespace-nowrap">Business</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback6 />
        <Container80 />
        <Text12 />
      </div>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">AMS</p>
      </div>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">Amsterdam</p>
      </div>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container83() {
  return (
    <div className="relative shrink-0 w-[61.748px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph48 />
        <Paragraph49 />
        <Paragraph50 />
      </div>
    </div>
  );
}

function Container86() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[15.264_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Icon16() {
  return (
    <div className="absolute flex items-center justify-center left-[-0.5px] size-[12.992px] top-[-0.5px]">
      <div className="flex-none rotate-5">
        <div className="relative size-[11.992px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
            <g clipPath="url(#clip0_14_2241)" id="Icon">
              <path d={svgPaths.pf235bc0} id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
            </g>
            <defs>
              <clipPath id="clip0_14_2241">
                <rect fill="white" height="11.9922" width="11.9922" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconTransform4() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon:transform">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container87() {
  return <div className="bg-[rgba(0,31,107,0.12)] flex-[15.273_0_0] h-[0.996px] min-w-px relative" data-name="Container" />;
}

function Container85() {
  return (
    <div className="relative shrink-0 w-[50.518px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container86 />
        <IconTransform4 />
        <Container87 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="flex-[50.518_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">11h 30m</p>
        <Container85 />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] whitespace-nowrap">Direct</p>
      </div>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#09102b] text-[24px] text-center tracking-[-0.6px] whitespace-nowrap">GRU</p>
      </div>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[15.996px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#5b6580] text-[12px] text-center whitespace-nowrap">São Paulo</p>
      </div>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full" />
    </div>
  );
}

function Container88() {
  return (
    <div className="relative shrink-0 w-[52.9px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph51 />
        <Paragraph52 />
        <Paragraph53 />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container83 />
        <Container84 />
        <Container88 />
      </div>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[15px] relative shrink-0 text-[#5b6580] text-[10px] uppercase whitespace-nowrap">From</p>
      </div>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['JetBrains_Mono:Bold',sans-serif] font-bold leading-[28px] relative shrink-0 text-[#09102b] text-[20px] whitespace-nowrap">€1,100</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0 w-[72.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph54 />
        <Paragraph55 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[11.992px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9922 11.9922">
        <g id="Icon">
          <path d="M2.49837 5.9961H9.49383" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
          <path d={svgPaths.pffb8b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.99935" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#001f6b] h-[35.996px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">Select</p>
        <Icon17 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,31,107,0.12)] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12.625px] relative size-full">
        <Container90 />
        <Button20 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[171.602_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container82 />
        <Container89 />
      </div>
    </div>
  );
}

function RouteCard4() {
  return (
    <div className="bg-white h-[332.852px] relative rounded-[4px] shrink-0 w-[230.4px]" data-name="RouteCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[0.625px] relative rounded-[inherit] size-full">
        <Container79 />
        <Container81 />
      </div>
      <div aria-hidden className="absolute border-[0.625px] border-[rgba(0,31,107,0.12)] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Container">
      <RouteCard />
      <RouteCard1 />
      <RouteCard2 />
      <RouteCard3 />
      <RouteCard4 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[40px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container28 />
      <ContainerMargin4 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container27 />
      </div>
    </div>
  );
}

function DestinationsSection() {
  return (
    <div className="bg-[rgba(237,240,247,0.4)] relative shrink-0 w-full" data-name="DestinationsSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[56px] relative size-full">
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#c9a84c] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">Loyalty Program</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[50px] relative shrink-0 w-[592.002px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[37.5px] relative shrink-0 text-[30px] text-white tracking-[-0.6px] whitespace-nowrap">Earn Miles on Every Flight</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph56 />
        <Heading6 />
      </div>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-[512px]">Join millions of members who earn and redeem miles on Airavia flights, partner airlines, hotels, and more.</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d={svgPaths.p3ab39580} id="Vector" stroke="var(--stroke-0, #3D2800)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[#c9a84c] content-stretch flex gap-[8px] h-[47.998px] items-center left-0 px-[28px] rounded-[4px] top-0" data-name="Button">
      <Icon18 />
      <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#3d2800] text-[16px] text-center whitespace-nowrap">Join Miles Program</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Icon">
          <path d="M3.125 7.5H11.875" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.25" />
          <path d={svgPaths.pb698300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[47.998px] items-center left-[229.5px] px-[28px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] text-center whitespace-nowrap">Learn more</p>
      <Icon19 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[47.998px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button21 />
        <Button22 />
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 top-0 w-[592.002px]" data-name="Container">
      <Container94 />
      <Paragraph57 />
      <Container95 />
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[44px] relative shrink-0 w-[67px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[#c9a84c] text-[36px] text-center whitespace-nowrap">40+</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[640px] pl-[24px] pr-[24.625px] py-[24px] top-[52.73px] w-[194.668px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r-[0.625px] border-solid inset-0 pointer-events-none" />
      <Paragraph58 />
      <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[1.2px] uppercase whitespace-nowrap">Destinations</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[44px] relative shrink-0 w-[75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[#c9a84c] text-[36px] text-center whitespace-nowrap">2M+</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[838.66px] pl-[24px] pr-[24.625px] py-[24px] top-[52.73px] w-[194.678px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-r-[0.625px] border-solid inset-0 pointer-events-none" />
      <Paragraph59 />
      <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[1.2px] uppercase whitespace-nowrap">Members</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Black',sans-serif] font-black leading-[40px] relative shrink-0 text-[#c9a84c] text-[36px] text-center whitespace-nowrap">25</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[1037.33px] p-[24px] top-[52.73px] w-[194.668px]" data-name="Container">
      <Paragraph60 />
      <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.5)] text-center tracking-[1.2px] uppercase whitespace-nowrap">Partner Lounges</p>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[213.447px] relative shrink-0 w-[1232.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container93 />
        <Container96 />
        <Container97 />
        <Container98 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container92 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container91 />
      </div>
    </div>
  );
}

function MilesSection() {
  return (
    <div className="bg-[#001f6b] relative shrink-0 w-full" data-name="MilesSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[56px] relative size-full">
        <ContainerMargin5 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <HeroSection />
        <PremiumSection />
        <DestinationsSection />
        <MilesSection />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[19.286px] left-0 top-0 w-[42.282px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.2817 19.2862">
        <g id="Group 2">
          <path d={svgPaths.p12d5840} fill="var(--fill-0, white)" id="Subtract" />
          <path d={svgPaths.p39397080} fill="var(--fill-0, white)" id="Rectangle 2" />
          <path d={svgPaths.p2863de00} fill="var(--fill-0, white)" id="Rectangle 3" />
          <path d={svgPaths.p18d1e100} fill="var(--fill-0, white)" fillOpacity="0.87" id="Vector 1" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group4 />
    </div>
  );
}

function LogoColor1() {
  return (
    <div className="absolute h-[19.287px] left-0 top-[1.12px] w-[42.282px]" data-name="Logo - Color">
      <Group3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-0 top-[1.12px]">
      <LogoColor1 />
      <div className="absolute h-[19.368px] left-[23.21px] top-[1.12px] w-[14.215px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2148 19.3682">
          <path d={svgPaths.p18aaa500} fill="var(--fill-0, white)" fillOpacity="0.87" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-0 top-[1.12px]">
      <Group7 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[42.28px] top-0">
      <div className="absolute h-[13.4px] left-[64.12px] top-[5.66px] w-[24.13px]" data-name="IR">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.1305 13.3999">
          <g id="IR">
            <path d={svgPaths.p2811f340} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3ce17400} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['Montserrat:ExtraBold',sans-serif] leading-[normal] left-[42.28px] not-italic text-[19.968px] text-white top-0 tracking-[-0.9984px] whitespace-nowrap">A</p>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[42.28px] top-0">
      <div className="absolute h-[13.4px] left-[93.05px] top-[5.66px] w-[61.234px]" data-name="AVIA">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.2338 13.3999">
          <g id="AVIA">
            <path d={svgPaths.p27e90740} fill="var(--fill-0, white)" fillOpacity="0.87" />
            <path d={svgPaths.p18c8abf2} fill="var(--fill-0, white)" fillOpacity="0.87" />
            <path d={svgPaths.p38bce400} fill="var(--fill-0, white)" fillOpacity="0.87" />
            <path d={svgPaths.p1f4f64f2} fill="var(--fill-0, white)" fillOpacity="0.87" />
          </g>
        </svg>
      </div>
      <Group15 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-0 top-0">
      <Group13 />
      <Group14 />
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.286px]" data-name="Logo">
      <Group12 />
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Logo1 />
      </div>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="max-w-[320px] relative shrink-0 w-[320px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[22.75px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">Premium aviation experience</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex flex-col h-[211.943px] items-start left-0 top-0 w-[389.336px]" data-name="Container">
      <Container102 />
      <Paragraph61 />
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.682px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase whitespace-nowrap">About Airavia</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Our Story</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Leadership</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Careers</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Partner</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Sustainability</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">{`FlyGO `}</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[211.943px] items-start left-[421.33px] top-0 w-[178.682px]" data-name="Container">
      <Paragraph62 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase whitespace-nowrap">Our Routes</p>
      </div>
    </div>
  );
}

function Button29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Flights to Barcelona</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Flights to Tokyo</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">{`Flights to Copenhagen `}</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Flights to Amsterdam</p>
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">All Routes</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[632px] top-0 w-[178.672px]" data-name="Container">
      <Paragraph63 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
      <Button33 />
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.672px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase whitespace-nowrap">{`Business & Corporate`}</p>
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Corporate Programs</p>
      </div>
    </div>
  );
}

function Button35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Group Travel</p>
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Travel Agents</p>
      </div>
    </div>
  );
}

function Button37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Partnership</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[211.943px] items-start left-[842.67px] top-0 w-[178.672px]" data-name="Container">
      <Paragraph64 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[20px] relative shrink-0 w-[178.682px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.2px] uppercase whitespace-nowrap">STAY INFORMED</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Help Center</p>
      </div>
    </div>
  );
}

function Button39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Help Center</p>
      </div>
    </div>
  );
}

function Button40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Manage Booking</p>
      </div>
    </div>
  );
}

function Button41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Flight Status</p>
      </div>
    </div>
  );
}

function Button42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Baggage</p>
      </div>
    </div>
  );
}

function Button43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-[rgba(255,255,255,0.6)] whitespace-nowrap">Contact Us</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[211.943px] items-start left-[1053.33px] top-0 w-[178.682px]" data-name="Container">
      <Paragraph65 />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[260.566px] relative shrink-0 w-[1232.012px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.625px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container101 />
        <Container103 />
        <Container104 />
        <Container105 />
        <Container106 />
      </div>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] whitespace-nowrap">© 2026 Airavia International. All rights reserved.</p>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#c9a84c] text-[12px] text-center whitespace-nowrap">EN</p>
      </div>
    </div>
  );
}

function Button45() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">NL</p>
      </div>
    </div>
  );
}

function Button46() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">DE</p>
      </div>
    </div>
  );
}

function Button47() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">FR</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button44 />
        <Button45 />
        <Button46 />
        <Button47 />
      </div>
    </div>
  );
}

function Container110() {
  return <div className="bg-[rgba(255,255,255,0.2)] h-[11.992px] relative shrink-0 w-[0.996px]" data-name="Container" />;
}

function Button48() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">Privacy</p>
      </div>
    </div>
  );
}

function Button49() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">Terms</p>
      </div>
    </div>
  );
}

function Button50() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.3)] text-center whitespace-nowrap">Cookies</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Button48 />
        <Button49 />
        <Button50 />
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container109 />
        <Container110 />
        <Container111 />
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 w-[1232.012px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[24px] relative size-full">
        <Paragraph66 />
        <Container108 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1280px] px-[24px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container100 />
      <Container107 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container99 />
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <div className="bg-[#001f6b] relative shrink-0 w-full" data-name="SiteFooter">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.625px] inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] pt-[56.625px] relative size-full">
        <ContainerMargin6 />
      </div>
    </div>
  );
}

function SiteTemplate() {
  return (
    <div className="bg-[#f4f6fb] relative shrink-0 w-full" data-name="SiteTemplate">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <MainContent />
        <SiteFooter />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f4f6fb] min-h-[1410px] relative shrink-0 w-full" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <SiteTemplate />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[12.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.998 12.998">
        <g clipPath="url(#clip0_14_2221)" id="Icon">
          <path d={svgPaths.p12a7cb00} id="Vector" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d={svgPaths.p5722400} id="Vector_2" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d="M1.08317 7.58217H2.16633" id="Vector_3" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d="M10.8317 7.58217H11.9148" id="Vector_4" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d="M8.12375 7.04058V8.12375" id="Vector_5" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
          <path d="M4.87425 7.04058V8.12375" id="Vector_6" stroke="var(--stroke-0, #001F6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08317" />
        </g>
        <defs>
          <clipPath id="clip0_14_2221">
            <rect fill="white" height="12.998" width="12.998" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container112() {
  return (
    <div className="bg-[#c9a84c] relative rounded-[20971500px] shrink-0 size-[23.994px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Text13() {
  return <div className="bg-[#2ec074] relative rounded-[20971500px] shrink-0 size-[7.998px]" data-name="Text" />;
}

function SkyChatFloat() {
  return (
    <div className="absolute bg-[#001f6b] drop-shadow-[0px_25px_25px_rgba(0,0,0,0.25)] left-[1759.26px] rounded-[20971500px] top-[1907px]" data-name="SkyChatFloat">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center pl-[16px] pr-[20px] py-[12px] relative size-full">
        <Container112 />
        <p className="[word-break:break-word] font-['Hanken_Grotesk:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Sky</p>
        <Text13 />
      </div>
    </div>
  );
}

export default function AirbridgeDesignSystemDemoPrepSiteTemplate() {
  return (
    <div className="bg-[#f4f6fb] content-stretch flex flex-col items-start relative size-full" data-name="Airbridge Design System - Demo prep (Site Template)">
      <App />
      <SkyChatFloat />
    </div>
  );
}