import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <Wrapper>
    <ul className='flex'>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
        <Link to='/about'>About</Link>
      </li>

      <li>
        <Link to='/contact'>Contact</Link>
      </li>

      <li>
        <Link to='/services'>Services</Link>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  ul {
    justify-content: space-between;

    a {
      padding: 10px 20px;
      transition: transform 0.5s ease;
    }

    a:hover {
      transform: scale(1.1);
      background: #333;
    }

    a:last-child:hover {
      transform: translateX(-2px) scale(1.1);
      background: #333;
    }

    a {
      font-size: 1.2em;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
`;

export default Navbar;
