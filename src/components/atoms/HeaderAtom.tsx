import { ReactNode } from 'react';

interface HeaderAtomProps {
  title: string;
  children: ReactNode;
}

export const HeaderAtom = ({ title, children }: HeaderAtomProps) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold bg-gradient-to-r text-center">{title}</h1>
          {children}
        </div>
      </div>
    </header>
  );
};
