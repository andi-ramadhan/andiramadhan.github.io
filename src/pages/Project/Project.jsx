import { useEffect, useRef, useState } from "react";
import ProjectCardSmall from "../../components/projectCard/ProjectCardSmall";
import MaintenanceModal from "./ProjectView/MaintenanceModal";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
 
  const handleContainerClick = (e) => {
    const link = e.target.closest('a[href="#maintenance"]');
    if (link) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <section id="project" className="flex flex-col md:items-center w-[85%] md:w-[80%] py-25 md:py-40 gap-10 text-my-black">
      <h1 className="text-3xl md:text-4xl text-my-cyan font-semibold">My Works</h1>
      <div 
        onClick={handleContainerClick}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
          <ProjectCardSmall
            id="siichiseivocalcourse"
            imgSrc="/assets/siichisei.webp"
            title="SiiChiSei Vocal Course"
            desc="A Company Profile and Vocal Course Information website. Purposed to serve a vocal courses information, prioritized to give
                  a clarity of the services to user."
            tags={[
              { child: 'React Router' }, { child: 'Vite' }, { child: 'TailwindCSS' }, { child: 'EmailJS' }
            ]}
            viewLink="#maintenance"
            liveLink='https://siichisei-vocalcourse.pages.dev/'
          />

          <ProjectCardSmall
            imgSrc="/assets/webcafe.webp"
            title="Web Cafe Menu (OnProgress)"
            desc="Full-Stack Web Project, Cafe menu web based
                that serve a transparancy between customer and the menu order cycle."
            tags={[
              { child: 'React' }, { child: 'Vite' }, { child: 'TailwindCSS' }, { child: 'ExpressJs' },
              { child: 'NodeJs' }, { child: 'MongoDB' }
            ]}
            btnLWidth="w-full"
            btnRWidth="hidden"
            viewLink="#maintenance"
            repoLink="https://github.com/andi-ramadhan/web-cafe-menu"
          />

          <ProjectCardSmall
            imgSrc="https://opengraph.githubassets.com/1/andi-ramadhan/openmusic-api"
            title="OpenMusic API"
            desc="A Restful API Music Library, provides security in creating a music library.
            User also can collaborate to make their music library together"
            tags={[
              { child: 'HapiJs' }, { child: 'PostgreSQL' }, { child: 'Redis' }, { child: 'RabbitMQ' },
              { child: 'JWT' }, { child: 'Joi' }, { child: 'Bcrypt' }, { child: 'NodeJs' }
            ]}
            btnLWidth="w-full"
            btnRWidth="hidden"
            viewLink="#maintenance"
            repoLink="https://github.com/andi-ramadhan/openmusic-api"
          />
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-my-black/50">
          <MaintenanceModal />
          <button
            className="absolute top-5 right-5 text-my-red text-3xl"
            onClick={() => setShowModal(false)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  )
}

export default Project;