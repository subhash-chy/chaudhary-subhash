import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-hidden md:overflow-visible">{children}</main>
      {/* overflow-x-hidden */}
      <Footer />
    </>
  );
}

export default Layout;
