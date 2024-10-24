import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import {routes} from "./utils/routes"
import Home from "./Home"
import Contacto from "./Contacto"
import Beer from "./Beer"

function App() {
  return (
   <>
    <Navbar/>
    {/* Solo marca los enrutamientos de la app, no signidfica que renderizara nada */}
    <Routes>
      <Route path={routes.home} element={<Home/>} />
      <Route path={routes.contacto} element={<Contacto/>} />
      <Route path={routes.beer+`/:id`} element={<Beer/>}/>
      <Route path={routes.notFound} element={<h1>Error 404 - Page not Found</h1>} />
      

    </Routes>
   </>
  )
}

export default App
