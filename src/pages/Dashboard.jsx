import { motion, easeInOut } from "framer-motion";
import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <section id="home" className="flex justify-center text-gray-800 items-center -translate-y-5 min-h-screen w-full bg-[ffff]">
      <div className="flex flex-col justify-center items-center gap-5 w-[80%]">
        <div className="flex flex-col gap-2">
          <motion.h2
            initial= {{ opacity: 0, scale: 0.95 }}
            animate= {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:text-center text-3xl md:text-4xl"
          >
            Hi! <span className=" font-semibold">I'm Andi</span>, a:
          </motion.h2>
          <motion.h1
            initial= {{ opacity: 0, scale: 0.95 }}
            animate= {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className='text-3xl md:text-4xl lg:text-5xl md:text-center font-semibold capitalize'
          >
            I build with <span className="text-my-yellow">purpose</span>, scaled with <span className="text-[#15af8d]">care</span>
          </motion.h1>
          <motion.h2
            initial= {{ opacity: 0, y: 20 }}
            animate= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7}}
            className='text-2xl md:text-3xl md:text-center text-balance relative'
          >
            Crafting ideas into digital reality, deliver the message through code
          </motion.h2>
        </div>
        <motion.div 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.9}}
          className="flex flex-col gap-4 pt-2"
        >
          <p className="flex flex-wrap gap-2 justify-center font-semibold text-sm md:text-lg">
            <motion.span
              initial= {{ opacity: 0, y: 20 }}
              animate= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1}} 
              className="bg-my-dark text-my-yellow px-6 py-2 rounded-full"
            >
              Junior Full-Stack Web Developer
            </motion.span>
            <motion.span
              initial= {{ opacity: 0, y: 20 }}
              animate= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.1}} 
              className="bg-my-cyan text-my-dark px-6 py-2 rounded-full"
            >
              IT Support Specialist
            </motion.span>
            <motion.span
              initial= {{ opacity: 0, y: 20 }}
              animate= {{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2}}
              className="bg-my-yellow text-my-dark px-6 py-2 rounded-full"
            >
              Illustrator
            </motion.span>
          </p>
        </motion.div>
        <div className="w-[80%] h-full absolute top-60 lg:top-50 flex justify-center items-center gap-5 md:gap-10 text-center text-sm md:text-base">
          <NavLink
            to={'/project'}
            className="
            border border-dashed border-my-dark text-my-dark font-semibold rounded-full w-60 py-2
            hover:bg-my-cyan transition-colors duration-200
            "
          >
            My Project
          </NavLink>
          <NavLink
            to={'/about'}
            className="
            border border-dashed border-my-dark text-my-dark font-semibold rounded-full w-60 py-2
            hover:bg-my-yellow transition-colors duration-200
            "
          >
            About Me
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;