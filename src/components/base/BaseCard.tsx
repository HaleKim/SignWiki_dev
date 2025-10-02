import React from 'react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`bg-surface rounded-xl shadow-toss p-6 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BaseCard;
