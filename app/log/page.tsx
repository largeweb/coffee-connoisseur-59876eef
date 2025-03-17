// app/log/page.tsx
"use client";

import React from "react";
import CoffeeForm from "@/components/CoffeeForm";
import { motion } from "framer-motion";

const LogPage = () => {
  const saveCoffeeNote = (formData: {
    origin: string;
    roast: string;
    aroma: string;
    flavor: string;
    body: string;
  }) => {
    console.log("Saving coffee note:", formData);
    alert("Coffee note saved (check console)!"); // Simple mock feedback
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md rounded-lg p-8 max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Log Coffee Tasting Note
        </h1>
        <CoffeeForm onSave={saveCoffeeNote} />
      </motion.div>
    </div>
  );
};

return LogPage;