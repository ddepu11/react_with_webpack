import styled from 'styled-components';

const AboutScreen = () => (
  <Wrapper>
    <p>
      This is a react web app, configured in webpack 5, with babel compiler also integrated eslint
      with airbnb style guide and added prettier for formating.
    </p>

    <div className='features_div'>
      <h3>Features:</h3>
      <ul>
        <li>
          <span>Linting with Eslint</span>
        </li>

        <li>
          <span>Formating with prettier</span>
        </li>

        <li>
          <span>Babel compiler for old browser support</span>
        </li>

        <li>
          <span>Hot reloding for developer mode</span>
        </li>

        <li>
          <span>Supports images</span>
        </li>

        <li>
          <span>Routing</span>
        </li>

        <li>
          <span>Highly configurable</span>
        </li>

        <li>
          <span>Mobile friendly</span>
        </li>

        <li>
          <span>it is Being hoted on netlify</span>
        </li>
      </ul>
    </div>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 10px 10px 20px;
  flex-direction: column;
  margin-top: 5px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  p {
    padding: 0 0 30px;
    font-size: 1.5em;
    letter-spacing: 1px;
    line-height: 1.6;
    margin-top: 15px;
  }

  .features_div {
    text-align: left;
    align-self: flex-start;
    padding: 0 13px;
    width: 100%;
    margin: 22px 0 00px;

    h3 {
      font-size: 1.5em;
      letter-spacing: 2px;
      text-transform: capitalize;
      font-weight: 400;
      margin-bottom: 20px;
    }

    ul {
      padding: 0 20px 0;

      span {
        display: inline-block;
        padding: 5px 15px;
        margin-bottom: 10px;
        font-size: 1em;
        letter-spacing: 1px;
        background: #555;
        transition: transform 0.5s ease;
      }

      span:hover {
        transform: scale(1.2) translateX(20px) translateY(-5px);
      }
    }
  }

  @media screen and (max-width: 475px) {
    p {
      padding: 0 0 15px;
      font-size: 1.2em;
      margin-top: 25px;
    }

    .features_div {
      padding: 0 5px;

      h3 {
        font-size: 1.4em;
      }

      ul {
        padding: 0 0px 0;

        span {
          padding: 5px 5px;
          margin-bottom: 12px;
        }

        span:hover {
          transform: scale(1.05) translateX(10px) translateY(-3px);
        }
      }
    }
  }
`;

export default AboutScreen;
