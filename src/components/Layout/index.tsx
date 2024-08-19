import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";
import Footer from "../Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default Layout;
