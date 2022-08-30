import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap';
import Header from './components/Header';
import Home from './components/Home';
import './components/Styles.scss';

function App() {
  return (
    <Container className="App">
      <Header /><br/>
      <Home />
    </Container>
  );
}

export default App;
