import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();


const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authEmail, setAuthEmail] = useState({ email: "" , password: "", token: false});

  const logOut = () => {
    setAuthEmail({ email: "", password: "", token: false});
    navigate("/");
  }

  return (
    <GlobalContext.Provider value={{ authEmail, setAuthEmail, logOut }}>
      {children}
    </GlobalContext.Provider>
  );

};

export default GlobalProvider;