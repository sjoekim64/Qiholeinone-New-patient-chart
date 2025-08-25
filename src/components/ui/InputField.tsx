import React from 'react';

interface InputFieldProps {
  label: string;
  id: string;
  name?: string;
  value: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  unit?: string;
  required?: boolean;
  className?: string;
  readOnly?: boolean;
  disabled?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  id, 
  name, 
  value, 
  onChange, 
  placeholder, 
  type = 'text', 
  unit, 
  required, 
  className = '', 
  readOnly = false, 
  disabled = false 
}) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name || id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm read-only:bg-gray-100 read-only:cursor-not-allowed disabled:bg-gray-100 disabled:cursor-not-allowed"
      />
      {unit && (
        <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm text-gray-500">
          {unit}
        </span>
      )}
    </div>
  </div>
);
