"use client";

import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import TextInput from "./inputs/TextInput";
import PasswordInput from "./inputs/PasswordInput";
import DropdownInput from "./inputs/DropdownInput";
import ButtonComponent from "./buttons/ButtonComponent";

export type AdminFormData = {
  id?: number;
  username: string;
  password: string;
  fullName: string;
  email: string;
  phone: string;
  tenantId: string;
};

type Tenant = {
  id: string;
  name: string;
};

type AdminModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AdminFormData) => Promise<void> | void;
  mode: "add" | "edit";
  initialData?: AdminFormData;
  tenants: Tenant[];
};

const emptyFormData: AdminFormData = {
  username: "",
  password: "",
  fullName: "",
  email: "",
  phone: "",
  tenantId: "",
};

const AdminModal = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  initialData,
  tenants,
}: AdminModalProps) => {
  const [formData, setFormData] = useState<AdminFormData>(emptyFormData);

  // Update form data when initialData changes (for edit mode)
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData || emptyFormData);
    }
  }, [isOpen, initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData(emptyFormData);
      onClose();
    } catch (error) {
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData(emptyFormData);
      onClose();
    }
  };

  if (!isOpen) return null;

  const isEditMode = mode === "edit";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            {isEditMode ? "Edit Admin" : "Tambah Admin"}
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
          <TextInput
            id="username"
            label="Username"
            value={formData.username}
            onChange={handleChange}
            isRed={false}
            required={true}
          />

          <PasswordInput
            id="password"
            label={`Password ${isEditMode ? "(kosongkan jika tidak ingin mengubah)" : ""}`}
            value={formData.password}
            onChange={handleChange}
            isRed={false}
            required={!isEditMode}
          />

          <TextInput
            id="fullName"
            label="Nama Lengkap"
            value={formData.fullName}
            onChange={handleChange}
            isRed={false}
            required={true}
          />

          <TextInput
            id="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            isRed={false}
            required={true}
          />

          <TextInput
            id="phone"
            label="Nomor Telepon"
            value={formData.phone}
            onChange={handleChange}
            isRed={false}
            required={true}
          />

          <DropdownInput
            id="tenantId"
            label="Tenant"
            value={formData.tenantId}
            onChange={handleChange}
            isRed={false}
            required={true}
            data={tenants}
          />

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <div className="flex-1">
              <ButtonComponent
                label="Batal"
                onClick={handleClose}
                isPrimary={false}
                isFullWidth={true}
                type="button"
              />
            </div>
            <div className="flex-1">
              <ButtonComponent
                label={isSubmitting ? "Menyimpan..." : "Simpan"}
                isPrimary={true}
                isFullWidth={true}
                type="submit"
                disabled={isSubmitting}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminModal;
