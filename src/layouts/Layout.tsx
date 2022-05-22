import React from "react";
interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {

  return (
    <>
      {children}
    </>
  );
};

export default Layout;
