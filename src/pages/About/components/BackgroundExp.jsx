import { motion } from "framer-motion";

const BackgroundExp = () => {
  return (
    <section className="flex flex-col gap-7 bg-my-white text-my-black">
      <article className="flex flex-col gap-5">
        <motion.h1 
          initial= {{ opacity: 0, y: 20 }}
          whileInView= {{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-my-cyan"
        >
          Related Background
        </motion.h1>
        <ul className="flex flex-col gap-4">
          <motion.li 
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-between"
          >
            <p>IDCAMP 2024 Back-End Developer JavaScript Beginner</p>
            <p>19/09/2024</p>
          </motion.li>
          <motion.li 
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex justify-between"
          >
            <p>IDCAMP 2024 Back-End Developer JavaScript Intermediate</p>
            <p>10/01/2025</p>
          </motion.li>
          <motion.li 
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-between"
          >
            <p>Coding Camp by DBS Foundation 2025 [Front-End Beginner &mdash; Low Touch]</p>
            <p>08/02/2025</p>
          </motion.li>
        </ul>
      </article>
    </section>
  );
}

export default BackgroundExp;