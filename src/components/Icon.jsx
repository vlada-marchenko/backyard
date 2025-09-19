function Icon({ name, className }) {
  return (
    <svg className={className}>
      <use href={`#${name}`} />
    </svg>
  )
}

export default Icon