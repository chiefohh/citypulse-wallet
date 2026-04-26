export default function MerchantDashboard() {
    const stats = [
      { label: "Offers Generated Today", value: "47", color: "#60a5fa" },
      { label: "Claimed", value: "31", color: "#a78bfa" },
      { label: "Redeemed", value: "28", color: "#4ade80" },
      { label: "Revenue Recovered", value: "340 EUR", color: "#f59e0b" },
      { label: "Quiet-Hour Traffic Lift", value: "+38%", color: "#f472b6" },
    ];
  
    const recentOffers = [
      { time: "13:42", offer: "15% off hot drinks", merchant: "Cafe Muller", status: "Redeemed" },
      { time: "13:15", offer: "12% off main course", merchant: "Stadtkuche Stuttgart", status: "Redeemed" },
      { time: "12:58", offer: "10% off fresh juice", merchant: "Marktplatz Juice Bar", status: "Claimed" },
      { time: "12:30", offer: "10% off wine or tapas", merchant: "Weinbar am Schlossplatz", status: "Expired" },
      { time: "11:55", offer: "15% off hot drinks", merchant: "Cafe Muller", status: "Redeemed" },
      { time: "11:20", offer: "12% off main course", merchant: "Stadtkuche Stuttgart", status: "Claimed" },
    ];
  
    const statusColor = {
      Redeemed: { bg: "#166534", color: "#4ade80" },
      Claimed: { bg: "#713f12", color: "#fbbf24" },
      Expired: { bg: "#1e293b", color: "#94a3b8" },
    };
  
    return (
      <main style={{ minHeight: "100vh", backgroundColor: "#020617", padding: "2rem 1.5rem" }}>
        
        {/* Nav */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h1 style={{ color: "white", fontSize: "1.5rem", fontWeight: "700" }}>
              CityPulse — Merchant Dashboard
            </h1>
            <a href="/" style={{ color: "#60a5fa", fontSize: "0.875rem", textDecoration: "none" }}>
              ← Consumer View
            </a>
          </div>
  
          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "0.75rem", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ color: stat.color, fontSize: "1.75rem", fontWeight: "800", marginBottom: "0.25rem" }}>
                  {stat.value}
                </div>
                <div style={{ color: "#94a3b8", fontSize: "0.75rem" }}>{stat.label}</div>
              </div>
            ))}
          </div>
  
          {/* Recent Offers Table */}
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "0.75rem", padding: "1.5rem", marginBottom: "2rem" }}>
            <h2 style={{ color: "white", fontWeight: "600", fontSize: "1.125rem", marginBottom: "1.25rem" }}>
              Recent Offers
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  {["Time", "Offer", "Merchant", "Status"].map((h) => (
                    <th key={h} style={{ color: "#94a3b8", fontSize: "0.75rem", textTransform: "uppercase", textAlign: "left", paddingBottom: "0.75rem", borderBottom: "1px solid #1e293b" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentOffers.map((row, i) => (
                  <tr key={i}>
                    <td style={{ color: "#94a3b8", fontSize: "0.875rem", padding: "0.75rem 0", borderBottom: "1px solid #1e293b" }}>{row.time}</td>
                    <td style={{ color: "white", fontSize: "0.875rem", padding: "0.75rem 0", borderBottom: "1px solid #1e293b" }}>{row.offer}</td>
                    <td style={{ color: "#94a3b8", fontSize: "0.875rem", padding: "0.75rem 0", borderBottom: "1px solid #1e293b" }}>{row.merchant}</td>
                    <td style={{ padding: "0.75rem 0", borderBottom: "1px solid #1e293b" }}>
                      <span style={{ backgroundColor: statusColor[row.status].bg, color: statusColor[row.status].color, padding: "0.2rem 0.6rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: "600" }}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Merchant Rules */}
          <div style={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "0.75rem", padding: "1.5rem" }}>
            <h2 style={{ color: "white", fontWeight: "600", fontSize: "1.125rem", marginBottom: "0.5rem" }}>
              Merchant Rules
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "0.8rem", marginBottom: "1.25rem" }}>
              Rules are set by the merchant. Offers are generated autonomously by the AI engine.
            </p>
            {[
              { rule: "Weekdays 14:00-16:00", action: "Offer up to 20% off hot drinks to fill quiet period" },
              { rule: "Transaction volume below 5/hour", action: "Trigger offer automatically to nearby users" },
            ].map((r, i) => (
              <div key={i} style={{ backgroundColor: "#1e293b", borderRadius: "0.5rem", padding: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ color: "#60a5fa", fontSize: "0.8rem", fontWeight: "600", marginBottom: "0.25rem" }}>{r.rule}</div>
                <div style={{ color: "#e2e8f0", fontSize: "0.875rem" }}>{r.action}</div>
              </div>
            ))}
          </div>
  
        </div>
      </main>
    );
  }