import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LOOKING_FOR = [
  'Mentorship',
  'Fundraising',
  'Networking',
  'Co-founders/Team',
  'Publicity/PR',
];

const HEARD_ABOUT = [
  'Referral',
  'LinkedIn',
  'Event',
  'News/Media',
];

const PricingForm5 = () => {
  const [lookingFor, setLookingFor] = useState<string[]>([]);
  const [heardAbout, setHeardAbout] = useState<string[]>([]);
  const [otherHeard, setOtherHeard] = useState('');
  const [confirmInfo, setConfirmInfo] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleLookingForChange = (item: string) => {
    setLookingFor((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleHeardAboutChange = (item: string) => {
    setHeardAbout((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pricing-form-success');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-raleway font-bold mb-2 flex items-center">
            <span className="text-accent mr-2">◆</span> Step 5: Preferences & Consent
          </h1>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-semibold mb-2">22. What are you looking for?</label>
            <div className="space-y-2 ml-2">
              {LOOKING_FOR.map((item) => (
                <div key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item}
                    checked={lookingFor.includes(item)}
                    onChange={() => handleLookingForChange(item)}
                    className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor={item} className="text-base">{item}</label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">23. How did you hear about VentureNest?</label>
            <div className="space-y-2 ml-2">
              {HEARD_ABOUT.map((item) => (
                <div key={item} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item}
                    checked={heardAbout.includes(item)}
                    onChange={() => handleHeardAboutChange(item)}
                    className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  />
                  <label htmlFor={item} className="text-base">{item}</label>
                </div>
              ))}
              <div className="flex items-center mt-1">
                <input
                  type="checkbox"
                  id="otherHeard"
                  checked={!!otherHeard}
                  onChange={e => setOtherHeard(e.target.checked ? '' : otherHeard)}
                  className="mr-2 h-4 w-4 text-accent border-gray-300 rounded focus:ring-accent"
                  disabled={!!otherHeard}
                />
                <label htmlFor="otherHeard" className="text-base mr-2">Other:</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-2 py-1 w-48 focus:ring-accent focus:border-accent bg-gray-50"
                  placeholder="Specify..."
                  value={otherHeard}
                  onChange={e => setOtherHeard(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="confirmInfo"
                checked={confirmInfo}
                onChange={() => setConfirmInfo(!confirmInfo)}
                className="mr-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="confirmInfo" className="text-base text-gray-700"><span role="img" aria-label="check">✅</span> <i>I confirm all the information provided is accurate and true.</i></label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="mr-2 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                required
              />
              <label htmlFor="agreeTerms" className="text-base text-gray-700"><span role="img" aria-label="check">✅</span> <i>I agree to the Terms of Service and Privacy Policy.</i></label>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PricingForm5; 