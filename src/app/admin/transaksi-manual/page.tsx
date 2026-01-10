"use client"

import React from 'react'

const dataLayanan = [
    {
        id: 1,
        name: "Wash & Wax",
        price: 10000,
    },
    {
        id: 2,
        name: "Wash & Wax 2",
        price: 10000,
    },
    {
        id: 3,
        name: "Wash & Wax 3",
        price: 10000,
    },
]

const TransaksiManualPage = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
        <div className='space-y-6'>
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">Transaksi Manual</h3>
            </div>
            <div className='flex gap-4'>
                <div className='bg-white p-5 flex-1 rounded-lg shadow-sm'>
                    <h3 className='font-semibold text-lg'>Informasi Transaksi</h3>
                    <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
                        <div>
                            <label
                                htmlFor="namaCustomer"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Nama Customer
                            </label>
                            <input
                                type="text"
                                id="namaCustomer"
                                name="namaCustomer"
                                placeholder="Masukkan nama customer"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="noHp"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Nomor Handphone
                            </label>
                            <input
                                type="text"
                                id="noHp"
                                name="noHp"
                                placeholder="08123456XXXX"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="platNomor"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Plat Nomor
                            </label>
                            <input
                                type="text"
                                id="platNomor"
                                name="platNomor"
                                placeholder="B 1234 XXX"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                                required
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="jenisKendaraan"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Jenis Kendaraan
                            </label>
                            <select
                                id="jenisKendaraan"
                                name="jenisKendaraan"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                                required
                            >
                                <option value="">Pilih Jenis Kendaraan</option>
                                <option value="mobil">Mobil</option>
                                <option value="motor">Motor</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="jenisLayanan"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Jenis Layanan
                            </label>
                            <select
                                id="jenisLayanan"
                                name="jenisLayanan"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all"
                                required
                            >
                                <option value="">Pilih Jenis Layanan</option>
                                {dataLayanan.map((layanan) => (
                                    <option key={layanan.id} value={layanan.id}>
                                        {layanan.name} - {layanan.price}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <hr className='text-gray-200' />
                        <div className='flex justify-between items-center'>
                            <h3>Total Harga</h3>
                            <h3>Rp. 0</h3>
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">
                            Buat Transaksi
                        </button>
                    </form>
                </div>
                <div className='bg-white p-5 flex-1 rounded-lg shadow-sm'>
                    <h3 className='font-semibold text-lg'>Daftar Harga Layanan</h3>

                </div>
            </div>
        </div>
    )
}

export default TransaksiManualPage