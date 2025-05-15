import { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

const PricingStartupsPage = () => {
  const pricingTiers = [
    {
      name: 'Basic',
      description: 'Free forever for early-stage startups',
      price: 0,
      features: [
        'Basic Profile Setup',
        'Startup Timeline Feed',
        'Discover Investors',
        'Community Forums (comment section)',
        'Learning Hub',
        'Events Calendar (View-only)',
      ],
      notIncluded: [],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Pro',
      description: 'For growing startups ready to scale',
      price: 99,
      features: [
        'DM Access to Investors',
        'Priority Listing',
        'Pitch at Virtual Summits',
        'Mentorship Access',
        'Investor Interest Analytics',
        'Warm Intros via Platform',
        'Due Diligence Toolkit',
        'Smart Data Room Hosting',
      ],
      notIncluded: [
        'Dedicated success manager',
        'Custom integrations',
      ],
      cta: 'Get Started',
      popular: true,
    },
  ];

  const faqs = [
    {
      question: 'How does the free trial work?',
      answer: 'You can try any plan free for 14 days. No credit card required. Cancel anytime during the trial period.',
    },
    {
      question: 'Can I change plans later?',
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate your billing.",
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and offer wire transfer for annual enterprise plans.',
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No, there are no setup fees or hidden charges. You only pay the advertised price for your chosen plan.',
    },
    {
      question: 'Do you offer refunds?',
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
    },
    {
      question: 'What kind of support is included?',
      answer: 'All plans include email support. Pro plans get priority support, while Enterprise plans include 24/7 phone support and a dedicated success manager.',
    },
  ];

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-raleway font-bold mb-4">Pricing for Startups</h1>
          <p className="text-text-secondary text-lg mb-8">
            Choose the perfect plan for your startup's growth journey. All plans include a 14-day free trial.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-accent/5 border-2 border-accent shadow-lg'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-white text-sm font-medium px-3 py-1 rounded-full">
                  Recommended
                </span>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-raleway font-semibold mb-2">{tier.name}</h3>
                <p className="text-text-secondary">{tier.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-text-secondary ml-2">/month</span>
                </div>
              </div>
              
              <button
                className={`w-full py-3 px-6 rounded-lg mb-6 ${
                  tier.popular
                    ? 'bg-accent text-white hover:bg-accent/90'
                    : 'bg-secondary text-gray-900 hover:bg-secondary/80'
                } transition-colors font-medium`}
              >
                {tier.cta}
              </button>
              
              <div className="space-y-4">
                <p className="text-sm font-medium">Features included:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start text-text-secondary">
                      <X className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-2xl font-raleway font-semibold text-center mb-8">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6">Feature</th>
                  <th className="text-center py-4 px-6">Basic</th>
                  <th className="text-center py-4 px-6">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Basic Profile Setup', basic: true, pro: true },
                  { name: 'Startup Timeline Feed', basic: true, pro: true },
                  { name: 'Discover Investors', basic: true, pro: true },
                  { name: 'Community Forums (comment section)', basic: true, pro: true },
                  { name: 'Learning Hub', basic: true, pro: true },
                  { name: 'Events Calendar (View-only)', basic: true, pro: true },
                  { name: 'DM Access to Investors', basic: false, pro: true },
                  { name: 'Priority Listing', basic: false, pro: true },
                  { name: 'Pitch at Virtual Summits', basic: false, pro: true },
                  { name: 'Mentorship Access', basic: false, pro: true },
                  { name: 'Investor Interest Analytics', basic: false, pro: true },
                  { name: 'Warm Intros via Platform', basic: false, pro: true },
                  { name: 'Due Diligence Toolkit', basic: false, pro: true },
                  { name: 'Smart Data Room Hosting', basic: false, pro: true },
                ].map((feature) => (
                  <tr key={feature.name} className="border-b border-gray-200">
                    <td className="py-4 px-6">{feature.name}</td>
                    <td className="text-center py-4 px-6">{feature.basic ? '✓' : '✕'}</td>
                    <td className="text-center py-4 px-6">{feature.pro ? '✓' : '✕'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-raleway font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-secondary rounded-lg p-6">
                <h3 className="font-medium flex items-center mb-2">
                  <HelpCircle className="h-5 w-5 text-accent mr-2" />
                  {faq.question}
                </h3>
                <p className="text-text-secondary text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-raleway font-semibold mb-4">Still have questions?</h2>
          <p className="text-text-secondary mb-6">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary">Contact Sales</button>
            <button className="btn btn-secondary">View Documentation</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingStartupsPage;