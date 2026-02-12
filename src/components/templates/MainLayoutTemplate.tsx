import { ReactNode } from 'react';

interface MainLayoutTemplateProps {
  header: ReactNode;
  children: ReactNode;
}

export const MainLayoutTemplate = ({ header, children }: MainLayoutTemplateProps) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {header}
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">{children}</main>
    </div>
  );
};
