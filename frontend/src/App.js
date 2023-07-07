// imports
import { Routes, Route } from "react-router-dom";

// pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
};

export default App;