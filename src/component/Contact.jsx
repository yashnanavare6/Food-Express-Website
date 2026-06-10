export function Contact() {
     const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message Sent Successfully!");
    };
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fffaf5",
        padding: "80px 60px",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#ff6b35",
            marginBottom: "15px",
          }}
        >
          Contact Us 📞
        </h1>

        <p
          style={{
            color: "#4b5563",
            fontSize: "1.1rem",
          }}
        >
          We'd love to hear from you. Get in touch with us anytime.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Contact Information */}
        <div
          style={{
            width: "350px",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            color: "#1f2937",
          }}
        >
          <h2
            style={{
              color: "#ff6b35",
              marginBottom: "25px",
            }}
          >
            Get In Touch
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#1f2937" }}>📍 Address</h3>
            <p style={{ color: "#4b5563" }}>
              Pune, Maharashtra, India
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#1f2937" }}>📞 Phone</h3>
            <p style={{ color: "#4b5563" }}>
              +91 98765 43210
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ color: "#1f2937" }}>📧 Email</h3>
            <p style={{ color: "#4b5563" }}>
              support@foodexpress.com
            </p>
          </div>

          <div>
            <h3 style={{ color: "#1f2937" }}>🕒 Working Hours</h3>
            <p style={{ color: "#4b5563" }}>
              Mon - Sun : 9:00 AM - 11:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          style={{
            width: "500px",
            background: "#ffffff",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: "#1f2937",
              marginBottom: "20px",
            }}
          >
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "90%",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                color: "#1f2937",
                background: "#ffffff",
              }}
            />

            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "90%",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                color: "#1f2937",
                background: "#ffffff",
              }}
            />

            <input
              type="text"
              placeholder="Subject"
              style={{
                width: "90%",
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                color: "#1f2937",
                background: "#ffffff",
              }}
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              style={{
                width: "90%",
                padding: "15px",
                marginBottom: "20px",
                border: "1px solid #d1d5db",
                borderRadius: "10px",
                resize: "none",
                color: "#1f2937",
                background: "#ffffff",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                width: "90%",
                padding: "15px",
                background: "#ff6b35",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Send Message 🚀
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}