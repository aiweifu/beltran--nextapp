import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          borderRadius: "15px",
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          width: "350px",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Beltran Next App
        </h1>

        <p style={{ marginBottom: "30px", color: "#ddd" }}>
          Welcome to the Landing Page
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
          <Link href="/login">
            <button
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#4f46e5",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#06b6d4",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Signup
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}