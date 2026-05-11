import NavigationControls from '../layout/NavigationControls'
import TopBar from '../shared/TopBar'
import LeftLines from '../layout/LeftLines'
import RightLines from '../layout/RightLines'
import ScreenContainer from '@/components/shared/ScreenContainer'

import { useState } from 'react'

export default function IntroScreen({
  onNext,
}) {
  const [hoveredSide, setHoveredSide] =
    useState(null)

  return (
    <ScreenContainer>

      <TopBar showEnterCode />

      <LeftLines hoveredSide={hoveredSide} />

      <RightLines hoveredSide={hoveredSide} />

      <section
        className="absolute top-1/2 z-10 transition-all duration-[900ms] ease-out"
        style={{ left: '50%', transform: `
            translate(
              ${ hoveredSide === 'left' ? '38%' : hoveredSide === 'right' ? '-138%' : '-50%'}, -52% )`,}}>

        <h1 className={`w-[320px] md:w-[520px] lg:w-[680px] font-[Roobert] text-[48px] md:text-[82px] lg:text-[128px] font-light leading-[52px] md:leading-[78px] lg:leading-[120px]
           tracking-[-0.07em] text-[#1A1B1C] antialiased transition-all duration-[900ms]
           ${ hoveredSide === 'right' ? 'text-left' : hoveredSide === 'left' ? 'text-right' : 'text-center' }`}>
          Sophisticated
          <br />
          skincare
        </h1>

      </section>

      <div className={`absolute left-[16px] md:left-[40px] top-[49%] z-20 translate-y-[-50%] transition-all duration-700
      ${ hoveredSide === 'right' ? 'opacity-0 -translate-x-[80px]' : 'opacity-100 translate-x-0' }`}>

        <NavigationControls
          side="left"
          onHover={() =>
            setHoveredSide('left')
          }
          onLeave={() =>
            setHoveredSide(null)
          }
        />

      </div>

      <div className={`absolute right-[16px] md:right-[40px] top-[49%] z-20 translate-y-[-50%] transition-all duration-700
      ${ hoveredSide === 'left' ? 'opacity-0 translate-x-[80px]' : 'opacity-100 translate-x-0' }`}>

        <NavigationControls
          side="right"
          onClick={onNext}
          onHover={() =>
            setHoveredSide('right')
          }
          onLeave={() =>
            setHoveredSide(null)
          }
        />

      </div>

      <div className="absolute bottom-[32px] left-[20px] md:bottom-[64px] md:left-[34px] z-10">

        <p className="w-[240px] md:w-[316px] text-[11px] md:text-[14px] font-normal uppercase leading-[18px] md:leading-[24px] tracking-[0em] text-[#1A1B1C]">
          Skinstric developed an A.I. that
          creates a highly-personalised
          routine tailored to what your
          skin needs.
        </p>

      </div>

    </ScreenContainer>
  )
}