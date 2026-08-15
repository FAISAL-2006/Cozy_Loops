import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function MainLayout() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <main
        className="bg-[#FAF6F1] min-h-screen"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "32px 24px",
        }}
      >
        <Outlet context={{ searchTerm }}/>
      </main>
    </>
  );
}
