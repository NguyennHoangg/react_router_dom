import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  // Mock product data
  const products = {
    1: {
      id: 1,
      name: "Iphone",
      description: "The latest iPhone with cutting-edge technology",
      price: "$999",
      features: ["A17 Pro Chip", "Advanced Camera", "Long Battery Life"],
    },
    2: {
      id: 2,
      name: "Samsung",
      description: "Samsung flagship smartphone",
      price: "$899",
      features: ["120Hz Display", "Excellent Camera", "Fast Charging"],
    },
    3: {
      id: 3,
      name: "Laptop",
      description: "Powerful laptop for work and gaming",
      price: "$1499",
      features: ["Intel i9", "RTX 4090", "32GB RAM"],
    },
  };

  const product = products[id];

  const styles = {
    page: {
      minHeight: "100vh",
      padding: "2rem",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      maxWidth: "500px",
      margin: "0 auto",
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "8px",
    },
    backLink: {
      display: "inline-block",
      marginBottom: "1.5rem",
      padding: "8px 16px",
      backgroundColor: "#f0f0f0",
      color: "#667eea",
      textDecoration: "none",
      borderRadius: "4px",
      fontWeight: "600",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#333",
      marginBottom: "0.5rem",
    },
    productId: {
      fontSize: "0.85rem",
      color: "#999",
      marginBottom: "1rem",
    },
    description: {
      fontSize: "0.95rem",
      color: "#666",
      marginBottom: "1rem",
      lineHeight: "1.5",
    },
    price: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#667eea",
      marginBottom: "1.5rem",
    },
    featuresTitle: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "#333",
      marginBottom: "0.8rem",
    },
    featuresList: {
      listStyle: "none",
      padding: 0,
      marginBottom: "1.5rem",
    },
    featureItem: {
      padding: "0.4rem 0",
      color: "#666",
      fontSize: "0.9rem",
    },
    buyButton: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#667eea",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  if (!product) {
    return (
      <div style={styles.page}>
        <div style={styles.container}>
          <h1 style={styles.title}>Sản phẩm không tồn tại</h1>
          <p style={{ color: "#666", marginBottom: "1rem" }}>ID: {id}</p>
          <Link to="/products" style={styles.backLink}>
            ← Quay lại
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <Link to="/products" style={styles.backLink}>
          ← Quay lại
        </Link>

        <h1 style={styles.title}>{product.name}</h1>
        <p style={styles.productId}>Product ID: {product.id}</p>

        <p style={styles.description}>{product.description}</p>

        <p style={styles.price}>{product.price}</p>

        <h3 style={styles.featuresTitle}>Tính năng:</h3>
        <ul style={styles.featuresList}>
          {product.features.map((feature, index) => (
            <li key={index} style={styles.featureItem}>
              • {feature}
            </li>
          ))}
        </ul>

        <button style={styles.buyButton}>Mua ngay</button>
      </div>
    </div>
  );
}
