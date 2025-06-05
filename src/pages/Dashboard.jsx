import { motion, easeInOut } from "framer-motion";
import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <section id="home" className="flex justify-center text-gray-800 items-center -translate-y-5 min-h-screen w-full bg-[ffff]">
      <div className="flex flex-col justify-center items-center gap-5 w-[80%]">
        <div className="flex flex-col gap-2">
          <motion.h1
            initial= {{ opacity: 0, scale: 0.95 }}
            animate= {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:text-center text-4xl md:text-5xl"
          >
            I'm Andi
          </motion.h1>
          <motion.h2
            initial= {{ opacity: 0, scale: 0.95 }}
            animate= {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="md:text-center text-3xl md:text-4xl"
          >
            Passionate FrontEnd & BackEnd Developer
          </motion.h2>
          <motion.p
            initial= {{ opacity: 0, scale: 0.95 }}
            animate= {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="text-lg md:text-2xl"
          >
            I build with purpose, and scale it with care.
            Deliver it both in visual and in code.
          </motion.p>
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
      </div>
    </section>
  )
}

export default Dashboard;