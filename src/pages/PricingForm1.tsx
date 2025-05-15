import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingForm1 = () => {
  const [form, setForm] = useState({
    startupName: '',
    founderName: '',
    email: '',
    mobile: '',
    website: '',
    description: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pricing-form-2');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-raleway font-bold mb-2 flex items-center">
            <span className="text-accent mr-2">◆</span> Step 1: Basic Company Information
          </h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="startupName" className="block text-sm font-medium text-gray-700 mb-1">
              Startup Name
            </label>
            <input
              id="startupName"
              name="startupName"
              type="text"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="Enter your startup's name"
              value={form.startupName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="founderName" className="block text-sm font-medium text-gray-700 mb-1">
              Founder's Full Name
            </label>
            <input
              id="founderName"
              name="founderName"
              type="text"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="Enter your full name"
              value={form.founderName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-text-secondary">(For official communication)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-text-secondary">(With OTP verification)</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                +91
              </span>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                className="block w-full rounded-r-lg px-3 py-2 border border-gray-300 focus:ring-accent focus:border-accent"
                placeholder="____ ____ ____"
                value={form.mobile}
                onChange={handleChange}
                maxLength={10}
                pattern="[0-9]{10}"
              />
            </div>
          </div>
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Company Website <span className="text-text-secondary">(if any)</span>
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                https://
              </span>
              <input
                id="website"
                name="website"
                type="url"
                className="block w-full rounded-r-lg px-3 py-2 border border-gray-300 focus:ring-accent focus:border-accent"
                placeholder="yourcompany.com"
                value={form.website}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Startup Description <span className="text-text-secondary">(Elevator pitch in 500 characters)</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              maxLength={500}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="Describe your startup in a concise pitch (max 500 characters)"
              value={form.description}
              onChange={handleChange}
            />
            <div className="text-xs text-gray-400 text-right mt-1">
              {form.description.length}/500
            </div>
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary mt-4"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PricingForm1;
