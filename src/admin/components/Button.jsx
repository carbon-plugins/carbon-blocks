export default function Button({ style = "", children, onClick, href = false, newTab = false }) {
  return href
    ? <a href={ href } className={ `button ${style}` } target={ newTab ? "_blank" : "_self"}>
      { children }
    </a>
    : <button className={ `button ${style}` } onClick={ onClick } target={ newTab ? "_blank" : "_self"}>
      { children }
    </button>
}
