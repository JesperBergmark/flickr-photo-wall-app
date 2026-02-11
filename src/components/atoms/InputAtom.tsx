import { InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const InputAtom = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && <label className="block text-sm font-medium mb-2 text-gray-300">{label}</label>}
      <input
        className={cn(
          'w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg',
          'text-white placeholder-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent',
          'transition-all duration-200',
          className,
        )}
        {...props}
      />
    </div>
  );
};
