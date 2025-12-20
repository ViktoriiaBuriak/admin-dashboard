import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/public/LandingPage";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashboardLayout from "./components/layout/DashboardLayout";
import MainPage from "./pages/dashboard/MainPage";
import OrdersPage from "./pages/dashboard/OrdersPage";
import UsersPage from "./pages/dashboard/UsersPage";

function App() {
  return (
    <>
     <Routes>
      <Route element={<MainLayout/>}>
        <Route index element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={<MainPage/>}/>
        <Route path="orders" element={<OrdersPage/>}/>
        <Route path="users" element={<UsersPage/>}/>
      </Route>
     </Routes>
    </>
  );
}

export default App;
