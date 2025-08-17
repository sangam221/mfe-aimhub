import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const containerStyles = {
  padding: "20px",
  backgroundColor: "#f0f0f0",
  border: "1px solid #ccc",
  margin: "1rem",
  borderRadius: "8px",
};

const hostDataStyles = {
  padding: "10px",
  backgroundColor: "#e0e0e0",
  border: "1px solid #bbb",
  borderRadius: "4px",
  marginTop: "24px",
};

const Home = () => (
  <div style={containerStyles}>
    <h1>Home</h1>
    <p>Welcome to the MFE AIMHUB Host Application.</p>
  </div>
);
const Details = () => (
  <div style={containerStyles}>
    <h1>Details</h1>
    <p>Here are some details about the AIMHUB application.</p>
  </div>
);

const App = ({ userName = 'Guest'}) => (
    
        <div style={containerStyles}>
        <h1>MFE AIMHUB Host Application</h1>
        <div style={hostDataStyles}>
            <p><strong>Host Data:</strong></p>
            <p>User Name: {userName}</p>
            <p>Host Application: AIMHUB</p>
            <p>Version: 1.0.0</p>   
        </div>
        <nav style={{ marginTop: "20px" }}>
            <ul>
            <li>
                <Link to="">Home</Link>
            </li>
            <li>
                <Link to="details">Details</Link>
            </li>
            </ul>
        </nav>
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="details" element={<Details />} />
        </Routes>
        </div>
);
export default App;