"use client";

import { useState, useEffect } from "react";
import { IconX } from "@tabler/icons-react";
import { Transaction } from "@/types/transaction";
import VehicleStatus from "./vehicle/VehicleStatus";

type TransactionStatusModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (id: number, status: string) => Promise<void> | void;
    transaction: Transaction | null;
};

const statusOptions = [
    { id: "BOOKED", name: "Dibooking" },
    { id: "DITERIMA", name: "Diterima" },
    { id: "DICUCI", name: "Sedang Dicuci" },
    { id: "SIAP_DIAMBIL", name: "Siap Diambil" },
    { id: "SELESAI", name: "Selesai" },
];

const TransactionStatusModal = ({
    isOpen,
    onClose,
    onSubmit,
    transaction,
}: TransactionStatusModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleStatusClick = async (newStatus: string) => {
        if (!transaction || isSubmitting) return;

        setIsSubmitting(true);
        try {
            await onSubmit(transaction.id, newStatus);
            onClose();
        } catch (error) {
            console.error("Update status error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen || !transaction) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-screen">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            {/* Modal */}
            <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Update Status Kendaraan
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <IconX size={20} className="text-gray-500" />
                    </button>
                </div>

                <div className="space-y-3">
                    <div className="mb-4">
                        <p className="text-gray-500">Kendaraan: <span className="text-black">{transaction.vehiclePlate}</span></p>
                        <p className="text-gray-500">Customer: <span className="text-black">{transaction.customerName}</span></p>
                    </div>

                    <div className="space-y-2">
                        {statusOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleStatusClick(option.id)}
                                disabled={isSubmitting}
                                className={`flex items-center justify-between p-2 border rounded-lg gap-2 w-full ${transaction.status === option.id
                                    ? "bg-blue-50 border-blue-500"
                                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50 bg-white"
                                    } ${isSubmitting ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            >
                                <span className={`font-medium ${transaction.status === option.id ? "text-blue-500" : "text-black"}`}>
                                    {option.name}
                                </span>
                                <VehicleStatus status={option.id} />
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionStatusModal;
