import { Link, useParams } from "react-router-dom";
import TagCard from "../../../components/TagCard";
import { ProjectData } from "./ProjectDetail.data";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = ProjectData.find(p => p.slug === slug);

  if (!project) return <div>Project not found</div>

  return (
    <section className="bg-my-white flex flex-col items-center py-30 gap-20 text-my-black">
      <div className="px-4 flex flex-col gap-5 w-[85%] md:w-[50%]">
        <h1 className="text-3xl md:text-4xl text-my-cyan border-my-cyan border-l-5 pl-3">{project.title}</h1>
        <img src="/assets/siichisei.webp" />
        <div className="flex justify-between py-1 border-my-black/40 border-y italic text-sm md:text-base">
          <p>
            GitHub: {project.github ? <a href={project.github} target="_blank" className="font-semibold text-my-cyan/70">Link</a> : '[Private]'}
          </p>
          <Link to={project.link} target="_blank" className="font-semibold text-my-cyan/70">Open Live Site</Link>
        </div>
        
        <p className="leading-relaxed">
          {project.desc}
        </p>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan border-my-cyan border-l-3 pl-3">My Role Here</h2>
          <p>Fully built & maintain by me</p>
        </div>

        <div className="flex flex-col gap-2 text-xs md:text-base text-my-black">
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, idx) => (
              <TagCard
                key={idx}
                child={tag.child}
                className="bg-my-cyan/50 text-my-black"
              />
          ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan">Feature</h2>
          <ul className="list-disc list-inside">
            {project.features && project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-my-cyan">Challenges & Solutions</h2>
          <p className="italic leading-relaxed">
            {project.challenges}
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProjectDetail;