import ScreenLayout from '@/components/shared/ScreenLayout'
import ScreenLabel from '@/components/shared/ScreenLabel'

export default function CameraSetupScreen() {
  return (
   <ScreenLayout hideRhombus>

  {/* TOP LEFT */}
  <div className="fixed left-[24px] top-[78px] z-50">
    <ScreenLabel
      className="text-[13px] font-medium tracking-[-0.02em] text-black"
    >
      TO START ANALYSIS
    </ScreenLabel>
  </div>

  {/* CENTER */}
  <section className="absolute inset-0 flex items-center justify-center">

    <div className="flex scale-[1.08] flex-col items-center">

      {/* CAMERA AREA */}
      <div className="relative flex h-[360px] w-[360px] items-center justify-center">

        {/* RHOMBUSES */}
        <div className="absolute inset-0 flex items-center justify-center">

          <div className="absolute flex items-center justify-center animate-rhombusSlow">
          <div className="h-[300px] w-[300px] rotate-45 border border-dashed border-black/18" />
        </div>

          <div className="absolute flex items-center justify-center animate-rhombusMedium">
          <div className="h-[272px] w-[272px] rotate-[41deg] border border-dashed border-black/24" />
        </div>

          <div className="absolute flex items-center justify-center animate-rhombusFast">
          <div className="h-[244px] w-[244px] rotate-[37deg] border border-dashed border-black/32" />
        </div>
        </div>
        {/* CAMERA ICON + TITLE */}
        <div className="relative z-10 flex flex-col items-center">

          <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full border-[2px] border-black">

            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full border-[8px] border-black" />

          </div>

          <p className="mt-[18px] font-['Roobert_TRIAL'] text-[18px] font-medium uppercase tracking-[-0.03em] text-black">
            SETTING UP CAMERA ...
          </p>

        </div>

      </div>

      {/* LOWER CONTENT */}
      <div className="mt-[14px] flex flex-col items-center">

        <p className="font-['Roobert_TRIAL'] text-[10px] uppercase tracking-[0.08em] text-black">
          TO GET BETTER RESULTS MAKE SURE TO HAVE
        </p>

        <div className="mt-[22px] flex items-center gap-[38px] font-['Roobert_TRIAL'] text-[10px] uppercase text-black">

          <span>◇ NEUTRAL EXPRESSION</span>

          <span>◇ FRONTAL POSE</span>

          <span>◇ ADEQUATE LIGHTING</span>

        </div>

        {/* PROGRESS */}
        <div className="mt-[30px] flex items-center gap-[10px]">

          <div className="h-[8px] w-[7px] rounded-full bg-black/35" />

          <div className="h-[8px] w-[360px] rounded-full bg-black/28" />

          <div className="h-[8px] w-[7px] rounded-full bg-black/35" />

        </div>

      </div>

    </div>

  </section>

</ScreenLayout>
  )
}
