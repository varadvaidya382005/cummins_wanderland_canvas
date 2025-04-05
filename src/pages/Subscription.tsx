import React from 'react';
import { Check } from 'lucide-react';

const Subscription = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      period: '/month',
      features: [
        'Access to basic travel guides',
        'Community forum access',
        'Basic trip planning tools',
        'Email support'
      ],
      buttonText: 'Start Basic',
      buttonClass: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      name: 'Pro',
      price: '$19.99',
      period: '/month',
      features: [
        'All Basic features',
        'Premium travel guides',
        'Advanced trip planning',
        'Priority support',
        'Offline access'
      ],
      buttonText: 'Go Pro',
      buttonClass: 'bg-blue-600 hover:bg-blue-700',
      featured: true
    },
    {
      name: 'Enterprise',
      price: '$49.99',
      period: '/month',
      features: [
        'All Pro features',
        'Custom travel itineraries',
        'Dedicated travel consultant',
        '24/7 phone support',
        'Group travel management'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'bg-gray-600 hover:bg-gray-700'
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Journey</h2>
          <p className="text-xl text-gray-600">Select the perfect plan for your travel adventures</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                plan.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.featured && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg text-white font-medium ${plan.buttonClass}`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscription;