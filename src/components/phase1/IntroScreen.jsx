import { useEffect, useState } from 'react'

import NavigationControls from '../layout/NavigationControls'
import TopBar from '../shared/TopBar'
import LeftLines from '../layout/LeftLines'
import RightLines from '../layout/RightLines'
import ScreenContainer from '@/components/shared/ScreenContainer'
import { MdPlayArrow } from 'react-icons/md'

export default function IntroScreen({ onNext }) {
  const [hoveredSide, setHoveredSide] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 80)

    return () => clearTimeout(timer)
  }, [])

  return (
    <ScreenContainer>
      <TopBar showEnterCode />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#1A1B1C]/10 md:h-[520px] md:w-[520px] lg:hidden" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[276px] w-[276px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#1A1B1C]/10 md:h-[430px] md:w-[430px] lg:hidden" />



      <div className="pointer-events-none absolute inset-0 z-[5] hidden lg:block">
        <LeftLines hoveredSide={hoveredSide} />
        <RightLines hoveredSide={hoveredSide} />
      </div>


      <section
        className={`absolute left-1/2 top-1/2 z-10 flex w-full max-w-[560px] flex-col items-center px-6 text-center transition-all duration-[1200ms] ease-out lg:block lg:max-w-none lg:px-0 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}

        style={{
          transform:
            typeof window !== 'undefined' && window.innerWidth < 1024
              ? 'translate(-50%, -48%)'
              : `translate(${hoveredSide === 'left'
                ? '-32%'
                : hoveredSide === 'right'
                  ? '-68%'
                  : '-50%'
              }, -48%)`,
        }}
      >
        <h1
          className={`mx-auto w-full font-['Roobert_TRIAL'] text-[48px] font-light leading-[48px] tracking-[-0.07em] text-[#1A1B1C] antialiased transition-all duration-[900ms] md:w-[460px] md:text-[64px] md:leading-[62px] lg:w-[680px] lg:text-[108px] lg:leading-[108px] ${hoveredSide === 'right'
              ? 'lg:text-left'
              : hoveredSide === 'left'
                ? 'lg:text-right'
                : 'text-center'
            }`}
        >

          Sophisticated
          <br />
          skincare
        </h1>

        <p className="mx-auto mt-[18px] w-[260px] font-['Roobert_TRIAL'] text-[11px] font-semibold uppercase leading-[18px] tracking-[0em] text-[#1A1B1C] lg:hidden">
          Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
        </p>

        <button
          onClick={onNext}
          className="mx-auto mt-[18px] flex items-center gap-[10px] lg:hidden"

        >
          <span className="font-['Roobert_TRIAL'] text-[11px] font-semibold uppercase leading-[16px] text-[#1A1B1C]">
            Enter experience
          </span>

          <div className="flex h-[28px] w-[28px] rotate-45 items-center justify-center border border-[#1A1B1C]">
            <MdPlayArrow className="h-[18px] w-[18px] -rotate-45 text-[#1A1B1C]" />
          </div>
        </button>
      </section>

      <div
        className={`absolute left-[16px] top-[49%] z-20 hidden translate-y-[-50%] transition-all duration-700 lg:block lg:left-[52px] ${hoveredSide === 'right'
          ? 'opacity-0 -translate-x-[80px]'
          : 'translate-x-0 opacity-100'
          }`}
      >
        <NavigationControls
          side="left"
          onHover={() => setHoveredSide('left')}
          onLeave={() => setHoveredSide(null)}
        />
      </div>

      <div
        className={`absolute right-[16px] top-[49%] z-20 hidden translate-y-[-50%] transition-all duration-700 lg:block lg:right-[52px] ${hoveredSide === 'left'
          ? 'translate-x-[80px] opacity-0'
          : 'translate-x-0 opacity-100'
          }`}
      >
        <NavigationControls
          side="right"
          onClick={onNext}
          onHover={() => setHoveredSide('right')}
          onLeave={() => setHoveredSide(null)}
        />
      </div>

      <div className="absolute bottom-[32px] left-[20px] z-10 hidden lg:bottom-[52px] lg:left-[34px] lg:block">

        <p className="w-[260px] font-['Roobert_TRIAL'] text-[14px] uppercase leading-[24px] tracking-[0em] text-[#1A1B1C]">
          Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
        </p>
      </div>
    </ScreenContainer>
  )
}
