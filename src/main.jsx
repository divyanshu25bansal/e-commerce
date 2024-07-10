import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from './Components/Hero/Hero.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Sign_in from './Components/Sign-in/Sign_in.jsx';
import CategoryProducts from './Components/CategoryProducts/CategoryProducts.jsx';
import StoreApp from './Context.jsx';
import Bag from './Components/Bag/Bag.jsx';

const router = createBrowserRouter([
  {path:'/' , element:<App/>,
    children:[
      {path:"/" , element:<Hero/>},
      {path:"/shop" , element:<Shop/>},
      {path:"/sign-in" , element:<Sign_in/>},
      {path:"/category/:id" , element:<CategoryProducts/>},
      {path:"/bag" , element:<Bag/>}
    ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <StoreApp>
   <RouterProvider router={router}/>
   </StoreApp>
  </React.StrictMode>,
)
