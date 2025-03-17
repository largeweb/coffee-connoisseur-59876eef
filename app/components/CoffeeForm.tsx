// app/components/CoffeeForm.tsx
"use client";

import React, { useState } from "react";

interface Props {
  onSave: (data: {
    origin: string;
    roast: string;
    aroma: string;
    flavor: string;
    body: string;
  }) => void;
}

const CoffeeForm: React.FC<Props> = ({ onSave }) => {
  const [origin, setOrigin] = useState("");
  const [roast, setRoast] = useState("");
  const [aroma, setAroma] = useState("");
  const [flavor, setFlavor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSave({ origin, roast, aroma, flavor, body });
    // Clear the form after submitting
    setOrigin("");
    setRoast("");
    setAroma("");
    setFlavor("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
          Origin
        </label>
        <input
          type="text"
          id="origin"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="roast" className="block text-sm font-medium text-gray-700">
          Roast
        </label>
        <input
          type="text"
          id="roast"
          value={roast}
          onChange={(e) => setRoast(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="aroma" className="block text-sm font-medium text-gray-700">
          Aroma
        </label>
        <input
          type="text"
          id="aroma"
          value={aroma}
          onChange={(e) => setAroma(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="flavor" className="block text-sm font-medium text-gray-700">
          Flavor
        </label>
        <input
          type="text"
          id="flavor"
          value={flavor}
          onChange={(e) => setFlavor(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="body" className="block text-sm font-medium text-gray-700">
          Body
        </label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Coffee Note
        </button>
      </div>
    </form>
  );
};

return CoffeeForm;