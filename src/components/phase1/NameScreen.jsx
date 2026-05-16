import ScreenLayout from '@/components/shared/ScreenLayout'
import TextInput from '@/components/shared/TextInput'
import ScreenLabel from '@/components/shared/ScreenLabel'

export default function NameScreen({
  name,
  setName,
  onNext,
  onBack,
}) {
  return (
    <ScreenLayout onBack={onBack}>

      {/* TOP LEFT */}
    <div className="fixed left-[24px] top-[70px] z-50 md:left-[32px]">

        <ScreenLabel className="text-[13px] md:text-[16px] font-['Roobert_TRIAL'] font-semibold tracking-[-0.02em]">
          TO START ANALYSIS
        </ScreenLabel>
      </div>

      {/* CENTER */}
      <div className="flex w-full max-w-[calc(100vw-48px)] -translate-y-[18px] flex-col items-center">





        <ScreenLabel className="mb-[12px] text-[11px] font-['Roobert_TRIAL'] tracking-[0.08em] text-black/40">
          CLICK TO TYPE
        </ScreenLabel>

        <TextInput
          value={name}
          onChange={setName}
          onEnter={onNext}
          placeholder="Introduce Yourself"
        />

      </div>

    </ScreenLayout>
  )
}