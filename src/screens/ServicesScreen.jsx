import styled from 'styled-components';
import bgImage from '../images/bg.jpg';

const ServicesScreen = () => (
  <Wrapper className='flex' bgImage={bgImage}>
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
  background: url(${(props) => props.bgImage}) no-repeat center center;
  background-size: cover;

  h2 {
    font-size: 2em;
    letter-spacing: 2px;
    text-transform: capitalize;
    font-weight: 600;
    color: #ffffff;
    background: rgba(0, 0, 0, 0.25);
    padding: 10px 20px;
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 1.5em;
    }
  }
`;

export default ServicesScreen;
