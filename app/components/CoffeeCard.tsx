// app/components/CoffeeCard.tsx

import React from "react";

interface Props {
  coffee: {
    origin: string;
    roast: string;
    aroma: string;
    flavor: string;
    body: string;
  };
}

const CoffeeCard: React.FC<Props> = ({ coffee }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-2">{coffee.origin}</h3>
      <p className="text-gray-700">
        <span className="font-bold">Roast:</span> {coffee.roast}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Aroma:</span> {coffee.aroma}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Flavor:</span> {coffee.flavor}
      </p>
      <p className="text-gray-700">
        <span className="font-bold">Body:</span> {coffee.body}
      </p>
    </div>
  );
};

return CoffeeCard;