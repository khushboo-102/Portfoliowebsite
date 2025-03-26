import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";  
import Nav from "./Nav";  
import Contact from "./Contact";  
import Project from "./Project"

function App() {
  return (
    <Router>

      <Nav />  

      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/Project" element={<Project />} />  
      </Routes>
    </Router>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home";  
// import Contact from "./Contact";  

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />  
//         <Route path="/contact" element={<Contact />} />  
//       </Routes>
//     </Router>
//   );
// }

// export default App;


