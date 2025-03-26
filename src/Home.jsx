import React from "react";
import Nav from "./Nav";
import Container from "./Container";
// import Project from "./Project";  // ✅ Project Component Import किया

function Home() {
  return (
    <>
      {/* <Nav /> */}
      <Container />
      {/* <Project />  ✅ Project Component को Include किया */}
    </>
  );
}

export default Home;
