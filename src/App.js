import React from 'react';
import { Button } from 'reactstrap';
import './App.css';

 class App extends React.Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      <div className="container">
        <div className="row">
        <div className="offset-2 col-md-8 text-center">
        <h1><b>Blog post populares</b></h1>
        <hr />
        </div>
        <div className="offset-2 col-md-6 mt-5">
        <span className="pr-1">Orden:</span>
        <Button outline color="primary" size="lg">Ascendente</Button>{' '}
        <Button color="primary" size="lg">Descendente</Button>{' '}
        </div>
        <div className="offset-2 col-md-6">
        
        </div>
        
        
        </div> 
      </div>
    );
  }
}

export default App;