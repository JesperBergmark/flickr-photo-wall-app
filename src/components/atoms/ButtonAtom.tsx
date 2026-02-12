import { ButtonHTMLAttributes } from 'react';

interface ButtonAtomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const ButtonAtom = ({ variant = 'primary', className, children, ...props }: ButtonAtomProps) => {
  const baseClasses =
    'px-4 sm:px-6 py-2.5 sm:py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 active:scale-95';

  const variantClasses =
    variant === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500' : 'bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};
