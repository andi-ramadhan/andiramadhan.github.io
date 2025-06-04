import { Suspense, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import PageRoute from './routes';


function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className='flex justify-center items-center min-h-screen relative overflow-hidden'>
        <Suspense fallback={<div>Loading...</div>}>
          <PageRoute />
        </Suspense>
      </main>
    </>
  )
}

export default App
