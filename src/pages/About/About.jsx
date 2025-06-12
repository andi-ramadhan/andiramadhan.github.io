import AboutMe from "./components/AboutMe";
import BackgroundExp from "./components/BackgroundExp";
import Experience from "./components/Experience";
import Tools from "./components/Tools";

const About = () => {
  return (
    <main id="about" className="flex flex-col w-[85%] md:w-[40%] py-25 md:py-40 gap-20">
      <AboutMe />
      <Experience />
      <BackgroundExp />
      <Tools />
    </main>
  )
}

export default About;