import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import { SidebarThree } from "./components/Navigation/Sidebar";

function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    values: [65, 59, 80, 81, 56, 55, 40],
  };
  return (
    <>
      <div className="flex h-screen">
        <SidebarThree />
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard data={data} />} />
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
