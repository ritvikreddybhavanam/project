import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage.jsx";
import Login from "./pages/Login.jsx";
import Support from "./pages/Support.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/support" element={<Support />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;