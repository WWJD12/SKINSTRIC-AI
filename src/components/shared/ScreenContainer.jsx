export default function ScreenContainer({ children, className = '', }) {
  return (
    <section className={`relative min-h-screen w-full overflow-hidden bg-[#FAF9F6]${className}`}>
      {children}
    </section>
  )
}