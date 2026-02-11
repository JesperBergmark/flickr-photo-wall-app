import { ReactNode } from 'react';
import { HeaderOrganism } from '@/components/organisms/HeaderOrganism';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayoutTemplate = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeaderOrganism />
      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8">{children}</main>
    </div>
  );
};
