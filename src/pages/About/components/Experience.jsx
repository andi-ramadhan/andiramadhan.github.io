import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="flex flex-col justify-center gap-7 text-my-black">
      <motion.article 
        initial= {{ opacity: 0, y: 20 }}
        whileInView= {{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col gap-5"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-my-cyan">Experience</h1>
        <p className="text-center font-semibold text-my-red/60">
          There's still no professional experience yet. Hire me! So I can fill this blank section :D
        </p>
      </motion.article>
    </section>
  );
}

export default Experience;