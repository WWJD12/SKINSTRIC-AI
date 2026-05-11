export default function TextInput({ value, onChange, onEnter, placeholder, width = '' }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      onKeyDown={(e) => {
        if (
          e.key === 'Enter' &&
          value.trim()
        ) {
          onEnter()
        }
      }}
      placeholder={placeholder}
      className={`w-full max-w-[40%] md:max-w-[32%] lg:max-w-[26%] border-b border-black/60 bg-transparent pb-2 text-center font-[Roobert] text-[22px] md:text-[34px] lg:text-[58px]
        font-light leading-none tracking-[-0.07em] text-[#1A1B1C] outline-none placeholder:text-[#1A1B1C] ${width}`} />
  )
}