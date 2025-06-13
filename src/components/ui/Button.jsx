export function Button({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}) {
  const sizeClasses = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-4",
    lg: "py-3 px-6 text-lg",
  };

  const variantClasses = {
    default: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "bg-transparent border hover:bg-gray-100 text-gray-800",
  };

  const baseClasses =
    "rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
