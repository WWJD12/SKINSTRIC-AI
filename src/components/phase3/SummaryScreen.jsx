'use client'

import BackButton from '../shared/BackButton'

export default function SummaryScreen() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F3F3F0]">

      {/* TOP BAR */}
      <header className="absolute left-0 top-0 z-20 h-[64px] w-[1920px]">

        <div className="ml-[32px] mt-[23px] flex items-center gap-[6px] opacity-60">

         <p className="left-[32px] top-[23px] font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-black">
            Skinstric
            </p>

          <div className="h-[17px] w-[4px] rounded-[2px] border border-[#1A1B1C]" />

          <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
            Analysis
          </p>

          <div className="h-[17px] w-[4px] scale-x-[-1] rounded-[2px] border border-[#1A1B1C]" />

        </div>
        <button className="absolute left-[1808px] top-[15px] flex h-[32px] items-center gap-[8px] px-[16px] py-[8px]">
            
        </button>

      </header>

      {/* TITLE */}
      <div className="absolute left-[32px] top-[86px]">

        <p className="font-[Roobert] text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
          A. I. Analysis
        </p>

        <h1 className="mt-[2px] font-[Roobert] text-[64px] font-normal uppercase leading-[64px] tracking-[-0.06em] text-[#1A1B1C]">
          Demographics
        </h1>

        <p className="mt-[6px] font-[Roobert] text-[12px] uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]/60">
          Predicted race & age
        </p>

      </div>

      {/* MAIN PANEL */}
      <div className="absolute left-[32px] top-[280px] flex">

        {/* LEFT INFO */}
<div className="flex flex-col">

  {/* RACE */}
  <div className="flex h-[104px] w-[208px] flex-col justify-between bg-[#1A1B1C] px-[16px] py-[12px]">

    <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#F3F3F0]">
      East Asian
    </p>

    <p className="font-[Roobert] text-[14px] uppercase leading-[16px] tracking-[-0.02em] text-[#F3F3F0]">
      Race
    </p>

  </div>

  {/* AGE */}
  <div className="mt-[2px] flex h-[104px] w-[208px] flex-col justify-between bg-[#D9D9D9] px-[16px] py-[12px]">

    <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
      20-29
    </p>

    <p className="font-[Roobert] text-[14px] uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
      Age
    </p>

  </div>

  {/* SEX */}
  <div className="mt-[2px] flex h-[104px] w-[208px] flex-col justify-between bg-[#E7E7E7] px-[16px] py-[12px]">

    <p className="font-[Roobert] text-[14px] font-semibold uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
      Female
    </p>

    <p className="font-[Roobert] text-[14px] uppercase leading-[16px] tracking-[-0.02em] text-[#1A1B1C]">
      Sex
    </p>

  </div>

</div>
        {/* CENTER PANEL */}
        <div className="ml-[8px] h-[544px] w-[1200px] border border-[#D0D0D0] bg-[#EFEFEF]">

          <p className="ml-[16px] mt-[16px] font-[Roobert] text-[40px] tracking-[-0.04em] text-[#1A1B1C]">
            East asian
          </p>

        </div>

        {/* RIGHT PANEL */}
        <div className="ml-[8px] h-[544px] w-[454px] border border-[#D0D0D0] bg-[#EFEFEF]" />

      </div>

      {/* FOOTER */}
      <p className="absolute bottom-[32px] left-1/2 -translate-x-1/2 font-[Roobert] text-[10px] uppercase tracking-[-0.02em] text-[#1A1B1C]/40">
        If A.I. estimate is wrong, select the correct one.
      </p>

      {/* BUTTONS */}
      <div className="absolute bottom-[24px] right-[32px] flex items-center gap-[8px]">

        <button className="flex h-[35px] items-center justify-center border border-[#1A1B1C] px-[16px] font-[Roobert] text-[14px] font-semibold uppercase tracking-[-0.02em] text-[#1A1B1C]">
          Reset
        </button>

        <button className="flex h-[35px] items-center justify-center bg-[#1A1B1C] px-[16px] font-[Roobert] text-[14px] font-semibold uppercase tracking-[-0.02em] text-[#F3F3F0]">
          Confirm
        </button>

      </div>

      <BackButton />

    </main>
  )
}