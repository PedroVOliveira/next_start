import React from "react";
import Header from "../components/Header";
const Layout: any = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <h1>Teste 2</h1>
    </>
  );
};

export default Layout;
