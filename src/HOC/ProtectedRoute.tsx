import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import type { JSX } from "react";

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const isUserLoggedIn = useSelector((state: any) => state.isUser);
   
    if (!isUserLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
