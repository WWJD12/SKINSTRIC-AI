export default function TopBar({
  showEnterCode = true,
  dark = false,
}) {
  return (
    <header className="absolute left-0 top-0 z-50 flex h-[64px] w-full items-center px-[24px] pt-[23px] md:px-[32px]">
      <div className="flex min-w-0 items-center gap-[6px] opacity-60">
        <span
          className={`font-['Roobert_TRIAL'] text-[12px] font-semibold uppercase leading-[16px] tracking-[-0.02em] md:text-[14px] ${
            dark ? 'text-white' : 'text-[#1A1B1C]'
          }`}
        >
          SKINSTRIC
        </span>

        <span
          className={`truncate font-['Roobert_TRIAL'] text-[12px] font-semibold uppercase leading-[16px] tracking-[-0.02em] md:text-[14px] ${
            dark ? 'text-white' : 'text-[#1A1B1C]'
          }`}
        >
          [ INTRO ]
        </span>
      </div>

      {showEnterCode && (
        <button className="ml-auto flex h-[32px] shrink-0 items-center justify-center bg-black px-[14px] font-['Roobert_TRIAL'] text-[10px] font-semibold uppercase leading-[16px] tracking-[0.02em] text-white md:px-[16px]">
          ENTER CODE
        </button>
      )}
    </header>
  )
}
