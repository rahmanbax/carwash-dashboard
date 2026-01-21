import React from "react";

const VehicleStatus = (data: { status: string }) => {
  return (
    <>
      {data.status === "SIAP_DIAMBIL" ? (
        <div className="p-2 font-medium text-sm bg-amber-50 border border-amber-500 text-amber-500 rounded-lg">
          SIAP DIAMBIL
        </div>
      ) : data.status === "SELESAI" ? (
        <div className="p-2 font-medium text-sm bg-green-50 border border-green-500 text-green-500 rounded-lg">
          SELESAI
        </div>
      ) : data.status === "DICUCI" ? (
        <div className="p-2 font-medium text-sm bg-purple-50 border border-purple-500 text-purple-500 rounded-lg">
          DICUCI
        </div>
      ) : data.status === "DITERIMA" ? (
        <div className="p-2 font-medium text-sm bg-blue-50 border border-blue-500 text-blue-500 rounded-lg">
          DITERIMA
        </div>
      ) : data.status === "BOOKED" ? (
        <div className="p-2 font-medium text-sm bg-gray-50 border border-gray-500 text-gray-500 rounded-lg">
          BOOKED
        </div>
      ) : data.status === "DIBATALKAN" || data.status === "EXPIRED" ? (
        <div className="p-2 font-medium text-sm bg-red-50 border border-red-500 text-red-500 rounded-lg">
          {data.status}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default VehicleStatus;
