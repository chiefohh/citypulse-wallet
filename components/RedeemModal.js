"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QRCodeCanvas as QRCode } from "qrcode.react";

export default function RedeemModal({ offer, onClose }) {
  const [stage, setStage] = useState("claim");

  useEffect(() => {
    if (stage === "processing") {
      const timer = setTimeout(() => setStage("success"), 2500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div style={{
      position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.8)",
      display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 50, padding: "1rem",
    }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{
          backgroundColor: "#0f172a", border: "1px solid #1e293b",
          borderRadius: "1rem", padding: "2rem", maxWidth: "400px",
          width: "100%", textAlign: "center", position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", color: "#94a3b8", fontSize: "1.25rem", cursor: "pointer" }}
        >
          X
        </button>

        {stage === "claim" && (
          <>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{offer.emoji}</div>
            <h3 style={{ color: "white", fontWeight: "700", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              Claim Your Offer
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Show this QR code or token to the cashier
            </p>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
              <QRCode value={offer.token} size={160} bgColor="#0f172a" fgColor="#ffffff" />
            </div>
            <div style={{ backgroundColor: "#1e293b", borderRadius: "0.5rem", padding: "0.75rem", marginBottom: "1.5rem" }}>
              <p style={{ color: "#94a3b8", fontSize: "0.75rem", marginBottom: "0.25rem" }}>Offer Token</p>
              <p style={{ color: "#60a5fa", fontWeight: "700", fontSize: "1.125rem", letterSpacing: "0.1em" }}>{offer.token}</p>
            </div>
            <button
              onClick={() => setStage("processing")}
              style={{
                width: "100%", backgroundColor: "#3b82f6", color: "white",
                border: "none", borderRadius: "0.75rem", padding: "0.875rem",
                fontSize: "1rem", fontWeight: "600", cursor: "pointer",
              }}
            >
              Confirm Redemption
            </button>
          </>
        )}

        {stage === "processing" && (
          <>
            <div style={{ fontSize: "3rem", marginBottom: "1rem", color: "#f59e0b" }}>...</div>
            <h3 style={{ color: "white", fontWeight: "700", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              Verifying...
            </h3>
            <p style={{ color: "#94a3b8" }}>Checking with merchant terminal</p>
          </>
        )}

        {stage === "success" && (
          <>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ fontSize: "4rem", marginBottom: "1rem", color: "#4ade80" }}
            >
              ✓
            </motion.div>
            <h3 style={{ color: "white", fontWeight: "700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Redeemed Successfully!
            </h3>
            <p style={{ color: "#4ade80", fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>
              You saved with {offer.discount} off
            </p>
            <p style={{ color: "#94a3b8", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
              Cashback will appear in your CityPulse wallet within 24 hours
            </p>
            <button
              onClick={onClose}
              style={{
                width: "100%", backgroundColor: "#166534", color: "white",
                border: "none", borderRadius: "0.75rem", padding: "0.875rem",
                fontSize: "1rem", fontWeight: "600", cursor: "pointer",
              }}
            >
              Done
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}