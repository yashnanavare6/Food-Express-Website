import { useEffect, useState } from "react";
import { supabase } from "../Supabase";

export const Admin = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await supabase
      .from("Info")
      .select("*");

    setDetails(data || []);
  }

  async function deleteRecord(id) {
    await supabase
      .from("Info")
      .delete()
      .eq("id", id);

    fetchData();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f4f4",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#2563eb",
        }}
      >
        Admin Dashboard
      </h1>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          overflowX: "auto",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#2563eb",
                color: "white",
              }}
            >
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Phone Number</th>
              <th style={thStyle}>Address</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>

          <tbody>
            {details.map((item) => (
              <tr key={item.id}>
                <td style={tdStyle}>{item.Name}</td>
                <td style={tdStyle}>{item["Phone Number"]}</td>
                <td style={tdStyle}>{item.Address}</td>

                <td style={tdStyle}>
                  <button
                    onClick={() => deleteRecord(item.id)}
                    style={{
                      backgroundColor: "#dc2626",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "6px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {details.length === 0 && (
          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            No Records Found
          </p>
        )}
      </div>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};