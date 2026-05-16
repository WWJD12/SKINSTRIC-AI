import { BiSolidRightArrow } from 'react-icons/bi'

export default function ProceedButton({
  onClick,
  dark = false,
  children = 'PROCEED',
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-[20px]"
    >

      <span
        className={`inline-block font-['Roobert_TRIAL'] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] ${
          dark
            ? 'text-white'
            : 'text-black'
        }`}
      >
        {children}
      </span>

      <div
        className={`relative inline-flex h-[44px] w-[44px] shrink-0 rotate-45 items-center justify-center border transition-transform duration-200 hover:scale-105 ${
          dark
            ? 'border-white'
            : 'border-[#1A1B1C]/90'
        }`}
      >

        <BiSolidRightArrow
  className={`absolute h-[16px] w-[16px] rotate-[-45deg] ${
    dark
      ? 'text-white'
      : 'text-black'
  }`}
/>

      </div>

    </button>
  )
}