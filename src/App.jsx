/* importing css file*/
import { useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import sidebarStore from './utils/sidebarStore';
import {Provider} from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import Videodetails from './components/Videodetails';


const appRoute=createBrowserRouter([
    {
    path:"/",
    element:<Body></Body>,
    children:[{
      path:"/",
      element:<Maincontainer></Maincontainer>
    },
  {
    path:"/watch",
    element:<Videodetails></Videodetails>
  }]
    }
])

function App() {

  /*usestate to open sidebar*/

    // const[openSidebar,setSidebar]=useState(true);


  
  return (
    <>
    <Provider store={sidebarStore}>
     {/* <Header setSidebar={setSidebar}></Header>
     <Body openSidebar={openSidebar}></Body> */}
     <Header ></Header>
     {/* <Body ></Body> */}
     <RouterProvider router={appRoute}></RouterProvider>
     </Provider>
    </>
  )


  
}
export default App
