import ScreenLayout from '@/components/shared/ScreenLayout'
import ScreenLabel from '@/components/shared/ScreenLabel'

export default function CameraSetupScreen() {
  return (
    <ScreenLayout hideRhombus>
      {/* TOP LEFT */}
      <div className="fixed left-[24px] top-[78px] z-50">
        <ScreenLabel className="text-[13px] font-medium tracking-[-0.02em] text-black">
          TO START ANALYSIS
        </ScreenLabel>
      </div>

      {/* CENTER */}
      <section className="absolute inset-0 flex items-center justify-center">
        <div className="flex -translate-y-[8px] flex-col items-center md:translate-y-[48px] md:scale-[1.08] lg:translate-y-[18px]">
          {/* CAMERA AREA */}
          <div className="relative flex h-[280px] w-[280px] items-center justify-center md:h-[360px] md:w-[360px]">
            {/* RHOMBUSES */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute flex animate-rhombusSlow items-center justify-center">
                <div className="h-[250px] w-[250px] rotate-45 border border-dashed border-black/18 md:h-[330px] md:w-[330px]" />
              </div>

              <div className="absolute flex animate-rhombusMedium items-center justify-center">
                <div className="h-[224px] w-[224px] rotate-[41deg] border border-dashed border-black/24 md:h-[300px] md:w-[300px]" />
              </div>

              <div className="absolute flex animate-rhombusFast items-center justify-center">
                <div className="h-[198px] w-[198px] rotate-[37deg] border border-dashed border-black/32 md:h-[270px] md:w-[270px]" />
              </div>
            </div>

            {/* CAMERA ICON + TITLE */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border-[2px] border-black md:h-[84px] md:w-[84px]">
                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-[7px] border-black md:h-[46px] md:w-[46px] md:border-[8px]" />
              </div>

              <p className="mt-[18px] font-['Roobert_TRIAL'] text-[14px] font-medium uppercase tracking-[-0.03em] text-black md:text-[18px]">
                SETTING UP CAMERA ...
              </p>
            </div>
          </div>

          {/* LOWER CONTENT */}
          <div className="mt-[2px] flex flex-col items-center md:mt-[14px]">
            <p className="w-[300px] text-center font-['Roobert_TRIAL'] text-[10px] uppercase tracking-[0.08em] text-black md:w-auto">
              TO GET BETTER RESULTS MAKE SURE TO HAVE
            </p>

            <div className="mt-[22px] grid w-[330px] grid-cols-3 gap-[12px] font-['Roobert_TRIAL'] text-[10px] uppercase text-black md:flex md:w-auto md:items-center md:gap-[38px] lg:gap-[56px]">
              <span className="text-center lg:whitespace-nowrap">◇ NEUTRAL EXPRESSION</span>
              <span className="text-center lg:whitespace-nowrap">◇ FRONTAL POSE</span>
              <span className="text-center lg:whitespace-nowrap">◇ ADEQUATE LIGHTING</span>
            </div>

            {/* PROGRESS */}
            <div className="mt-[30px] hidden items-center gap-[10px] md:flex">
              <div className="h-[2px] w-[360px] bg-black/28 lg:w-[480px]" />
            </div>
          </div>
        </div>
      </section>
    </ScreenLayout>
  )
}
