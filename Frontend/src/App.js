import React from "react";
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";
import Instructor from "./Components/Pages/Instructor";
import SignUp from "./Components/Pages/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/Student' element={<LoginPage />} />
        <Route path='/Instructor' element={<Instructor/>}/>
        <Route path='/Signup' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}
export default App;