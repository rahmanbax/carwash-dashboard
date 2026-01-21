"use client";

import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import TextInput from "./inputs/TextInput";
import DropdownInput from "./inputs/DropdownInput";
import ButtonComponent from "./buttons/ButtonComponent";
import { Transaction } from "@/types/transaction";

type TransactionStatusModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (id: number, status: string) => Promise<void> | void;
    transaction: Transaction | null;
};

const statusOptions = [
    { id: "BOOKED", name: "BOOKED" },
    { id: "DITERIMA", name: "DITERIMA" },
    { id: "DICUCI", name: "DICUCI" },
    { id: "SIAP_DIAMBIL", name: "SIAP DIAMBIL" },
    { id: "SELESAI", name: "SELESAI" },
];

const TransactionStatusModal = ({
    isOpen,
    onClose,
    onSubmit,
    transaction,
}: TransactionStatusModalProps) => {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (isOpen && transaction) {
            setStatus(transaction.status);
        }
    }, [isOpen, transaction]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!transaction) return;

        setIsSubmitting(true);
        try {
            await onSubmit(transaction.id, status);
            onClose();
        } catch (error) {
            console.error("Update status error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen || !transaction) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Update Status Transaksi
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <IconX size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Plat Kendaraan
                            </label>
                            <div className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium uppercase">
                                {transaction.vehiclePlate}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Nama Customer
                            </label>
                            <div className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700">
                                {transaction.customerName}
                            </div>
                        </div>

                        <DropdownInput
                            id="status"
                            label="Status Transaksi"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            isRed={false}
                            required={true}
                            data={statusOptions}
                        />
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-6">
                        <div className="flex-1">
                            <ButtonComponent
                                label="Batal"
                                onClick={onClose}
                                isPrimary={false}
                                isFullWidth={true}
                                type="button"
                            />
                        </div>
                        <div className="flex-1">
                            <ButtonComponent
                                label={isSubmitting ? "Memproses..." : "Update Status"}
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

export default TransactionStatusModal;
