import { useState } from "react";
// 1. Added BrowserRouter and Routes to imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Upload from "./components/Upload";
import Login from "./pages/Login";
import Chat from "./components/Chat";
import Register from "./pages/Register";
import "./index.css";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes: Only show Chat/Upload if authenticated */}
          <Route
            path="/"
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