import { Link } from "react-router-dom";
export function Menu() {
  const items = [
    {
      name: "Margherita Pizza",
      price: "₹299",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    },
    {
      name: "Veg Burger",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    },
    {
      name: "White Sauce Pasta",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    },
    {
      name: "French Fries",
      price: "₹129",
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800",
    },
    {
      name: "Chocolate Shake",
      price: "₹149",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800",
    },
    {
      name: "Grilled Sandwich",
      price: "₹179",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800",
    },
    {
      name: "Paneer Tikka",
      price: "₹279",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
    },
    {
      name: "Veg Biryani",
      price: "₹249",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800",
    },
    {
      name: "Caesar Salad",
      price: "₹189",
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800",
    },
    {
      name: "Cold Coffee",
      price: "₹119",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    },
    {
      name: "Cheese Nachos",
      price: "₹159",
      image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=800",
    },
    {
      name: "Brownie Sundae",
      price: "₹199",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
        padding: "60px 80px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "#222",
          marginBottom: "25px",
        }}
      >
        Our Menu
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "18px",
          marginBottom: "50px",
        }}
      >
        Explore our delicious collection of freshly prepared dishes.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "20px" }}>
              <h2
                style={{
                  color: "#222",
                  marginBottom: "10px",
                }}
              >
                {item.name}
              </h2>

              <p
                style={{
                  color: "#666",
                  marginBottom: "15px",
                }}
              >
                Freshly prepared with premium ingredients.
              </p>

              <h3
                style={{
                  color: "#ff6b00",
                  marginBottom: "15px",
                }}
              >
                {item.price}
              </h3>
<Link to="/AddDetails" >
              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "#ff6b00",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Order Now
              </button>
</Link>
            </div>
          </div>
        ))}
      </div>    
    </div>
  );
}