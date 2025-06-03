const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center px-10 min-h-screen bg-white">
      <h2 className="text-4xl">About Me</h2>
      <p>Lorem ipsum dolor sit amet 
        consectetur adipiscing elit. Dolor sit amet
        consectetur adipiscing elit quisque faucibus.
      </p>
    </section>
  )
}
About.motion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { x: -1000 },
  transition: { duration: 0.5, ease: "easeInOut" }
}

export default About;