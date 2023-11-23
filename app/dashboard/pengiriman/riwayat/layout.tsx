// riwayatpengiriman/layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="riwayatpengiriman-layout">
      {children}
    </div>
    
  );
};

export default Layout;