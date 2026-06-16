import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export function Navbar() {
  const navigate = useNavigate();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 60px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 15px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#ff6b35",
          cursor: "pointer",
        }}
      >
        🍔 FoodExpress
      </div>

      {/* Menu */}
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "35px",
          margin: 0,
          padding: 0,
          alignItems: "center",
        }}
      >
        <li
          style={{
            cursor: "pointer",
            fontWeight: "500",
            color: "#333",
          }}
        onClick={() => navigate("/")}>
          Home
        </li>

        <li
          style={{
            cursor: "pointer",
            fontWeight: "500",
            color: "#333",
          }}
        onClick={() => navigate("/about")}>
          About
        </li>

        <li
          style={{
            cursor: "pointer",
            fontWeight: "500",
            color: "#333",
          }}
        onClick={() => navigate("/menu")}>
          Menu
        </li>

        <li
          style={{
            cursor: "pointer",
            fontWeight: "500",
            color: "#333",
          }}
        onClick={() => navigate("./Contact")}>
          Contact
        </li>
      </ul>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          gap: "15px",
        }}
      >
        <Link to="/Admin">
          <button
            style={{
              padding: "10px 20px",
              border: "1px solid #ff6b35",
              background: "white",
            color: "#ff6b35",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
         Admin Login
        </button>
        </Link>
       
      </div>
    </nav>
  );
}