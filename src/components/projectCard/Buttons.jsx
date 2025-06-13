import { Link } from "react-router";
import ViewButton from "../ViewButton";

const Buttons = ({ btnLWidth = '', btnRWidth = '', viewTo = '', liveTo = '', onViewClick }) => {
  return (
    <>
      <ViewButton 
        btnWidth={btnLWidth}
        viewTo={viewTo}
        onClick={onViewClick}
      />
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