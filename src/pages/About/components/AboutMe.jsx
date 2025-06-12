import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="flex flex-col justify-center gap-7 bg-my-white text-my-black">
      <article className="flex flex-col gap-3">
        <motion.header 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap items-center gap-2 font-semibold"
        >
          <h1 className="text-3xl md:text-4xl text-my-cyan">
            Andi Fajar Ramadhan
          </h1>
          <h2 className="text-2xl md:text-3xl text-my-red">
            as a Developer
          </h2>
        </motion.header>
        <motion.p 
          initial= {{ opacity: 0, y: 20 }}
          animate= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="text-base md:text-lg leading-relaxed"
        >
          Started my programming journey by join a coding scholarship, focused 
          on BackEnd & FrontEnd Development with JavaScript. Interested in programming
          since in High School (2018), at that time my major is Computer and Networking 
          so I decided to learn Backend first and involved (gratefully qualified) into coding scholarship in 2024, 
          following the Front-End scholarship after that.
        </motion.p>
      </article>
    </section>
  );
}

export default AboutMe;