import Buttons from "./Buttons";
import TagCard from "../TagCard";

const ProjectCardSmall = ({ imgSrc = '', title = '', desc = '', tags = [], btnLWidth = 'w-3/5', btnRWidth = 'w-2/5', viewLink = '#', liveLink = '#' }) => {
  return (
    <div className="w-full md:h-[600px] flex flex-col justify-between gap-5 p-6 rounded-lg shadow-lg shadow-my-black/20">
      
      {/* IMAGE */}
      <figure className="w-full h-36 md:h-50 overflow-hidden rounded-md">
        <img 
          src={imgSrc}
          loading="lazy"
          className="size-full object-contain"
          alt={title}
        />
      </figure>

      {/* CONTENT */}
      <div className="flex flex-col justify-center gap-3">
        <h2 className="text-2xl md:text-3xl font-semibold text-balance text-my-red">{title}</h2>
        <div className="flex justify-center">
          <p className="md:text-lg text-my-black flex-1">
            {desc}
          </p>
        </div>
        <div className="flex-wrap flex gap-2 items-center text-xs md:text-base text-my-black">
          <p className="text-my-black font-semibold">Tools:</p>
          {tags.map((tag, idx) => (
            <TagCard
              key={idx}
              child={tag.child}
              className="bg-my-cyan/50 text-my-black"
            />
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <div className="flex justify-between gap-3 text-sm py-3">
        <Buttons 
          btnLWidth={btnLWidth}
          btnRWidth={btnRWidth}
          viewTo={viewLink}
          liveTo={liveLink}
        />
      </div>
    </div>
  );
}

export default ProjectCardSmall