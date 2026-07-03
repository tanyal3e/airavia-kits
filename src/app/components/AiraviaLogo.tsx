import airaviaLogo from "@/imports/AiraviaWeb/LogoWhite.png";

// White logotype (icon + wordmark) — designed for dark/navy backgrounds only.
// On light backgrounds, wrap in a dark chip (see App.tsx footer usage).
export function AiraviaLogo({ height = 24, className = "" }: { height?: number; className?: string }) {
  return (
    <img
      src={airaviaLogo}
      alt="Airavia"
      style={{ height, width: "auto" }}
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
