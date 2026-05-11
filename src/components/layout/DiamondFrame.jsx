export default function DiamondFrame() {
  return (
    <div
      className={`absolute left-1/2 top-1/2 h-[240px] w-[240px] md:h-[340px] md:w-[340px] lg:h-[440px] lg:w-[440px] -translate-x-1/2 -translate-y-1/2 rotate-45 
      border border-dashed border-black/90`}
      style={{ borderWidth: '1px' }}
    />
  )
}