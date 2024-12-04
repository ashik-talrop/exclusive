// App.js
import React from "react";
// import Header from "../src/components/includs/Header"; 
// import Spotlight from "../src/components/screens/Spotlight";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/screens/MainPage";
import ViewAll from "./components/screens/ViewAll";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/view-all" element={<ViewAll />} />
            </Routes>
        </Router>
    );
};

export default App;
