import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appStore from './utils/appStore';
import Body from './components/Body';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import Browse from "./components/Browse"
import MainContainer from './components/MainContainer';
import SecondaryContainer from './components/SecondaryContainer';
import SearchGpt from './components/SearchGpt';


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
    children: [
      {
        path: "/browse",
        element:<> <MainContainer/>
      <SecondaryContainer/></>,
      },
      {
        path: "/browse/search-gpt",
        element:<SearchGpt/>,
      },
    ]
  },
]);



function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  );
}

export default App;




