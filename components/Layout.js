import Footer from "./Footer";
import Header from "./Header";
function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-hidden md:overflow-visible">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
