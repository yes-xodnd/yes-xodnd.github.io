import styled from 'styled-components'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

function Home() {
  const linkRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      linkRef.current.dispatchEvent(new Event('click', { bubbles: true }));
    }, 1000)
    
  })

  return (
    <div>
      <Notice>
        메인 페이지 구현 작업중입니다. <br/>
        1초 후 글목록으로 리다이렉트 됩니다.

        <Link href='/posts'>  
          <div ref={linkRef} ></div>
        </Link>
      </Notice>
    </div>
  )
}
export default Home

const Notice = styled.h1`
  text-align: center;
`