'use client'

import Link from 'next/link'
import { useState } from 'react'
import BackButton from '../shared/BackButton'

export default function SkinProfileScreen() {
  const [active, setActive] = useState(null)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F3F3F0]">

      {/* HEADER */}
      <header className="absolute left-[32px] top-[23px] z-20 flex h-[64px] w-[1024px] items-start">

        <div className="flex items-center gap-[6px] opacity-60">

          <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
            Skinstric
          </p>

          <div className="h-[17px] w-[4px] rounded-[2px] border border-[#1A1B1C]" />

          <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
            Analysis
          </p>

          <div className="h-[17px] w-[4px] rotate-180 rounded-[2px] border border-[#1A1B1C]" />

        </div>

      </header>

      {/* LEFT CONTENT */}
      <div className="absolute left-[32px] top-[86px] z-10 flex flex-col items-start">

        <p className="font-[Roobert] text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
          A. I. Analysis
        </p>

        <p className="mt-2 max-w-[336px] text-left font-[Roobert] text-[14px] font-normal uppercase leading-[24px] text-[#1A1B1C]">
          A. I. has estimated the following.
          <br />
          Fix estimated information if needed.
        </p>

      </div>

      {/* CENTER AREA */}
      <div className="absolute left-1/2 top-1/2 h-[762px] w-[762px] -translate-x-1/2 -translate-y-1/2">

        {/* HOVER RHOMBUS */}
          {active === 'demographics' && (
            <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dashed border-[#A0A4AB]/50" />
          )}

          {(active === 'cosmetic' || active === 'skin') && (
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dashed border-[#A0A4AB]/20" />
          )}

          {active === 'weather' && (
            <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dashed border-[#A0A4AB]/40" />
          )}

        {/* DIAMOND GROUP */}
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2">

          {/* TOP */}
          <Link
            href="/demographics"
            onMouseEnter={() => setActive('demographics')}
            onMouseLeave={() => setActive(null)}
            className="absolute left-1/2 top-0 -translate-x-1/2"
          >
            <div
              className={`flex h-[153.88px] w-[153.88px] rotate-[-45deg] items-center justify-center border border-[#FCFCFC] transition-all duration-300 ${
                active === 'demographics'
                  ? 'bg-[#C9CED6]'
                  : 'bg-[#E1E1E2]'
              }`}
            >

              <p className="rotate-[45deg] text-center font-[Roobert] text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
                Demographics
              </p>

            </div>
          </Link>

          {/* RIGHT */}
          <div
            onMouseEnter={() => setActive('cosmetic')}
            onMouseLeave={() => setActive(null)}
            className="absolute right-0 top-1/2 -translate-y-1/2"
          >
            <div
              className={`flex h-[153.88px] w-[153.88px] rotate-[-45deg] items-center justify-center border border-[#FCFCFC] transition-all duration-300 ${
                active === 'cosmetic'
                  ? 'bg-[#C9CED6]'
                  : 'bg-[#F3F3F4]'
              }`}
            >

              <p className="rotate-[45deg] text-center font-[Roobert] text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
                Cosmetic
                <br />
                Concerns
              </p>

            </div>
          </div>

          {/* BOTTOM */}
          <div
            onMouseEnter={() => setActive('weather')}
            onMouseLeave={() => setActive(null)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
          >
            <div
              className={`flex h-[153.88px] w-[153.88px] rotate-[-45deg] items-center justify-center border border-[#FCFCFC] transition-all duration-300 ${
                active === 'weather'
                  ? 'bg-[#C9CED6]'
                  : 'bg-[#F3F3F4]'
              }`}
            >

              <p className="rotate-[45deg] text-center font-[Roobert] text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
                Weather
              </p>

            </div>
          </div>

          {/* LEFT */}
          <div
            onMouseEnter={() => setActive('skin')}
            onMouseLeave={() => setActive(null)}
            className="absolute left-0 top-1/2 -translate-y-1/2"
          >
            <div
              className={`flex h-[153.88px] w-[153.88px] rotate-[-45deg] items-center justify-center border border-[#FCFCFC] transition-all duration-300 ${
                active === 'skin'
                  ? 'bg-[#C9CED6]'
                  : 'bg-[#F3F3F4]'
              }`}
            >

              <p className="rotate-[45deg] text-center font-[Roobert] text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
                Skin Type
                <br />
                Details
              </p>

            </div>
          </div>

        </div>

      </div>

      {/* GET SUMMARY */}
      <Link 
      href="/summary"
      className="absolute bottom-[32px] right-[32px] flex items-center gap-[16px]">

        <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
          Get Summary
        </p>

        <div className="flex h-[44px] w-[44px] rotate-45 items-center justify-center border border-[#1A1B1C]">

          <span className="-rotate-45">
            <span className="block h-[8px] w-[8px] rotate-45 border-r-[4px] border-t-[4px] border-[#1A1B1C]" />
          </span>

        </div>

      </Link>

      <BackButton />

    </main>
  )
}