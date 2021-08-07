import styled from 'styled-components';

const AboutScreen = () => (
  <Wrapper className='flex'>
    <p>
      This is a react web app, configured in webpack 5, with babel compiler also integrated eslint with airbnb style
      guide and added prettier for formating.
    </p>

    <h2>Developed by &copy;deepanshu tiwari {new Date().getFullYear()}</h2>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 10px 10px;
  height: 90vh;
  flex-direction: column;
  margin-top: 10px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  p {
    padding: 0 0 30px;
    font-size: 1.2em;
    letter-spacing: 1px;
    line-height: 1.6;
  }

  h2 {
    font-size: 2em;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: 200;
  }
`;

export default AboutScreen;
