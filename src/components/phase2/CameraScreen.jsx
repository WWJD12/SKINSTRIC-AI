"use client"

import { useEffect, useRef, useState } from "react"
import ScreenLayout from '@/components/shared/ScreenLayout'
import BackButton from "../shared/BackButton"


export default function CameraScreen({ onCapture, onBack, }) {

  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const streamRef = useRef(null)

  const [cameraReady, setCameraReady] = useState(false)
  const [previewImage, setPreviewImage] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  useEffect(() => {
    let stream

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        })

        streamRef.current = stream

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
    setPreviewImage(image)

    fetch(
      'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        window.analysisResult = data
      })
      .catch((err) => {
        console.error(err)
      })

    console.log("Captured image:", image)

  }

  return (
    <ScreenLayout
      dark
      hideRhombus
      onBack={onBack}
    >
      <div className="relative h-screen w-screen overflow-hidden bg-black">

        {/* CAMERA VIDEO */}
        <div className="absolute inset-0 z-0">

          {!previewImage ? (
            <video
              key={previewImage ? "preview" : "live"}
              ref={videoRef}
              autoPlay
              playsInline
              muted
              onLoadedMetadata={() => {
                setCameraReady(true)
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                cameraReady ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <img
              src={previewImage}
              alt="Preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

        </div>

        {/* LOADING */}
        {!cameraReady && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black">

            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Initializing Camera...
            </p>

          </div>
        )}

        {!previewImage && (
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
        )}

        {/* TAKE PICTURE BUTTON */}
        {!previewImage && (

          <div className="absolute right-[48px] top-1/2 z-40 -translate-y-1/2">

            <button
              onClick={handleCapture}
              className="flex items-center gap-3"
            >

              {/* TEXT */}
              <span className="mr-3 font-['Roobert_TRIAL'] text-[12px] font-medium uppercase tracking-[-0.02em] text-white">
                TAKE PICTURE
              </span>

              {/* CAMERA BUTTON */}
              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white bg-white/90">

                {/* CAMERA ICON */}
                <div className="flex h-[18px] w-[18px] items-center justify-center rounded-md border border-[#999]">

                  <div className="h-[8px] w-[8px] rounded-full border border-[#999]" />

                </div>

              </div>

            </button>

          </div>

        )}

        {previewImage && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-white">

            {/* TOP TEXT */}
            <p className="absolute top-[28%] font-['Roobert_TRIAL'] text-[15px] font-medium uppercase tracking-[-0.02em]">
              Great Shot!
            </p>

            {/* BOTTOM PANEL */}
            <div className="absolute bottom-24 flex flex-col items-center gap-5">

              <p className="font-['Roobert_TRIAL'] text-[18px] font-medium tracking-[-0.03em]">
                Preview
              </p>

              <div className="flex items-center gap-2">

                {/* RETAKE */}
                <button
                  onClick={() => {
                    setPreviewImage(null)

                    setTimeout(() => {
                      if (videoRef.current && streamRef.current) {
                        videoRef.current.srcObject = streamRef.current

                        videoRef.current.play()
                      }
                    }, 100)
                  }}
                  className="border border-white bg-white px-5 py-[6px] font-['Roobert_TRIAL'] text-[12px] font-medium uppercase tracking-[-0.02em] text-black transition-opacity hover:opacity-80"
                >
                  Retake
                </button>

                {/* USE PHOTO */}
                <button
                  onClick={() => {
                    setIsAnalyzing(true)

                    setTimeout(() => {
                      onCapture(window.analysisResult)
                    }, 300)
                  }}
                  className="border border-black bg-black px-5 py-[6px] font-['Roobert_TRIAL'] text-[12px] font-medium uppercase tracking-[-0.02em] text-white transition-opacity hover:opacity-80"
                >
                  Use This Photo
                </button>

              </div>

            </div>

          </div>
        )}

        {isAnalyzing && (
          <div className="absolute inset-0 z-[90] bg-black/20">

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="flex flex-col items-center gap-6 text-white">

                <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-5 backdrop-blur-md">
                  <p className="text-[14px] uppercase tracking-[0.3em] text-white">
                    Analyzing Image...
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* HIDDEN CANVAS */}
        <canvas
          ref={canvasRef}
          className="hidden"
        />

      </div>
    </ScreenLayout>
  )
}