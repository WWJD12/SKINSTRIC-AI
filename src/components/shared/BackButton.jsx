import { IoPlay } from 'react-icons/io5'

export default function BackButton({
  onClick,
  dark = false,
}) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-6 left-5 inline-flex items-center gap-3 whitespace-nowrap md:bottom-8 md:left-8 md:gap-5"
    >

      <div
        className={`relative inline-flex h-[24px] w-[24px] items-center justify-center rotate-45 shrink-0 transition-transform duration-300 hover:scale-125 ${
          dark
            ? "border border-white"
            : "border border-black/40"
        }`}
      >

        <IoPlay
          className={`rotate-180 text-[12px] ${
            dark
              ? "text-white"
              : "text-black/70"
          }`}
        />

      </div>

      <span
        className={`inline-block font-[Roobert] text-[10px] font-medium uppercase tracking-[0.08em] leading-none md:text-[13px] ${
          dark
            ? "text-white"
            : "text-black/70"
        }`}
      >
        BACK
      </span>

    </button>
  )
}