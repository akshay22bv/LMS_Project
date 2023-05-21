import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import LoginPage from "./Views/LoginPage";
import SignInPage from "./Views/SignInPage";
import UsersPage from "./Views/UsersPage";
import VideosPage from "./Views/VideosPage";
import VideoUploadCloudflare from "./Views/VideoUpload";
// import VideoUploadCloudflare from "./Views/VideoUpload";

export const domain = "http://192.168.1.7:8800";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/videoupload" element={<VideoUploadCloudflare />} />
      </Routes>
    </div>
  );
}

export default App;
