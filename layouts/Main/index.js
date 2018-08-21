/*  /layouts/Main/index.js
*/
import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

const Main = ({ children, title = 'Default', pathname = '/' }) =>
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav pathname={pathname} />
    </header>

    <main>
      { children }
    </main>

    <Footer>
      <img src='/public/images/react.svg' width='25px' height='25px' />
      <a href='#'>
        <i className='far fa-copyright' />
        shintech.ninja
      </a>
    </Footer>
  </Wrapper>

export default Main
