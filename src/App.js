



import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appStore from './utils/appStore';
import Body from './components/Body';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Browse from "./components/Browse"


// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <LandingPage/>,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
    ],
  },
  {
    path:"/browse",
    element:<Browse/>,
  }
]);



function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
        {/* <div className="App">
          <Body />
        </div> */}
      </RouterProvider>
    </Provider>
  );
}

export default App;






















































































// import './App.css';
// import Body from './components/Body';
// import { Provider } from 'react-redux';
// import appStore from "./utils/appStore"




// const routerApp = createBrowserRouter([
      
//   {

//     path:'/',
//     element: ,
//     children: [
       
//     ]

//   }
   
// ])






// function App() {


//   return (
//     <Provider store={appStore}>

//     <div className="App">
//     <Body/>  
//     </div>
//     </Provider>
//   );
// }

// export default App;
