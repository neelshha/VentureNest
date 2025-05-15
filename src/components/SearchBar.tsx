import { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implementation would connect to API
  };

  return (
    <div className="container-custom">
      <div className="relative">
        <form onSubmit={handleSearch} className="flex items-center">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
              placeholder="Search for startups, investors, industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <button 
            type="button" 
            className="ml-2 p-3 rounded-full hover:bg-secondary transition-colors"
            onClick={onClose}
            aria-label="Close search"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </form>
        
        {searchQuery && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
            <div className="p-4">
              <p className="text-sm text-gray-500">Popular Searches</p>
              <div className="mt-2 space-y-1">
                {['AI Startups', 'Seed Funding', 'Angel Investors'].map((suggestion) => (
                  <div
                    key={suggestion}
                    className="p-2 hover:bg-secondary rounded-md cursor-pointer transition-colors"
                    onClick={() => {
                      setSearchQuery(suggestion);
                      handleSearch(new Event('submit') as any);
                    }}
                  >
                    <div className="flex items-center">
                      <Search className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{suggestion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;