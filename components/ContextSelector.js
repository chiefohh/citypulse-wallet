"use client";

const options = {
  weather: [
    { value: "rainy", label: "Rainy", icon: "🌧️" },
    { value: "cold", label: "Cold", icon: "❄️" },
    { value: "sunny", label: "Sunny", icon: "☀️" },
  ],
  time: [
    { value: "morning", label: "Morning", icon: "🌅" },
    { value: "lunch", label: "Lunch", icon: "🍴" },
    { value: "evening", label: "Evening", icon: "🌙" },
  ],
  demand: [
    { value: "low", label: "Quiet", icon: "🏪" },
    { value: "high", label: "Event Nearby", icon: "🎉" },
  ],
};

export default function ContextSelector({ selected, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
      {Object.entries(options).map(([group, items]) => (
        <div key={group}>
          <p style={{ color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
            {group === "weather" ? "Weather" : group === "time" ? "Time of Day" : "Merchant Demand"}
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {items.map((item) => (
              <button
                key={item.value}
                onClick={() => onChange(group, item.value)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  border: selected[group] === item.value ? "2px solid #3b82f6" : "2px solid #1e293b",
                  backgroundColor: selected[group] === item.value ? "#1e40af" : "#0f172a",
                  color: selected[group] === item.value ? "white" : "#94a3b8",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.2s",
                }}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}