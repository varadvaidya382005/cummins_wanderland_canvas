import React, { useState } from "react";

const tabs = ["Overview", "Accommodation", "Food", "Must-Visit", "Travel"];

const travelTypes = ["Solo Travel", "Solo Female Travel", "Family"];

// Tab-based content per travel type
const descriptions: {
  [tab: string]: {
    [travelType: string]: string;
  };
} = {
  Overview: {
    "Solo Travel": "Explore freely at your own pace.",
    "Solo Female Travel": "Empowering journeys for solo women.",
    Family: "Discover fun plans for the whole family.",
  },
  Accommodation: {
    "Solo Travel": "Affordable hostels & stays.",
    "Solo Female Travel": "Safe stays with female-friendly ratings.",
    Family: "Spacious family hotels and resorts.",
  },
  Food: {
    "Solo Travel": "Local street food & quick bites.",
    "Solo Female Travel": "Clean & safe dining options.",
    Family: "Family-friendly restaurants & cuisines.",
  },
  "Must-Visit": {
    "Solo Travel": "Offbeat places and hidden gems.",
    "Solo Female Travel": "Safe yet scenic attractions.",
    Family: "Popular spots kids and adults will love.",
  },
  Travel: {
    "Solo Travel": "Backpacking routes & solo hacks.",
    "Solo Female Travel": "Group travel and solo-safe options.",
    Family: "Convenient transport for all ages.",
  },
};

export default function ComparePlans() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-teal-600/80 z-0" />

      {/* Header */}
      <div className="text-center py-10 relative z-10">
        <h1 className="text-4xl font-bold drop-shadow-md">Compare Plans</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10 relative z-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 transform ${
              activeTab === tab
                ? "bg-white text-blue-800 shadow-lg scale-105"
                : "bg-white/20 hover:bg-white/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 pb-10 relative z-10">
        {travelTypes.map((type) => (
          <div
            key={type}
            className="bg-white rounded-3xl p-8 text-center shadow-2xl hover:scale-105 transition-all duration-300 min-h-[220px] flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold text-blue-800">{type}</h2>
            <p className="mt-3 text-gray-700 text-md">
              {descriptions[activeTab][type]}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <div className="flex justify-center py-10 relative z-10">
        <button className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full font-semibold text-lg transition transform hover:scale-105 shadow-xl">
          Need Subscription
        </button>
      </div>
    </div>
  );
} 