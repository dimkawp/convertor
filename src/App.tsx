import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import HomePage from './pages/home';
import ListPage from './pages/list';
// styles
import 'antd/dist/antd.min.css';
import './assets/main.scss';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/list" element={<ListPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
