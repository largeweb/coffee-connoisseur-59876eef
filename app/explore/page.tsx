// app/explore/page.tsx
import React from "react";
import { motion } from "framer-motion";
import CoffeeCard from "@/components/CoffeeCard";
import { coffees } from "@/data/coffees";

export const runtime = "edge";

const ExplorePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Explore Coffees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee, index) => (
          <motion.div
            key={coffee.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CoffeeCard coffee={coffee} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;