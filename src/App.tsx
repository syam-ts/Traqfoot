import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/sensor/Dashboard.tsx";
import About from "./pages/common/About.tsx";
import Login from "./pages/user/Login.tsx";
import Signup from "./pages/user/Signup.tsx";
import Layout from "./components/common/Layout.tsx";
import AddSensor from "./pages/sensor/AddSensor.tsx";

const router = createBrowserRouter([
 {
  element: <Layout />,
  children:[
    {
      
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/addSensor",
    element: <AddSensor />,
  },
  {
    path: "/about",
    element: <About />
  }
  ]
 }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
