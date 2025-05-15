import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const INDUSTRIES = [
  'Fintech',
  'Edtech',
  'Healthtech',
  'Agritech',
  'Consumer Goods',
  'SaaS',
  'Mobility',
];

const STAGES = [
  'Idea',
  'Prototype/MVP',
  'Early Revenue',
  'Scaling',
  'Growth/Series A+',
];

const TEAM_SIZES = [
  '1–5',
  '6–10',
  '11–25',
  '25+',
];

const PricingForm2 = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [otherIndustry, setOtherIndustry] = useState('');
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [dateOfIncorp, setDateOfIncorp] = useState('');
  const [startupLocation, setStartupLocation] = useState('');
  const [teamSizes, setTeamSizes] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleIndustryChange = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  const handleStageChange = (stage: string) => {
    setSelectedStages((prev) =>
      prev.includes(stage)
        ? prev.filter((s) => s !== stage)
        : [...prev, stage]
    );
  };

  const handleTeamSizeChange = (size: string) => {
    setTeamSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pricing-form-3');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-raleway font-bold mb-2 flex items-center">
            <span className="text-accent mr-2">◆</span> Step 2: Company Profile & Sector Details
          </h1>
        </div>
        <form className="space-y-8" onSubmit={handleContinue}>
          <div>
            <label className="block text-lg font-semibold mb-2">7. Industry/Sector <span className="text-text-secondary text-base font-normal">(Select multiple if applicable)</span></label>
            <div className="space-y-2 ml-2">
              {INDUSTRIES.map((industry) => (
                <div key={industry} className="flex items-center">
                  <input
                    type="checkbox"
                    id={industry}
                    checked={selectedIndustries.includes(industry)}
                    onChange={() => handleIndustryChange(industry)}
                    className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor={industry} className="text-base">{industry}</label>
                </div>
              ))}
              <div className="flex items-center mt-1">
                <input
                  type="checkbox"
                  id="otherIndustry"
                  checked={!!otherIndustry}
                  onChange={e => setOtherIndustry(e.target.checked ? '' : otherIndustry)}
                  className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  disabled={!!otherIndustry}
                />
                <label htmlFor="otherIndustry" className="text-base mr-2">Others:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-2 py-1 w-48 focus:ring-accent focus:border-accent bg-gray-50"
                  placeholder="Specify..."
                  value={otherIndustry}
                  onChange={e => setOtherIndustry(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">8. Stage of Startup</label>
            <div className="space-y-2 ml-2">
              {STAGES.map((stage) => (
                <div key={stage} className="flex items-center">
                  <input
                    type="checkbox"
                    id={stage}
                    checked={selectedStages.includes(stage)}
                    onChange={() => handleStageChange(stage)}
                    className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor={stage} className="text-base">{stage}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="dateOfIncorp">9. Date of Incorporation</label>
            <input
              id="dateOfIncorp"
              name="dateOfIncorp"
              type="date"
              className="block w-60 px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-gray-50"
              placeholder="DD/MM/YYYY"
              value={dateOfIncorp}
              onChange={e => setDateOfIncorp(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="startupLocation">10. Startup Location <span className="text-text-secondary text-base font-normal">(City, State)</span></label>
            <input
              id="startupLocation"
              name="startupLocation"
              type="text"
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-gray-50"
              placeholder="City, State"
              value={startupLocation}
              onChange={e => setStartupLocation(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">11. Team Size</label>
            <div className="space-y-2 ml-2">
              {TEAM_SIZES.map((size) => (
                <div key={size} className="flex items-center">
                  <input
                    type="checkbox"
                    id={size}
                    checked={teamSizes.includes(size)}
                    onChange={() => handleTeamSizeChange(size)}
                    className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor={size} className="text-base">{size}</label>
                </div>
              ))}
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

export default PricingForm2; 