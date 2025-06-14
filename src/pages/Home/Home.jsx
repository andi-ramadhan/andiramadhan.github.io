import Footer from "../../components/Footer";
import AboutBrief from "./components/AboutBrief";
import ContactBrief from "./components/ContactBrief";
import Dashboard from "./components/Dashboard";

const Home = () => {
  return (
    <section className="flex flex-col w-[85%] md:w-[50%] py-20 gap-10">
      <Dashboard />
      <AboutBrief />
      <ContactBrief />
      <Footer />
    </section>
  )
}

export default Home;