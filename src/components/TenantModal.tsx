"use client";

import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";

export type TenantFormData = {
  name: string;
  address: string;
  phone: string;
  email: string;
};

type TenantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TenantFormData) => void;
  mode: "add" | "edit";
  initialData?: TenantFormData;
};

const emptyFormData: TenantFormData = {
  name: "",
  address: "",
  phone: "",
  email: "",
};

const TenantModal = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  initialData,
}: TenantModalProps) => {
  const [formData, setFormData] = useState<TenantFormData>(emptyFormData);

  // Update form data when initialData changes (for edit mode)
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData || emptyFormData);
    }
  }, [isOpen, initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(emptyFormData);
    onClose();
  };

  const handleClose = () => {
    setFormData(emptyFormData);
    onClose();
  };

  if (!isOpen) return null;

  const isEditMode = mode === "edit";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {isEditMode ? "Edit Tenant" : "Tambah Tenant"}
          </h2>
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <IconX size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Tenant
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Masukkan nama tenant"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Alamat
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Masukkan alamat lengkap"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nomor Telepon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Masukkan nomor telepon"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Masukkan email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              {isEditMode ? "Perbarui" : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TenantModal;
