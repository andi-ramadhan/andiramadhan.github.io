import { motion, easeInOut } from "framer-motion";

const Dashboard = () => {
  return (
    <section id="home" className="flex justify-center text-gray-800 items-center min-h-screen translate-y-10 w-full bg-[ffff]">
      <div className="flex flex-col justify-center items-center gap-2 w-[80%]">
        <div className="flex flex-col gap-2">
          <motion.h1
            initial= {{ opacity: 0, scale: 0.95 }}
            animate= {{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className='text-3xl md:text-4xl lg:text-5xl md:text-center font-semibold capitalize'
          >
            "built with <span className="text-my-yellow">purpose</span>, scaled with <span className="text-[#15af8d]">care</span>"
          </motion.h1>
          <motion.h2
            initial= {{ opacity: 0, y: 20 }}
            animate= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6}}
            className='text-2xl md:text-3xl md:text-center text-balance relative'
          >
            Every line of code is a step from idea to impact
          </motion.h2>
        </div>
        <motion.div 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8}}
          className="flex flex-col gap-4 pt-2"
        >
          <h3 className="text-center text-xl md:text-2xl">Hi! I'm <span className="text-2xl font-semibold">Andi</span>, a:</h3>
          <p className="flex flex-wrap gap-2 justify-center font-semibold text-base md:text-lg">
            <span className="bg-my-dark text-my-yellow px-6 py-2 rounded-full">Junior Full-Stack Web Developer</span>
            <span className="bg-my-cyan text-my-dark px-6 py-2 rounded-full">IT Support Specialist</span>
            <span className="bg-my-yellow text-my-dark px-6 py-2 rounded-full">Illustrator</span>
          </p>
        </motion.div>
        <button className="mt-10 flex flex-col justify-center items-center animate-bounce border border-my-dark/50 rounded-full px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-my-cyan">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default Dashboard;