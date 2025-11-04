import React, { useState } from "react";

// Injects the "glow" animation only once.
const injectGlowAnimation = () => {
  if (document.getElementById("glow-keyframes")) return;
  const style = document.createElement("style");
  style.id = "glow-keyframes";
  style.textContent = `
    @keyframes glow {
      0% { box-shadow: 0 0 10px 1px #97b6dc44; }
      100% { box-shadow: 0 0 24px 4px #6ccbd879; }
    }
  `;
  document.head.appendChild(style);
};
injectGlowAnimation();

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundImage: "linear-gradient(120deg, #30475e 0%, #222831 100%)",
    position: "fixed",
    top: 0,
    left: 0,
    color: "#d3d3efff",
    textAlign: "center",
    zIndex: 1,
    overflow: "hidden", // Only needed on the fixed background container
    background: "linear-gradient(120deg, #52708eff 0%, #a0acbdff 100%)"
  },

  overlay: {
    background: "rgba(255,255,255,0.09)",
    padding: "56px 36px",
    borderRadius: "20px",
    boxShadow: "0 12px 38px 0 rgba(30,30,60,0.25)",
    backdropFilter: "blur(13px)",
    border: "2px solid #6e82a4ff",
    transition: "box-shadow 0.3s, transform 0.2s",
    width: "100%",
    maxWidth: "430px",
    margin: "0 auto",
  },

  title: {
    fontSize: "2.7rem",
    fontWeight: 800,
    marginBottom: "1.1rem",
    lineHeight: "1.2",
    letterSpacing: "1px",
    textShadow: "0 2px 12px rgba(220, 219, 219, 0.09)",
    color: "#4d6787ff", // Professional navy
    userSelect: "none",
    transition: "letter-spacing 0.2s, text-shadow 0.2s",
  },

  highlight: {
    color: "#2196f3", // Professional blue accent
    background: "linear-gradient(90deg,#dbeaf9 60%,#2196f3 100%)",
    padding: "0.17em 0.41em",
    borderRadius: "8px",
    boxShadow: "0 0 10px 2px #dde7f1c0",
    textShadow: "0 2px 6px #afd6fd88",
    fontWeight: "900",
    letterSpacing: "1px",
    animation: "glow 2s alternate infinite",
    display: "inline-block",
  },

  subtitle: {
    fontSize: "1.17rem",
    color: "#dfeefaff",
    marginBottom: "2rem",
    lineHeight: "1.6",
    textShadow: "0 1px 4px rgba(32,36,64,0.08)",
    maxWidth: "400px",
    margin: "0 auto 2rem auto",
  },

  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "1.15rem",
    marginTop: "0.8rem",
  },

  button: {
    padding: "13px 36px",
    fontSize: "1.04rem",
    fontWeight: 700,
    borderRadius: "9px",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 13px rgba(21,21,58,0.13)",
    outline: "none",
    transition:
      "background 0.21s, color 0.21s, transform 0.17s, box-shadow 0.16s, border 0.22s",
    letterSpacing: "0.43px",
    margin: "0",
  },

  primaryButton: {
    backgroundImage: "linear-gradient(92deg,#e8f0fc 0%,#90caf9 90%)",
    color: "#1e2a38",
    boxShadow: "0 6px 15px 0 rgba(33,150,243,0.14), 0 2px 8px 0 rgba(160,219,255,0.10)",
    fontWeight: "bold",
    border: "2px solid #92bfe3ff",
  },

  secondaryButton: {
    backgroundColor: "rgba(46,60,94,0.64)",
    color: "#ffffffff",
    border: "2px solid #2196f3",
    fontWeight: "bold",
    boxShadow: "0 2px 8px 0 rgba(33,150,243,0.10)",
  },
};

const HomePage = ({ setCurrentPage }) => {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>
          Welcome to Your{" "}
          <span style={styles.highlight}>Expense Tracker</span>
        </h1>
        <p style={styles.subtitle}>
          Take control of your finances with a simple, intuitive interface.
        </p>
        <div style={styles.buttonContainer}>
          <button
            onClick={() => setCurrentPage("signup")}
            style={{
              ...styles.button,
              ...styles.primaryButton,
              ...(hoveredBtn === "signup"
                ? {
                    transform: "scale(1.045)",
                    boxShadow:
                      "0 14px 38px rgba(33,150,243,0.23), 0 6px 20px 0 rgba(160,219,255,0.09)",
                  }
                : {}),
            }}
            onMouseEnter={() => setHoveredBtn("signup")}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            Get Started
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            style={{
              ...styles.button,
              ...styles.secondaryButton,
              ...(hoveredBtn === "login"
                ? {
                    backgroundColor: "#1565c0",
                    border: "2.2px solid #1565c0",
                    color: "#f4f4f4ff",
                    transform: "scale(1.04)",
                  }
                : {}),
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
