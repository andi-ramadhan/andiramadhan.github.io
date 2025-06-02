const Dashboard = () => {
  return (
    <section id="home" className="flex justify-center items-center min-h-screen w-full bg-white">
      <div className="flex flex-col justify-center gap-2 w-[80%] md:w-[40%]">
        <h1 className="text-4xl md:text-5xl">Hi There!</h1>
        <h3 className="text-xl text-amber-600 font-semibold">I'm Andi Fajar Ramadhan</h3>
        <p className="text-lg">
          Commonly called as Andy or Ara, 4 years experienced in 
          IT Support Specialist and also an Aspiring Software Engineer
          with expertise in FrontEnd Web Development and BackEnd Development.
        </p>
        <p>Current Tech Stack</p>
        <a>React.js, TailwindCSS, Express.js,</a>
      </div>
    </section>
  )
}

export default Dashboard;