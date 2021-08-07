import styled from 'styled-components';

const ContactScreen = () => (
  <Wrapper className='flex'>
    <div className='contact_div flex'>
      <div className='row flex'>
        <h2>Email:</h2>
        <span>some.one11@gmail.com</span>
      </div>

      <div className='row flex'>
        <h2>Github:</h2>
        <span>https://github.com</span>
      </div>

      <div className='row flex'>
        <h2>Linkedin:</h2>
        <span>https://www.linkedin.com</span>
      </div>

      <div className='row flex'>
        <h2>Twitter:</h2>
        <span>https://www.twitter.com</span>
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 5px 5px;
  height: 85vh;
  margin-top: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  .contact_div {
    flex-direction: column;
    width: 100%;

    .row {
      justify-content: space-between;
      width: 70%;
      padding: 15px 10px;
      border: 1.1px dashed #2c2c2c;
      border-bottom: 0;
      border-radius: 5px;
      margin-bottom: 20px;
    }

    h2 {
      font-weight: 400;
      font-size: 1.3em;
    }

    span {
      font-size: 1em;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 745px) {
    .contact_div {
      flex-direction: column;

      .row {
        width: 95%;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .contact_div {
      flex-direction: column;

      .row {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px 10px;
      }

      h2 {
        margin-bottom: 10px;
      }
    }
  }
`;

export default ContactScreen;
