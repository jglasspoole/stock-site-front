import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Fresh52Interface from './components/Fresh52Interface'
import About from './components/pages/About';

import './App.css';

function App() {
  
  return (
    <Router>
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"></link>
      <div className="App">
        <div className="container">
          <Header></Header>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Fresh52Interface />
            </React.Fragment>
            )} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
