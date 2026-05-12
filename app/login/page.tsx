"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Sample login validation
    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      alert("Login Successful");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
            color: "#111",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            color: "#111",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            color: "#111",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#4f46e5",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "15px",
            textAlign: "center",
            color: "#111",
          }}
        >
          No account?{" "}
          <Link href="/signup">
            Signup
          </Link>
        </p>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "gray",
          }}
        >
          Demo Account:
          <br />
          admin@gmail.com
          <br />
          123456
        </p>
      </form>
    </main>
  );
}