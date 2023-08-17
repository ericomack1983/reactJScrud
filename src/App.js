import './App.css';
import Create from './components/create/create';
import Read from './components/read/read';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from './components/update/update';

function App() {
  return (<div>
  <BrowserRouter>
    <Routes>
            <Route path = "/" element={< Create/>}/>
            <Route path = "/read" element={< Read/>}/>
            <Route path = "/update" element={< Update/>}/>
           </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;