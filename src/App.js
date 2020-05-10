import React from 'react';
import './App.css';
import navigationData from './utils/navigation.json';
import NavigationBar from './components/navigationBar/NavigationBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar navigationData={navigationData.cities} />
      </header>
    </div>
  );
}

export default App;
