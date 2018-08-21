import Link from 'next/link'
/*   /components/Nav/index.js
*/
import Wrapper from './Wrapper'

const Nav = ({ pathname }) =>
  <Wrapper>
    <nav id='topNav' className='topnav'>
      <Link href='/'><a className={!pathname || pathname === '/' || pathname === '' ? 'active' : null}>home</a></Link>
      <Link href='/#'><a className={pathname === '/sandbox' ? 'active sandbox' : 'sandbox'}>sandbox</a></Link>

      <a href='javascript:void(0);' className='icon' onClick={() => { myFunction() }}>
        <i className='fa fa-bars' />
      </a>
    </nav>
  </Wrapper>
export default Nav

function myFunction () {
  var x = document.getElementById('topNav')
  console.log(x.classList)
  if (x.classList.contains('responsive')) {
    x.classList.remove('responsive')
  } else {
    x.classList.add('responsive')
  }
}
