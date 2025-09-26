import React from 'react';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const BaseButton: React.FC<BaseButtonProps> = ({ children, variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-600 focus:ring-primary',
    secondary: 'bg-gray-200 text-text-secondary hover:bg-gray-300 focus:ring-gray-400',
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
