import { Routes, Route } from "react-router-dom";
import RegisterPage from "./page/Register";
import LoginPage from "./page/Login";

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
      {/* ROUTE ERROR 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
