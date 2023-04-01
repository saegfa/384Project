import React from "react";
import { BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";
import Instructor from "./Components/Pages/Instructor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/Student' element={<LoginPage />} />
        <Route path='/Instructor' element={<Instructor/>}/>
      </Routes>
    </Router>
  );
}
export default App;