import ScreenLayout from '@/components/shared/ScreenLayout'
import TextInput from '@/components/shared/TextInput'
import ScreenLabel from '@/components/shared/ScreenLabel'
import ScreenContent from '@/components/shared/ScreenContent'

export default function NameScreen({ name, setName, onNext, onBack, }) {
  
  return (
    <ScreenLayout onBack={onBack}>

      <ScreenLabel className="absolute left-5 top-20 md:left-8 text-[13px] md:text-[16px] font-semibold tracking-[-0.02em]">
        TO START ANALYSIS
      </ScreenLabel>

      <ScreenContent className="w-full px-6">

        <ScreenLabel className="mb-[4px] text-[10px] md:text-[11px] font-normal tracking-[0.08em] text-black/30">
          CLICK TO TYPE
        </ScreenLabel>

        <TextInput
          value={name}
          onChange={setName}
          onEnter={onNext}
          placeholder="Introduce Yourself"
        />

      </ScreenContent>

    </ScreenLayout>
  )
}