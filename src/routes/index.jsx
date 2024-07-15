import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Register from "../pages/Register";
import Notfound from "../pages/Notfound";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />

                <Route path="*" element={<Notfound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;