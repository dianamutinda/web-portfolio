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
      bg-transparent
      text-[#183A63]
      hover:bg-[#EAF0F6]
      active:bg-[#DCE6F0]
      disabled:text-[#A8B7C7]
    `,
     text: `
    bg-transparent
    text-[#183A63]
    hover:underline
    active:text-[#102A49]
    disabled:text-[#A8B7C7]
  `,
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        w-[255px]
        items-center
        justify-center
        px-6
        py-2.5
        rounded-[8px]
        text-xl
        font-medium
        transition-colors
        duration-200
        ease-in-out
        disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button