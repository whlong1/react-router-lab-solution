import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)



/*
concepts

basics
- basic installation of react router

- a few static routes at the top level of an app.

- nav bar with links to demonstrate navigation

route params
- route parameters /items/:id

- array of objects. object.id 

- dynamic routes can display an individual item based on the route.

- nested routes.

- /items leading to an itemRouter that then funnels down to the items RESTful routes.

programmatic navigation




*/

