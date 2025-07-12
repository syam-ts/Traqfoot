import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Dashboard from "./pages/Dashboard.tsx";
import About from "./pages/About.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Layout from "./components/Layout.tsx";

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
