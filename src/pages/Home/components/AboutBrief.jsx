import TagCard from "../../../components/TagCard";

const AboutBrief = () => {
  return (
    <section id="about" className="w-full min-h-dvh flex justify-center">
      <article className="w-[80%] flex flex-col gap-5 py-20 border-t border-dashed border-my-cyan">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-balance font-semibold">A Self Taught Junior Developer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae 
            pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. 
            Tempus leo eu aenean sed diam urna tempor.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl text-balance font-semibold">Featured Projects</h1>
          
          {/* PROJECT CARD */}
          <div className="container flex flex-col gap-4 px-2 py-5 border-my-dark/15 border-2 rounded-lg shadow-lg">
            {/* IMAGE */}
            <figure className="w-full h-35">
              <img 
                src="/assets/siichisei.webp"
                className="object-cover"
              />
            </figure>

            {/* CONTENT */}
            <div className="container flex flex-col gap-4 px-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-balance">SiiChiSei Vocal Course</h2>
              <p className="text-sm">
                Full Front-End (SPA) Company Website. It's a real project for
                a vocal course information website.
              </p>
              <div className="flex-wrap flex gap-2 items-center text-xs">
                Tools: 
                <TagCard child={'React Router'} bgColor="bg-my-yellow" />
                <TagCard child={'Vite'} bgColor="bg-my-yellow" />
                <TagCard child={'EmailJS'} bgColor="bg-my-dark" fontColor='text-my-yellow' />
                <TagCard child={'TailwindCSS'} bgColor="bg-my-cyan" fontColor='text-my-dark' />
              </div>
              <div className="flex justify-between gap-2 text-sm py-3">
                <div className="w-3/5 h-10 flex gap-3 justify-center items-center border-2 border-my-cyan text-my-dark font-semibold tracking-wide rounded-lg">
                  <p>View Project</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
                <div className="w-2/5 h-10 flex justify-center items-center text-center border-2 border-my-yellow font-semibold tracking-wide rounded-lg">
                  <p>Live Site</p>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT CARD */}
          <div className="container flex flex-col gap-4 px-2 py-5 border-my-dark/15 border-2 rounded-lg shadow-lg">
            {/* IMAGE */}
            <figure className="w-full h-35">
              <img 
                src="/assets/webcafe.webp"
                className="w-full h-full object-contain"
              />
            </figure>

            {/* CONTENT */}
            <div className="container flex flex-col gap-4 px-3">
              <h2 className="text-2xl md:text-3xl font-semibold text-pretty">Web Cafe Menu (OnProgress)</h2>
              <p className="text-sm">
                A Full Stack Web Project, planned to be a Cafe menu web based
                that serve a transparancy between customer and the menu order cycle.
              </p>
              <div className="flex-wrap flex gap-2 items-center text-xs">
                Tools: 
                <TagCard child={'React'} bgColor="bg-my-yellow" />
                <TagCard child={'Vite'} bgColor="bg-my-yellow" />
                <TagCard child={'ExpressJs'} bgColor="bg-my-dark" fontColor="text-my-yellow" />
                <TagCard child={'NodeJs'} bgColor="bg-my-yellow" />
                <TagCard child={'MongoDB'} bgColor="bg-my-cyan" fontColor='text-my-dark' />
                <TagCard child={'TailwindCSS'} bgColor="bg-my-cyan" fontColor='text-my-dark' />
              </div>
              <div className="flex justify-between gap-2 text-sm py-3">
                <div className="w-full h-10 flex gap-3 justify-center items-center border-2 border-my-cyan text-my-dark font-semibold tracking-wide rounded-lg">
                  <p>View Project</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </article>
    </section>
  )
}

export default AboutBrief;