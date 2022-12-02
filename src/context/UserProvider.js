import { createContext } from "react";
import usePersistedState from "../hooks/usePersistedState";

const UserContext = createContext({});

export function UserProvider({ children }) {
  const [theme, setTheme] = usePersistedState("theme", "light");
  const [token, setToken] = usePersistedState("token", null);
  const [user, setUser] = usePersistedState("user", null);
  
  const headers = {
    authorization: `${token ? `Bearer ${token}` : null}`,
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const data = {
    theme,
    changeTheme,
    token,
    user,
    headers,
  };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}

export default UserContext;
