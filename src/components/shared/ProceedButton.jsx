export default function ProceedButton({
  children = 'PROCEED',
  onClick,
  disabled = false,
  loading = false,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className="mt-8 md:mt-10 inline-flex h-[38px] md:h-[42px] items-center justify-center bg-black px-[18px] md:px-[22px] font-[Roobert] text-[10px] md:text-[11px]
       font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-40">
   {loading ? 'LOADING...' : children}
   </button>
  )
}