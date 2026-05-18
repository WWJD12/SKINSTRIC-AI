import DiamondFrame from './DiamondFrame'

export default function RightLines({ hoveredSide }) {
  return (
    <div
      className={`pointer-events-none absolute right-0 top-1/2 z-[5] hidden h-[760px] w-[340px] -translate-y-1/2 overflow-hidden transition-opacity duration-700 lg:block ${
        hoveredSide === 'left' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute right-[-640px] top-1/2 h-[760px] w-[760px] -translate-y-1/2">
        <DiamondFrame />
      </div>
    </div>
  )
}