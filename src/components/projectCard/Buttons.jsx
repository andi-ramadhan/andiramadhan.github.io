import { Link, NavLink } from "react-router";

const Buttons = ({ btnLWidth = '', btnRWidth = '', viewTo = '', liveTo = '' }) => {
  return (
    <>
      <NavLink 
        to={'/project'} 
        className={`${btnLWidth} h-10 
        flex gap-2 justify-center items-center ring-2 ring-my-cyan font-semibold tracking-wide rounded-lg`}
      >
        <p className="text-my-cyan">View Project</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-3 text-my-cyan">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </NavLink>
      <Link
        to={liveTo}
        target="_blank"
        className={`${btnRWidth} h-10 
        flex justify-center items-center ring-2 ring-my-red/60 font-semibold tracking-wide rounded-lg`}
      >
        <p className="text-my-red">Live Site</p>
      </Link>
    </>
  );
}

export default Buttons;