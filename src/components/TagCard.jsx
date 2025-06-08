const TagCard = ({ child, className = '' }) => {
  return (
    <span 
      className={`
        md:text-lg flex justify-center items-center px-4 py-1 font-semibold shadow-lg shadow-my-dark/20 rounded-lg
        ${className}
        `}
    >
      <p>{child}</p>
    </span>
  )
}

export default TagCard;