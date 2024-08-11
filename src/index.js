import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Views/Home/Home"
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import AddPlant from './Views/AddPlant/AddPlant';
import UpdatePlant from './Views/UpdatePlant/UpdatePlant';



const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/add",
    element:<AddPlant/>
  },
  {
    path:"/update/:id",
    element:<UpdatePlant/>

  },
  
  
  {
    path:"*",
    element:<><h1>404 Not Found</h1></>
  }
])
root.render(
  
  <RouterProvider router={router}/>
  
);


