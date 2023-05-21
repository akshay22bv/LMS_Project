import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import LoginPage from "./Views/LoginPage";
import SignInPage from "./Views/SignInPage";
import UsersPage from "./Views/UsersPage";
// import VideoUploadCloudflare from "./Views/VideoUpload";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/users" element={<UsersPage />} />
        {/* <Route path="/videoupload" element={<VideoUploadCloudflare />} /> */}
      </Routes>
    </div>
  );
}

export default App;
