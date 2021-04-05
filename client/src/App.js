import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import DashboardScreens from './Screens/DashboardScreens';
import HomeScreen from './Screens/HomeScreens';
import LoginScreens from './Screens/LoginScreens';
import NotePageScreens from './Screens/NotePageScreens';
import RegisterScreens from './Screens/RegisterScreens';

function App() {
  return (
    <Router>
      <Header></Header>
      <Container>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/login" component={LoginScreens} ></Route>
          <Route path="/register" component={RegisterScreens} ></Route>
          <Route path="/dashboard" component={DashboardScreens} ></Route>
          <Route path="/notes" component={NotePageScreens} ></Route>
      </Container>
      </Router>
  );
}

export default App;
