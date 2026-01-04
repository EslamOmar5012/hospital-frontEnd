import { createContext, useReducer } from "react";

const AuthProvider = createContext();

const initialState = {
  isLoading: false,
  error: "",
  data: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "submit":
      return { ...state, isLoading: true, error: "" };
    case "logIn":
      return { ...state, isLoading: false, error: "", data: action.payload };
    case "logOut":
      return initialState;
    case "error":
      return { ...state, isLoading: false, error: action.payload, data: "" };
    default:
      return initialState;
  }
};

function AuthContext({ children }) {
  const [{ isLoading, error: errorMessage, data }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // const submit = () => {
  //   dispatch({ type: "submit" });
  // };

  // const logIn = (data) => {
  //   dispatch({ type: "logIn", payload: data });
  // };

  // const logOut = () => {
  //   dispatch({ type: "logOut" });
  // };

  // const error = (err) => {
  //   dispatch({ type: "error", payload: err });
  // };

  const submit = async (email, password) => {
    try {
      dispatch({ type: "submit" });
      const res = await fetch("http://127.0.0.1:3000/auth/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        dispatch({ type: "logIn", payload: data.message });
        return;
      }
      throw new Error(data.message || "can't logIn right now");
    } catch (err) {
      dispatch({ type: "error", payload: err.message });
    }
  };

  return (
    <AuthProvider.Provider value={{ isLoading, errorMessage, data, submit }}>
      {children}
    </AuthProvider.Provider>
  );
}

export { AuthContext, AuthProvider };
