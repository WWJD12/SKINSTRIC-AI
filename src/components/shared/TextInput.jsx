export default function TextInput({
  value,
  onChange,
  onEnter,
  placeholder,
}) {
  return (
    <input
      type="text"
      autoComplete="on"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && value.trim()) {
          onEnter()
        }
      }}
      placeholder={placeholder}
      className="
        w-full
  max-w-[calc(100vw-48px)]
  border-b
  border-black/50
  bg-transparent
  pb-0
  text-center
  text-[42px]
  font-light
  leading-none
  tracking-[-0.07em]
  text-[#1A1B1C]
  outline-none
  placeholder:text-[#1A1B1C]
  md:max-w-[430px]
  md:text-[58px]
      "
    />
  )
}
