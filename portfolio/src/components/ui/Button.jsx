function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "relative overflow-hidden group rounded-xl border border-white/10 backdrop-blur-md bg-white/5 transition-all duration-300 hover:bg-white/10"

  const variants = {
    primary: "px-8 py-4 text-base hover:scale-[1.05]",
    small: "px-4 py-2 text-sm",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* glow azul */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-electric/10 blur-xl"></div>
    </button>
  )
}

export default Button