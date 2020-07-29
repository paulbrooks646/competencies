import React from 'react';
import './App.scss';
import Routes from './routes'

function App() {
  return (
    <div className="App" style={{width: `100vw`, height: `100vh`}}>
      {Routes}
    </div>
  );
}

export default App;
