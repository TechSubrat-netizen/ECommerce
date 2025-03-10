import { BrowserRouter, Routes,Route } from "react-router-dom"

import MainLayout from "./Components/MainLayout"
import Home from "./Pages/Home"



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
