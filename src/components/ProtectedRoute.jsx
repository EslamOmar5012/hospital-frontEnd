import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { data } = useAuth();

  if (data) return children;
  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;
