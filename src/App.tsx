import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ CORRECT

import Dashboard from "./pages/sensor/Dashboard.tsx";
import About from "./pages/common/About.tsx";
import Login from "./pages/user/Login.tsx";
import Signup from "./pages/user/Signup.tsx";
import Layout from "./components/common/Layout.tsx";
import AddSensor from "./pages/sensor/AddSensor.tsx";
import ViewSensor from "./components/sensor/SensorView.tsx";
import Profile from "./pages/user/Profile.tsx";
import ProtectedRoute from "./HOC/ProtectedRoute.tsx";
import GuestRoute from "./HOC/GuestProtectedRoute.tsx";
import BasicForm from "./pages/user/Test.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <GuestRoute>
            <Signup />
          </GuestRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/test",
        element: (
          <ProtectedRoute>
            <BasicForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addSensor",
        element: (
          <ProtectedRoute>
            <AddSensor />
          </ProtectedRoute>
        ),
      },
      {
        path: "/sensor/:sensor_id",
        element: (
          <ProtectedRoute>
            <ViewSensor />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
