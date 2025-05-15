import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingForm3 = () => {
  const [raisedFunds, setRaisedFunds] = useState<string>('');
  const [fundsAmount, setFundsAmount] = useState('');
  const [lastYearRevenue, setLastYearRevenue] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pricing-form-4');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-raleway font-bold mb-2 flex items-center">
            <span className="text-accent mr-2">◆</span> Step 3: Financial & Business Info
          </h1>
        </div>
        <form className="space-y-8" onSubmit={handleContinue}>
          <div>
            <label className="block text-lg font-semibold mb-2">12. Have you raised funds before?</label>
            <div className="space-y-2 ml-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="raisedYes"
                  name="raisedFunds"
                  value="yes"
                  checked={raisedFunds === 'yes'}
                  onChange={() => setRaisedFunds('yes')}
                  className="mr-2 h-4 w-4 text-accent border-gray-300 focus:ring-accent"
                />
                <label htmlFor="raisedYes" className="text-base">Yes</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="raisedNo"
                  name="raisedFunds"
                  value="no"
                  checked={raisedFunds === 'no'}
                  onChange={() => setRaisedFunds('no')}
                  className="mr-2 h-4 w-4 text-accent border-gray-300 focus:ring-accent"
                />
                <label htmlFor="raisedNo" className="text-base">No</label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="fundsAmount">13. If yes, how much?</label>
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">₹</span>
              <input
                id="fundsAmount"
                name="fundsAmount"
                type="number"
                className="block w-full rounded-r-lg px-3 py-2 border border-gray-300 focus:ring-accent focus:border-accent"
                placeholder="Amount raised"
                value={fundsAmount}
                onChange={e => setFundsAmount(e.target.value)}
                disabled={raisedFunds !== 'yes'}
                min="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="lastYearRevenue">14. Last Year's Revenue <span className="text-text-secondary text-base font-normal">(if applicable)</span></label>
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-lg">₹</span>
              <input
                id="lastYearRevenue"
                name="lastYearRevenue"
                type="number"
                className="block w-full rounded-r-lg px-3 py-2 border border-gray-300 focus:ring-accent focus:border-accent"
                placeholder="Revenue"
                value={lastYearRevenue}
                onChange={e => setLastYearRevenue(e.target.value)}
                min="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="businessModel">15. Business Model <span className="text-text-secondary text-base font-normal">(Explain in 1–2 lines)</span></label>
            <textarea
              id="businessModel"
              name="businessModel"
              rows={2}
              maxLength={250}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="Describe your business model in 1–2 lines"
              value={businessModel}
              onChange={e => setBusinessModel(e.target.value)}
            />
            <div className="text-xs text-gray-400 text-right mt-1">
              {businessModel.length}/250
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PricingForm3; 