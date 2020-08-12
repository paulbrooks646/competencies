import React from 'react';
import './App.scss';
import Routes from './routes'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App" style={{width: `100vw`, height: `100vh`, display: 'flex'}}>
      <div style={{width: '10%'}}>
      <Nav/>
      </div>
      <div style={{width: '90%'}}>
      {Routes}
      </div>
    </div>
  );
}

export default App;
