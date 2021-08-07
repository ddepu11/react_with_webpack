import styled from 'styled-components';
import { SiWebpack, SiBabel, SiJavascript, SiCss3, SiPrettier, SiEslint } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';

const HomeScreen = () => (
  <Wrapper>
    <h2>A react web appliction configured in webpack 5</h2>

    <div className='tools_icon flex'>
      <SiWebpack />
      <SiBabel />
      <SiJavascript />
      <FaHtml5 />
      <SiCss3 />
      <SiPrettier />
      <SiEslint />
    </div>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 10px 10px;
  min-height: 85vh;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  text-align: center;

  h2 {
    font-size: 1.6em;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: 400;
    margin-top: 50px;
  }

  .tools_icon {
    padding: 10px 0;
    margin-top: 100px;
    font-size: 8em;
    flex-wrap: wrap;
    gap: 50px 50px;
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
