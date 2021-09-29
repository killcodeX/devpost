import Navbar from "../navbar";
import Footer from "../footer";
import { LayoutWrapper, MainWrapper } from "./style";

export default function layout({ children, categories }: any) {
  return (
    <LayoutWrapper>
      <Navbar categories={categories} />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </LayoutWrapper>
  );
}
