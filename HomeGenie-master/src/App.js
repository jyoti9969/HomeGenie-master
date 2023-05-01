


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';

import Lists from "./components/Lists";
import Admin from "./components/Admin/Admin";
import MainMenue from "./components/MainMenue";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import MyList from "./components/Admin/MyList";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainMenue />} />
        <Route path="/list" element={<Lists />} />
        <Route path="/homepage" element={<HomePage />} />

         <Route path="/admin" element={<Admin />} />
         <Route path="/sign-in" element={<SignIn />} />
         <Route path="/sign-up" element={<SignUp />} />
         <Route path="/my-list" element={<MyList />} />
      </Routes>
    </Router>

    // </div>
  );
}

export default App;
