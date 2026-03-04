import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { Search, ChevronDown, X, PlayCircle, Network, Beaker, CheckCircle2, FileText, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export function ScanDetail() {
  const [activeTab, setActiveTab] = useState("activity");

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="flex h-auto min-h-16 flex-col items-start justify-between gap-4 border-b border-gray-200 bg-white p-4 sm:flex-row sm:items-center sm:px-6 dark:border-gray-800 dark:bg-surface-dark">
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
        {/* Progress Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 rounded-xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-800 dark:bg-surface-dark"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Circular Progress */}
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-8 border-gray-100 dark:border-gray-800">
              <div className="absolute inset-0 rounded-full border-8 border-teal-500 border-t-transparent border-r-transparent" style={{ transform: "rotate(-45deg)" }} />
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-500">0%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">In Progress</div>
              </div>
            </div>

            {/* Steps */}
            <div className="flex w-full flex-1 items-center justify-between overflow-x-auto pb-4 lg:pb-0">
              <div className="flex min-w-max flex-1 items-center justify-between">
                {[
                  { name: "Spidering", icon: Network, active: true },
                  { name: "Mapping", icon: Search, active: false },
                  { name: "Testing", icon: Beaker, active: false },
                  { name: "Validating", icon: CheckCircle2, active: false },
                  { name: "Reporting", icon: FileText, active: false },
                ].map((step, i, arr) => (
                  <React.Fragment key={step.name}>
                    <div className="flex flex-col items-center gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full border-2 ${step.active ? "border-teal-500 bg-teal-500/10 text-teal-500" : "border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-surface-dark"}`}>
                        <step.icon className="h-5 w-5" />
                      </div>
                      <span className={`text-sm font-medium ${step.active ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                        {step.name}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <div className="h-px w-8 sm:w-16 lg:flex-1 bg-gray-200 dark:bg-gray-700 mx-2 sm:mx-4" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 border-t border-gray-200 pt-8 dark:border-gray-800">
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Scan Type</div>
              <div className="mt-1 font-medium text-gray-900 dark:text-white">Grey Box</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Targets</div>
              <div className="mt-1 font-medium text-gray-900 dark:text-white">google.com</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Started At</div>
              <div className="mt-1 font-medium text-gray-900 dark:text-white">Nov 22, 09:00AM</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Credentials</div>
              <div className="mt-1 font-medium text-gray-900 dark:text-white">2 Active</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Files</div>
              <div className="mt-1 font-medium text-gray-900 dark:text-white">Control.pdf</div>
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Checklists</div>
              <div className="mt-1 font-medium text-teal-600 dark:text-teal-400">40/350</div>
            </div>
          </div>
        </motion.div>

        {/* Lower Section */}
        <div className="grid min-h-150 grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Console */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1 flex flex-col rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-surface-dark lg:col-span-2"
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-teal-500" />
                <span className="font-medium text-gray-900 dark:text-white">Live Scan Console</span>
                <Badge variant="default" className="hidden sm:inline-flex gap-1 font-normal bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Running...
                </Badge>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <ChevronDown className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                <X className="h-5 w-5 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
              </div>
            </div>

            <div className="flex border-b border-gray-200 px-4 dark:border-gray-800 overflow-x-auto">
              <button
                className={`border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === "activity" ? "border-teal-500 text-teal-600 dark:text-teal-400" : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"}`}
                onClick={() => setActiveTab("activity")}
              >
                Activity Log
              </button>
              <button
                className={`border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap ${activeTab === "verification" ? "border-teal-500 text-teal-600 dark:text-teal-400" : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"}`}
                onClick={() => setActiveTab("verification")}
              >
                Verification Loops
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-300">
              <div className="space-y-4">
                <div>
                  <span className="text-gray-500">[09:00:00]</span> I'll begin a systematic penetration test on <span className="text-teal-600 dark:text-teal-400 break-all">helpdesk.democorp.com</span>. Let me start with reconnaissance and enumeration.
                </div>
                <div>
                  <span className="text-gray-500">[09:01:00]</span> Good! target is online. Now let me perform port scanning to identify running services.
                </div>
                <div>
                  <span className="text-gray-500">[09:02:00]</span> Excellent reconnaissance results:
                  <div className="ml-2 sm:ml-4 mt-1 border-l-2 border-gray-200 pl-2 sm:pl-4 text-gray-500 dark:border-gray-700 break-all">
                    - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)
                  </div>
                  Let me probe the web server on target first to understand its structure.
                </div>
                <div>
                  <span className="text-gray-500">[09:03:00]</span> Great! I found a login page for a Help Desk Platform. I can see a useful comment: <span className="text-teal-600 dark:text-teal-400 break-all">"TODO: Delete the testing account (test:test)"</span>. Let me test this credential. The login redirects to <span className="rounded bg-gray-100 px-1.5 py-0.5 text-gray-900 dark:bg-gray-800 dark:text-gray-200 break-all">/password/test</span>. Let me follow that path and explore it.
                </div>
                <div>
                  <span className="text-gray-500">[09:04:00]</span> The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to <span className="text-teal-600 dark:text-teal-400">'#'</span> which means the current page. Let me try a different approach.
                </div>
                <div>
                  <span className="text-gray-500">[09:05:00]</span> It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the <span className="text-teal-600 dark:text-teal-400">test:test</span> password directly on other endpoints.
                </div>
                <div>
                  <span className="text-gray-500">[09:06:00]</span> Great! I can access the dashboard using the <span className="rounded bg-teal-500/10 px-1.5 py-0.5 text-teal-600 dark:text-teal-400 break-all">'X-UserId: 10032'</span> header.
                  The dashboard shows "Welcome, John Doe". This suggests an <span className="font-bold text-red-500">**IDOR vulnerability**</span> - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-3 border-t border-gray-200 bg-gray-50 px-4 py-3 text-xs text-gray-500 sm:flex-row sm:items-center dark:border-gray-800 dark:bg-surface-dark dark:text-gray-400">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  Sub-Agents: 0
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  Parallel Executions: 2
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                  Operations: 1
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-red-500">Critical: 0</span>
                <span className="text-orange-500">High: 0</span>
                <span className="text-yellow-500">Medium: 0</span>
                <span className="text-green-500">Low: 0</span>
              </div>
            </div>
          </motion.div>

          {/* Finding Log */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-surface-dark"
          >
            <div className="border-b border-gray-200 px-4 py-3 font-medium text-gray-900 dark:border-gray-800 dark:text-white">
              Finding Log
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="critical">Critical</Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">10:45:23</span>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">SQL Injection in Authentication Endpoint</h4>
                <div className="text-sm text-teal-600 dark:text-teal-400 mb-2 font-mono break-all">/api/users/profile</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="high">High</Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">10:45:23</span>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Unauthorized Access to User Metadata</h4>
                <div className="text-sm text-teal-600 dark:text-teal-400 mb-2 font-mono break-all">/api/auth/login</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.</p>
              </div>

              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="medium">Medium</Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">10:45:23</span>
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Broken Authentication Rate Limiting</h4>
                <div className="text-sm text-teal-600 dark:text-teal-400 mb-2 font-mono break-all">/api/search</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">No effective rate limiting detected on login attempts. Automated brute-force attempts possible.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
