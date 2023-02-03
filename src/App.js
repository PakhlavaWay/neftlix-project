import "./index.css";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';
import Signup from "./pages/Signup";
import Regform from "./pages/Regform";
import Plan from "./pages/Plan";
import Planform from "./pages/Planform";
import Payment from "./pages/Payment";




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signup/regform" element={<Regform />}/>
        <Route path="/signup/plan" element={<Plan />}/>
        <Route path="/signup/planform" element={<Planform />}/>
        <Route path="/signup/payment" element={<Payment />}/>
      </Routes>
    </div>
  );
}



export default App;
