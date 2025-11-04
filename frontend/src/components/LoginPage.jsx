import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(120deg, #52708eff 0%, #a0acbdff 100%)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  box: {
    background: "rgba(231, 228, 228, 0.43)",
    padding: "38px 28px",
    borderRadius: "18px",
    boxShadow: "0 10px 28px 0 rgba(30,30,60,0.22)",
    border: "2px solid #32425b",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    backdropFilter: "blur(10px)",
    transition: "box-shadow 0.2s, transform 0.2s",
    display: "relative",
    top: 50,
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: 700,
    color: "#254367",
    textAlign: "center",
    marginBottom: "1.3rem",
    letterSpacing: "1px",
    textShadow: "0 2px 12px rgba(234, 222, 222, 0.84)",
    userSelect: "none",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },
  field: {
    marginBottom: "1.3rem",
    textAlign: "left",
  },
  label: {
    color: "#5287cdff",
    fontWeight: 600,
    marginBottom: "0.43rem",
    display: "block",
    fontSize: "1rem",
  },
  input: {
    width: "100%",
    padding: "13px 14px",
    border: "1.7px solid #90caf9",
    borderRadius: "8px",
    background: "#f6fbff",
    fontSize: "1.03rem",
    color: "#18355d",
    outline: "none",
    transition: "border 0.18s, box-shadow 0.16s",
    boxShadow: "0 1px 11px 0 rgba(33,150,243,0.07)",
    marginBottom: "0.2rem",
  },
  inputFocus: {
    border: "2px solid #2196f3",
    boxShadow: "0 2.5px 12px 0 rgba(186, 202, 215, 0.13)",
  },
  button: {
    width: "100%",
    background: "linear-gradient(90deg, #2196f3 0%, #1565c0 100%)",
    color: "#fff",
    fontWeight: 700,
    padding: "13px 0",
    borderRadius: "8px",
    fontSize: "1.08rem",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(223, 231, 237, 0.83)",
    marginTop: "0.2rem",
    transition: "background 0.18s, transform 0.16s, box-shadow 0.16s",
  },
  buttonHover: {
    background: "linear-gradient(90deg, #1565c0 0%, #2196f3 100%)",
    transform: "scale(1.04)",
    boxShadow: "0 10px 28px rgba(201, 213, 223, 0.81)",
  },
  footer: {
    textAlign: "center",
    color: "#627085",
    marginTop: "1.2rem",
    fontSize: "1rem",
  },
  signupButton: {
    color: "#2196f3",
    fontWeight: 600,
    background: "none",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    transition: "color 0.16s",
    fontSize: "1rem"
  },
  signupButtonHover: {
    color: "#1565c0"
  }
};

const LoginPage = ({ setCurrentPage, handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusField, setFocusField] = useState('');
  const [hoverLogin, setHoverLogin] = useState(false);
  const [hoverSignup, setHoverSignup] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Login</h1>
        <form onSubmit={onSubmit} style={styles.form}>
          <div style={styles.field}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input
              id="email"
              type="email"
              style={{
                ...styles.input,
                ...(focusField === "email" ? styles.inputFocus : {})
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusField("email")}
              onBlur={() => setFocusField("")}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div style={styles.field}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              id="password"
              type="password"
              style={{
                ...styles.input,
                ...(focusField === "password" ? styles.inputFocus : {})
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocusField("password")}
              onBlur={() => setFocusField("")}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            style={{
              ...styles.button,
              ...(hoverLogin ? styles.buttonHover : {})
            }}
            onMouseEnter={() => setHoverLogin(true)}
            onMouseLeave={() => setHoverLogin(false)}
          >
            Login
          </button>
          <div style={styles.footer}>
            Don't have an account?{' '}
            <button
              type="button"
              onClick={() => setCurrentPage('signup')}
              style={{
                ...styles.signupButton,
                ...(hoverSignup ? styles.signupButtonHover : {})
              }}
              onMouseEnter={() => setHoverSignup(true)}
              onMouseLeave={() => setHoverSignup(false)}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
