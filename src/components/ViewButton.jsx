import { NavLink } from "react-router";

const ViewButton = ({ btnWidth = '', viewTo = '', btnHeight = 'h-10' }) => {
  if (typeof onClick === 'function') {
    return (
      <button
        type="button"
        className={`${btnWidth} ${btnHeight} cursor-pointer
        flex gap-2 justify-center items-center ring-2 ring-my-cyan font-semibold tracking-wide rounded-lg`}
      >
        <p className="text-my-cyan">View Project</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-3 text-my-cyan">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    );
  }
  return (
    <NavLink 
      to={viewTo} 
      className={`${btnWidth} ${btnHeight} cursor-pointer
      flex gap-2 justify-center items-center ring-2 ring-my-cyan font-semibold tracking-wide rounded-lg`}
    >
      <p className="text-my-cyan">View Project</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-3 text-my-cyan">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </NavLink>
  );
}

export default ViewButton;