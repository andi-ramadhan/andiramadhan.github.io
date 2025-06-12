import Tooltip from "../../../components/Tooltip";
import { tooltipData } from "./Tools.data";

const Tools = () => {
  return (
    <section className="flex flex-col justify-center gap-7 bg-my-white text-my-black">
      <h1 className="text-3xl md:text-4xl font-semibold text-my-cyan">Tools I Use</h1>
      
      <div className="text-center text-my-cyan flex flex-wrap justify-center items-center gap-5 text-sm text-nowrap">
        
        {tooltipData.map((data, idx) => (
          <Tooltip 
            label={data.label}
            imgSrc={data.imgSrc}
          />
        ))}
        
      </div>
    </section>
  );
}

export default Tools;