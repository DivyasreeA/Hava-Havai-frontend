import { Routes, Route } from "react-router-dom";
import Airports from "./pages/Airports";
import Dashboard from "./pages/Dashboard";
import Others from "./pages/Others";
import NotFound from "./pages/NotFound";
import AirportDetails from "./components/AirportDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Airports />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/others/*" element={<Others />} />
      <Route path="/airports" element={<Airports />} />
      <Route path="/details/:id" element={<AirportDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
