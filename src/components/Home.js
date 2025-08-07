import React from "react";
import ngoImage from "../assests/biggest-ngos.jpg"; // ✅ Make sure spelling is correct

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          backgroundImage: `url(${ngoImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          position: "relative",
        }}
      >
        <div
          className="text-end px-4"
          style={{
        
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>LEARN</h1>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#FFA500" }}>
            MORE ABOUT
          </h2>
          <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>WHAT WE DO</h2>

          
        </div>
      </section>

      {/* Welcome Section */}
      <section
        className="text-center text-white p-5"
        style={{ backgroundColor: "#004d40" }}
      >
        <h2 className="mb-3" style={{ fontWeight: "bold", color: "#FFA500" }}>
          Welcome to Our NGO
        </h2>
        <p style={{ maxWidth: "800px", margin: "auto", fontSize: "1.1rem" }}>
          Our mission is to create and sustain a strong, effective community that acknowledges
          and responds to the potential, achievements, and needs of all people.
          We work together to make a difference — in education, health, and equality —
          empowering individuals and families to thrive.
        </p>
      </section>
    </>
  );
}
