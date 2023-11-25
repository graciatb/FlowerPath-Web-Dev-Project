// layout.tsx
import React from 'react';
import SideNav from '@/components/sidenav';

interface LayoutProps {
  children: React.ReactNode;
  renderSideNav?: boolean; // Tambahkan prop untuk menentukan apakah akan merender SideNav
}

const Layout: React.FC<LayoutProps> = ({ children, renderSideNav = true }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {renderSideNav && (
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
      )}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;