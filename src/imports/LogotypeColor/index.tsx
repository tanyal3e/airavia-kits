import svgPaths from "./svg-fwtxpxvi8s";

function Group() {
  return (
    <div className="absolute h-[529.626px] left-0 top-0 w-[1161.097px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1161.1 529.626">
        <g id="Group 2">
          <path d={svgPaths.p1b7b6c00} fill="var(--fill-0, #0044B0)" id="Subtract" />
          <path d={svgPaths.pc06ef80} fill="var(--fill-0, #0044B0)" id="Rectangle 2" />
          <path d={svgPaths.p4715e00} fill="var(--fill-0, #0044B0)" id="Rectangle 3" />
          <path d={svgPaths.pebaecc0} fill="var(--fill-0, #6D8EEC)" id="Vector 1" />
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
          <path d={svgPaths.peca2f00} fill="var(--fill-0, #6D8EEC)" id="Subtract" />
        </svg>
      </div>
    </div>
  );
}

export default function LogotypeColor() {
  return (
    <div className="bg-white relative size-full" data-name="Logotype - Color">
      <Group3 />
      <div className="absolute h-[251px] left-[1685px] top-[402px] w-[1147px]" data-name="AVIA">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1147 251">
          <g id="AVIA">
            <path d={svgPaths.p26d74900} fill="var(--fill-0, #0044B0)" />
            <path d={svgPaths.p30527600} fill="var(--fill-0, #0044B0)" />
            <path d={svgPaths.p1f57300} fill="var(--fill-0, #0044B0)" />
            <path d={svgPaths.p38d07600} fill="var(--fill-0, #0044B0)" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[251px] left-[1143px] top-[402px] w-[452px]" data-name="IR">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 452 251">
          <g id="IR">
            <path d="M0 251V0H72.5329V251H0Z" fill="var(--fill-0, #0044B0)" />
            <path d={svgPaths.p24c57d80} fill="var(--fill-0, #0044B0)" />
          </g>
        </svg>
      </div>
    </div>
  );
}