import { Routes, Route } from "react-router-dom";
import Landing from "./Files/home";
// import Home from "./pages/Home";
import "./App.css";
import Payment from "./Files/Component/payment";
import { AppProvider } from "./Files/Context/appContext";
import Plans from "./Files/Component/plans";
import PlansPage from "./pages/plans";
// import PlansPage from "./pages/plans";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plans" element={<PlansPage />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
