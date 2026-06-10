export function About() {
  return (
    <div
      style={{
        padding: "80px 60px",
        backgroundColor: "#fffaf5",
        minHeight: "100vh",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#ff6b35",
            marginBottom: "55px",
          }}
        >
          About FoodExpress 🍔
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#666",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          Bringing delicious meals from your favorite restaurants
          straight to your doorstep with speed, quality, and care.
        </p>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Image */}
        <div style={{ flex: 1 }}>
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Food Delivery"
            style={{
              width: "100%",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#1f2937",
              marginBottom: "20px",
            }}
          >
            Who We Are
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            FoodExpress is a modern food delivery platform dedicated
            to connecting food lovers with the best restaurants in
            their city. We believe great food should be accessible,
            affordable, and delivered quickly.
          </p>

          <p
            style={{
              lineHeight: "1.8",
              color: "#555",
            }}
          >
            Whether you're craving pizza, burgers, biryani, or
            desserts, our platform ensures a smooth ordering
            experience and lightning-fast delivery.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "80px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            textAlign: "center",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#ff6b35" }}>500+</h2>
          <p>Restaurant Partners</p>
        </div>

        <div
          style={{
            textAlign: "center",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#ff6b35" }}>50K+</h2>
          <p>Happy Customers</p>
        </div>

        <div
          style={{
            textAlign: "center",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ color: "#ff6b35" }}>30 Min</h2>
          <p>Average Delivery Time</p>
        </div>
      </div>

      {/* Mission */}
      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#1f2937" }}>Our Mission 🎯</h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "20px auto",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          To revolutionize food delivery by providing a seamless,
          fast, and reliable experience while supporting local
          restaurants and satisfying customers with every order.
        </p>
      </div>
    </div>
  );
}