import DiamondFrame from './DiamondFrame'

export default function CenterRhombus() {
  return (
    <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">

      <div className="relative h-[240px] w-[240px] md:h-[340px] md:w-[340px] lg:h-[440px] lg:w-[440px]">

        <div className="absolute inset-0 flex items-center justify-center animate-rhombusFast">

          <div className="rotate-0 scale-100 opacity-30">
            <DiamondFrame />
          </div>

        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-rhombusMedium">

          <div className="rotate-[6deg] scale-[1.02] opacity-20">
            <DiamondFrame />
          </div>

        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-rhombusSlow">

          <div className="rotate-[-5deg] scale-[1.04] opacity-10">
            <DiamondFrame />
          </div>

        </div>

      </div>

    </div>
  )
}