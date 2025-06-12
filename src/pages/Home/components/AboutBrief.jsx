import { Link } from "react-router";
import { motion } from "framer-motion";
import ProjectCardSmall from "../../../components/projectCard/ProjectCardSmall";

const AboutBrief = () => {
  return (
    <section id="about" className="w-full min-h-dvh flex justify-center">
      <article className="w-[80%] md:w-[40%] flex flex-col gap-20 pt-20 md:pt-40 pb-20 border-t-2 border-dashed border-my-cyan text-my-black">
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
          
          <div className="flex flex-wrap">
            <motion.div
              className="w-full md:w-1/2 md:px-2 mb-5"
              initial= {{ opacity: 0, y: 20 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9}}
              viewport={{ once: true }}
            >
              <ProjectCardSmall
                imgSrc="/assets/siichisei.webp"
                title="SiiChiSei Vocal Course"
                desc="Full Front-End (SPA) Company Website. It's a real project for a vocal course information website."
                tags={[
                  { child: 'React Router' }, { child: 'Vite' }, { child: 'TailwindCSS' }, { child: 'EmailJS' }
                ]}
                viewLink="/project"
                liveLink='https://siichisei-vocalcourse.pages.dev/'
              />
            </motion.div>
            
            <motion.div
              className="w-full md:w-1/2 md:px-2 mb-5"
              initial= {{ opacity: 0, y: 20 }}
              whileInView= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1}}
              viewport={{ once: true }}
            >
              <ProjectCardSmall
                imgSrc="/assets/webcafe.webp"
                title="Web Cafe Menu (OnProgress)"
                desc="Full-Stack Web Project, Cafe menu web based
                    that serve a transparancy between customer and the menu order cycle."
                tags={[
                  { child: 'React' }, { child: 'Vite' }, { child: 'TailwindCSS' }, { child: 'ExpressJs' },
                  { child: 'NodeJs' }, { child: 'MongoDB' }
                ]}
                btnLWidth="w-full"
                btnRWidth="hidden"
                viewLink="/project"
              />
            </motion.div>
          </div>

        </div>
      </article>
    </section>
  )
}

export default AboutBrief;