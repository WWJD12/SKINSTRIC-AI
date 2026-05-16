import TopBar from './TopBar'
import CenterRhombus from '../layout/CenterRhombus'
import BackButton from './BackButton'
import ScreenContainer from './ScreenContainer'

export default function ScreenLayout({
  children,
  onBack,
  hideRhombus = false,
  dark = false,
  allowScroll = false,
}) {
  return (
    <ScreenContainer allowScroll={allowScroll}>
      <TopBar dark={dark} />

      <div className="absolute inset-0 flex items-center justify-center px-6 py-24">
        {!hideRhombus && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <CenterRhombus dark={dark} />
          </div>
        )}

        <div className="relative z-20 flex max-w-full items-center justify-center">
          {children}
        </div>
      </div>

      {onBack && (
        <div className="absolute bottom-[32px] left-[24px] z-50 md:bottom-[40px] md:left-[32px]">
          <BackButton onClick={onBack} dark={dark} />
        </div>
      )}
    </ScreenContainer>
  )
}
