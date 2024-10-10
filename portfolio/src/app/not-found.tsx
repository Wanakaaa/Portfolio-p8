import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
        <h2>Page non trouvée</h2>
        <Link href="/" className="text-2xl font-bold tracking-wide">
            Retourner sur le portfolio
          </Link>
        
    </div>
  )
}
