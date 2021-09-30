import Navbar from "../navbar";
import Footer from "../footer";
import Sidebar from "../sideBar";
import { LayoutWrapper, MainWrapper } from "./style";

export default function layout({ children, categories }: any) {
  return (
    <LayoutWrapper>
      <Navbar categories={categories} />
      <Sidebar/>
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </LayoutWrapper>
  );
}
