import FundsPage from "./pages/FundsPage";
import LeadboardPage from "./pages/LeadboardPage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[#f2f2f2] min-h-screen mx-auto font-display">
      <Routes>
        <Route>
          <Route path="/" element={<LeadboardPage />} />
          <Route path="/funds" element={<FundsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
