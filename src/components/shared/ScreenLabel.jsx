export default function ScreenLabel({
  children,
  className = '',
}) {
  return (
    <p className={`font-['Roobert_TRIAL'] uppercase text-[#1A1B1C] ${className}`}>
      {children}
    </p>
  )
}