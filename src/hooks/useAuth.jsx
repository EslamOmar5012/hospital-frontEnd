import { useContext } from "react";
import { AuthProvider } from "../contexts/authContext";

export const useAuth = () => {
  const context = useContext(AuthProvider);
  if (!context)
    throw new Error("You should use authContext inside its boundry");
  return context;
};
