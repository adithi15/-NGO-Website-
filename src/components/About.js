import React from "react";
import aboutImage from "../assests/about-us.jpg"; // 📸 Make sure this image exists

export default function About() {
  return (
    <section id="about" className="container my-5">
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold" style={{ color: "#00695c" }}>
          About Us
        </h2>
        <hr className="w-25 mx-auto" style={{ borderTop: "3px solid #00695c" }} />
      </div>

      {/* Image and Text Content */}
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={aboutImage}
            alt="About our NGO"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            We are a non-profit organization committed to driving meaningful change. Our focus areas
            include education, healthcare, and community development. By collaborating with passionate
            volunteers and donors, we strive to create a better, more inclusive world for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
