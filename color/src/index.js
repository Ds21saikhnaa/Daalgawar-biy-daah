import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  Project, Child } from './component';
ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
            <Routes>
                <Route path="/:color/:color1" element={<Project />}/>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);