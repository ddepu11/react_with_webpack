import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';
import { useRef } from 'react';

const Navbar = () => {
  const innerDiv = useRef(null);
  const outerDiv = useRef(null);

  const handleMenu = () => {
    const innerDivHeight = innerDiv.current.getBoundingClientRect().height;

    const outerDivHeight = outerDiv.current.getBoundingClientRect().height;

    if (outerDivHeight === 0) {
      outerDiv.current.style.height = `${innerDivHeight}px`;
    } else {
      outerDiv.current.style.height = '0px';
    }
  };

  return (
    <Wrapper className='flex'>
      <div className='icon flex'>
        <div className='react flex'>
          <GrReactjs fontSize='3em' />
        </div>
        <span>Wabpack + React</span>
      </div>

      <div className='outer' ref={outerDiv}>
        <ul className='inner flex' ref={innerDiv}>
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
      </div>

      <div className='menu_bar flex'>
        <FaBars fontSize='2em' cursor='pointer' onClick={handleMenu} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  .icon {
    padding: 12px 10px;
    cursor: pointer;

    span {
      margin-left: 10px;
      font-size: 1.1em;
    }
  }

  .react {
    animation: spin 8s infinite linear;
    color: #1aafd4;
  }

  .inner {
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

  .menu_bar {
    display: none;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 746px) {
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    .outer {
      height: 0;
      overflow: hidden;
      transition: height 0.5s ease-in-out;
      width: 100%;
    }

    .inner {
      flex-direction: column;
      align-items: flex-start;
      padding: 0 0 8px;

      li,
      a {
        width: 100%;
      }

      li {
        a:hover {
          transform: scale(1.05) !important;
        }

        a {
          font-size: 1.1em;
        }
      }
    }

    .menu_bar {
      display: flex;
      justify-content: space-between;
      padding: 8px 8px;
      position: absolute;
      top: 10px;
      right: 5px;
    }
  }

  @media screen and (min-width: 746px) {
    .outer {
      height: auto !important;
    }
  }
`;

export default Navbar;
