import ScreenLayout from '../shared/ScreenLayout'
import ProceedButton from '../shared/ProceedButton'
import ScreenLabel from '../shared/ScreenLabel'

export default function ConfirmationScreen({ name, onNext, onBack }) {
  return (
    <ScreenLayout onBack={onBack}>
      {/* LEFT LABEL */}
      <div className="fixed left-[24px] top-[70px] z-50 md:left-[32px]">
        <ScreenLabel className="text-[13px] font-semibold tracking-[-0.02em] text-[#1A1B1C]/70 md:text-[16px]">
          TO START ANALYSIS
        </ScreenLabel>
      </div>

     {/* CENTER CONTENT */}
<div className="relative z-20 flex w-full max-w-[calc(100vw-48px)] -translate-y-[4px] flex-col items-center text-center">
  <p className="mb-[22px] font-['Roobert_TRIAL'] text-[20px] md:text-[24px] font-normal leading-[16px] tracking-[0.32em] text-[#1A1B1C]/70">
    Thank you!
  </p>

  <p className="w-full max-w-[300px] font-['Roobert_TRIAL'] text-[20px] md:text-[24px] font-light leading-[30px] tracking-[-0.03em] text-[#6E7485] md:max-w-[520px] md:text-[40px] md:leading-[48px]">
    Proceed for the next step
  </p>
</div>

      {/* PROCEED */}
      <div className="fixed bottom-[38px] right-[24px] z-[9999] md:right-[38px]">
        <ProceedButton onClick={onNext}>
          PROCEED
        </ProceedButton>
      </div>
    </ScreenLayout>
  )
}
