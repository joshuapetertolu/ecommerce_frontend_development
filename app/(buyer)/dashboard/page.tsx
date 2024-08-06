"use client";

import React from "react";
import OverviewCard from "@/components/stats/OverviewStats";

function Dashboard() {
  return (
    <div>
      <h1 className="font-extrabold text-3xl font-dmSans">
        Welcome, Best stores !
      </h1>
      <OverviewCard />
    </div>
  );
}

export default Dashboard;
