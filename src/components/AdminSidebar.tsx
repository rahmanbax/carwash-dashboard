"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  IconCategory2,
  IconHistory,
  IconUsers,
  IconSquarePlus,
  IconReceipt,
} from "@tabler/icons-react";

const AdminSidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: IconCategory2,
    },
    {
      href: "/admin/transaksi",
      label: "Transaksi",
      icon: IconReceipt,
    },
    {
      href: "/admin/transaksi-manual",
      label: "Transaksi Manual",
      icon: IconSquarePlus,
    },
    {
      href: "/admin/riwayat-transaksi",
      label: "Riwayat Transaksi",
      icon: IconHistory,
    },
    {
      href: "/admin/manajemen-pegawai",
      label: "Manajemen Pegawai",
      icon: IconUsers,
    },
  ];

  return (
    <aside className="w-64 flex flex-col py-2 px-5 bg-white border-r border-gray-200">
      <div className="flex items-center p-2 mb-4">
        <Image src="/tel-u-logo.png" alt="TelU Logo" width={20} height={20} />
        <span className="ml-2 font-semibold text-xl">Carwash</span>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center p-3 rounded-lg transition-colors duration-200 font-medium ${isActive
                    ? "bg-cranberry-50 text-cranberry-500 border border-cranberry-500"
                    : "hover:bg-cranberry-50 hover:text-cranberry-500 text-gray-500"
                    }`}
                >
                  <Icon className="mr-2" size={20} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
