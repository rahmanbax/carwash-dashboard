"use client";

import { useState } from "react";
import StatsCard from "@/components/StatsCard";
import TenantModal, { TenantFormData } from "@/components/TenantModal";
import {
  IconBuildingStore,
  IconEdit,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";

// Sample tenant data
const sampleTenant: TenantFormData = {
  name: "Tel-U Carwash Bandung",
  address: "Jl. Telekomunikasi No. 1, Bandung",
  phone: "08123456789",
  email: "carwashbandung@gmail.com",
};

const ManagementTenantPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editData, setEditData] = useState<TenantFormData | undefined>();

  const handleOpenAddModal = () => {
    setModalMode("add");
    setEditData(undefined);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (tenant: TenantFormData) => {
    setModalMode("edit");
    setEditData(tenant);
    setIsModalOpen(true);
  };

  const handleSubmit = (data: TenantFormData) => {
    if (modalMode === "add") {
      // console.log("New tenant:", data);
      // TODO: Implement API call to add tenant
    } else {
      // console.log("Updated tenant:", data);
      // TODO: Implement API call to update tenant
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Manajemen Tenant</h3>
        <button
          onClick={handleOpenAddModal}
          className="bg-blue-500 hover:bg-blue-600 transition-all text-white px-4 py-2 rounded-lg flex items-center gap-1"
        >
          <IconPlus size={20} /> Tambah Tenant
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          label="Total Tenant"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
        <StatsCard
          label="Tenant Aktif"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
        <StatsCard
          label="Total Admin"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
        <StatsCard
          label="Tenant Baru (Bulan ini)"
          amount={10}
          isChange={false}
          icon={<IconBuildingStore />}
        />
      </div>
      <div className="space-y-2">
        <div className="flex bg-white rounded-lg shadow-sm">
          <div className="p-4 flex-1">TENANT</div>
          <div className="p-4 flex-1">KONTAK</div>
          <div className="p-4 w-28 text-center">STATUS</div>
          <div className="p-4 w-28 text-center">ADMIN</div>
          <div className="p-4 w-28 text-center">AKSI</div>
        </div>
        <div className="flex items-center bg-white rounded-lg shadow-sm border-t border-gray-200">
          <div className="p-4 flex-1 flex flex-col">
            <span className="font-medium">{sampleTenant.name}</span>
            <span className="text-gray-500">{sampleTenant.address}</span>
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <span className="font-medium">{sampleTenant.phone}</span>
            <span className="text-gray-500">{sampleTenant.email}</span>
          </div>
          <div className="p-4 w-28 bg-red">Tidak Aktif</div>
          <div className="p-4 w-28 text-center">3</div>
          <div className="p-4 w-28 flex justify-center">
            <button
              onClick={() => handleOpenEditModal(sampleTenant)}
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

      {/* Tenant Modal (Add/Edit) */}
      <TenantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        mode={modalMode}
        initialData={editData}
      />
    </div>
  );
};

export default ManagementTenantPage;
