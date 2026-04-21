import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    { id: 1, name: "Iphone" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Laptop" },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "900px",
      margin: "0 auto",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#333",
      marginBottom: "2rem",
    },
    productList: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
    },
    productCard: {
      backgroundColor: "white",
      padding: "1.5rem",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },
    productCardHover: {
      transform: "translateY(-4px)",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    },
    productName: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#667eea",
      marginBottom: "1rem",
    },
    productLink: {
      display: "inline-block",
      padding: "10px 20px",
      backgroundColor: "#667eea",
      color: "white",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: "600",
      transition: "all 0.3s ease",
    },
    productLinkHover: {
      backgroundColor: "#764ba2",
    },
  };

  const [hoveredCard, setHoveredCard] = React.useState(null);
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Danh sách sản phẩm</h1>

        <div style={styles.productList}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                ...styles.productCard,
                ...(hoveredCard === product.id ? styles.productCardHover : {}),
              }}
              onMouseEnter={() => setHoveredCard(product.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.productName}>{product.name}</div>
              <Link
                to={`/products/${product.id}`}
                style={{
                  ...styles.productLink,
                  ...(hoveredLink === product.id ? styles.productLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLink(product.id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                Xem chi tiết →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
