import svgPaths from "./svg-nbzt7lk52o";

function Group() {
  return (
    <div className="absolute h-[529.626px] left-0 top-0 w-[1161.097px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161.1 529.626">
        <g id="Group 2">
          <path d={svgPaths.p1b7b6c00} fill="var(--fill-0, black)" fillOpacity="0.56" id="Subtract" />
          <path d={svgPaths.pc06ef80} fill="var(--fill-0, black)" id="Rectangle 2" />
          <path d={svgPaths.p4715e00} fill="var(--fill-0, black)" id="Rectangle 3" />
          <path d={svgPaths.pebaecc0} fill="var(--fill-0, black)" id="Vector 1" />
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
    <div className="absolute h-[529.626px] left-[144px] top-[124px] w-[1161.097px]" data-name="Logo - Color">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[144px] top-[124px]">
      <LogoColor />
      <div className="absolute h-[531.872px] left-[781.3px] top-[124px] w-[390.356px]" data-name="Subtract">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390.356 531.872">
          <path d={svgPaths.p27188300} fill="var(--fill-0, black)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

export default function LogoBw() {
  return (
    <div className="bg-white relative size-full" data-name="Logo - BW">
      <Group3 />
      <p className="[word-break:break-word] absolute font-['Montserrat:Regular',sans-serif] leading-[normal] left-[1698px] not-italic text-[366.741px] text-black top-[307px] tracking-[91.6852px] whitespace-nowrap">AVIA</p>
      <p className="[word-break:break-word] absolute font-['Montserrat:ExtraBold',sans-serif] leading-[normal] left-[1119px] not-italic text-[366.741px] text-black top-[307px] tracking-[91.6852px] whitespace-nowrap">IR</p>
    </div>
  );
}