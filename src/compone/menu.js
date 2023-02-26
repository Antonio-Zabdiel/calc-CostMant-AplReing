import {useState} from "react";
import { Routes, Route , HashRouter } from "react-router-dom";

const Menu = () => {
    return(
            <>
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<p>eliga un calculo</p>}></Route>
                    <Route path='/mantenimiento' element={<Mantenimiento></Mantenimiento>}></Route>
                    <Route path='/reingenieria' element={<Reingenieria></Reingenieria>}></Route>
                    <Route path='/ambas' element={<Ambas></Ambas>}></Route>
                </Routes>
            </HashRouter>
            </>
            )
}

export default Menu;