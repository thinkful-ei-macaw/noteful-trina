import React from 'react';
import logo from './logo.svg';
import './App.css';
import STORE from './STORE'
import Folders from '/Folders'
import Notes from './Notes'


function App() {
  state = {
    store: STORE,
  }

  return (
    <main>
      <h1>Noteful!</h1>
    </main>
  );
}

export default App;
