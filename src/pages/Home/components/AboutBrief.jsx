import { Link } from "react-router";
import ProjectCardSmall from "../../../components/projectCard/ProjectCardSmall";

const AboutBrief = () => {
  return (
    <section id="about" className="w-full min-h-dvh flex justify-center">
      <article className="w-[80%] flex flex-col gap-20 py-20 border-t-2 border-dashed border-my-cyan">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-balance font-semibold text-my-cyan">A Self Taught Junior Developer</h1>
          <p className="text-my-black">
            Have a good taste at tweaking a design on FrontEnd as well as
            working the logic on the Backend side. Detail and goals oriented,
            user experience above all. Want to know more about me? <Link to={'/about'} className="text-my-cyan underline underline-offset-4">Come here</Link>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-balance font-semibold text-my-cyan">Latest Projects</h1>
          
          <ProjectCardSmall
            imgSrc="/assets/siichisei.webp"
            title="SiiChiSei Vocal Course"
            desc="Full Front-End (SPA) Company Website. It's a real project for a vocal course information website."
            tags={[
              { child: 'React Router' }, { child: 'Vite' }, { child: 'TailwindCSS' }, { child: 'EmailJS' }
            ]}
            viewLink="/project"
            liveLink='https://siichisei-vocalcourse.pages.dev/'
          />

          <ProjectCardSmall
            imgSrc="/assets/webcafe.webp"
            title="Web Cafe Menu (OnProgress)"
            desc="A Full Stack Web Project, planned to be a Cafe menu web based
                that serve a transparancy between customer and the menu order cycle."
            tags={[
              { child: 'React' }, { child: 'Vite' }, { child: 'TailwindCSS' }, { child: 'ExpressJs' },
              { child: 'NodeJs' }, { child: 'MongoDB' }
            ]}
            btnLWidth="w-full"
            btnRWidth="hidden"
            viewLink="/project"
          />

        </div>
      </article>
    </section>
  )
}

export default AboutBrief;