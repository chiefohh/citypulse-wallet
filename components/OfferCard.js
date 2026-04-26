"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

export default function OfferCard({ offer, onClaim }) {
  const [timeLeft, setTimeLeft] = useState(offer.expiry * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [offer]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        border: "1px solid #3b82f6",
        borderRadius: "1rem",
        padding: "2rem",
        maxWidth: "480px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>{offer.emoji}</div>

      <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginBottom: "1rem" }}>
        <span style={{ backgroundColor: "#1e40af", color: "#93c5fd", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <MapPin size={12} /> {offer.merchant}
        </span>
        <span style={{ backgroundColor: "#1e293b", color: "#94a3b8", padding: "0.25rem 0.75rem", borderRadius: "9999px", fontSize: "0.75rem" }}>
          {offer.distance}
        </span>
      </div>

      <h3 style={{ color: "white", fontSize: "1.375rem", fontWeight: "700", marginBottom: "0.75rem", lineHeight: "1.4" }}>
        {offer.headline}
      </h3>

      <div style={{ color: "#60a5fa", fontSize: "3rem", fontWeight: "800", marginBottom: "0.25rem" }}>
        {offer.discount} off
      </div>
      <div style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        {offer.product}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "#f59e0b", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
        <Clock size={14} />
        Expires in {minutes}:{seconds}
      </div>

      <button
        onClick={onClaim}
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "0.75rem",
          padding: "0.875rem 2rem",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
          width: "100%",
        }}
      >
        Claim This Offer
      </button>
    </motion.div>
  );
}