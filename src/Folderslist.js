import React, { Component } from 'react';
import STORE from './STORE';

export default class Folders extends Component {
 render(){
   const folders = STORE.folders.map(obj => {
    return <li className='folders'>
            {obj.name}
           </li>
   })
   return (
     <ul className = 'folderlist'>
       {folders}
     </ul>
   )
 }
}