import CustomAppBar from "./AppBar/index.tsx";
import PersistentDrawerRight from "./SideBar/index.tsx";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <PersistentDrawerRight />
      {children}
    </>
  );
}
