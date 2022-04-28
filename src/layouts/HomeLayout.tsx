import React from "react";
import { ILayout } from "./Layout";
import Header from "../components/Header";

export default function HomeLayout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
