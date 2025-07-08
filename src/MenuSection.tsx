import React from 'react';

interface MenuSectionProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ label, isActive, onClick }) => (
  <div
    className={`section${isActive ? ' catalog-accent' : ''}`}
    onClick={onClick}
  >
    {label}
  </div>
);

export default MenuSection; 