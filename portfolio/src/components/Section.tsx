import React, { ReactNode } from 'react'
import sectionsData from '../data/sectionsData.json'

interface SectionProps {
    id: string
    children: ReactNode
}

interface Section {
    id: string
    href: string
    label: string
    sectionTitle: string
    isMainTitle: boolean
}

export default function Section({ id, children }: SectionProps) {
    const sectionData = sectionsData.find((section) => section.id === id)

    if (!sectionData) return null
  return (
    <section id={sectionData.id} className='p-2 w-full flex justify-center items-center gap-4'>
        <div className=' w-[80vw] flex flex-col items-center justify-around gap-6 py-1'>
        {sectionData.isMainTitle ? (
            <h1>{sectionData.sectionTitle}</h1>
        ) : (
            <h2>{sectionData.sectionTitle}</h2>
        )}
        {children}
        </div>
    </section>
  )
}
