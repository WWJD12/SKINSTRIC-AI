import DiamondFrame from './DiamondFrame'

export default function LeftLines({
  hoveredSide,
}) {
  return (
    <div className={`absolute left-[-22%] top-[45%] md:left-[-26%] md:top-[47%] lg:left-[-0.1%] lg:top-[49%] transition-opacity duration-700
         ${ hoveredSide === 'right' ? 'opacity-0' : 'opacity-100' }`}>
        <DiamondFrame />

      <div className={`absolute inset-0 transition-all duration-700 ease-out 
      ${ hoveredSide === 'left' ? 'opacity-100 translate-x-[20px] md:translate-x-[28px]' : 'opacity-0 translate-x-0' }`}>
        <DiamondFrame />
      </div>

      <div className={`absolute inset-0 transition-all duration-700 ease-out
       ${ hoveredSide === 'left' ? 'opacity-100 translate-x-[40px] md:translate-x-[56px]' : 'opacity-0 translate-x-0' }`}>
        <DiamondFrame />
      </div>

    </div>
  )
}