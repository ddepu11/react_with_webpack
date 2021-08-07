import styled from 'styled-components';

const App = () => (
  <Wrapper>
    <div className='buttons'>
      <h1>Hello </h1>

      <ul>
        <li>
          <p>Helloo Wordl</p>
        </li>
        <li>
          <p>Aaasha</p>
        </li>
        <li>
          <button type='submit'>Submit</button>
        </li>
      </ul>
    </div>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 25px 0;
`;

export default App;
