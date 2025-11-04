import React, { useState } from "react";

// Inline keyframes styling: inject once in your app root or use styled-components / emotion for dynamic CSS-in-JS setup.
const injectGlowAnimation = () => {
  if (document.getElementById("glow-keyframes")) return;
  const style = document.createElement("style");
  style.id = "glow-keyframes";
  style.textContent = `
    @keyframes glow {
      0% { box-shadow: 0 0 14px 5px #f7e53a33; }
      100% { box-shadow: 0 0 32px 10px #ffd70055; }
    }
  `;
  document.head.appendChild(style);
};
injectGlowAnimation();

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundImage: "linear-gradient(120deg, #4b6cb7 0%, #182848 100%)",
    position: "relative",
    color: "#F1ECEC",
    textAlign: "center",
    overflow: "hidden",
  },

  overlay: {
    background: "rgba(255,255,255, 0.10)",
    padding: "60px 80px",
    borderRadius: "28px",
    boxShadow:
      "0 12px 36px 0 rgba(30,30,60,0.25), 0 1.5px 18px 0 rgba(77,119,215,0.15)",
    backdropFilter: "blur(14px)",
    border: "3px solid",
    borderImage:
      "linear-gradient(135deg,#e7e3d5ff 0%, #cf8a8aff 100%) 1",
    transition: "box-shadow 0.3s, transform 0.2s",
    maxWidth: "650px",
  },

  title: {
    fontSize: "3.2rem",
    fontWeight: 800,
    marginBottom: "1.2rem",
    lineHeight: "1.1",
    letterSpacing: "1.5px",
    textShadow: "0 2px 12px rgba(40,40,40,0.07)",
    transition: "letter-spacing 0.2s, text-shadow 0.2s",
    userSelect: "none",
  },

  highlight: {
    color: "#ffefb6",
    background: "linear-gradient(90deg,#ebeae6ff 70%,#fcb947 100%)",
    padding: "0.13em 0.28em",
    borderRadius: "8px",
    boxShadow: "0 0 14px 5px #f7e53a33",
    textShadow: "0 2px 6px #ffe01077",
    fontWeight: "900",
    letterSpacing: "1px",
    animation: "glow 2s alternate infinite",
    display: "inline-block",
  },

  subtitle: {
    fontSize: "1.36rem",
    color: "#e0e0e0",
    marginBottom: "2rem",
    lineHeight: "1.65",
    textShadow: "0 1px 4px rgba(32,32,32,0.08)",
    maxWidth: "480px",
    margin: "0 auto 2rem auto",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1.2rem",
    marginTop: "1rem",
  },

  button: {
    padding: "16px 42px",
    fontSize: "1.08rem",
    fontWeight: 700,
    borderRadius: "12px",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 16px rgba(21,21,58,0.13)",
    outline: "none",
    transition:
      "background 0.21s, color 0.21s, transform 0.16s, box-shadow 0.16s, border 0.22s",
    letterSpacing: "0.5px",
    margin: "0",
  },

  primaryButton: {
    backgroundImage: "linear-gradient(92deg, #e7e3d5ff 0%, #fdd273 90%)",
    color: "#222",
    boxShadow:
      "0 7px 22px 0 rgba(255, 204, 51, 0.18), 0 2px 8px 0 rgba(220,220,105,0.10)",
    fontWeight: "bold",
    border: "2px solid #ffe68e60",
  },

  secondaryButton: {
    backgroundColor: "rgba(44,44,82,0.6)",
    color: "#fff",
    border: "2px solid #fff",
    fontWeight: "bold",
    boxShadow: "0 2px 8px 0 rgba(77,119,215,0.12)",
  },
};

const HomePage = ({ setCurrentPage }) => {
  // Optional hover state for button animations
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Welcome to Your
          {" "}
          <span style={styles.highlight}>Expense Tracker</span>
        </h1>
        <p style={styles.subtitle}>
          Take control of your finances with a simple, intuitive interface.
        </p>
        <div style={styles.buttonContainer}>
          {/* Get Started Button */}
          <button
            onClick={() => setCurrentPage("signup")}
            style={{
              ...styles.button,
              ...styles.primaryButton,
              ...(hoveredBtn === "signup" ? {
                transform: "scale(1.055)",
                boxShadow:
                  "0 12px 36px rgba(255,216,110,0.23), 0 4px 14px 0 rgba(255,204,51,0.08)"
              } : {})
            }}
            onMouseEnter={() => setHoveredBtn("signup")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Get Started
          </button>
          {/* Login Button */}
          <button
            onClick={() => setCurrentPage("login")}
            style={{
              ...styles.button,
              ...styles.secondaryButton,
              ...(hoveredBtn === "login" ? {
                backgroundColor: "rgba(44,44,82,0.93)",
                border: "2.2px solid #fcb947",
                color: "#fcb947",
                transform: "scale(1.035)"
              } : {})
            }}
            onMouseEnter={() => setHoveredBtn("login")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
