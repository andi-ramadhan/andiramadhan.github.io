import AboutBrief from "./components/AboutBrief";
import ContactBrief from "./components/ContactBrief";
import Dashboard from "./components/Dashboard";

const Home = () => {
  return (
    <section className="w-full min-h-dvh bg-my-white">
      <Dashboard />
      <AboutBrief />
      <ContactBrief />
    </section>
  )
}

export default Home;