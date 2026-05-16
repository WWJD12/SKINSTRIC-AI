import DiamondFrame from './DiamondFrame'

export default function RightLines({
  hoveredSide,
}) {
  return (
    <div
      className={`absolute right-[-22%] top-[45%] md:right-[-26%] md:top-[47%] lg:right-[-0.1%] lg:top-[49%] transition-opacity duration-700
      ${ hoveredSide === 'left' ? 'opacity-0' : 'opacity-100' }`}
    >
      <DiamondFrame />
    </div>
  )
}