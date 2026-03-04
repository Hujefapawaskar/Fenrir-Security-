import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/Input";
import { Check, Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen w-full bg-bg-dark text-white">
      {/* Left side */}
      <div className="relative hidden w-1/2 flex-col justify-center p-12 lg:flex xl:p-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-linear-to-br from-teal-900/40 via-bg-dark to-orange-900/20" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-linear-to-br from-orange-500/30 to-transparent blur-3xl rounded-full" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-xl"
        >
          <div className="flex items-center gap-2 mb-16">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
              <div className="h-3 w-3 rounded-full bg-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">aps</span>
          </div>

          <h1 className="mb-4 text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            Expert level Cybersecurity<br />
            in <span className="text-teal-500">hours</span> not weeks.
          </h1>

          <div className="mt-12 space-y-6">
            <h3 className="text-lg font-semibold">What's included</h3>
            
            <ul className="space-y-4">
              {[
                "Effortlessly spider and map targets to uncover hidden security flaws",
                "Deliver high-quality, validated findings in hours, not weeks.",
                "Generate professional, enterprise-grade security reports automatically."
              ].map((feature, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="mt-1 h-5 w-5 shrink-0 text-teal-500" />
                  <span className="text-gray-300 leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-24"
          >
            <div className="flex items-center gap-2 mb-2 text-teal-500">
              <span className="text-xl">★</span>
              <span className="font-semibold text-white">Trustpilot</span>
            </div>
            <p className="text-gray-400">
              <span className="text-white font-medium">Rated 4.5/5.0</span> (100k+ reviews)
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Right side */}
      <div className="flex w-full items-center justify-center p-6 sm:p-8 lg:w-1/2 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-2xl bg-white p-6 text-gray-900 shadow-2xl sm:p-8 dark:bg-surface-dark dark:text-white"
        >
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6 lg:hidden">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
                <div className="h-3 w-3 rounded-full bg-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">aps</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Sign up</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <a href="#" className="font-medium text-teal-600 hover:underline dark:text-teal-400">
                Log in
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Input placeholder="First name*" required className="h-12" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Last name*" required className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Input type="email" placeholder="Email address*" required className="h-12" />
            </div>

            <div className="space-y-2 relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8+ characters)*"
                required
                className="h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <div className="flex items-start gap-3 py-4">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-600 dark:border-gray-700 dark:bg-gray-800 dark:ring-offset-gray-900"
              />
              <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                I agree to Aps's{" "}
                <a href="#" className="text-teal-600 hover:underline dark:text-teal-400">Terms & Conditions</a>
                {" "}and acknowledge the{" "}
                <a href="#" className="text-teal-600 hover:underline dark:text-teal-400">Privacy Policy</a>
              </label>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold">
              Create account
            </Button>

            <div className="grid grid-cols-3 gap-3 pt-4">
              <Button variant="outline" type="button" className="h-12 bg-black text-white hover:bg-gray-900 border-transparent dark:bg-white dark:text-black dark:hover:bg-gray-100">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.126 3.805 3.052 1.527-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.62-1.493 3.609-2.959 1.153-1.682 1.629-3.313 1.65-3.397-.035-.016-3.18-1.22-3.216-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
                </svg>
              </Button>
              <Button variant="outline" type="button" className="h-12 border-gray-200 bg-white text-gray-900 hover:bg-gray-50 dark:border-gray-800 dark:bg-surface-dark dark:hover:bg-gray-800">
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </Button>
              <Button variant="outline" type="button" className="h-12 border-transparent bg-blue-600 text-white hover:bg-blue-700">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
