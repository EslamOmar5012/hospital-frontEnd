import { useContext } from "react";
import { ConsultantsContext } from "../contexts/consultantsContext";

export const useConsultants = () => {
  const context = useContext(ConsultantsContext);
  if (!context)
    throw new Error("can't use consultants context outside its boundries");
  return context;
};
