import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProjectDetail from "../pages/Project/ProjectView/ProjectDetail";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Project = lazy(() => import("../pages/Project/Project"));
const Contact = lazy(() => import("../pages/Contact"));
const Maintenance = lazy(() => import("../pages/Maintenance"));


const PageRoute = () => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:slug' element={<ProjectDetail />} />
      </Routes>
    </Suspense>
  )
}

export default PageRoute;