import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/app.css"

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
