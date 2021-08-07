import styled from 'styled-components';

const Navbar = () => (
  <Wrapper>
    <ul className='flex'>
      <li>
        <a href='/'>Home</a>
      </li>

      <li>
        <a href='/'>About</a>
      </li>

      <li>
        <a href='/'>Contact</a>
      </li>

      <li>
        <a href='/'>Services</a>
      </li>
    </ul>
  </Wrapper>
);

const Wrapper = styled.nav`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  ul {
    justify-content: space-between;
    /* background: #555; */

    li {
      padding: 10px 20px;
      transition: transform 0.5s ease;
    }

    li:hover {
      transform: scale(1.1);
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
