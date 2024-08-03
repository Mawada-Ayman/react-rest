
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import Contact from './Contact'
import About from './Aboute'
import Notfound from './Notfound'
import Api from './Api'

export default function App() {

  let routes = createBrowserRouter([
    { path:'/' , element:<Layout/> , children:[
      {index:true , element:<Home></Home>},
      {path:'/about' , element:<About></About>},
      {path:'/contact' , element:<Contact></Contact>},
      {path:'/api' , element:<Api/>},
      {path:'*' , element:<Notfound/>},
    ]}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
