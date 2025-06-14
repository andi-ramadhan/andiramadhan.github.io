import { Link } from "react-router";
import { motion } from "framer-motion";
import ProjectCardSmall from "../../../components/projectCard/ProjectCardSmall";
import { ProjectData } from "../../Project/ProjectView/ProjectDetail.data";

const AboutBrief = () => {
  const project1 = ProjectData[0];
  const project2 = ProjectData[1];
  
  return (
    <section id="about" className="w-full min-h-dvh flex justify-center">
      <article className="flex flex-col gap-20 pt-25 pb-10 border-t-2 border-dashed border-my-cyan text-my-black">
        <div className="flex flex-col gap-4">
          <motion.h1
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.35}}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-balance font-semibold text-my-cyan"
          >
            A Self Taught Junior Developer
          </motion.h1>
          <motion.p
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5}}
            viewport={{ once: true }}
            className="text-balance md:text-lg"
          >
            I like tweaking UI on <span className="font-semibold text-my-red"> FrontEnd</span>, make it work as well as working with logic on the <span className="font-semibold text-my-red"> Backend</span> side.
            Details and goals oriented,
            <span className="font-semibold text-my-red"> user experience above all</span>.
          </motion.p>

          <motion.p
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5}}
            viewport={{ once: true }}
            className="text-balance md:text-lg"
          >
            Besides coding, I enjoy creating 2D illustrations both digitally and in traditional art.
            As an experienced <span className="font-semibold text-my-cyan">IT Support Specialist</span>, 
            I'm always very passionate about Technology and will always do.
            Want to know more about me? <Link to={'/about'} className="text-my-cyan underline underline-offset-4">Come here</Link>
          </motion.p>
        </div>
        <div className="flex flex-col gap-4">
          <motion.h1
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7}}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-balance font-semibold text-my-cyan pb-10"
          >
            Latest Projects
          </motion.h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              initial= {{ opacity: 0, y: 20 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9}}
              viewport={{ once: true }}
            >
              <ProjectCardSmall 
                id={project1.key}
                imgSrc={project1.imgSrc}
                title={project1.title}
                desc={project1.briefDesc}
                tags={project1.tags}
                viewLink={`/project/${project1.slug}`}
                liveLink={project1.link}
                repoLink={project1.github}
                btnLWidth={ project1.link === '' ? "w-full" : 'w-3/5' }
                btnRWidth={ project1.link === '' ? "hidden" : 'w-2/5' }
              />
            </motion.div>
            
            <motion.div
              initial= {{ opacity: 0, y: 20 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1}}
              viewport={{ once: true }}
            >
              <ProjectCardSmall 
                id={project2.key}
                imgSrc={project2.imgSrc}
                title={project2.title}
                desc={project2.briefDesc}
                tags={project2.tags}
                viewLink={`/project/${project2.slug}`}
                liveLink={project2.link}
                repoLink={project2.github}
                btnLWidth={ project2.link === '' ? "w-full" : 'w-3/5' }
                btnRWidth={ project2.link === '' ? "hidden" : 'w-2/5' }
              />
            </motion.div>
          </div>

        </div>
      </article>
    </section>
  )
}

export default AboutBrief;