import React from 'react';
import type { ReactNode } from 'react';

interface PopupProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, children, onClose }) => (
  <div className="popup-overlay" onClick={onClose}>
    <div className="popup-content" onClick={e => e.stopPropagation()}>
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <h2>{title}</h2>
      {children}
    </div>
  </div>
);

export default Popup; 