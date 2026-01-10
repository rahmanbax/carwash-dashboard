"use client";

import React from "react";

type StatsCardProps = {
  label: string;
  amount: number;
  isChange: boolean;
  change?: number;
  icon: React.ReactNode;
};

const StatsCard = ({
  label,
  amount,
  isChange,
  change,
  icon,
}: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between space-x-4 w-full">
      <div className="flex flex-col gap-2">
        <p className="text-gray-500 text-sm font-semibold">{label}</p>
        <span className="text-xl font-bold">{amount}</span>
        {isChange &&
          typeof change === "number" &&
          (change > 0 ? (
            <span className="text-green-600">+{change}% dari kemarin</span>
          ) : change === 0 ? (
            <span className="text-gray-500">{change}% dari kemarin</span>
          ) : (
            <span className="text-red-600">{change}% dari kemarin</span>
          ))}
      </div>
      {icon}
    </div>
  );
};

export default StatsCard;
