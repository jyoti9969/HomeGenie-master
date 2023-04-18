


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';

import Lists from "./components/Lists";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<Lists />} />
      
        
      </Routes>
    </Router>

    // </div>
  );
}

export default App;
