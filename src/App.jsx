import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar.jsx';
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}

    </div>
  );
}

export default App;
