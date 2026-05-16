export default function ScreenContent({
  children,
  className = '',
}) {
  return (
    <section
      className={`absolute inset-0 z-10 flex items-center justify-center ${className}`}
    >
      <div className="flex w-full max-w-[700px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  )
}