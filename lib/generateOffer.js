export function generateOffer({ weather, time, demand }) {
  if ((weather === "cold" || weather === "rainy") && demand === "low") {
    return {
      merchant: "Cafe Muller",
      distance: "80m away",
      headline: "Cold outside? Your cappuccino is waiting.",
      discount: "15%",
      product: "any hot drink",
      expiry: 12,
      emoji: "☕",
      token: "MULL-7B4K-15",
    };
  }
  if (weather === "sunny" && demand === "high") {
    return {
      merchant: "Marktplatz Juice Bar",
      distance: "120m away",
      headline: "Big crowd out there. Skip the queue with us.",
      discount: "10%",
      product: "any fresh juice",
      expiry: 20,
      emoji: "🍋",
      token: "MKTJB-3K9X-10",
    };
  }
  if (time === "lunch") {
    return {
      merchant: "Stadtkuche Stuttgart",
      distance: "200m away",
      headline: "Lunch break? We have a table ready.",
      discount: "12%",
      product: "any main course",
      expiry: 45,
      emoji: "🍽️",
      token: "STDK-2M7P-12",
    };
  }
  return {
    merchant: "Weinbar am Schlossplatz",
    distance: "150m away",
    headline: "End your day the right way.",
    discount: "10%",
    product: "wine or tapas",
    expiry: 60,
    emoji: "🍷",
    token: "WBAR-9L2Q-10",
  };
}