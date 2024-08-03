import "./App.css";
import AppContext from "./context/AppContext";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Workspace from "./pages/Workspace/Workspace";

function App() {
  return (
    <AppContext>
    <Navbar />
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
          </Routes>
    </AppContext>
  );
}

export default App;
