"use client"

import { useEffect, useRef, useState } from "react"
import ScreenLayout from '@/components/shared/ScreenLayout'
import BackButton from "../shared/BackButton"


export default function CameraScreen({ onCapture, onBack, }) {
 
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const [cameraReady, setCameraReady] = useState(false)

  useEffect(() => {
    let stream

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }

      } catch (err) {
        console.error("Camera error:", err)
      }
    }

    startCamera()

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) =>
          track.stop()
        )
      }
    }
  }, [])

  const handleCapture = () => {
    const video = videoRef.current
    const canvas = canvasRef.current

    if (!video || !canvas) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    const ctx = canvas.getContext("2d")

    ctx.drawImage(video, 0, 0)

    const image = canvas.toDataURL("image/png")

    console.log("Captured image:", image)

    onCapture(image)
  }

  return (
    <ScreenLayout
      dark
      onBack={onBack}
    >

      {/* CAMERA VIDEO */}
      <div className="absolute inset-0">

        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          onLoadedMetadata={() => {
            setCameraReady(true)
          }}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            cameraReady ? "opacity-100" : "opacity-0"
          }`}
        />

      </div>

      {/* LOADING */}
      {!cameraReady && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">

          <p className="text-sm uppercase tracking-[0.3em] text-white/70">
            Initializing Camera...
          </p>

        </div>
      )}

      {/* DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-black/30" />

      {/* SCAN LINE */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden opacity-30">

        <div className="absolute top-0 h-[1px] w-full animate-scan bg-white/40" />

      </div>

      {/* INSTRUCTION PANEL */}
      <div className="absolute bottom-28 left-1/2 z-30 flex w-full -translate-x-1/2 flex-col items-center px-6 text-white">

        <p className="mb-4 text-center text-[12px] uppercase tracking-[0.08em] text-white">
          TO GET BETTER RESULTS MAKE SURE TO HAVE
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">

          {/* NEUTRAL */}
          <div className="flex items-center gap-2">

            <div className="h-[8px] w-[8px] rotate-45 border border-white" />

            <p className="text-[12px] uppercase text-white">
              Neutral Expression
            </p>

          </div>

          {/* FRONTAL */}
          <div className="flex items-center gap-2">

            <div className="h-[8px] w-[8px] rotate-45 border border-white" />

            <p className="text-[12px] uppercase text-white">
              Frontal Pose
            </p>

          </div>

          {/* LIGHTING */}
          <div className="flex items-center gap-2">

            <div className="h-[8px] w-[8px] rotate-45 border border-white" />

            <p className="text-[12px] uppercase text-white">
              Adequate Lighting
            </p>

          </div>

        </div>

      </div>

      {/* TAKE PICTURE BUTTON */}
<div className="absolute right-8 top-1/2 z-40 -translate-y-1/2 md:right-14">

  <button
    onClick={handleCapture}
    className="group flex items-center gap-4"
  >

    {/* TEXT */}
    <p className="text-[14px] font-semibold uppercase tracking-[-0.02em] text-white/70 transition-all duration-300 group-hover:text-white">
      take picture
    </p>

    {/* BUTTON */}
<div className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full border-2 border-white/70 transition-all duration-300 group-hover:scale-110 group-hover:border-white">

      {/* INNER CIRCLE */}
      <div className="absolute h-[55px] w-[55px] rounded-full bg-white" />

      {/* CAMERA ICON */}
       <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#A0A4AB"
    strokeWidth="1.5"
    className="relative z-10 h-[26px] w-[26px]"
  >
       <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7.5A2.25 2.25 0 015.25 5.25h2.379a1.5 1.5 0 001.06-.44l.621-.62a1.5 1.5 0 011.06-.44h3.258a1.5 1.5 0 011.06.44l.62.62a1.5 1.5 0 001.061.44h2.379A2.25 2.25 0 0121 7.5v9.25A2.25 2.25 0 0118.75 19H5.25A2.25 2.25 0 013 16.75V7.5z"
    />

        <circle
          cx="12"
          cy="12"
          r="3.5"
        />
      </svg>

    </div>

  </button>

</div>

      {/* HIDDEN CANVAS */}
      <canvas
        ref={canvasRef}
        className="hidden"
      />
   <BackButton
   dark
     onClick={onBack} 
   />
  
    </ScreenLayout>
  )
}