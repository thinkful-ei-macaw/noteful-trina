import React, { Component } from 'react';
import STORE from './STORE'
import Folderlist from './Folderslist'
import Notelist from './Notelist'
import { Route } from 'react-router-dom';
import Header from './Header'


class App extends Component {
  state = {
    notes: [],
    folders: [],
  }

  render(){
   return (
      <main>       
          <Route 
          path='/'
          component={Header}
          />
          <Folderlist />
          <Notelist />
      </main>
    ); 
  }   
}
  

export default App;
