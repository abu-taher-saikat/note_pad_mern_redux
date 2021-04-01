import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreens';


function App() {
  return (
    <Router>
      <Header></Header>
      <Container>
          <Route path="/" component={HomeScreen} exact></Route>
      </Container>
      </Router>
  );
}

export default App;
