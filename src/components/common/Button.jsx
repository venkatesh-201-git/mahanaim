import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'gold', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  to,
  href,
  onClick,
  className = '',
  disabled = false,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-3.5 py-2 text-xs sm:text-sm gap-1.5 min-h-[38px]",
    md: "px-5 py-2.5 text-sm sm:text-base gap-2 min-h-[44px]",
    lg: "px-7 py-3.5 text-base sm:text-lg gap-2.5 min-h-[50px]",
  };

  const variantStyles = {
    primary: "bg-midnight-900 text-white hover:bg-midnight-800 dark:bg-gold-500 dark:text-midnight-950 dark:hover:bg-gold-400 shadow-md hover:shadow-lg focus:ring-midnight-900 dark:focus:ring-gold-400 border border-white/10",
    gold: "bg-gradient-to-r from-gold-500 to-gold-600 text-midnight-950 hover:from-gold-400 hover:to-gold-500 font-semibold shadow-glow-gold hover:shadow-lg focus:ring-gold-400 border border-gold-400/30",
    secondary: "bg-sacred-200 text-midnight-900 hover:bg-sacred-300 dark:bg-midnight-800 dark:text-white dark:hover:bg-midnight-700 shadow-sm border border-stone-300/30 dark:border-midnight-700",
    outline: "bg-transparent text-midnight-900 dark:text-white border-2 border-gold-500/50 hover:bg-gold-500/10 hover:border-gold-500 focus:ring-gold-500",
    ghost: "bg-transparent text-stone-700 dark:text-stone-300 hover:bg-black/5 dark:hover:bg-white/10 focus:ring-stone-400",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
