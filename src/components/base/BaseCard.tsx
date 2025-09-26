import React from 'react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-surface rounded-xl shadow-toss p-6 ${className}`}>
      {children}
    </div>
  );
};

export default BaseCard;
