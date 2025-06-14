import ProjectCardSmall from "../../components/projectCard/ProjectCardSmall";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import { ProjectData } from "./ProjectView/ProjectDetail.data";

const Project = () => {
  return (
    <section id="project" className="flex flex-col md:items-center w-[85%] md:w-[80%] py-25 md:pt-30 md:pb-5 gap-10 text-my-black">
      <motion.h1 
        initial= {{ opacity: 0, y: 20 }}
        animate= {{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-my-cyan font-semibold"
      >
        My Works
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ProjectData.map((project, idx) => (
          <motion.div
          key={project.key}
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
          viewport={{ once: true }}
          >
            <ProjectCardSmall 
              id={project.key}
              imgSrc={project.imgSrc}
              title={project.title}
              desc={project.briefDesc}
              tags={project.tags}
              viewLink={`/project/${project.slug}`}
              liveLink={project.link}
              repoLink={project.github}
              btnLWidth={ project.link === '' ? "w-full" : 'w-3/5' }
              btnRWidth={ project.link === '' ? "hidden" : 'w-2/5' }
            />    
          </motion.div>
        ))}

      </div>
      <Footer />
    </section>
  )
}

export default Project;