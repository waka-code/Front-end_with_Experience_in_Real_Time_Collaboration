import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Login = lazy(() => import("./components/pages/Login"));
const Dashboard = lazy(() => import("./components/pages/Dashboard"));

function App() {
  return (
    <HashRouter>
      <SkeletonTheme baseColor="black" highlightColor="gray">
        <Suspense fallback={<Skeleton count={10} height={80} />}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </SkeletonTheme>
    </HashRouter>
  );
}

export default App;