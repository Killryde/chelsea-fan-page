import React from 'react';
import Home from './components/Home';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Fixtures from './components/Fixtures';


function App() {
  return (
    <div>
      <Home />
      <Nav />
      <Fixtures />
    </div>
  );
}

export default App;