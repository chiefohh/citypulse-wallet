"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContextSelector from "./ContextSelector";
import OfferCard from "./OfferCard";
import RedeemModal from "./RedeemModal";
import { generateOffer } from "@/lib/generateOffer";

export default function DemoSimulator() {
  const [selected, setSelected] = useState({ weather: "cold", time: "lunch", demand: "low" });
  const [offer, setOffer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleChange(group, value) {
    setSelected((prev) => ({ ...prev, [group]: value }));
    setOffer(null);
  }

  function handleGenerate() {
    const result = generateOffer(selected);
    setOffer(result);
  }

  return (
    <section id="demo" style={{ backgroundColor: "#020617", padding: "6rem 1.5rem" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ color: "white", fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>
            Live Demo Simulator
          </h2>
          <p style={{ color: "#94a3b8" }}>
            Set the context. Watch the AI generate a real-time offer.
          </p>
        </div>

        <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "1rem", padding: "2rem" }}>
          <ContextSelector selected={selected} onChange={handleChange} />

          <button
            onClick={handleGenerate}
            style={{
              width: "100%",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "0.75rem",
              padding: "0.875rem",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "2rem",
            }}
          >
            ⚡ Generate Offer
          </button>

          <AnimatePresence>
            {offer && (
              <OfferCard offer={offer} onClaim={() => setShowModal(true)} />
            )}
          </AnimatePresence>
        </div>
      </div>

      {showModal && (
        <RedeemModal offer={offer} onClose={() => setShowModal(false)} />
      )}
    </section>
  );
}