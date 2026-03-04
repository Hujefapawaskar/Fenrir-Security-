import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Input } from "../components/ui/Input";
import { Search, Filter, Columns, Plus, ArrowUp, ArrowDown, RotateCw, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

const scans = [
  { id: 1, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: 2, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: 3, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: 4, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: 5, name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulns: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: 6, name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulns: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: "4d ago" },
  { id: 7, name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulns: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: "4d ago" },
  { id: 8, name: "IoT Devices", type: "Blackbox", status: "Failed", progress: 10, vulns: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: "3d ago" },
  { id: 9, name: "Temp Data", type: "Blackbox", status: "Failed", progress: 10, vulns: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: "3d ago" },
];

export function Dashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="flex h-auto min-h-16 flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-200 bg-white p-4 sm:px-6 dark:border-gray-800 dark:bg-surface-dark gap-4">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-gray-900 dark:text-white">Scan</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500 dark:text-gray-400">Private Assets</span>
          <span className="text-gray-400">/</span>
          <span className="text-teal-600 dark:text-teal-400">New Scan</span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" className="flex-1 sm:flex-none">Export Report</Button>
          <Button variant="danger" className="flex-1 sm:flex-none">Stop Scan</Button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {/* Org Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col xl:flex-row xl:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400"
        >
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-6">
            <div className="flex items-center gap-2">
              <span>Org:</span>
              <span className="font-medium text-gray-900 dark:text-white">Project X</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <span>Owner:</span>
              <span className="font-medium text-gray-900 dark:text-white">Nammagiri</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <span>Total Scans:</span>
              <span className="font-medium text-gray-900 dark:text-white">100</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <span>Scheduled:</span>
              <span className="font-medium text-gray-900 dark:text-white">1000</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <span>Rescans:</span>
              <span className="font-medium text-gray-900 dark:text-white">100</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200 dark:bg-gray-800" />
            <div className="flex items-center gap-2">
              <span>Failed Scans:</span>
              <span className="font-medium text-gray-900 dark:text-white">100</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <RotateCw className="h-4 w-4" />
            <span>10 mins ago</span>
          </div>
        </motion.div>

        {/* Severity Stats */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { label: "Critical Severity", count: 86, change: "+2% increase than yesterday", trend: "up", color: "text-red-500", bg: "bg-red-500/10", icon: "⊘" },
            { label: "High Severity", count: 16, change: "+0.9% increase than yesterday", trend: "up", color: "text-orange-500", bg: "bg-orange-500/10", icon: "⚠" },
            { label: "Medium Severity", count: 26, change: "+0.9% decrease than yesterday", trend: "down", color: "text-yellow-500", bg: "bg-yellow-500/10", icon: "⚠" },
            { label: "Low Severity", count: 16, change: "+0.9% increase than yesterday", trend: "up", color: "text-green-500", bg: "bg-green-500/10", icon: "⚲" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-surface-dark lg:border-none lg:bg-transparent lg:p-0 lg:dark:bg-transparent"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</span>
                <div className={`flex h-6 w-6 items-center justify-center rounded ${stat.bg} ${stat.color}`}>
                  <span className="text-sm">{stat.icon}</span>
                </div>
              </div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">{stat.count}</span>
                <div className={`flex items-center text-xs font-medium ${stat.trend === "up" ? "text-red-500" : "text-green-500"}`}>
                  {stat.trend === "up" ? <ArrowUp className="mr-1 h-3 w-3" /> : <ArrowDown className="mr-1 h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-8 h-px w-full bg-gray-200 dark:bg-gray-800 hidden lg:block" />

        {/* Toolbar */}
        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search scans by name or type..."
              className="pl-9 w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <Button variant="outline" className="gap-2 flex-1 sm:flex-none">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">Filter</span>
            </Button>
            <Button variant="outline" className="gap-2 flex-1 sm:flex-none">
              <Columns className="h-4 w-4" />
              <span className="hidden sm:inline">Column</span>
            </Button>
            <Button className="gap-2 flex-1 sm:flex-none">
              <Plus className="h-4 w-4" />
              New scan
            </Button>
          </div>
        </div>

        {/* Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-surface-dark"
        >
          <div className="overflow-x-auto">
            <table className="min-w-200 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                  <th className="px-6 py-4 font-medium">Scan Name</th>
                  <th className="px-6 py-4 font-medium">Type</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Progress</th>
                  <th className="px-6 py-4 font-medium">Vulnerability</th>
                  <th className="px-6 py-4 font-medium text-right">Last Scan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {scans.map((scan) => (
                  <tr
                    key={scan.id}
                    onClick={() => navigate(`/scans/${scan.id}`)}
                    className="group cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{scan.name}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">{scan.type}</td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={scan.status === "Completed" ? "success" : scan.status === "Scheduled" ? "scheduled" : "failed"}
                      >
                        {scan.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                          <div
                            className={`h-full rounded-full ${scan.status === "Failed" ? "bg-red-500" : "bg-teal-500"}`}
                            style={{ width: `${scan.progress}%` }}
                          />
                        </div>
                        <span className="text-gray-500 dark:text-gray-400">{scan.progress}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5">
                        {scan.vulns.critical > 0 && <Badge variant="critical" className="h-6 w-6 justify-center rounded p-0 text-xs">{scan.vulns.critical}</Badge>}
                        {scan.vulns.high > 0 && <Badge variant="high" className="h-6 w-6 justify-center rounded p-0 text-xs">{scan.vulns.high}</Badge>}
                        {scan.vulns.medium > 0 && <Badge variant="medium" className="h-6 w-6 justify-center rounded p-0 text-xs">{scan.vulns.medium}</Badge>}
                        {scan.vulns.low > 0 && <Badge variant="low" className="h-6 w-6 justify-center rounded p-0 text-xs">{scan.vulns.low}</Badge>}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-gray-500 dark:text-gray-400">{scan.lastScan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 px-6 py-4 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 gap-4">
            <span>Showing {scans.length} of 100 Scans</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <span className="sr-only">Previous</span>
                {"<"}
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                <span className="sr-only">Next</span>
                {">"}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
