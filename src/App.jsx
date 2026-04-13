import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Upload from "./components/Upload";
import Login from "./pages/Login";
import Chat from "./components/Chat";
import Register from "./pages/Register";
import Home from "./pages/Home";
import "./index.css";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/app"
            element={
              isAuth ? (
                <>
                  <Upload />
                  <Chat />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;