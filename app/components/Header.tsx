import { Settings, Users } from "lucide-react";
import { Logo } from "./Logo";

const glass =
  "bg-white/75 border border-white shadow-[0_8px_24px_rgba(90,70,160,0.12)] backdrop-blur-md";

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function Header() {
  return (
    <header className="grid items-center gap-5 lg:grid-cols-[1fr_auto_1fr]">
      {/* Left: brand */}
      <div className="flex flex-wrap items-center gap-4 lg:justify-self-start">
        <div className="flex items-center gap-3">
          <Logo />
          <h1 className="bg-gradient-to-r from-[#4B3FBF] to-[#E4467F] bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
            soluna
          </h1>
        </div>
        <div className="text-sm font-medium leading-snug text-[#6B6688]">
          <div>Our family.</div>
          <div>Our rhythm.</div>
        </div>
      </div>

      {/* Center: week navigation */}
      <div className={`flex items-center gap-2 rounded-full p-1.5 lg:justify-self-center ${glass}`}>
        <button type="button" aria-label="Previous week" className="grid size-11 place-items-center rounded-full text-ink hover:bg-white">
          <Chevron direction="left" />
        </button>
        <div className="whitespace-nowrap px-3 text-[17px] font-medium">
          Mon 12 – Sun 18 Oct 2026
        </div>
        <button type="button" aria-label="Next week" className="grid size-11 place-items-center rounded-full text-ink hover:bg-white">
          <Chevron direction="right" />
        </button>
      </div>

      {/* Right: view toggle and buttons */}
      <div className="flex items-center gap-3 lg:justify-self-end">
        <div className={`flex rounded-full p-1 ${glass}`}>
          <button type="button" className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white">
            Week
          </button>
          <button type="button" className="rounded-full px-5 py-2 text-sm font-semibold text-ink/70">
            Month
          </button>
        </div>
        <button type="button" aria-label="Settings" className={`grid size-[46px] place-items-center rounded-full text-ink ${glass}`}>
          <Settings size={20} />
        </button>
        <button type="button" aria-label="Family members" className={`grid size-[46px] place-items-center rounded-full text-ink ${glass}`}>
          <Users size={20} />
        </button>
      </div>
    </header>
  );
}