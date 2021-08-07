import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';
import ServicesScreen from '../screens/ServicesScreen';

const App = () => (
  <Wrapper>
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <HomeScreen />
        </Route>

        <Route exact path='/about'>
          <AboutScreen />
        </Route>

        <Route exact path='/contact'>
          <ContactScreen />
        </Route>

        <Route exact path='/services'>
          <ServicesScreen />
        </Route>
      </Switch>
    </Router>
  </Wrapper>
);

const Wrapper = styled.main`
  padding: 5px 5px;
`;

export default App;
