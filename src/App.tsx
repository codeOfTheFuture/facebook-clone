import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProtectedRoutes from "./components/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<Home />} path="/" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
};

export default App;
