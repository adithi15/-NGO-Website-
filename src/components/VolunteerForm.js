import React, { useState } from "react";

export default function VolunteerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName("");
    setEmail("");
    setReason("");

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="volunteer"
      className="p-5"
      style={{
        backgroundColor: "#004d40",
        color: "white",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: "#FFA500" }}>
          Become a Volunteer
        </h2>

        {submitted && (
          <div className="alert alert-success mt-3">
            🎉 Thank you for volunteering! We’ll get in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ backgroundColor: "#00695c", color: "white", border: "none" }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ backgroundColor: "#00695c", color: "white", border: "none" }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Why do you want to volunteer?</label>
            <textarea
              className="form-control"
              rows="3"
              maxLength={150}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              style={{ backgroundColor: "#00695c", color: "white", border: "none" }}
            />
            <small className="text-light">{reason.length}/150 characters</small>
          </div>

          <button type="submit" className="btn btn-warning mt-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
