import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About"));
const Project = lazy(() => import("../pages/Project"));
const Contact = lazy(() => import("../pages/Contact"));


const PageRoute = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/project' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/> 
      </Routes>
    </Suspense>
  )
}

export default PageRoute;