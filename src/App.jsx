import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Contact from './pages/Contact'


const sectionComponents = {
  home: Dashboard,
  about: About,
  project: Project,
  contact: Contact,
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const CurrentSection = sectionComponents[activeSection];

  const pageMotion = (CurrentSection && CurrentSection.motion)

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className='flex justify-center items-center min-h-screen relative overflow-hidden'>
        <AnimatePresence mode='sync'>
          <motion.section
            key={activeSection}
            {...pageMotion}
            className='w-full h-full absolute left-0 top-0'
            style={{ position: 'absolute' }}
          >
            <CurrentSection />
          </motion.section>
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
