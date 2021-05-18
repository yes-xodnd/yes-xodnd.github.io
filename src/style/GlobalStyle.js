import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  @media (max-width: 768px) {
    :root {
      font-size: 12px;
    }
  }

  body {
    margin: auto;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    color: black;
    text-decoration: none;
    
    &:visited {
      color: inherit;
    }

    &:hover {
      color: ${ theme.color.primary }
    }
  }
`