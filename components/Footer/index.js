/*   /components/Footer/index.js
*/
import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  
  border-radius: 10px;
  background: pink;
  align-items: center;
  
  a {
    padding-top: 2px;
    margin-left: auto;
    color: steelblue;
    text-decoration: none;
    padding-right: 2ch;

    i {
      margin-right: 4px;
    }
  }

  img {
    padding: 4px 0 0 3px ;
  }
`

export default Footer
