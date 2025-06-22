/* importing css file*/
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';


function App() {

  /*usestate to open sidebar*/

    const[openSidebar,setSidebar]=useState(true);
  
  return (
    <>
     <Header setSidebar={setSidebar}></Header>
     <Body openSidebar={openSidebar}></Body>
    </>
  )
}

export default App
