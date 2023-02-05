import "./index.css";
import MainPage from "./pages/guest/MainPage";
import Login from "./pages/guest/Login";
import { Routes, Route } from 'react-router-dom';
import Signup from "./pages/guest/Signup";
import Regform from "./pages/guest/Regform";
import Plan from "./pages/guest/Plan";
import Planform from "./pages/guest/Planform";
import Payment from "./pages/guest/Payment";




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
