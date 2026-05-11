import ScreenLayout from '@/components/shared/ScreenLayout'
import ScreenLabel from '@/components/shared/ScreenLabel'
import { MdCamera } from "react-icons/md"
import { BsImage } from "react-icons/bs"

export default function PermissionScreen({ onAllow, onBack, onGallerySelect }) {
  return (
    <ScreenLayout hideRhombus onBack={onBack}>

      <ScreenLabel className="absolute left-8 top-20 text-[16px] font-semibold tracking-[-0.02em]">
        TO START ANALYSIS
      </ScreenLabel>

    <section className="absolute left-1/2 top-1/2 flex w-full max-w-[1700px] -translate-x-1/2 -translate-y-1/2 items-center justify-between px-[5%]">

  <div className="relative h-[482px] w-[520px] flex flex-col items-center justify-center">

    {/* RHOMBUSES */}
    <div className="absolute flex items-center justify-center">

      <div className="absolute h-[360px] w-[360px] rotate-45 border border-dashed border-black/20 animate-[spin_50s_linear_infinite]" />

      <div className="absolute h-[330px] w-[330px] rotate-[41deg] border border-dashed border-black/30 animate-[spin_60s_linear_infinite]" />

      <div className="absolute h-[300px] w-[300px] rotate-[37deg] border border-dashed border-black/40 animate-[spin_70s_linear_infinite]" />

    </div>

    {/* CAMERA ICON */}
<button
  onClick={onAllow}
  className="relative left-[-18px] flex h-[92px] w-[92px] items-center justify-center rounded-full border border-black/30 transition-all duration-500 hover:scale-110 hover:border-black"
>

  <MdCamera className="text-[72px] text-black transition-transform duration-500 hover:rotate-180" />

</button>

{/* LABEL */}
<div className="absolute left-[349px] top-[157px]">

  <div className="absolute left-[-92px] top-[16px] h-[1px] w-[104px] rotate-[-40deg] bg-black/25" />

  <p className="text-[11px] uppercase leading-[1.7] tracking-[0.08em] text-black/55 whitespace-nowrap">
    ALLOW A.I.
    <br />
    TO SCAN YOUR FACE
  </p>

</div>
</div>

      <div className="relative h-[482px] w-[520px] flex flex-col items-center justify-center">

  {/* RHOMBUSES */}
<div className="absolute flex items-center justify-center">

      <div className="absolute h-[360px] w-[360px] rotate-45 border border-dashed border-black/20 animate-[spin_50s_linear_infinite]" />

      <div className="absolute h-[330px] w-[330px] rotate-[41deg] border border-dashed border-black/30 animate-[spin_60s_linear_infinite]" />

      <div className="absolute h-[300px] w-[300px] rotate-[37deg] border border-dashed border-black/40 animate-[spin_70s_linear_infinite]" />

    </div>

 
  
{/* GALLERY ICON */}
<label className="relative right-[-18px] flex h-[92px] w-[92px] cursor-pointer items-center justify-center rounded-full border border-black/20 transition-all duration-500 hover:scale-110 hover:border-black">

  <input
    type="file"
    accept="image/*"
    className="hidden"
    onChange={onGallerySelect}
  />

  <BsImage className="text-[60px] text-black/70 transition-transform duration-500 hover:scale-110" />

</label>

{/* LABEL */}
<div className="absolute left-[69px] top-[315px]">

  <div className="absolute right-[-92px] top-[-10px] h-[1px] w-[104px] rotate-[-45deg] bg-black/25" />

  <p className="text-right text-[11px] uppercase leading-[1.7] tracking-[0.08em] text-black/45 whitespace-nowrap">
    ALLOW A.I.
    <br />
    ACCESS GALLERY
  </p>

</div>
</div>

      </section>

    </ScreenLayout>
  )
}