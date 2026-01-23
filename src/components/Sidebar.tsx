"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  IconCategory2,
  IconUserPlus,
  IconBuildingStore,
} from "@tabler/icons-react";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/superadmin/dashboard",
      label: "Dashboard",
      icon: IconCategory2,
    },
    {
      href: "/superadmin/management-tenant",
      label: "Manajemen Tenant",
      icon: IconBuildingStore,
    },
    {
      href: "/superadmin/management-admin",
      label: "Manajemen Admin",
      icon: IconUserPlus,
    },
  ];

  return (
    <aside className="w-64 flex flex-col py-2 px-5 bg-white border-r border-gray-200">
      <a href="/" className="flex items-center p-2 mb-4 w-fit">
        <Image src="/tel-u-logo.png" alt="TelU Logo" width={20} height={20} />
        <span className="ml-2 font-semibold text-xl">Car Wash</span>
      </a>
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

export default Sidebar;
