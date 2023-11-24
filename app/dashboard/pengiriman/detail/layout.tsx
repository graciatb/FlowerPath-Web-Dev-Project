// detailpengiriman/layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="detailpengiriman-layout">
      {children}
    </div>
    
  );
};

export default Layout;