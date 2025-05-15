import { useState } from 'react';
import { Search, Filter, ArrowUpDown, Rocket, Users, TrendingUp, Calendar, Award } from 'lucide-react';
import StartupCard from '../components/StartupCard';

const StartupsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  
  // Mock data for startups
  const startups = [
    {
      id: '1',
      name: 'GreenTech Solutions',
      logo: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'CleanTech',
      description: 'Pioneering sustainable energy solutions through innovative solar technology, reducing carbon footprints for businesses worldwide.',
      funding: '$2.5M',
      team: 18,
      founded: 2020,
      location: 'San Francisco',
      stage: 'Seed',
      traction: '32% MoM growth',
      isHot: true,
    },
    {
      id: '2',
      name: 'MedLife AI',
      logo: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'HealthTech',
      description: 'Leveraging artificial intelligence to revolutionize early disease detection and improving healthcare outcomes globally.',
      funding: '$4.7M',
      team: 24,
      founded: 2019,
      location: 'Boston',
      stage: 'Series A',
      traction: '15k+ users',
    },
    {
      id: '3',
      name: 'FinFlow',
      logo: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'FinTech',
      description: 'Democratizing financial services through an AI-powered platform that helps small businesses access affordable capital and financial tools.',
      funding: '$8.2M',
      team: 32,
      founded: 2018,
      location: 'New York',
      stage: 'Series A',
      traction: '45k transactions/month',
    },
    {
      id: '4',
      name: 'EduSpark',
      logo: 'https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'EdTech',
      description: 'Transforming education with personalized learning paths powered by AI, making quality education accessible to students worldwide.',
      funding: '$1.8M',
      team: 15,
      founded: 2021,
      location: 'Chicago',
      stage: 'Seed',
      traction: '8k+ active users',
    },
    {
      id: '5',
      name: 'DeliveryBot',
      logo: 'https://images.pexels.com/photos/8837714/pexels-photo-8837714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'Robotics',
      description: 'Autonomous delivery robots for last-mile logistics, reducing delivery costs by 60% while eliminating carbon emissions.',
      funding: '$12M',
      team: 45,
      founded: 2017,
      location: 'Austin',
      stage: 'Series B',
      traction: '500k+ deliveries',
    },
    {
      id: '6',
      name: 'CloudSecure',
      logo: 'https://images.pexels.com/photos/2035239/pexels-photo-2035239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'Cybersecurity',
      description: 'Next-generation cloud security platform that uses machine learning to detect and prevent threats in real-time.',
      funding: '$5.4M',
      team: 27,
      founded: 2019,
      location: 'Seattle',
      stage: 'Series A',
      traction: '200+ enterprise clients',
    },
  ];
  
  const industries = ['All', 'FinTech', 'HealthTech', 'CleanTech', 'EdTech', 'Cybersecurity', 'Robotics', 'AI/ML'];
  const stages = ['All', 'Pre-Seed', 'Seed', 'Series A', 'Series B', 'Series C+'];
  const locations = ['All', 'San Francisco', 'New York', 'Boston', 'Austin', 'Chicago', 'Seattle', 'Los Angeles', 'Global'];

  const filteredStartups = startups.filter(startup => {
    const matchesSearch = searchQuery === '' || 
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesIndustry = selectedIndustry === 'All' || startup.industry === selectedIndustry;
    const matchesStage = selectedStage === 'All' || startup.stage === selectedStage;
    const matchesLocation = selectedLocation === 'All' || startup.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesStage && matchesLocation;
  });
  
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-raleway font-bold mb-4">Discover Innovative Startups</h1>
          <p className="text-text-secondary max-w-3xl">
            Browse through our curated list of startups across various industries and stages. Find the next unicorn or connect with founders building transformative solutions.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-secondary rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                placeholder="Search startups by name, description, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <div className="w-full md:w-auto">
                <select
                  className="w-full h-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-full md:w-auto">
                <select
                  className="w-full h-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                >
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>
              
              <div className="w-full md:w-auto">
                <select
                  className="w-full h-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              <button className="flex items-center justify-center px-4 py-3 rounded-lg bg-white border border-gray-300 hover:bg-secondary transition-colors">
                <Filter className="h-5 w-5 text-gray-700 mr-2" />
                <span>More Filters</span>
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-text-secondary">
              Showing <span className="font-medium">{filteredStartups.length}</span> startups
            </p>
            <div className="flex items-center">
              <span className="text-sm text-text-secondary mr-2">Sort by:</span>
              <button className="flex items-center text-sm font-medium text-gray-900 hover:text-accent transition-colors">
                Latest <ArrowUpDown className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="mb-8 flex flex-wrap gap-3">
          <div className="text-sm font-medium mr-2 flex items-center">
            <Filter className="h-4 w-4 mr-1 text-accent" />
            Quick Filters:
          </div>
          {['Trending', 'New Additions', 'Female Founders', 'Remote Teams', 'Raising Now'].map((filter) => (
            <button 
              key={filter}
              className="px-3 py-1 rounded-full bg-secondary text-gray-700 text-sm hover:bg-accent hover:text-white transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
        
        {/* Categories */}
        <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-accent/5 rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <Rocket className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium text-gray-900">Technology</h3>
            <p className="text-sm text-text-secondary mt-1">425 startups</p>
          </div>
          <div className="bg-secondary rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium text-gray-900">Finance</h3>
            <p className="text-sm text-text-secondary mt-1">312 startups</p>
          </div>
          <div className="bg-secondary rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium text-gray-900">Health</h3>
            <p className="text-sm text-text-secondary mt-1">283 startups</p>
          </div>
          <div className="bg-secondary rounded-xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium text-gray-900">Education</h3>
            <p className="text-sm text-text-secondary mt-1">178 startups</p>
          </div>
        </div>
        
        {/* Startup List */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStartups.map(startup => (
              <StartupCard key={startup.id} {...startup} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-secondary inline-flex rounded-full p-4 mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium mb-2">No matching startups found</h3>
            <p className="text-text-secondary max-w-lg mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}
        
        {/* Pagination */}
        {filteredStartups.length > 0 && (
          <div className="mt-12 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-l-md text-text-secondary hover:bg-secondary">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                    page === 1 
                      ? 'text-accent bg-accent/5 border-accent'
                      : 'text-text-secondary hover:bg-secondary'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-r-md text-text-secondary hover:bg-secondary">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartupsPage;