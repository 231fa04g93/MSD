import React from "react";

const HomePage = ({ setCurrentPage }) => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Welcome to Your <span style={styles.highlight}>Expense Tracker</span>
        </h1>
        <p style={styles.subtitle}>
          Take control of your finances with a simple, intuitive interface.
        </p>
        <div style={styles.buttonContainer}>
          <button
            onClick={() => setCurrentPage("signup")}
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            Get Started
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            style={{ ...styles.button, ...styles.secondaryButton }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

// 🎨 Internal CSS Styles
const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #4b6cb7 0%, #182848 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  },

  overlay: {
    background: "rgba(255, 255, 255, 0.08)",
    padding: "60px 80px",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.25)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    maxWidth: "600px",
  },

  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "1rem",
    lineHeight: "1.3",
  },

  highlight: {
    color: "#ffcc33",
  },

  subtitle: {
    fontSize: "1.25rem",
    color: "#e0e0e0",
    marginBottom: "2rem",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1rem",
  },

  button: {
    padding: "14px 40px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "10px",
    cursor: "pointer",
    border: "none",
    transition: "all 0.3s ease",
  },

  primaryButton: {
    backgroundColor: "#ffcc33",
    color: "#222",
    boxShadow: "0 5px 15px rgba(255, 204, 51, 0.4)",
  },

  secondaryButton: {
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
  },
};

export default HomePage;
