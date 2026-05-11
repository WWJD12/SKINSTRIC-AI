export default function ScreenLabel({
  children,
  className = '',
}) {
  return (
    <p className={`font-[Roobert] uppercase text-[#1A1B1C] ${className}`}>
      {children}
    </p>
  )
}