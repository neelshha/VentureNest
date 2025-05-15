import { useState } from 'react';
import { Users, TrendingUp, Award, Heart, Share2 } from 'lucide-react';
import { formatCurrency } from '../utils/currency';

interface StartupCardProps {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  funding: number;
  team: number;
  founded: string;
  location: string;
  stage: string;
  traction: string;
  isHot?: boolean;
}

const StartupCard = ({
  name,
  logo,
  industry,
  description,
  funding,
  team,
  founded,
  location,
  stage,
  traction,
  isHot = false,
}: StartupCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  return (
    <div className="card p-5 hover:translate-y-[-2px] transition-all duration-300">
      {isHot && (
        <div className="absolute top-3 right-3 bg-warning text-white text-xs px-2 py-1 rounded-full font-medium animate-pulse-subtle">
          Trending
        </div>
      )}
      
      <div className="flex items-center">
        <img 
          src={logo} 
          alt={`${name} logo`} 
          className="w-14 h-14 object-cover rounded-full border border-gray-200"
        />
        <div className="ml-3">
          <h3 className="font-raleway font-semibold text-lg text-gray-900">{name}</h3>
          <span className="text-sm text-text-secondary">{industry} • {location}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="flex flex-col">
          <span className="text-text-secondary">Funding</span>
          <span className="font-medium">{formatCurrency(funding)}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-text-secondary">Stage</span>
          <span className="font-medium">{stage}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-text-secondary">Founded</span>
          <span className="font-medium">{founded}</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <div className="flex items-center text-text-secondary text-sm mr-4">
          <Users className="h-4 w-4 mr-1" />
          <span>{team} team members</span>
        </div>
        <div className="flex items-center text-text-secondary text-sm">
          <TrendingUp className="h-4 w-4 mr-1" />
          <span>{traction}</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
        <button 
          className="btn btn-secondary text-sm py-2 px-4"
          onClick={() => {}}
        >
          <Award className="h-4 w-4 mr-2" /> View Pitch
        </button>
        
        <div className="flex space-x-2">
          <button 
            className={`p-2 rounded-full ${isBookmarked ? 'bg-accent/10 text-accent' : 'hover:bg-secondary text-gray-500'} transition-colors`}
            onClick={() => setIsBookmarked(!isBookmarked)}
            aria-label={isBookmarked ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-secondary text-gray-500 transition-colors"
            onClick={() => {}}
            aria-label="Share"
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartupCard;