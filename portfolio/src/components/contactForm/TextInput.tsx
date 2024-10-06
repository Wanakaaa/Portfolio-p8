import React from 'react';

interface TextInputProps {
  label: string; 
  name: string; 
  type?: string; 
  className?: string; 
}

export default function TextInput({ label, name, type = 'text', className = '' }: TextInputProps) {
  return (
    <label className="flex flex-col w-full">
      {label}
      <input type={type} name={name} className={`border p-2 rounded-lg ${className}`} />
    </label>
  );
}