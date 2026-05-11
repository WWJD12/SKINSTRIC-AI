import ScreenLayout from '@/components/shared/ScreenLayout'
import ScreenContent from '@/components/shared/ScreenContent'
import ScreenLabel from '@/components/shared/ScreenLabel'

export default function CameraSetupScreen() {
  return (
    <ScreenLayout>

      <ScreenLabel className="absolute left-8 top-20 text-[16px] font-semibold tracking-[-0.02em]">
        PREPARING CAMERA
      </ScreenLabel>

      <ScreenContent className="gap-8">

        <div className="relative flex h-[180px] w-[180px] items-center justify-center">

          <div className="absolute h-[180px] w-[180px] rotate-45 animate-spin-slow border border-dashed border-black/20"/>

          <div className="absolute h-[130px] w-[130px] -rotate-45 animate-spin-reverse border border-dashed border-black/20"/>

          <div className="absolute h-[80px] w-[80px] rounded-full border border-black/30"/>

          <div className="absolute h-[28px] w-[28px] rounded-full bg-black"/>

        </div>

        <div className="flex flex-col items-center gap-2">

          <ScreenLabel className="text-[11px] font-normal tracking-[0.12em] text-black/50">
            INITIALIZING CAMERA
          </ScreenLabel>

          <ScreenLabel className="text-[10px] font-normal tracking-[0.08em] text-black/30">
            PLEASE WAIT
          </ScreenLabel>

        </div>

      </ScreenContent>

    </ScreenLayout>
  )
}