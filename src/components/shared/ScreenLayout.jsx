import TopBar from './TopBar'
import CenterRhombus from '../layout/CenterRhombus'
import BackButton from './BackButton'
import ScreenContainer from './ScreenContainer'

export default function ScreenLayout({
  children,
  onBack,
  hideRhombus = false,
  dark = false,
}) {
  return (
    <ScreenContainer>

      <TopBar dark={dark} />

      {!hideRhombus && <CenterRhombus dark={dark} />}

     {onBack && (
  <div className="relative z-[9999]">

    <BackButton
      onClick={onBack}
      dark={dark}
    />

  </div>
)}

      {children}

    </ScreenContainer>
  )
}