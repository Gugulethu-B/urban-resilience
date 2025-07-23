import React from 'react';
import './App.css';
import FloodAlertSubscribe from './components/FloodAlertSubscribe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Green Leaf Dashboard</h1>
      </header>
      <main>
        <p>Your main content goes here.</p>
        <FloodAlertSubscribe />
      </main>
      <footer className="App-footer">
        <p>Footer content here.</p>
      </footer>
    </div>
  );
}

export default App;