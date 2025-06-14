import { useParams } from "react-router-dom";
import TagCard from "../../../components/TagCard";
import { ProjectData } from "./ProjectDetail.data";
import { LinkIcon, UnlinkIcon } from "../../../components/icons/linkIcons";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = ProjectData.find(p => p.slug === slug);

  if (!project) return <div>Project not found</div>

  return (
    <section className="z-50 flex flex-col items-center py-30 gap-20 text-my-black w-full h-full">
      <div className="px-4 flex flex-col gap-10 w-[85%] md:w-[50%]">
        {/* TITLE */}
        <motion.h1 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-my-cyan border-my-cyan border-double border-l-8 pl-3"
        >
          {project.title}
        </motion.h1>
        
        {/* IMG & DESC */}
        <motion.figure 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <img src={project.imgSrc} className="w-full md:h-96 object-contain self-center"/>
          <div className="flex justify-between items-center md:px-5 py-1 border-my-black/40 border-y italic text-xs md:text-base">
            <p>
              GitHub: {project.github ? <a href={project.github} target="_blank" className="font-semibold text-my-cyan">Link</a> : '[Private]'}
            </p>
            {project.link ? (
              <a href={project.link} target="_blank" className="font-semibold text-my-red">
                <p className='flex gap-2 items-center'><LinkIcon addClass="size-3 md:size-5" /> Open Live Site</p>
              </a>
            ) : (
              <p className="flex gap-2 items-center text-my-red font-semibold"><UnlinkIcon addClass="size-3 md:size-5"/> No Live Site</p>
            )}
          </div>
          
          <motion.p 
            initial= {{ opacity: 0, y: 20 }}
            animate= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:text-lg leading-relaxed md:pl-5"
          >
            {project.desc}
          </motion.p>
        </motion.figure>

        {/* ROLE */}
        <motion.div 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan border-my-cyan border-l-3 pl-3">My Role Here</h2>
          <motion.p 
            initial= {{ opacity: 0, y: 20 }}
            animate= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-lg pl-5"><span className="text-my-red text-xl font-bold"
          >
            &#91;</span> Fully built & maintain by me <span className="text-my-red text-xl font-bold">&#93;</span>
          </motion.p>
        </motion.div>

        <motion.div 
          initial= {{ opacity: 0, y: 20 }}
          whileInView= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5 text-xs md:text-base text-my-black"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan border-my-cyan border-l-3 pl-3">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 pl-5">
          {project.tags.map((tag, idx) => (
              <motion.div
                key={idx}
                initial= {{ opacity: 0, y: 20 }}
                animate= {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <TagCard
                  key={idx}
                  child={tag.child}
                  className="bg-my-cyan/50 text-my-black"
                />
              </motion.div>
          ))}
          </div>
        </motion.div>

        <motion.div 
          initial= {{ opacity: 0, y: 20 }}
          whileInView= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan border-my-cyan border-l-3 pl-3">Feature</h2>
          <ul className="pl-5 font-semibold flex flex-col gap-1">
            {project.features && project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial= {{ opacity: 0, y: 20 }}
                whileInView= {{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <li key={idx}><p>{feature}</p></li>
              </motion.div>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-col gap-5">
          <motion.h2
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold text-my-cyan border-my-cyan border-l-3 pl-3"
          >
            Challenges & Solutions
          </motion.h2>
          <motion.p 
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            viewport={{ once: true }}
            className="italic leading-relaxed text-center"
          >
            "{project.challenges}"
          </motion.p>
        </div>

      </div>
    </section>
  );
}

export default ProjectDetail;