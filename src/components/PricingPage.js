import React, { useState } from 'react';
import PricingPlanCard from './PricingPlanCard';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      name: 'Basic Plan',
      price: '$4/month/user',
      features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    },
    {
      name: 'Pro Plan',
      price: '$8/month/user',
      features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
    },
    {
      name: 'Enterprise Plan',
      price: 'Contact for price',
      features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
    },
  ];

  return (
    <div>
   
      <div className='mx-auto max-w-7xl px-6 lg:px-8 '>
        {plans.map((plan, index) => (
          <div key={index}>
            <PricingPlanCard {...plan} />
            <input
              type="radio"
              name="plan"
              value={plan.name}
              checked={selectedPlan === plan.name}
              onChange={() => handleSelectPlan(plan.name)}
            />
          </div>
        ))}
      </div>
      <div className='inline gap-4'>
      <div className='p-5'>
        <h3>Selected Plan: {selectedPlan}</h3>
        {/* Display selected plan details */}
      </div>
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Go to Dashboard Page</Link>
    </div>
      </div>
     
  );
};

export default PricingPage;
