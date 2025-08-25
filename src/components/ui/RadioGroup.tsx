import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  options, 
  name, 
  selectedValue, 
  onChange, 
  className = "flex flex-wrap gap-x-4 gap-y-2" 
}) => (
  <div className={className}>
    {options.map(({ value, label }) => (
      <label key={value} className="flex items-center text-sm">
        <input
          type="radio"
          name={name}
          value={value}
          checked={selectedValue === value}
          onChange={onChange}
          className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    ))}
  </div>
);
