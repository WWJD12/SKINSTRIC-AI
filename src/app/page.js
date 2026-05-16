'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

import IntroScreen from '@/components/phase1/IntroScreen'
import NameScreen from '@/components/phase1/NameScreen'
import LocationScreen from '@/components/phase1/LocationScreen'
import ConfirmationScreen from '@/components/phase1/ConfirmationScreen'
import LoadingScreen from '@/components/phase2/LoadingScreen'

import PermissionScreen from '@/components/phase2/PermissionScreen'
import CameraSetupScreen from '@/components/phase2/CameraSetupScreen'
import CameraScreen from '@/components/phase2/CameraScreen'

import AnalysisProcessingScreen from '@/components/phase3/AnalysisProcessingScreen'
import SkinProfileScreen from '@/components/phase3/SkinProfileScreen'
import SummaryScreen from '@/components/phase3/SummaryScreen'

export default function Home() {

  const [screen, setScreen] = useState('intro')

  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const [analysisData, setAnalysisData] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedAnalysisData = localStorage.getItem('analysisData')

      if (savedAnalysisData) {
        return JSON.parse(savedAnalysisData)
      }
    }

    return null
  })


  const [name, setName] = useState(() => {

    if (typeof window !== 'undefined') {
      return localStorage.getItem('name') || ''
    }

    return ''

  })

  const [location, setLocation] = useState(() => {

    if (typeof window !== 'undefined') {
      return localStorage.getItem('location') || ''
    }

    return ''

  })

  useEffect(() => {

    localStorage.setItem('name', name)

  }, [name])

  useEffect(() => {

    localStorage.setItem('location', location)

  }, [location])

  useEffect(() => {
    if (analysisData) {
      localStorage.setItem('analysisData', JSON.stringify(analysisData))
    }
  }, [analysisData])


  const submitData = async () => {

    try {

      setLoading(true)

      setError('')

      const response = await fetch(
        'https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            name,
            location,
          }),
        }
      )

      if (!response.ok) {
        throw new Error('Something went wrong')
      }

      const data = await response.json()

      console.log(data)

      setScreen('loading')

    } catch (err) {

      console.error(err)

      setError('Failed to submit data.')

    } finally {

      setLoading(false)

    }
  }

  return (

    <main className="relative h-screen overflow-hidden bg-[#FDFDFB]">

      <AnimatePresence mode="wait">

        <div className="absolute inset-0">

          {screen === 'intro' && (
            <IntroScreen
              onNext={() => setScreen('name')}
            />
          )}

          {screen === 'name' && (
            <NameScreen
              name={name}
              setName={setName}
              onNext={() => setScreen('location')}
              onBack={() => setScreen('intro')}
            />
          )}

          {screen === 'location' && (
            <LocationScreen
              location={location}
              setLocation={setLocation}
              onNext={submitData}
              onBack={() => setScreen('name')}
              loading={loading}
              error={error}
            />
          )}

          {screen === 'loading' && (
            <LoadingScreen
              onBack={() => setScreen('location')}
              onNext={() => setScreen('confirmation')}
            />
          )}

          {screen === 'confirmation' && (
            <ConfirmationScreen
              name={name}
              onNext={() => setScreen('permission')}
              onBack={() => setScreen('location')}
            />
          )}

          {screen === 'permission' && (
            <PermissionScreen
              onAllow={() => {

                setScreen('camera-setup')

                setTimeout(() => {
                  setScreen('camera')
                }, 3000)

              }}

              onBack={() => setScreen('confirmation')}
            />
          )}

          {screen === 'camera-setup' && (
            <CameraSetupScreen />
          )}

          {screen === 'camera' && (
            <CameraScreen

              onBack={() => {
                setScreen('permission')
              }}

              onCapture={(data) => {
                setAnalysisData(data)
                localStorage.setItem('analysisData', JSON.stringify(data))

                setTimeout(() => {
                  setScreen('profile')
                }, 4000)
              }}

            />
          )}

          {screen === 'profile' && (
            <SkinProfileScreen
              analysisData={analysisData}
              onNext={() => setScreen('summary')}
              onDemographics={() => setScreen('summary')}
              onBack={() => setScreen('camera')}
            />
          )}

          {screen === 'summary' && (
            <SummaryScreen
              analysisData={analysisData}
              onHome={() => setScreen('intro')}
              onBack={() => setScreen('profile')}
            />
          )}

        </div>

      </AnimatePresence>

    </main>

  )
}