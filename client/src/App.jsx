import React from 'react'
import Book from './Book'
import Home from './Home'
import Update from './Update';
import Add from './Add';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home/>,
    },
    {
      path: "/update/:id",
      element:  <Update/>,
    },
    {
      path: "/add",
      element: <Add/>,
    },
  ]);
  return (
    <div>
   {/* <Book/> */}
   <RouterProvider router={router} />
  
    </div>
  )
}

export default App
