import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "700",
      color: "#333",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#666",
      marginBottom: "2.5rem",
    },
    navContainer: {
      display: "flex",
      gap: "1rem",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    navLink: {
      padding: "10px 24px",
      fontSize: "1rem",
      fontWeight: "600",
      textDecoration: "none",
      borderRadius: "6px",
      transition: "all 0.3s ease",
      border: "none",
      cursor: "pointer",
    },
    primaryBtn: {
      backgroundColor: "#fff",
      color: "#667eea",
    },
    secondaryBtn: {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      color: "#fff",
      border: "2px solid #fff",
    },
  };

  const [hoverAbout, setHoverAbout] = React.useState(false);
  const [hoverContact, setHoverContact] = React.useState(false);
  const [hoverProducts, setHoverProducts] = React.useState(false);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Welcome Home</h1>
      <p style={styles.subtitle}>Explore our website</p>

      <nav style={styles.navContainer}>
        <Link
          to="/about"
          style={{
            ...styles.navLink,
            ...styles.primaryBtn,
            ...(hoverAbout ? { transform: "translateY(-2px)" } : {}),
          }}
          onMouseEnter={() => setHoverAbout(true)}
          onMouseLeave={() => setHoverAbout(false)}
        >
          About
        </Link>
        <Link
          to="/products"
          style={{
            ...styles.navLink,
            ...styles.primaryBtn,
            ...(hoverProducts ? { transform: "translateY(-2px)" } : {}),
          }}
          onMouseEnter={() => setHoverProducts(true)}
          onMouseLeave={() => setHoverProducts(false)}
        >
          Products
        </Link>
        <Link
          to="/contact"
          style={{
            ...styles.navLink,
            ...styles.secondaryBtn,
            ...(hoverContact ? { transform: "translateY(-2px)" } : {}),
          }}
          onMouseEnter={() => setHoverContact(true)}
          onMouseLeave={() => setHoverContact(false)}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
