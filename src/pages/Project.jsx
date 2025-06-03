const Project = () => {
  return (
    <section id="project" className="flex justify-center items-center min-h-screen bg-white">
      <h1 className="text-4xl md:text-6xl">Project</h1>
    </section>
  )
}
Project.motion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { y: 1000 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default Project;