import ScreenLayout from '@/components/shared/ScreenLayout'
import ScreenLabel from '@/components/shared/ScreenLabel'
import { useEffect } from 'react'

export default function LoadingScreen({
    onBack,
    onNext,
}) {

    useEffect(() => {

        const timer = setTimeout(() => {
            onNext()
        }, 2500)

        return () => clearTimeout(timer)

    }, [onNext])


    return (
        <ScreenLayout 
        onBack={onBack}>

            {/* LEFT LABEL */}
            <div className="fixed left-[24px] top-[170px] z-50 md:left-[32px] md:top-[130px]">

                <ScreenLabel className="text-[13px] font-semibold tracking-[-0.02em]">
                    TO START ANALYSIS
                </ScreenLabel>
            </div>

            {/* CENTER AREA */}
            <div className="flex h-full w-full items-center justify-center">

                <div className="relative z-20 flex -translate-y-[24px] flex-col items-center justify-center">
                    <p className="mb-8 text-[18px] font-light text-[#6E7485] md:text-[24px]">
                        Processing submission
                    </p>
                    {/* DOTS */}
                  <div className="flex items-center gap-4">
                        <span className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#B8B8B8]" />
                        <span
                        className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#B8B8B8]"
                        style={{ animationDelay: '0.2s' }}
                        />
                        <span
                        className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#B8B8B8]"
                        style={{ animationDelay: '0.4s' }}
                        />

                    </div>

                </div>

            </div>

        </ScreenLayout>
    )
}