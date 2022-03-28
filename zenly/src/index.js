import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './Firebase';
import Profile from "./component/Profile"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <App/> */}
    <BrowserRouter>
      <Routes>
        <Route path='' element={<App/>}></Route>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
