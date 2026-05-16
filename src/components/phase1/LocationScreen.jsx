import ScreenLayout from '@/components/shared/ScreenLayout'
import TextInput from '@/components/shared/TextInput'
import ScreenLabel from '@/components/shared/ScreenLabel'

export default function LocationScreen({
  location,
  setLocation,
  onNext,
  onBack,
  loading,
  error,
}) {
  return (
    <ScreenLayout onBack={onBack}>
      {/* LEFT SIDE LABEL */}
      <div className="fixed left-[24px] top-[70px] z-50 md:left-[32px]">
        <ScreenLabel className="text-[13px] font-semibold tracking-[-0.02em] md:text-[16px]">
          TO START ANALYSIS
        </ScreenLabel>
      </div>

      {/* CENTER CONTENT */}
      <div className="flex w-full max-w-[calc(100vw-48px)] -translate-y-[18px] flex-col items-center">


        <ScreenLabel className="mb-[12px] whitespace-nowrap text-[10px] font-normal tracking-[0.08em] text-black/30 md:text-[11px]">
          CLICK TO TYPE
        </ScreenLabel>

        <TextInput
          value={location}
          onChange={setLocation}
          onEnter={onNext}
          placeholder="Your city name"
        />

        {error && (
          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.08em] text-red-500 md:text-[12px]">
            {error}
          </p>
        )}

        {loading && (
          <p className="mt-6 text-center text-[10px] uppercase tracking-[0.08em] text-black/40 md:text-[12px]">
            Loading...
          </p>
        )}
      </div>
    </ScreenLayout>
  )
}
