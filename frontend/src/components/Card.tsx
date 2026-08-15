import React from 'react';

export const Card: React.FC<{ children: React.ReactNode, title?: string, className?: string }> = ({ children, title, className = '' }) => {
  return (
    <div className={`glass-card ${className}`}>
      {title && (
        <div className="glass-card-header">
          <h3>{title}</h3>
        </div>
      )}
      <div className="glass-card-body">
        {children}
      </div>
    </div>
  );
};
