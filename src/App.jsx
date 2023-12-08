import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import StudentPage from "./pages/StudentPage";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<StudentPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
