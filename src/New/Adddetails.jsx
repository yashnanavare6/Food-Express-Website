import { useState } from "react";
import { supabase } from "../Supabase";

export function AddDetails() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  async function submit(e) {
    e.preventDefault();

    await supabase.from("Info").insert([
      {
        Name: name,
        "Phone Number": number,
        Address: address,
      },
    ]);

    alert("Data Submitted Successfully!");

    setName("");
    setNumber("");
    setAddress("");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          width: "400px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Add Details
        </h2>

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Enter Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Enter Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{
              ...inputStyle,
              height: "100px",
              resize: "none",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#2563eb",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  boxSizing: "border-box",
};