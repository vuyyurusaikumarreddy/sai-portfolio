export default function ScrollLink({ to, offset = -80, className, children, onClick }) {
  const handleClick = (e) => {
    e.preventDefault()
    const el = document.getElementById(to)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
