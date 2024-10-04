import React from 'react';

interface TextInputProps {
  label: string; // Étiquette du champ (ex: "Name:", "Email:")
  name: string; // Nom de l'attribut (ex: "name", "email")
  type?: string; // Type d'entrée (ex: "text", "email"), optionnel avec 'text' comme valeur par défaut
  className?: string; // Classe CSS pour styliser le champ
}

export default function TextInput({ label, name, type = 'text', className = '' }: TextInputProps) {
  return (
    <label className="flex flex-col w-full">
      {label}
      <input type={type} name={name} className={`border p-2 rounded-lg ${className}`} />
    </label>
  );
}