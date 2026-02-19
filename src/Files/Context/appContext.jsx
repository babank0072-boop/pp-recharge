import { createContext, useContext, useEffect, useState } from "react";

// Create Context
const AppContext = createContext(null);

// Load from LocalStorage safely
const getStorageData = (key, defaultValue) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => getStorageData("user", null));
  const [theme, setTheme] = useState(() => getStorageData("theme", "light"));
  const [cart, setCart] = useState(() => getStorageData("cart", []));

  // ✅ AUTO SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        theme,
        setTheme,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// ✅ Custom Hook
export function useAppContext() {
  return useContext(AppContext);
}
