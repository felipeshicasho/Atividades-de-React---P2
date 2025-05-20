import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Atividade01 from "./pages/Atividade01";
import Atividade02 from "./pages/Atividade02";

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/atividade01" element={<Atividade01 />} />
            <Route path="/atividade02" element={<Atividade02 />} />
        </Routes>
        </BrowserRouter>
    );
}