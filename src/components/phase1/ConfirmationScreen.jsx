import ScreenLayout from '../shared/ScreenLayout'
import ScreenContent from '../shared/ScreenContent'
import ProceedButton from '../shared/ProceedButton'

export default function ConfirmationScreen({ name, onNext, onBack, }) {
  return (
    <ScreenLayout onBack={onBack}>

      <ScreenContent className="text-center">

        <p className="mb-4 text-[12px] uppercase tracking-[0.3em] text-black/40">
          Thank You
        </p>

        <h1 className="font-[Roobert] text-[32px] md:text-[48px] lg:text-[64px] leading-none text-[#1A1B1C]">
          {name}
        </h1>

        <p className="mt-6 max-w-[420px] text-[14px] leading-[1.8] text-black/60">
          We now have enough information to begin your personalized skin analysis.
        </p>
         

      </ScreenContent>
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
            <ProceedButton onClick={onNext}>
                PROCEED
            </ProceedButton>
            </div>

    </ScreenLayout>
  )
}