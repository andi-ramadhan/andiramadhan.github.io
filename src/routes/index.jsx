import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About"));
const Project = lazy(() => import("../pages/Project"));
const Contact = lazy(() => import("../pages/Contact"));
const Maintenance = lazy(() => import("../pages/Maintenance"));


const PageRoute = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Maintenance />}/>
        <Route path='/project' element={<Maintenance />}/> 
      </Routes>
    </Suspense>
  )
}

export default PageRoute;