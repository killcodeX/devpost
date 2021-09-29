import Navbar from "./navbar";
import Footer from "./footer";

export default function layout({ children, categories }: any) {
  return (
    <>
      <Navbar categories={categories} />
      {children}
      <Footer />
    </>
  );
}
