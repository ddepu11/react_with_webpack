import { RiEmotionSadLine } from 'react-icons/ri';
import styled from 'styled-components';

const ErrorScreen = () => (
  <Wrapper className='flex'>
    <h2>Sorry! the page you have requested does not exists.</h2>
    <span>
      <RiEmotionSadLine color='#1aafd4' />
    </span>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 10px;
  min-height: 78vh;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  margin-top: 10px;
  flex-direction: column;
  text-align: center;

  h2 {
    font-size: 1.6em;
    letter-spacing: 2px;
    font-weight: 400;
  }

  span {
    font-size: 4em;
    padding: 10px 0 0;
  }

  @media screen and (max-width: 400px) {
    h2 {
      font-size: 1.4em;
    }
  }
`;

export default ErrorScreen;
