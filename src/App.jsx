/* importing css file*/
import { useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import sidebarStore from './utils/sidebarStore';
import {Provider} from 'react-redux';




function App() {

  /*usestate to open sidebar*/

    // const[openSidebar,setSidebar]=useState(true);


  
  return (
    <>
    <Provider store={sidebarStore}>
     {/* <Header setSidebar={setSidebar}></Header>
     <Body openSidebar={openSidebar}></Body> */}
     <Header ></Header>
     <Body ></Body>
     </Provider>
    </>
  )
}

export default App
