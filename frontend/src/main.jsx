import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import Feelings from "./feelings.jsx";
import BreakUp from "./breakup.jsx";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}></Route>
      <Route path="/home" element={<App />}></Route>
      <Route path="/break" element={<BreakUp />}></Route>
      <Route path="/feelings" element={<Feelings />}></Route>
    </Routes>
  </BrowserRouter>

)
