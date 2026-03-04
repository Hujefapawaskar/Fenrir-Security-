import React from "react";
import { cn } from "../../lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-red-500 text-white": variant === "critical",
          "bg-orange-500 text-white": variant === "high",
          "bg-yellow-500 text-white": variant === "medium",
          "bg-green-500 text-white": variant === "low",
          "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200": variant === "default",
          "border border-green-500/20 bg-green-500/10 text-green-500": variant === "success",
          "border border-gray-500/20 bg-gray-500/10 text-gray-500": variant === "scheduled",
          "border border-red-500/20 bg-red-500/10 text-red-500": variant === "failed",
        },
        className
      )}
      {...props}
    />
  );
}
