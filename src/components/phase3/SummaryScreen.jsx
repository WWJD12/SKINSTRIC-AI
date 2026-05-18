'use client'

import { useState } from 'react'
import { MdPlayArrow } from 'react-icons/md'
import BackButton from '../shared/BackButton'
import TopBar from '../shared/TopBar'

export default function SummaryScreen({ analysisData, onHome, onBack }) {
    const [activeCategory, setActiveCategory] = useState('race')

    const [selectedOptions, setSelectedOptions] = useState({
        race: 0,
        age: 0,
        sex: 0,
    })

    if (!analysisData?.data) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-[#F3F3F0] px-6 text-center font-['Roobert_TRIAL']">
                <div>
                    <p className="text-[18px] text-[#1A1B1C]">
                        No summary data found.
                    </p>

                    <button
                        onClick={onBack || onHome}
                        className="mt-4 text-[14px] font-semibold uppercase underline"
                    >
                        Go back
                    </button>
                </div>
            </main>
        )
    }

    const formatOptions = (obj) =>
        Object.entries(obj)
            .map(([label, value]) => [
                label.replaceAll('_', ' '),
                `${Math.round(value * 100)}%`,
            ])
            .sort((a, b) => parseInt(b[1]) - parseInt(a[1]))

    const demographicData = {
        race: {
            subtitle: 'Race',
            options: formatOptions(analysisData.data.race),
        },
        age: {
            subtitle: 'Age',
            options: formatOptions(analysisData.data.age),
        },
        sex: {
            subtitle: 'Sex',
            options: formatOptions(analysisData.data.gender),
        },
    }

    const activeData = demographicData[activeCategory]
    const selectedOption = selectedOptions[activeCategory]
    const selectedPercentage = activeData.options[selectedOption][1]
    const percentageValue = parseInt(selectedPercentage.replace('%', ''))

    const circumference = 2 * Math.PI * 180
    const strokeDashoffset =
        circumference - (percentageValue / 100) * circumference

    const raceSelection = demographicData.race.options[selectedOptions.race][0]
    const ageSelection = demographicData.age.options[selectedOptions.age][0]
    const sexSelection = demographicData.sex.options[selectedOptions.sex][0]

    return (
        <main className="h-screen overflow-y-auto md:overflow-hidden bg-[#F3F3F0] font-['Roobert_TRIAL']">
            <TopBar />

             <div className="mx-auto w-full max-w-[1920px] px-[32px] pb-[160px] pt-[72px] md:pb-[20px] md:pt-[64px] lg:pb-[40px] lg:pt-[72px] xl:pt-[86px]">                {/* TITLE */}
                <div>
                    <p className="text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] text-[#1A1B1C]">
                        A. I. Analysis
                    </p>

                    <h1 className="mt-[4px] text-[28px] font-normal uppercase leading-[30px] tracking-[-0.06em] text-[#1A1B1C] md:text-[72px] md:leading-[48px] xl:leading-[64px]">
                        Demographics
                    </h1>

                    <p className="mt-[10px] text-[14px] font-normal uppercase leading-[24px] text-[#1A1B1C] xl:text-[16px]">
                        Predicted race & age
                    </p>
                </div>

                {/* CONTENT */}
                <div className="mt-[32px] flex flex-col gap-[14px] md:mt-[34px] md:mb-[44px] md:flex-row md:gap-[14px] lg:mt-[60px] lg:mb-0 xl:mt-[80px]">
                

                    {/* LEFT COLUMN */}
                    <div className="flex w-full shrink-0 flex-col gap-[12px] md:w-[56px] md:min-w-[56px] xl:w-[208px] xl:min-w-[208px]">


                        {[
                            {
                                key: 'race',
                                value: raceSelection,
                                subtitle: demographicData.race.subtitle,
                            },
                            {
                                key: 'age',
                                value: ageSelection,
                                subtitle: demographicData.age.subtitle,
                            },
                            {
                                key: 'sex',
                                value: sexSelection,
                                subtitle: demographicData.sex.subtitle,
                            },
                        ].map((item) => (
                            <button
                                key={item.key}
                                onClick={() => setActiveCategory(item.key)}
                                className="group text-left"
                            >
                                <div className="h-[1px] w-full bg-[#1A1B1C]/30" />

                                <div
                                    className={`flex h-[76px] w-full flex-col items-start justify-between px-[12px] py-[10px] transition-all duration-200 md:h-[96px] xl:h-[104px] ${activeCategory === item.key
                                        ? 'bg-[#1A1B1C]'
                                        : 'bg-[#E7E7E7] hover:bg-[#2A2B2D]'
                                        }`}
                                >
                                    <p
                                        className={`text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] md:text-[12px] md:leading-[18px] lg:text-[16px] lg:leading-[24px] ${activeCategory === item.key
                                            ? 'text-[#FCFCFC]'
                                            : 'text-[#1A1B1C] group-hover:text-[#FCFCFC]'
                                            }`}
                                    >
                                        {item.value}
                                    </p>

                                    <p
                                        className={`text-[16px] font-semibold uppercase leading-[24px] tracking-[-0.02em] md:text-[12px] md:leading-[18px] lg:text-[16px] lg:leading-[24px] ${activeCategory === item.key
                                            ? 'text-[#FCFCFC]'
                                            : 'text-[#1A1B1C] group-hover:text-[#FCFCFC]'
                                            }`}
                                    >
                                        {item.subtitle}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* CENTER PANEL */}
                    <div className="relative hidden min-h-[420px] flex-1 overflow-hidden border border-[#D0D0D0] bg-[#EFEFEF] md:block lg:min-h-[520px] xl:min-h-[544px]">


                        <div className="h-[1px] w-full bg-[#1A1B1C]/30" />

                        <p className="absolute left-[16px] top-[16px] text-[40px] font-normal leading-[40px] tracking-[-0.04em] text-[#1A1B1C]">
                            {activeData.options[selectedOption][0]}
                        </p>

                        <div className="absolute left-1/2 top-[56%] h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 xl:left-auto xl:right-[40px] xl:top-1/2 xl:h-[384px] xl:w-[384px] xl:translate-x-0">


                            <svg
                                className="h-full w-full -rotate-90"
                                viewBox="0 0 384 384"
                            >
                                <circle
                                    cx="192"
                                    cy="192"
                                    r="180"
                                    stroke="#D9D9D9"
                                    strokeWidth="6"
                                    fill="none"
                                />

                                <circle
                                    cx="192"
                                    cy="192"
                                    r="180"
                                    stroke="#1A1B1C"
                                    strokeWidth="6"
                                    fill="none"
                                    strokeDasharray={circumference}
                                    strokeDashoffset={strokeDashoffset}
                                    strokeLinecap="butt"
                                    className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                />
                            </svg>

                            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start">
                                <p className="text-[40px] font-normal leading-[40px] tracking-[-0.05em] text-[#1A1B1C]">
                                    {percentageValue}
                                </p>

                                <p className="ml-[2px] text-[30px] font-normal leading-[32px] tracking-[-0.05em] text-[#1A1B1C]">
                                    %
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="relative w-full bg-[#FEFEFE] md:min-h-[490px] md:w-[165px] md:shrink-0 md:border md:border-[#D0D0D0] md:bg-[#EFEFEF] lg:min-h-[520px] xl:min-h-[544px] xl:w-[448px]">




                        <div className="hidden h-[1px] w-full bg-[#1A1B1C]/30 md:block" />


                        {/* MOBILE CHART */}
                        <div className="relative mb-[18px] flex h-[348px] items-center justify-center overflow-hidden bg-[#F3F3F0] md:hidden">


                            <div className="absolute left-1/2 top-[52%] h-[276px] w-[276px] -translate-x-1/2 -translate-y-1/2">


                                <svg
                                    className="h-full w-full -rotate-90"
                                    viewBox="0 0 384 384"
                                >
                                    <circle
                                        cx="192"
                                        cy="192"
                                        r="180"
                                        stroke="#D9D9D9"
                                        strokeWidth="6"
                                        fill="none"
                                    />

                                    <circle
                                        cx="192"
                                        cy="192"
                                        r="180"
                                        stroke="#1A1B1C"
                                        strokeWidth="6"
                                        fill="none"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        strokeLinecap="butt"
                                        className="transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    />
                                </svg>

                                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start">
                                    <p className="text-[32px] font-normal leading-[32px] tracking-[-0.05em] text-[#1A1B1C]">
                                        {percentageValue}
                                    </p>

                                    <p className="ml-[2px] text-[18px] font-normal leading-[20px] tracking-[-0.05em] text-[#1A1B1C]">
                                        %
                                    </p>
                                </div>
                            </div>

                            <p className="absolute bottom-[28px] left-1/2 w-full -translate-x-1/2 px-[16px] text-center text-[12px] font-normal leading-[12px] tracking-[-0.02em] text-[#B8BDC6]">

                                If A.I. estimate is wrong, select the correct one.
                            </p>
                        </div>


                        {/* TABLE */}
                        <div className="mt-[16px] bg-[#EFEFEF] pt-[16px]">

                            <div className="flex items-center justify-between px-[24px]">
                                <p className="text-[14px] font-semibold uppercase leading-[24px] text-[#1A1B1C] xl:text-[16px]">
                                    {activeData.subtitle}
                                </p>

                                <p className="text-[14px] font-semibold uppercase leading-[24px] text-[#1A1B1C] xl:text-[16px]">
                                    A.I Confidence
                                </p>
                            </div>

                            <div className="mt-[8px] pb-[12px]">

                                {activeData.options.map(([label, value], index) => (
                                    <button
                                        key={label}
                                        onClick={() =>
                                            setSelectedOptions({
                                                ...selectedOptions,
                                                [activeCategory]: index,
                                            })
                                        }
                                        className={`flex h-[44px] w-full items-center transition-colors duration-150 ${selectedOption === index
                                            ? 'bg-[#1A1B1C]'
                                            : 'hover:bg-black/5'
                                            }`}
                                    >
                                        <div
                                            className={`relative ml-[24px] h-[12px] w-[12px] rotate-45 border ${selectedOption === index
                                                ? 'border-[#FCFCFC]'
                                                : 'border-[#1A1B1C]'
                                                }`}
                                        >
                                            {selectedOption === index && (
                                                <svg
                                                    className="absolute left-[3px] top-[4px] -rotate-45"
                                                    width="3"
                                                    height="3"
                                                    viewBox="0 0 3 3"
                                                    fill="none"
                                                >
                                                    <polygon points="0,1.5 3,0 3,3" fill="#FCFCFC" />
                                                </svg>
                                            )}
                                        </div>

                                        <p
                                            className={`ml-[12px] min-w-0 flex-1 truncate text-left text-[12px] lg:ml-[18px] lg:text-[16px]
                                             ${selectedOption === index
                                                    ? 'text-[#FCFCFC]'
                                                    : 'text-[#1A1B1C]'
                                                }`}
                                        >
                                            {label}
                                        </p>

                                        <p
                                            className={`ml-[8px] mr-[10px] shrink-0 text-[12px] lg:ml-[12px] lg:mr-[18px] lg:text-[16px] ${selectedOption === index
                                                ? 'text-[#FCFCFC]'
                                                : 'text-[#1A1B1C]'
                                                }`}
                                        >
                                            {value}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <p className="mt-[18px] hidden text-center text-[16px] font-normal leading-[16px] tracking-[-0.02em] text-[#B8BDC6] md:block">
                    If A.I. estimate is wrong, select the correct one.
                </p>
                {/* NAV */}
                <div className="fixed bottom-[72px] left-0 right-0 z-50 flex justify-between px-[52px] md:static md:mt-[12px] md:px-[28px] lg:fixed lg:bottom-[38px] lg:mt-0 lg:px-[42px] xl:bottom-[34px] xl:px-[52px]">
  <div>
    <BackButton onClick={onBack} />
  </div>

  <button
    onClick={onHome}
    className="flex items-center gap-[12px]"
  >
    <span className="text-[14px] font-semibold uppercase leading-[16px] tracking-[0em] text-[#1A1B1C]">
      Home
    </span>

    <div className="flex h-[44px] w-[44px] rotate-45 items-center justify-center border border-[#1A1B1C] bg-[#F3F3F0]">
      <MdPlayArrow className="h-[24px] w-[24px] -rotate-45 text-[#1A1B1C]" />
    </div>
  </button>
</div>
            </div>

        </main>
    )
}
