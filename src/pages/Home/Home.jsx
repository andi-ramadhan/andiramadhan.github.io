import AboutBrief from "./components/AboutBrief";
import Dashboard from "./components/Dashboard";

const Home = () => {
  return (
    <section className="w-full min-h-dvh bg-my-white">
      <Dashboard />
      <AboutBrief />
    </section>
  )
}

export default Home;