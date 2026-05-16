import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";



export default function NavigationControls({ side, onClick, onHover, onLeave, }) {
  const isLeft = side === 'left'

  return (
    <button
    onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group flex items-center gap-[14px] md:gap-[20px]`}>
     {isLeft && (
        <div className={`relative flex items-center justify-center h-[28px] w-[28px] md:h-[34px] md:w-[34px]`}>

          <div className={`absolute h-[28px] w-[28px] md:h-[36px] md:w-[36px] rotate-45 border border-black/90 transition-all duration-300 group-hover:h-[28px] group-hover:w-[28px]
            md:group-hover:h-[32px] md:group-hover:w-[32px]`} />

        <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110">

          <BiSolidLeftArrow className="text-[10px] md:text-[12px] text-black/70" />

        </div>

        </div>
      )}

      <span className={`text-[11px] md:text-[14px] font-['Roobert_TRIAL'] uppercase tracking-[0.08em] text-[#1A1B1C]`}>
        {isLeft ? 'Discover A.I.' : 'Take Test'}
      </span>

      {!isLeft && (
        <div className={`relative flex items-center justify-center h-[28px] w-[28px] md:h-[34px] md:w-[34px]`}>

          <div className={`absolute h-[28px] w-[28px] md:h-[36px] md:w-[36px] rotate-45 border border-black/90 transition-all duration-300 group-hover:h-[28px] group-hover:w-[28px]
                md:group-hover:h-[32px] md:group-hover:w-[32px]`} />

        <div className="flex items-center justify-center transition-all duration-300 group-hover:scale-110">

          <BiSolidRightArrow className="text-[10px] md:text-[12px] text-black/70" />

        </div>
        </div>
      )}

    </button>
  )
}