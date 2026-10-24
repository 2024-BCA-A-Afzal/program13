
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "Please enter your name";
    }

    if (email.trim() === "") {
      newErrors.email = "Please enter your email";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (feedback.trim() === "") {
      newErrors.feedback = "Please enter your feedback";
    }

    setErrors(newErrors);
    setSuccess("");

    if (Object.keys(newErrors).length === 0) {
      setSuccess("Feedback submitted successfully!");

      setName("");
      setEmail("");
      setFeedback("");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Student Feedback Form</h1>

      <form onSubmit={handleSubmit}>
        <div style={styles.field}>
          <label>Student Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p style={styles.error}>{errors.name}</p>
          )}
        </div>

        <div style={styles.field}>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p style={styles.error}>{errors.email}</p>
          )}
        </div>

        <div style={styles.field}>
          <label>Feedback:</label>
          <textarea
            placeholder="Enter your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          {errors.feedback && (
            <p style={styles.error}>{errors.feedback}</p>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>

      {success && (
        <p style={styles.success}>{success}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "450px",
    margin: "50px auto",
    padding: "25px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontFamily: "Arial, sans-serif",
  },
  field: {
    marginBottom: "15px",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
  success: {
    color: "green",
    fontWeight: "bold",
    marginTop: "15px",
  },
};

export default App;
