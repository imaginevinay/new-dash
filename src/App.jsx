import "./App.css";
import AppContext from "./context/AppContext";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <AppContext>
    <Navbar />
    <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/notifications" element={<Notifications />} /> */}
            {/* <Route path="/my-applications" element={<MyApplications />} />
            <Route path="/view-details/:id" element={<Details />} /> */}
          </Routes>
    </AppContext>
  );
}

export default App;
