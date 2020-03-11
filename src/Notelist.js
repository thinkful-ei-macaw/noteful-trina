import React, { Component } from 'react';
import STORE from './STORE';

export default class Notes extends Component {
  
  render(){
    const noteList = STORE.notes.map(obj => {
      return (<li class='notes'>
               <div class='notename'>
                {obj.name}
                </div>
                <div class='notedate'>
                {obj.modified}
               </div>              
             </li>)
    })
    return (
      <ul className='notelist'>
      <li>{noteList}</li>
      </ul>
    )
  }
}