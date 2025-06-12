const Tooltip = ({ label = '', imgSize = 'size-20', imgClass = '', imgSrc = '' }) => {
  return (
    <div className="group relative flex flex-col items-center">
      <img 
        src={imgSrc}
        loading="lazy"
        className={`${imgSize} ${imgClass} rounded-full ring-2 p-2`} 
        alt={label}
      />
      <span
        className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 z-2
          bg-my-red/80 text-my-white font-semibold px-3 py-1 rounded-full shadow-lg
          opacity-0 scale-95 transition-all duration-200 ease-in-out
          group-hover:opacity-100 group-hover:scale-100"
      >
        {label}
      </span>
    </div>
  );
}

export default Tooltip;