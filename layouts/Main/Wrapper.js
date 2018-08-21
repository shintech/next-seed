/*  /layouts/Main/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  min-height: 98vh;
  flex-direction: column;
  main {
    flex: 1;
    padding: 1ch;
   
    ul {
      list-style: none;
      padding-left: 0px;
   }
  
    @media (max-width: 750px) {
      padding: 1ch 2ch 2ch 2ch;
    }

    h1 {
      color: #222;
      font-weight: bold;
      font-size: 1.75rem;
      line-height: 35px;
      font-family: "PT Sans", sans-serif;
      text-transform: capitalize;
      margin: 0;
    }

    p {
      line-height: 28px;
      color: #666;
      font-family: "PT Sans", sans-serif;
    }      
  }
  
  
`

export default Wrapper
