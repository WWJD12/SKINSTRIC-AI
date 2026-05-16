import DiamondFrame from './DiamondFrame'

export default function LeftLines({
  hoveredSide,
}) {
  return (
    <div
      className={`absolute left-[-22%] top-[45%] md:left-[-26%] md:top-[47%] lg:left-[-0.1%] lg:top-[49%] transition-opacity duration-700
      ${ hoveredSide === 'right' ? 'opacity-0' : 'opacity-100' }`}
    >
      <DiamondFrame />
    </div>
  )
}