import { useState } from 'react';
import { Briefcase, Globe, TrendingUp, MessageCircle, Heart } from 'lucide-react';

interface InvestmentStage {
  name: string;
  color: string;
}

interface InvestorCardProps {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location: string;
  investmentFocus: string[];
  minInvestment: string;
  maxInvestment: string;
  investmentStages: InvestmentStage[];
  bio: string;
  portfolioSize: number;
  verified?: boolean;
}

const InvestorCard = ({
  name,
  title,
  company,
  avatar,
  location,
  investmentFocus,
  minInvestment,
  maxInvestment,
  investmentStages,
  bio,
  portfolioSize,
  verified = false,
}: InvestorCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  return (
    <div className="card p-5 hover:translate-y-[-2px] transition-all duration-300">
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={`${name} profile`} 
          className="w-14 h-14 object-cover rounded-full border border-gray-200"
        />
        <div className="ml-3">
          <div className="flex items-center">
            <h3 className="font-raleway font-semibold text-lg text-gray-900">{name}</h3>
            {verified && (
              <svg className="ml-1 h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <span className="text-sm text-text-secondary">{title} at {company}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-700 line-clamp-3">{bio}</p>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {investmentFocus.map((focus) => (
          <span 
            key={focus} 
            className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-secondary text-xs font-medium text-gray-700"
          >
            {focus}
          </span>
        ))}
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {investmentStages.map((stage) => (
          <span 
            key={stage.name} 
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${stage.color}/10 text-${stage.color}`}
          >
            {stage.name}
          </span>
        ))}
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="flex flex-col">
          <span className="text-text-secondary">Investment</span>
          <span className="font-medium">{minInvestment} - {maxInvestment}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-text-secondary">Portfolio</span>
          <span className="font-medium">{portfolioSize} companies</span>
        </div>
        <div className="flex flex-col">
          <span className="text-text-secondary">Location</span>
          <span className="font-medium flex items-center">
            <Globe className="h-3 w-3 mr-1" />
            {location}
          </span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
        <button 
          className="btn btn-primary text-sm py-2 px-4"
          onClick={() => {}}
        >
          <MessageCircle className="h-4 w-4 mr-2" /> Connect
        </button>
        
        <div className="flex space-x-2">
          <button 
            className={`p-2 rounded-full ${isBookmarked ? 'bg-accent/10 text-accent' : 'hover:bg-secondary text-gray-500'} transition-colors`}
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label={isBookmarked ? "Remove from saved" : "Save investor"}
          >
            <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-secondary text-gray-500 transition-colors"
            onClick={() => {}}
            aria-label="View portfolio"
          >
            <Briefcase className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorCard;