import React, { useEffect, useState } from "react";

export default function App() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // Scale animation interval
    const interval = setInterval(() => {
      setScale((prev) => (prev === 1 ? 1.2 : 1));
    }, 800);

    // Dynamically set favicon
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = "/wink.ico"; // Make sure favicon.ico is in public folder
    document.getElementsByTagName("head")[0].appendChild(link);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background:
          "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#fff",
        textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        userSelect: "none",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          fontWeight: "900",
          margin: 0,
          transform: `scale(${scale})`,
          transition: "transform 0.4s ease-in-out",
        }}
      >
        HAPPY BIRTHDAY
      </h1>
      <p
        style={{
          fontSize: "3rem",
          marginTop: "0.5rem",
          fontWeight: "700",
          animation: "bounce 1s infinite",
        }}
      >
        WINK 🎉
      </p>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}
