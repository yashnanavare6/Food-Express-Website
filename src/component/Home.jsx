import { useNavigate } from "react-router-dom";
export function Home() {
  const foods = [
    {
      name: "Pizza",
      price: "₹299",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    },
    {
      name: "Burger",
      price: "₹199",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    },
    {
      name: "Biryani",
      price: "₹249",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0",
    },
  ];
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #fff7ed, #ffedd5)",
          gap: "50px",
        }}
      >
        <div style={{ flex: 1, maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "#1f2937",
              lineHeight: "1.1",
            }}
          >
            Fresh Food <br />
            Delivered Fast 🚀
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              color: "#6b7280",
              marginTop: "20px",
              lineHeight: "1.8",
            }}
          >
            Order delicious meals from the best restaurants in your city.
            Enjoy fast delivery, secure payments, and fresh food right at
            your doorstep.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "15px 35px",
              background: "#ff6b35",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(255,107,53,0.35)",
            }}
          onClick={() => navigate("./menu")}>
            Order Now
          </button>
        </div>

        <div style={{ flex: 1, textAlign: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
            alt="Burger"
            style={{
              width: "500px",
              height: "500px",
              objectFit: "cover",
              borderRadius: "25px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </section>

      {/* Categories */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
          }}
        >
          Popular Categories
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          {["🍕 Pizza", "🍔 Burger", "🥗 Salad", "🍰 Dessert"].map(
            (item, index) => (
              <div
                key={index}
                style={{
                  width: "220px",
                  padding: "25px",
                  background: "white",
                  borderRadius: "15px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                  cursor: "pointer",
                }}
              >
                <h1>{item.split(" ")[0]}</h1>
                <h3>{item.split(" ")[1]}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Featured Dishes */}
      <section
        style={{
          padding: "80px 20px",
          background: "#f9fafb",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
        color: "#1f2937",  
        }}
        >
          Featured Dishes
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {foods.map((food, index) => (
            <div
              key={index}
              style={{
                width: "300px",
                background: "white",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={food.img}
                alt={food.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{food.name}</h3>
                <p
                  style={{
                    color: "#ff6b35",
                    fontWeight: "bold",
                    margin: "10px 0",
                  }}
                >
                  {food.price}
                </p>

                <button
                  style={{
                    padding: "10px 20px",
                    background: "#ff6b35",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "40px",
          }}
        >
          Why Choose Us?
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: "🚚",
              title: "Fast Delivery",
              text: "Delivered within 30 minutes.",
            },
            {
              icon: "⭐",
              title: "Top Restaurants",
              text: "Only highly rated restaurant partners.",
            },
            {
              icon: "💳",
              title: "Secure Payments",
              text: "100% safe and secure transactions.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                width: "280px",
                padding: "30px",
                background: "white",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h1>{item.icon}</h1>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}