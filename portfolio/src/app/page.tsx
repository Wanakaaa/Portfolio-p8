import About from './About/About';
import ProjectsList from './projects/projectsList';
import Skills from './skills/skills';
import Contact from './Contact/Contact';
import Section from '../components/Section'; 

export default function Home() {
  return (
    <>
    <main>
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
    </>
  );
}