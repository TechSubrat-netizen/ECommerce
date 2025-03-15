import { BrowserRouter, Routes,Route } from "react-router-dom"

import MainLayout from "./Components/MainLayout"
import Home from "./Pages/Home"
import NewArrival from "./Products/NewArrivals"
import Men from "./Products/Men"
import Women from "./Products/Women"
import Sales from "./Products/Sales"
import Accesories from "./Products/Accesories"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import ForgetPassword from "./Pages/Forgetpassword"



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/new-arrivals"  element={<NewArrival/>}></Route>
    <Route path="/men" element={<Men/>}></Route>
    <Route path="/women" element={<Women/>}></Route>
    <Route path="/sales" element={<Sales/>}></Route>
    <Route path="/accesories" element={<Accesories/>}></Route>
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/forgotpassword" element={<ForgetPassword/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
