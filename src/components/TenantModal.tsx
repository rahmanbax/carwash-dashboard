"use client";

import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import TextInput from "./inputs/TextInput";
import TextBoxInput from "./inputs/TextBoxInput";
import DropdownInput from "./inputs/DropdownInput";
import ButtonComponent from "./buttons/ButtonComponent";

export type TenantFormData = {
  id?: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  isActive: boolean;
  latitude: string;
  longitude: string;
  photoUrl: string;
  photoFile?: File;
};

type TenantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TenantFormData) => Promise<void> | void;
  mode: "add" | "edit";
  initialData?: TenantFormData;
};

const emptyFormData: TenantFormData = {
  name: "",
  address: "",
  phone: "",
  email: "",
  isActive: true,
  latitude: "",
  longitude: "",
  photoUrl: "",
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

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photoFile: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value === "true" }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setFormData(emptyFormData);
      setPreviewUrl(null);
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
      setPreviewUrl(null);
      onClose();
    }
  };

  if (!isOpen) return null;

  const isEditMode = mode === "edit";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
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
            className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <IconX size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            id="name"
            label="Nama Tenant"
            value={formData.name}
            onChange={handleChange}
            isRed={false}
            required={true}
          />

          <TextBoxInput
            id="address"
            label="Alamat"
            value={formData.address}
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

          <div className="grid grid-cols-2 gap-4">
            <TextInput
              id="latitude"
              label="Latitude"
              value={formData.latitude}
              onChange={handleChange}
              isRed={false}
              required={true}
            />
            <TextInput
              id="longitude"
              label="Longitude"
              value={formData.longitude}
              onChange={handleChange}
              isRed={false}
              required={true}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Foto Tenant
            </label>
            <div className="flex flex-col gap-3">
              {(previewUrl || formData.photoUrl) && (
                <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={previewUrl || formData.photoUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <input
                type="file"
                id="photoFile"
                name="photoFile"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer p-1 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {isEditMode && (
            <DropdownInput
              id="isActive"
              label="Status Tenant"
              value={formData.isActive.toString()}
              onChange={handleSelectChange}
              isRed={false}
              required={true}
              data={[
                { id: "true", name: "Aktif" },
                { id: "false", name: "Tidak Aktif" },
              ]}
            />
          )}

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

export default TenantModal;
