'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import DeviceButton from './DeviceButton';

interface DevicePreviewProps {
  images: {
    desktop?: string;
    tablet?: string;
    mobile?: string;
  };
}

export default function DevicePreview({ images }: DevicePreviewProps) {
    // Détermine les appareils avec des images disponibles
    const availableDevices = Object.entries(images)
    .filter(([value]) => value) // Garde seulement les appareils avec des images
    .map(([device]) => device) as ('desktop' | 'tablet' | 'mobile')[]

    // Utiliser le 1er appareil dispo par défaut
    const [currentDevice, setCurrentDevice] = useState<'desktop' | 'tablet' | 'mobile'>(availableDevices[0] || 'desktop')

    // Récupère l'image de l'appareil sélectionné
  const deviceImage = images[currentDevice];

  return (
    <div className="flex flex-col items-center">
      {/* Boutons de sélection de l'appareil */}
      <div className="flex justify-center gap-4 w-full border-x border-t border-gray-300 rounded-t-lg shadow-gray-300 shadow-none">
        {availableDevices.map((device) => (
          <DeviceButton
            key={device}
            onClick={() => setCurrentDevice(device)}
            label={device}
            icon={`/icons/${device}.svg`} // Icône de chaque appareil à partir de /public/icons
            selected={currentDevice === device}
          />
        ))}
      </div>

      {/* Affichage de l'image en fonction de l'appareil sélectionné */}
      <div className="relative w-full h-[600px] border-x border-b border-gray-300 rounded-b-lg shadow-md shadow-gray-300">
        {deviceImage ? (
          <Image
            src={deviceImage}
            alt={`Image ${currentDevice}`}
            fill
            className="object-contain"
          />
        ) : (
          <p className="text-center text-gray-500">Aucune image disponible pour cet appareil.</p>
        )}
      </div>
    </div>
  );
  }