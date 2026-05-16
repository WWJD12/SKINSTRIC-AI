export default function ScreenContainer({
  children,
  className = '',
  allowScroll = true,
}) {
  return (
    <section
      className={`relative min-h-screen w-full bg-[#FDFDFB] ${
        allowScroll ? 'overflow-x-hidden' : 'overflow-hidden'
      } ${className}`}
    >
      {children}
    </section>
  )
}
