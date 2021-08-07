import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

const App = () => (
  <Wrapper>
    <Router>
      <Navbar />
    </Router>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 5px 5px;
`;

export default App;
