const About = () => {
  return (
    <section id="about" className="md:w-1/2 flex flex-col justify-center px-10 gap-3 min-h-screen bg-my-white text-my-black">
      <header className="flex items-center gap-2">
        <h1 className="text-3xl md:text-4xl text-balanced">
          Andi Fajar Ramadhan
        </h1>
        <h2 className="text-2xl md:text-3xl">
          as a Developer
        </h2>
      </header>
      <p className="text-base md:text-lg leading-relaxed">
        Started my programming journey by join a coding scolarship in 2024 with focus 
        on BackEnd & FrontEnd Development with JavaScript. Was interested in programming
        since in High School in 2019, my major at High School was Computer and Networking, 
        so I choosed to learn Backend first and involved in coding scholarship, following
        as well the Front-End scholarship after that.
      </p>
    </section>
  )
}

export default About;