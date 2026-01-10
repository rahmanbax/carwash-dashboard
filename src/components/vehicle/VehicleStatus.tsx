import React from "react";

const VehicleStatus = (data: { status: string }) => {
  return (
    <>
      {data.status === "SIAP_DIAMBIL" ? (
        <div className="p-2 font-medium text-sm bg-blue-50 border border-blue-500 text-blue-500 rounded-lg">
          {data.status}
        </div>
      ) : data.status === "DIAMBIL" ? (
        <div className="p-2 font-medium text-sm bg-green-50 border border-green-500 text-green-500 rounded-lg">
          {data.status}
        </div>
      ) : data.status === "DICUCI" ? (
        <div className="p-2 font-medium text-sm bg-orange-50 border border-orange-500 text-orange-500 rounded-lg">
          {data.status}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default VehicleStatus;
