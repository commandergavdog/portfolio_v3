import { ReactLenis, useLenis } from 'lenis/react'

function Lenis() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      { /* content */ }
    </ReactLenis>
  )
}

export default Lenis;