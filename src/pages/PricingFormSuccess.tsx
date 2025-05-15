import { Link } from 'react-router-dom';

const PricingFormSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-sm text-center space-y-8">
        <div className="flex justify-center">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-2xl font-raleway font-bold mb-2">Thank you for submitting your details!</h1>
        <p className="text-lg text-text-secondary mb-6">
          Your account will be reviewed and verified within 2-3 business days.
        </p>
        <Link to="/" className="btn btn-primary inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PricingFormSuccess;

 