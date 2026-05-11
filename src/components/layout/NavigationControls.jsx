export default function NavigationControls({ side, onClick, onHover, onLeave, }) {
  const isLeft = side === 'left'

  return (
    <button
    onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group flex items-center gap-[10px] md:gap-[16px]`}>
     {isLeft && (
        <div className={`relative flex items-center justify-center h-[28px] w-[28px] md:h-[34px] md:w-[34px]`}>

          <div className={`absolute h-[20px] w-[20px] md:h-[24px] md:w-[24px] rotate-45 border border-black/50 transition-all duration-300 group-hover:h-[28px] group-hover:w-[28px]
            md:group-hover:h-[32px] md:group-hover:w-[32px]`} />

          <div className={`relative h-[8px] w-[14px] md:w-[18px] transition-all duration-300 group-hover:scale-110`}>

            <div className={`absolute right-0 top-1/2 h-px w-[10px] md:w-[14px] -translate-y-1/2 bg-black/70`} />

            <div className={`absolute left-0 top-1/2 h-[4px] w-[4px] md:h-[5px] md:w-[5px] -translate-y-1/2 rotate-[-135deg] border-r border-t border-black/70`} />

          </div>

        </div>
      )}

      <span className={`text-[11px] md:text-[14px] uppercase tracking-[0.08em] text-[#1A1B1C]`}>
        {isLeft ? 'Discover A.I.' : 'Take Test'}
      </span>

      {!isLeft && (
        <div className={`relative flex items-center justify-center h-[28px] w-[28px] md:h-[34px] md:w-[34px]`}>

          <div className={`absolute h-[20px] w-[20px] md:h-[24px] md:w-[24px] rotate-45 border border-black/50 transition-all duration-300 group-hover:h-[28px] group-hover:w-[28px]
                md:group-hover:h-[32px] md:group-hover:w-[32px]`} />

          <div className={`relative h-[8px] w-[14px] md:w-[18px] transition-all duration-300 group-hover:scale-110`}>

            <div className={`absolute left-0 top-1/2 h-px w-[10px] md:w-[14px] -translate-y-1/2 bg-black/70`} />

            <div className={`absolute right-0 top-1/2 h-[4px] w-[4px] md:h-[5px] md:w-[5px] -translate-y-1/2 rotate-45 border-r border-t border-black/70`} />

          </div>

        </div>
      )}

    </button>
  )
}