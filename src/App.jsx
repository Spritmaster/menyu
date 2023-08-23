import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import MainLayout from './MainLayout'
import RecipeInfo from './pages/RecipeInfo'

const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
         <Route index element={<Home/>}/>
         <Route path='contact' element={<Contact/>}/>
         <Route path='recept' element={<RecipeInfo/>}/>
      </Route>
      )
  )

  return (
    <div >
      <RouterProvider router={routes} ></RouterProvider>
    </div>
  )
}

export default App