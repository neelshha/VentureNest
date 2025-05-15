import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PricingForm4 = () => {
  const [regCert, setRegCert] = useState<File | null>(null);
  const [panCard, setPanCard] = useState<File | null>(null);
  const [pitchDeck, setPitchDeck] = useState<File | null>(null);
  const [auditedFinancials, setAuditedFinancials] = useState<File | null>(null);
  const [linkedin, setLinkedin] = useState('');
  const [otherLinks, setOtherLinks] = useState('');
  const navigate = useNavigate();

  const handleFileChange = (setter: (file: File | null) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.files && e.target.files[0] ? e.target.files[0] : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/pricing-form-5');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-raleway font-bold mb-2 flex items-center">
            <span className="text-accent mr-2">◆</span> Step 4: Documents & Verification
          </h1>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label className="block text-lg font-semibold mb-2">16. Upload Company Registration Certificate <span className="text-text-secondary text-base font-normal">(PDF or image)</span></label>
            <input
              type="file"
              accept=".pdf,image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-accent hover:file:bg-accent/10"
              onChange={handleFileChange(setRegCert)}
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">17. Upload PAN Card (Company/Founder)</label>
            <input
              type="file"
              accept=".pdf,image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-accent hover:file:bg-accent/10"
              onChange={handleFileChange(setPanCard)}
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">18. Upload Pitch Deck <span className="text-text-secondary text-base font-normal">(Optional but recommended)</span></label>
            <input
              type="file"
              accept=".pdf,image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-accent hover:file:bg-accent/10"
              onChange={handleFileChange(setPitchDeck)}
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2">19. Upload Latest Audited Financials <span className="text-text-secondary text-base font-normal">(Optional)</span></label>
            <input
              type="file"
              accept=".pdf,image/*"
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-accent hover:file:bg-accent/10"
              onChange={handleFileChange(setAuditedFinancials)}
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="linkedin">20. LinkedIn Profile of Founder</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">https://</span>
              <input
                id="linkedin"
                name="linkedin"
                type="url"
                className="block w-full rounded-r-lg px-3 py-2 border border-gray-300 focus:ring-accent focus:border-accent"
                placeholder="linkedin.com/in/your-profile"
                value={linkedin}
                onChange={e => setLinkedin(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="otherLinks">21. Other Relevant Links <span className="text-text-secondary text-base font-normal">(YouTube, Media, etc.)</span></label>
            <input
              id="otherLinks"
              name="otherLinks"
              type="text"
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent"
              placeholder="Paste links here"
              value={otherLinks}
              onChange={e => setOtherLinks(e.target.value)}
            />
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

export default PricingForm4; 