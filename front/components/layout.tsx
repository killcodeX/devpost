import Navbar from "./navbar";

export default function layout({ children, categories }: any) {
  return (
    <>
      <Navbar categories={categories} />
      {children}
    </>
  );
}
