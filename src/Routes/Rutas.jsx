import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "../Layout/Header"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Services from "../Pages/Services"
import Garage_Door from "../Pages/Garage_Door"
import Gate_Repair from "../Pages/Gate_Repair"
import Contact_Us from "../Pages/Contact_Us"
import NotFount from "../Pages/notFount"

const Rutas = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route index path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/garage' element={<Garage_Door />} />
                    <Route path='/gate' element={<Gate_Repair />} />
                    <Route path='/contact' element={<Contact_Us />} />
                    <Route path='*' element={<NotFount/>}/>
                </Routes>
            </Router>
        </>
    )
}
export default Rutas