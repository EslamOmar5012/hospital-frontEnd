import { useContext } from "react";
import { NursesContext } from "../contexts/nursesContext";

export function useNurses() {
  const context = useContext(NursesContext);
  if (context === undefined) {
    throw new Error("useNurses must be used within NursesProvider");
  }
  return context;
}
