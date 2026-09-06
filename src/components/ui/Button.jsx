function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
  disabled = false,
}) {
  const variants = {
    primary: `
      bg-[#183A63]
      text-white
      hover:bg-[#214D80]
      active:bg-[#102A49]
      disabled:bg-[#A8B7C7]
    `,

    secondary: `
      border
      border-[#183A63]
      bg-transparent
      text-[#183A63]
      hover:bg-[#EAF0F6]
      active:bg-[#DCE6F0]
      disabled:border-[#A8B7C7]
      disabled:text-[#A8B7C7]
    `,

    ghost: `
      w-auto
      bg-transparent
      text-[#183A63]
      hover:bg-[#EAF0F6]
      active:bg-[#DCE6F0]
      disabled:text-[#A8B7C7]
    `,

    text: `
      w-auto
      bg-transparent
      text-[#183A63]
      hover:underline
      active:text-[#102A49]
      disabled:text-[#A8B7C7]
    `,

    light: `
      w-auto
      bg-white
      text-[#183A63]
      hover:bg-[#EAF0F6]
      active:bg-[#DCE6F0]
      disabled:bg-[#A8B7C7]
      disabled:text-white
    `,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-[8px]
        px-5
        py-2.5
        text-base
        font-medium
        leading-6
        transition-colors
        duration-200
        ease-in-out
        disabled:cursor-not-allowed
        sm:w-auto
        sm:px-6
        sm:text-lg
        md:text-xl
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button