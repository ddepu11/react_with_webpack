import styled from 'styled-components';

const ServicesScreen = () => (
  <Wrapper className='flex'>
    <h2>Just a Simple services screen, nothing else.</h2>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 5px 5px;
  height: 86vh;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  text-align: center;

  h2 {
    font-size: 1.8em;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: 200;
  }
`;

export default ServicesScreen;
