// import About from './About/About'
// import ProjectsList from './projects/projectsList'
// import Skills from './skills/skills'
// import Contact from './Contact/Contact'
// // import Timeline from './Timeline/Timeline'

// export default function Home() {
//   return (
//     // <main className="space-y-8 sm:space-y-10 md:space-y-16 lg:space-y-18 px-4 sm:px-6 md:px-8 lg:px-12 outline outline-green-500"> 
//     <main className="outline-2 outline-green-900"> 
//       < About />
//       < ProjectsList />
//       < Skills />
//       < Contact />
//     </main>
//   )
// }

import About from './About/About';
import ProjectsList from './projects/projectsList';
import Skills from './skills/skills';
import Contact from './Contact/Contact';
import Section from '../components/Section'; // Ajoute l'importation de `Section`

export default function Home() {
  return (
    <main className="outline-2 outline-green-900">
      {/* Ajoute chaque section avec l'ID correspondant */}
      <Section id="about">
        <About />
      </Section>
      
      <Section id="projects">
        <ProjectsList />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <Section id="contact">
        <Contact />
      </Section>
    </main>
  );
}