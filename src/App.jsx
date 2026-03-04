import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

const Layout = lazy(() => import("./components/layout/Layout").then((m) => ({ default: m.Layout })));
const Login = lazy(() => import("./pages/Login").then((m) => ({ default: m.Login })));
const Dashboard = lazy(() => import("./pages/Dashboard").then((m) => ({ default: m.Dashboard })));
const ScanDetail = lazy(() => import("./pages/ScanDetail").then((m) => ({ default: m.ScanDetail })));

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="aps-theme">
      <Router>
        <Suspense fallback={<div className="grid min-h-screen place-items-center text-sm text-gray-500 dark:text-gray-400">Loading...</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/scans" element={<Dashboard />} />
              <Route path="/scans/:id" element={<ScanDetail />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}
