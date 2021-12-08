import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      {/* overflow-x-hidden */}
      <Footer />
    </>
  );
}

export default Layout;
