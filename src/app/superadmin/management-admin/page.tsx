"use client";

import { useState } from "react";
import StatsCard from "@/components/StatsCard";
import AdminModal, { AdminFormData } from "@/components/AdminModal";
import {
  IconBuildingStore,
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";

// Sample tenant list (akan diganti dengan data dari API)
const tenantList = [
  { id: "1", name: "Tel-U Carwash Bandung" },
  { id: "2", name: "Tel-U Carwash Jakarta" },
  { id: "3", name: "Tel-U Carwash Surabaya" },
];

// Sample admin data
const sampleAdmin: AdminFormData = {
  username: "admin_bandung",
  password: "",
  fullName: "Admin 1 TelU Bandung",
  email: "admin1@carwash.com",
  phone: "08123456789",
  tenantId: "1",
};

const ManagementAdminPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editData, setEditData] = useState<AdminFormData | undefined>();

  const handleOpenAddModal = () => {
    setModalMode("add");
    setEditData(undefined);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (admin: AdminFormData) => {
    setModalMode("edit");
    setEditData(admin);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: AdminFormData) => {
    if (modalMode === "add") {
      // console.log("New admin:", data);
      // TODO: Implement API call to add admin
    } else {
      // console.log("Updated admin:", data);
      // TODO: Implement API call to update admin
    }
  };

  // Get tenant name by ID
  const getTenantName = (tenantId: string) => {
    const tenant = tenantList.find((t) => t.id === tenantId);
    return tenant?.name || "-";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Manajemen Admin Semua Tenant</h3>
        <button
          onClick={handleOpenAddModal}
          className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <IconPlus size={20} /> Tambah Admin
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          label="Total Admin"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
        <StatsCard
          label="Admin Aktif"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
        <StatsCard
          label="Admin Tidak Aktif"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
        <StatsCard
          label="Login Hari Ini"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
      </div>
      <div className="space-y-2">
        <div className="flex bg-white rounded-lg shadow-sm">
          <div className="p-4 flex-1">ADMIN</div>
          <div className="p-4 flex-1">KONTAK</div>
          <div className="p-4 flex-1">TENANT</div>
          <div className="p-4 w-28 text-center">STATUS</div>
          <div className="p-4 w-52 text-center">LOGIN TERAKHIR</div>
          <div className="p-4 w-28 text-center">AKSI</div>
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
          <div className="p-4 flex-1">
            {getTenantName(sampleAdmin.tenantId)}
          </div>
          <div className="p-4 w-28 text-center">Aktif</div>
          <div className="p-4 w-52 text-center">08/09/2025, 09.30</div>
          <div className="p-4 w-28 flex justify-center">
            <button
              onClick={() => handleOpenEditModal(sampleAdmin)}
              className="p-2 rounded-full hover:bg-blue-50 transition-all"
            >
              <IconEdit size={20} className="text-blue-500" />
            </button>
            <button className="p-2 rounded-full hover:bg-red-50 transition-all">
              <IconTrash size={20} className="text-red-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Admin Modal (Add/Edit) */}
      <AdminModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
        initialData={editData}
        tenants={tenantList}
      />
    </div>
  );
};

export default ManagementAdminPage;
