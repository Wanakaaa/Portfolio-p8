import React from 'react'

interface TextareaInputProps {
    label: string
    name: string
    className?: string
}

export default function TextareaInput({ label, name, className = '' }: TextareaInputProps) {
  return (
    <label className={`flex flex-col w-full ${className}`}>{label}
    <textarea name={name} className="border p-2 w-full h-32 rounded-lg" />
    </label>
    );
}
