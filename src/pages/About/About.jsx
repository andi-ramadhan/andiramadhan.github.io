import Footer from "../../components/Footer";
import AboutMe from "./components/AboutMe";
import BackgroundExp from "./components/BackgroundExp";
import Experience from "./components/Experience";
import Tools from "./components/Tools";

const About = () => {
  return (
    <main id="about" className="flex flex-col w-[85%] md:w-[50%] py-25 md:py-40 gap-10 md:gap-20 z-50">
      <AboutMe />
      <Experience />
      <BackgroundExp />
      <Tools />
      <Footer />
    </main>
  )
}

export default About;