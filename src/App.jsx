import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainLayout from "./components/MainLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
     <Routes>
      <Route element={<MainLayout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
     </Routes>
    </>
  );
}

export default App;
