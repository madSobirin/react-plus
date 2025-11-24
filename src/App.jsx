import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/auth/Login";
import RegisterPage from "./page/auth/Register";
import Index from "./page/Dashboard/Index";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <h1 className="text-2xl font-bold text-red-700">
        404 — Halaman Tidak Ditemukan
      </h1>
    </div>
  );
};
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Index />} />
      {/* ROUTE ERROR 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
