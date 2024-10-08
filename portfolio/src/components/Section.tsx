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
    <section id={sectionData.id} className='p-6 w-full flex justify-center items-center bg-pink-400 gap-4'>
        <div id="section-wrapper" className='bg-blue-200'>
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
