export default function TopBar({
  showEnterCode = false,
  dark = false,
}) {
  return (
    <header className="absolute left-0 top-0 z-50 flex h-[64px] w-full items-center px-5 md:px-[28px]">

      <div className="flex items-center gap-[8px]">

        <span
          className={`text-[8px] font-semibold uppercase tracking-[0.14em] md:text-[9px] ${
            dark
              ? "text-white"
              : "text-[#1A1B1C]"
          }`}
        >
          SKINSTRIC
        </span>

        <span
          className={`text-[8px] uppercase tracking-[0.14em] md:text-[9px] ${
            dark
              ? "text-white/40"
              : "text-black/35"
          }`}
        >
          [ INTRO ]
        </span>

      </div>

      {showEnterCode && (
        <button className="ml-auto flex h-[24px] items-center justify-center bg-black px-[10px] text-[6px] uppercase tracking-[0.12em] text-white md:h-[26px] md:px-[12px] md:text-[7px]">
          ENTER CODE
        </button>
      )}

    </header>
  )
}