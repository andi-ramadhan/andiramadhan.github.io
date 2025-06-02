import { useState, useRef } from 'react'
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
  const [prevSection, setPrevSection] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  const handleSectionChange = (section) => {
    if (section === activeSection || isTransitioning) return;
    setPrevSection(activeSection);
    setIsTransitioning(true);
    timeoutRef.current = setTimeout(() => {
      setActiveSection(section)
      setPrevSection(null)
      setIsTransitioning(false)
    }, 400)
  }

  const CurrentSection = sectionComponents[activeSection];
  const PrevSection = prevSection ? sectionComponents[prevSection] : null;

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
      <main className='flex justify-center items-center min-h-screen relative overflow-hidden'>
        {/* prev section fade out */}
        {PrevSection && isTransitioning && (
          <div
            className='absolute inset-0 w-full transition-opacity duration-300 opacity-100 pointer-events-none z-0'
            style={{ opacity: 0, transition: 'opacity 300ms'}}>
              <PrevSection />
          </div>  
        )}
        {/* current section fade in */}
        <div className={`w-full transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'} z-10`}>
          <CurrentSection />
        </div>
      </main>
    </>
  )
}

export default App
