import Link from 'next/link'
import { useEffect, useRef } from 'react'

function Home() {
  const linkRef = useRef(null);

  useEffect(() => {
    linkRef.current.dispatchEvent(new Event('click', { bubbles: true }));
  })

  return (
    <Link href='/posts'>  
      <div ref={linkRef} ></div>
    </Link>
  )
}
export default Home