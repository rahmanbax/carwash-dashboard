"use client";

import { IconCarFilled, IconMotorbikeFilled } from "@tabler/icons-react";
import React from "react";
import VehicleStatus from "./VehicleStatus";

type VehicleStatusCardProps = {
  plat: string;
  kategori: string;
  jamBooking: string;
  status: string;
};

const VehicleStatusCard = ({ data }: { data: VehicleStatusCardProps }) => {
  return (
    <div className="flex gap-2 items-center p-4 justify-between bg-gray-100 rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="w-12 h-12 rounded-lg text-blue-500 bg-blue-100 flex items-center justify-center">
          {data.kategori === "mobil" ? (
            <IconCarFilled />
          ) : (
            <IconMotorbikeFilled />
          )}
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold">{data.plat}</h3>
          <div className="flex gap-2">
            <p className="capitalize">{data.kategori}</p>
            <span>-</span>
            <p>{data.jamBooking}</p>
          </div>
        </div>
      </div>
      <VehicleStatus status={data.status} />
    </div>
  );
};

export default VehicleStatusCard;
