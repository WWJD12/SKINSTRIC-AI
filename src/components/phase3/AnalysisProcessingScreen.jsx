import ScreenLayout from '@/components/shared/ScreenLayout'

export default function AnalysisProcessingScreen({
  onBack,
}) {
  return (
    <ScreenLayout onBack={onBack}>

      <main className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#F3F3F3]">

        {/* CENTER SYSTEM */}
        <div className="relative flex items-center justify-center">

          
          {/* RHOMBUS 1 */}
            <div
              className="absolute h-[405px] w-[405px] border-2 border-dashed border-[#A0A4AB]/35"
              style={{
                transform: 'rotate(-15deg)',
              }}
            />

            {/* RHOMBUS 2 */}
            <div
              className="absolute h-[498px] w-[498px] border-2 border-dashed border-[#A0A4AB]/20"
              style={{
                transform: 'rotate(0deg)',
              }}
            />

            {/* RHOMBUS 3 */}
            <div
              className="absolute h-[604px] w-[604px] border-2 border-dashed border-[#A0A4AB]/10"
              style={{
                transform: 'rotate(15deg)',
              }}
            />

          {/* TEXT */}
          <p className="z-20 text-center font-[Roobert] text-[16px] font-semibold uppercase tracking-[-0.02em] text-[#1A1B1C]">
            PREPARING YOUR ANALYSIS ...
          </p>

        </div>

      </main>

    </ScreenLayout>
  )
}