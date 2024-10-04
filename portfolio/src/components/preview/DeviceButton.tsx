import React from 'react'
import Image from 'next/image'

interface DeviceButtonProps {
    onClick: () => void
    label: string
    icon: string
    selected: boolean
  }

  export default function DeviceButton({ onClick, label, icon, selected }: DeviceButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`p-2 flex items-center justify-center border ${
          selected ? 'bg-gray-300 border-gray-500' : 'bg-gray-200 border-gray-300'
        } focus:outline-none hover:bg-gray-300`}
      >
        <Image
          src={icon} // Utilisation de `icon` comme chemin d'image
          alt={label}
          width={24}
          height={24}
          className="outline"
        />
      </button>
    );
  }
