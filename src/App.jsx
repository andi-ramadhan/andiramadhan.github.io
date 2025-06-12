import { Suspense, useState } from 'react'
import './App.css'
import Header from './components/Header'
import PageRoute from './routes';
import ScrollToTop from './hooks/ScrollToTop';


function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className='flex justify-center items-center min-h-screen relative overflow-hidden'>
        <ScrollToTop>
          <Suspense fallback={<div>Loading...</div>}>
            <PageRoute />
          </Suspense>
        </ScrollToTop>
      </main>
    </>
  )
}

export default App
