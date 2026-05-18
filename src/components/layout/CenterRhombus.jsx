import DiamondFrame from './DiamondFrame'

export default function CenterRhombus() {
  return (
    <div className="absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2">
      <div className="relative h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] xl:h-[460px] xl:w-[460px]">        
        <div className="absolute inset-0 flex items-center justify-center animate-rhombusFast">
        <div className="h-full w-full rotate-0 scale-100 opacity-100">
          <DiamondFrame />
        </div>
      </div>

        <div className="absolute inset-0 flex items-center justify-center animate-rhombusMedium">
          <div className="h-full w-full rotate-[6deg] scale-[1.02] opacity-50">
            <DiamondFrame />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center animate-rhombusSlow">
          <div className="h-full w-full rotate-[-5deg] scale-[1.04] opacity-25">
            <DiamondFrame />
          </div>
        </div>
      </div>
    </div>
  )
}
