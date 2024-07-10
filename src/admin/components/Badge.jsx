export default function Badge({text, style}) {
  return <span className={ `badge ${style}` }>
    { text }
  </span>
}
