import { useState } from "react";
import { Header } from "./components/Header/Header.jsx";

export function App() {
  return (
    <>
      <Header name={"My Storage"} groups={["DVDs", "Disks", "CDs"]} />
      <h1>Hello World!</h1>
    </>
  );
}
