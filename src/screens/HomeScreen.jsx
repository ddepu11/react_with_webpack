import styled from 'styled-components';
import { SiWebpack, SiBabel, SiJavascript, SiCss3, SiPrettier, SiEslint } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';

const HomeScreen = () => (
  <Wrapper>
    <h2>A react web appliction configured in webpack 5</h2>

    <h3>Tools that i have used:-</h3>
    <div className='tools_icon flex'>
      <div className='webpack'>
        <SiWebpack />

        <div className='cover'>
          <span>Webpack</span>
        </div>
      </div>

      <div className='babel'>
        <SiBabel />
        <div className='cover'>
          <span>babel</span>
        </div>
      </div>

      <div className='js'>
        <SiJavascript />
        <div className='cover'>
          <span>JavaScript</span>
        </div>
      </div>

      <div className='html5'>
        <FaHtml5 />
        <div className='cover'>
          <span>Html5</span>
        </div>
      </div>

      <div className='css3'>
        <SiCss3 />
        <div className='cover'>
          <span>CSS3</span>
        </div>
      </div>

      <div className='prettier'>
        <SiPrettier />
        <div className='cover'>
          <span>prettier</span>
        </div>
      </div>

      <div className='eslint'>
        <SiEslint />
        <div className='cover'>
          <span>eslint</span>
        </div>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 10px 10px;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  h2 {
    text-align: center;
    font-size: 1.6em;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: 400;
    margin-top: 20px;
  }

  h3 {
    font-size: 1.3em;
    letter-spacing: 2px;
    font-weight: 300;
    margin-top: 50px;
    padding: 0 0 0 10px;
  }

  .tools_icon {
    padding: 10px 0 50px;
    margin-top: 20px;
    font-size: 8em;
    flex-wrap: wrap;
    gap: 50px 30px;

    > * {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(23, 118, 182, 0.3) 0px 1px 2px 0px, rgba(12, 118, 199, 0.15) 0px 2px 6px 2px;
      padding: 15px;
      position: relative;
      overflow: hidden;
      transition: transform 0.5s ease;

      .cover {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #1aafd4;
        opacity: 0.6;
        transform: translateY(100%) translateX(-11%) rotate(80deg);
        transition: transform 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        text-align: center;

        span {
          font-size: 18px;
          color: #aaa;
          font-weight: 600;
          text-transform: uppercase;
          left: 15px;
          background: #181717;
          width: 100%;
          letter-spacing: 2px;
        }
      }
    }

    > *:hover .cover {
      transform: translateY(0%);
    }

    > *:hover {
      transform: scale(1.1) translateY(-10px);
    }
  }

  @media screen and (max-width: 655px) {
    h2 {
      margin-top: 25px;
    }

    .tools_icon {
      padding: 10px 0;
      margin-top: 60px;
      font-size: 8em;
      flex-wrap: wrap;
      gap: 50px 50px;
    }
  }
`;

export default HomeScreen;
