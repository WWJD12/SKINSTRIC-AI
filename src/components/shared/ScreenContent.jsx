export default function ScreenContent({
  children,
  className = '',
}) {
  return (
    <section
      className={`absolute left-1/2 top-1/2 z-10 flex w-full max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center px-6 text-center ${className}`}
    >
      {children}
    </section>
  )
}