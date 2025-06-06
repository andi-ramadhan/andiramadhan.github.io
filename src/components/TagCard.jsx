const TagCard = ({ child, bgColor = '', fontColor = '' }) => {
  return (
    <span 
      className={`
        md:text-lg flex justify-center items-center px-4 py-1 font-semibold shadow-lg shadow-my-dark/20 rounded-lg
        ${bgColor} ${fontColor}
        `}
    >
      {child}
    </span>
  )
}

export default TagCard;