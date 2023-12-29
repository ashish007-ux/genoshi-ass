
import React from 'react';

const PricingPlanCard = ({ name, price, features }) => (
  <div className="bg-white p-4 rounded-md shadow-md ">
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="mb-2">{price}</p>
    <ul className="list-disc list-inside">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    {/* Add other details, buttons, etc. */}
  </div>
);

export default PricingPlanCard;

