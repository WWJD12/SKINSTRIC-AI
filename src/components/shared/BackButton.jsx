import { BiSolidLeftArrow } from 'react-icons/bi'

export default function BackButton({
  onClick,
  dark = false,
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[20px]"
    >

      <div
        className={`relative inline-flex h-[44px] w-[44px] items-center justify-center rotate-45 shrink-0 transition-transform duration-200 hover:scale-105 ${
          dark
            ? "border border-white"
            : "border border-[#1A1B1C]/90"
        }`}
      >

        <BiSolidLeftArrow
  className={`absolute left-[13px] top-[13px] h-[16px] w-[16px] rotate-[-45deg] ${
    dark
      ? 'text-white'
      : 'text-black'
  }`}
/>
      </div>

     <span
 
       className={`inline-block font-['Roobert_TRIAL'] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] ${
          dark
            ? "text-white"
            : "text-black"
        }`}
      >
        Back
      </span>
    </button>
  )
}