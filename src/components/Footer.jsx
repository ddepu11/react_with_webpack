import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <h2>developed by &copy;deepanshu_tiwari {new Date().getFullYear()}</h2>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 15px 0px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin-top: 10px;
  text-align: center;

  h2 {
    font-size: 1.2em;
    letter-spacing: 2px;
    font-weight: 200;
  }

  /* h2 {
    font-size: 1.2em;
    margin-top: 95px;
  } */
`;

export default Footer;
