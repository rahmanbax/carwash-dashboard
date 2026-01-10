"use client";
import { IconEdit } from "@tabler/icons-react";
import React from "react";

const sampleAdmin = {
  fullName: "John Doe",
  username: "johndoe",
  phone: "08123456789",
  email: "john.doe@example.com",
  layanan: "Cuci Bersih",
  waktu: "12:00",
  estimasiSelesai: "12:30",
  harga: 50000,
};

const TransactionPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Transaksi Kendaraan</h3>
        <div className="flex gap-2 bg-white rounded-lg">
          <select className="w-48 p-2 border border-gray-300 rounded-lg">
            <option value="today">Hari Ini</option>
            <option value="tomorrow">Besok</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex bg-white rounded-lg shadow-sm">
          <div className="p-4 flex-1">KENDARAAN</div>
          <div className="p-4 flex-1">CUSTOMER</div>
          <div className="p-4 flex-1">LAYANAN</div>
          <div className="p-4 flex-1">WAKTU</div>
          <div className="p-4 w-52 text-center">STATUS</div>
          <div className="p-4 w-44 text-center">AKSI</div>
        </div>
        <div className="flex items-center bg-white rounded-lg shadow-sm border-t border-gray-200">
          <div className="p-4 flex-1 flex flex-col">
            <span className="font-medium">{sampleAdmin.fullName}</span>
            <span className="text-gray-500">{sampleAdmin.username}</span>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <span className="font-medium">{sampleAdmin.phone}</span>
            <span className="text-gray-500">{sampleAdmin.email}</span>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <span className="font-medium">{sampleAdmin.layanan}</span>
            <span className="text-gray-500">{sampleAdmin.harga}</span>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <span className="font-medium">{sampleAdmin.waktu}</span>
            <span className="text-gray-500">Estimasi Selesai: {sampleAdmin.estimasiSelesai}</span>
          </div>
          <div className="p-4 w-52 text-center">Belum Dibayar</div>
          <div className="p-4 w-44 text-center">
            <button className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded-lg text-sm">
              <IconEdit size={20} />
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
