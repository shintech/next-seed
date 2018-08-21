/*   /components/Nav/Wrapper.js
*/
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;  
  background: purple;
  border-radius: 5px;
  overflow: hidden;

  nav {
    display: flex;
    margins: 0;
    list-style-type: none;
  }
  
  .icon {
    display: none;
  }
  
  nav a {
    line-height: 4.5ch;
    text-align: center;
    padding-left: 2ch;
    padding-right: 2ch;
    color: #FFF;
    text-decoration: none;
 }
  
  a:hover {
    background-color: violet;
    color: black
  }
  
  .sandbox {
    margin-left: auto;
  }
  
  .active {
    background-color: teal;
      color: white;
    
    :hover {
      background-color: steelblue;
      cursor: default;
      color: black
    }  
  }
  
@media screen and (max-width: 600px) {
  a:not(:first-child) {display: none;}
  a.icon {
   margin-left: auto;
   display: block;
  }
}

@media screen and (max-width: 600px) {
  .responsive {
    flex-direction: column;
    position: relative;
  }
  
  .responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  
  .responsive a {
    display: block;
  }
  
  .responsive a:not(:first-child):not(:last-child) {
    width: 100%;
  }  
  
  .responsive a:not(:last-child) {
    text-align: left;
  }
}  
`

export default Wrapper
