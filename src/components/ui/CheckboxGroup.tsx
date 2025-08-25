import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  options: CheckboxOption[];
  selected: string[];
  onChange: (value: string, checked: boolean) => void;
  gridCols?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  options, 
  selected, 
  onChange, 
  gridCols = 'grid-cols-2 md:grid-cols-3' 
}) => (
  <div className={`grid ${gridCols} gap-x-6 gap-y-2`}>
    {options.map(({ value, label }) => (
      <div key={value} className="flex items-center">
        <input
          type="checkbox"
          id={value.replace(/\s/g, '')}
          value={value}
          checked={selected.includes(value)}
          onChange={(e) => onChange(value, e.target.checked)}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
        />
        <label htmlFor={value.replace(/\s/g, '')} className="ml-2 text-sm text-gray-600">
          {label}
        </label>
      </div>
    ))}
  </div>
);
