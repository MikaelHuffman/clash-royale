import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Nav";
import "./css/Layout.css";

const Layout = () => {
  return (
    <div id="content">
      <Header />
      <Navigation />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
