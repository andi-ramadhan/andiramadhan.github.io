import { motion } from "framer-motion";
import Tooltip from "../../../components/Tooltip";
import { tooltipData } from "./Tools.data";

const Tools = () => {
  return (
    <section className="flex flex-col justify-center gap-7 bg-my-white text-my-black">
      <motion.h1 
        initial= {{ opacity: 0, y: 20 }}
        whileInView= {{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-my-cyan"
      >
        Tools I Use
      </motion.h1>
      
      <div className="text-center text-my-cyan flex flex-wrap justify-center items-center gap-5 text-sm text-nowrap">
        
        {tooltipData.map((data, idx) => (
          <motion.div
            key={idx}
            initial= {{ opacity: 0, y: 20 }}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 + idx * 0.1 }}
            viewport={{ once: true }}
          >
            <Tooltip
              key={idx}
              label={data.label}
              imgSrc={data.imgSrc}
              imgSize="size-15 md:size-20"
            />
          </motion.div>
        ))}
        
      </div>
    </section>
  );
}

export default Tools;