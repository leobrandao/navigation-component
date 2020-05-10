import React from 'react';
import './App.css';
import NavigationBar from './components/navigationBar/NavigationBar';
import navigationData from './utils/navigation.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar navigationData={ navigationData.cities } />
      </header>
    </div>
  );
}

export default App;
