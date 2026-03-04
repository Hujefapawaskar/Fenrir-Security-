import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { LayoutDashboard, Folder, Shield, Calendar, Bell, Settings, LifeBuoy, ChevronRight, X } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "#", icon: Folder },
  { name: "Scans", href: "/scans", icon: Shield },
  { name: "Schedule", href: "#", icon: Calendar },
];

const bottomNavItems = [
  { name: "Notifications", href: "#", icon: Bell },
  { name: "Settings", href: "#", icon: Settings },
  { name: "Support", href: "#", icon: LifeBuoy },
];

export function Sidebar({ onClose }) {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-surface-dark">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-white">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">aps</span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname.startsWith(item.href) && item.href !== "#";
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={cn(
                  "group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-teal-500/10 text-teal-600 dark:text-teal-400"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/50"
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-5 w-5 shrink-0",
                    isActive ? "text-teal-600 dark:text-teal-400" : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400"
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8">
          <nav className="space-y-1 px-3">
            {bottomNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className="group flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800/50"
              >
                <item.icon className="mr-3 h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-gray-200 p-4 dark:border-gray-800">
        <div className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800/50 cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Avatar" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900 dark:text-white">admin@edu.com</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">Security Lead</span>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
