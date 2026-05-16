import ScreenLayout from '@/components/shared/ScreenLayout'
import ScreenLabel from '@/components/shared/ScreenLabel'
import { MdImage, MdOutlineCamera } from 'react-icons/md'
import { useState } from 'react'

function RhombusSet() {
  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rotate-45 animate-[spin_50s_linear_infinite] border border-dashed border-black/20 md:h-[340px] md:w-[340px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[166px] w-[166px] -translate-x-1/2 -translate-y-1/2 rotate-[41deg] animate-[spin_60s_linear_infinite] border border-dashed border-black/30 md:h-[310px] md:w-[310px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[142px] w-[142px] -translate-x-1/2 -translate-y-1/2 rotate-[37deg] animate-[spin_70s_linear_infinite] border border-dashed border-black/40 md:h-[280px] md:w-[280px]" />
    </>
  )
}

function CameraChoice({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-[250px] w-[260px] flex-col items-center justify-center md:absolute md:left-[12px] md:top-1/2 md:h-[420px] md:w-[330px] md:-translate-y-1/2"
    >
      <RhombusSet />

      <div className="relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-full border border-black/30 bg-[#FDFDFB] md:h-[96px] md:w-[96px]">
        <MdOutlineCamera className="text-[76px] text-black md:text-[92px]" />
      </div>

      <div className="absolute right-[10px] top-[154px] z-20 hidden md:block">
        <div className="absolute left-[-74px] top-[18px] h-[1px] w-[96px] -rotate-45 bg-black/45" />
        <div className="absolute left-[5px] top-[-15px] h-[5px] w-[5px] rounded-full border border-black/60 bg-[#FDFDFB]" />

        <p className="w-[150px] text-left font-['Roobert_TRIAL'] text-[12px] uppercase leading-[20px] tracking-[0.05em] text-black/70">
          ALLOW A.I.
          <br />
          TO SCAN YOUR FACE
        </p>
      </div>

      <p className="relative z-10 mt-[28px] whitespace-nowrap text-center font-['Roobert_TRIAL'] text-[12px] uppercase leading-[20px] tracking-[0.05em] text-black/70 md:hidden">
        ALLOW A.I.
        <br />
        TO SCAN YOUR FACE
      </p>
    </button>
  )
}

function GalleryChoice({ onChange }) {
  return (
    <label className="relative flex h-[250px] w-[260px] cursor-pointer flex-col items-center justify-center md:absolute md:right-[12px] md:top-1/2 md:h-[420px] md:w-[330px] md:-translate-y-1/2">
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onChange}
      />

      <RhombusSet />

      <div className="relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-full border border-black/30 bg-[#FDFDFB] md:h-[96px] md:w-[96px]">
        <MdImage className="text-[66px] text-black/85 md:text-[78px]" />
      </div>

      <div className="absolute left-[10px] top-[260px] z-20 hidden md:block">
        <div className="absolute right-[-74px] top-[7px] h-[1px] w-[96px] -rotate-45 bg-black/45" />
        <div className="absolute right-[5px] top-[-25px] h-[5px] w-[5px] rounded-full border border-black/60 bg-[#FDFDFB]" />

        <p className="w-[150px] text-right font-['Roobert_TRIAL'] text-[12px] uppercase leading-[20px] tracking-[0.05em] text-black/70">
          ALLOW A.I.
          <br />
          ACCESS GALLERY
        </p>
      </div>

      <p className="relative z-10 mt-[28px] whitespace-nowrap text-center font-['Roobert_TRIAL'] text-[12px] uppercase leading-[20px] tracking-[0.05em] text-black/70 md:hidden">
        ALLOW A.I.
        <br />
        ACCESS GALLERY
      </p>
    </label>
  )
}

export default function PermissionScreen({ onAllow, onBack, onGallerySelect }) {
  const [showPermission, setShowPermission] = useState(false)

  return (
    <ScreenLayout hideRhombus onBack={onBack}>
      <div className="fixed left-[24px] top-[70px] z-50 md:left-[32px]">
        <ScreenLabel className="text-[13px] font-semibold tracking-[-0.02em] md:text-[16px]">
          TO START ANALYSIS
        </ScreenLabel>
      </div>

      <section className="absolute left-1/2 top-1/2 z-10 flex w-full max-w-[calc(100vw-48px)] -translate-x-1/2 -translate-y-[46%] flex-col items-center gap-[28px] md:block md:h-[460px] md:max-w-[760px]">
        <CameraChoice onClick={() => setShowPermission(true)} />
        <GalleryChoice onChange={onGallerySelect} />
      </section>

      <div className="fixed right-[28px] top-[196px] z-[9999] md:right-[56px] md:top-[150px]">
        <p className="mb-2 font-['Roobert_TRIAL'] text-[14px] text-black/70">
          Preview
        </p>

        <div className="h-[96px] w-[96px] border border-black/15 bg-transparent md:h-[120px] md:w-[120px]" />
      </div>

      {showPermission && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/10 px-6">
          <div className="relative h-[130px] w-full max-w-[370px] bg-[#101113] text-white">
            <p className="absolute left-[16px] top-[16px] font-['Roobert_TRIAL'] text-[16px] font-semibold uppercase tracking-[0em] text-white">
              ALLOW A.I TO ACCESS YOUR CAMERA
            </p>

            <div className="absolute bottom-[32px] left-0 h-px w-full bg-white" />

            <button
              onClick={() => setShowPermission(false)}
              className="absolute bottom-[10px] right-[72px] font-['Roobert_TRIAL'] text-[9px] font-medium uppercase tracking-[0em] text-white/78"
            >
              DENY
            </button>

            <button
              onClick={() => {
                setShowPermission(false)
                onAllow()
              }}
              className="absolute bottom-[10px] right-[18px] font-['Roobert_TRIAL'] text-[9px] font-semibold uppercase tracking-[0em] text-white"
            >
              ALLOW
            </button>
          </div>
        </div>
      )}
    </ScreenLayout>
  )
}
