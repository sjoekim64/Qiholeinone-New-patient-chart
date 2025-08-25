import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({ 
  title, 
  children, 
  className = '' 
}) => (
  <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-6">
      {title}
    </h2>
    {children}
  </div>
);
