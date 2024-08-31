import "./App.css";
import AppContext from "./context/AppContext";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Workspace from "./pages/Workspace/Workspace";

function App() {
  return (
    <AppContext>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Navbar />
        <div style={{flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
          </Routes>
        </div>
      </div>
    </AppContext>
  );
}

export default App;
