import { ChevronRight, TrendingUp, Users, Rocket, Calendar, ArrowRight, User } from 'lucide-react';
import StartupCard from '../components/StartupCard';
import InvestorCard from '../components/InvestorCard';
import FeedPost from '../components/FeedPost';
import EventCard from '../components/EventCard';
import { formatCompactCurrency } from '../utils/currency';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

const HomePage = ({ setCurrentPage }: HomePageProps) => {
  // Mock data for featured startups
  const featuredStartups = [
    {
      id: '1',
      name: 'GreenTech Solutions',
      logo: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      industry: 'CleanTech',
      description: 'Pioneering sustainable energy solutions through innovative solar technology, reducing carbon footprints for businesses worldwide.',
      funding: 2500000,
      team: 18,
      founded: '2020',
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
      funding: 4700000,
      team: 24,
      founded: '2019',
      location: 'Boston',
      stage: 'Series A',
      traction: '15k+ users',
    },
  ];

  // Mock data for featured investors
  const featuredInvestors = [
    {
      id: '1',
      name: 'Sarah Chen',
      title: 'Managing Partner',
      company: 'Horizon Ventures',
      avatar: 'https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: 'New York',
      investmentFocus: ['AI/ML', 'FinTech', 'SaaS'],
      minInvestment: 250000,
      maxInvestment: 2000000,
      investmentStages: [
        { name: 'Pre-Seed', color: 'accent' },
        { name: 'Seed', color: 'accent' },
      ],
      bio: 'Early-stage investor with a passion for transformative technologies. Previously led investments at Goldman Sachs with 15+ successful exits.',
      portfolioSize: 28,
      verified: true,
    },
  ];

  // Mock data for news feed
  const feedPosts = [
    {
      id: '1',
      author: {
        name: 'David Park',
        avatar: 'https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Founder & CEO',
        company: 'TechFlow',
      },
      content: 'Excited to announce that TechFlow has closed our Series A funding round of $5M led by Accel Partners! Looking forward to scaling our platform and bringing on more amazing talent. #StartupLife #FundingNews',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      likes: 142,
      comments: 38,
      shares: 17,
      timestamp: '2h ago',
    },
  ];

  // Mock data for upcoming events
  const upcomingEvents = [
    {
      id: '1',
      title: 'Silicon Valley Pitch Competition',
      date: 'May 15, 2025',
      time: '1:00 PM - 5:00 PM PST',
      location: 'San Francisco Convention Center',
      isVirtual: false,
      description: 'Join us for our annual pitch competition where 10 selected startups will present their ideas to a panel of top-tier investors with a chance to win $100,000 in funding.',
      attendees: 250,
      imageSrc: 'https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Pitch Competition', 'Funding', 'Networking'],
      registrationUrl: '#',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent/10 to-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-raleway font-bold text-gray-900 leading-tight mb-6">
              Where <span className="text-accent">Ideas</span> Take Flight
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Connecting visionary founders with strategic investors. Discover opportunities, secure funding, and build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="btn btn-primary"
                onClick={() => setCurrentPage('startups')}
              >
                <Rocket className="h-5 w-5 mr-2" /> Explore Startups
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setCurrentPage('investors')}
              >
                <User className="h-5 w-5 mr-2" /> Find Investors
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-full">
          <img 
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Startup team collaboration"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Trending Startups */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-raleway font-semibold flex items-center">
                  <TrendingUp className="h-5 w-5 text-accent mr-2" />
                  Trending Startups
                </h2>
                <button 
                  className="text-accent flex items-center text-sm font-medium hover:underline"
                  onClick={() => setCurrentPage('startups')}
                >
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {featuredStartups.map(startup => (
                  <StartupCard key={startup.id} {...startup} />
                ))}
              </div>
              
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-raleway font-semibold text-lg mb-3">Ready to showcase your startup?</h3>
                <p className="text-text-secondary mb-4">Create your profile and get discovered by our network of investors.</p>
                <button className="btn btn-primary w-full">
                  List Your Startup
                </button>
              </div>
            </div>
            
            {/* Middle Column - News Feed */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-raleway font-semibold">Latest Updates</h2>
                <button className="text-accent hover:underline text-sm">Refresh</button>
              </div>
              
              <div className="space-y-4">
                {feedPosts.map(post => (
                  <FeedPost key={post.id} {...post} />
                ))}
                
                <div className="card p-5">
                  <h3 className="font-raleway font-semibold text-lg mb-3">Industry Insights</h3>
                  <p className="text-text-secondary mb-4">AI and machine learning startups saw a 45% increase in funding during Q1 2025.</p>
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-accent">{formatCompactCurrency(18.7)}</span>
                      <span className="text-sm text-text-secondary">Total VC Funding</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-accent">842</span>
                      <span className="text-sm text-text-secondary">Deals Closed</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-accent">3.2x</span>
                      <span className="text-sm text-text-secondary">Avg. Multiple</span>
                    </div>
                  </div>
                </div>
                
                <div className="card p-5 bg-accent/5 border border-accent/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-raleway font-semibold text-lg mb-1">Founder Spotlight</h3>
                      <p className="text-text-secondary">Weekly featured founders making waves</p>
                    </div>
                    <span className="bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded-full">New</span>
                  </div>
                  <div className="mt-4 flex items-center">
                    <img 
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Alex Wong" 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h4 className="font-medium">Alex Wong</h4>
                      <p className="text-sm text-text-secondary">Founder & CEO, Quantum Leap</p>
                      <p className="text-sm mt-1">Revolutionizing quantum computing accessibility for businesses</p>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button className="text-accent flex items-center text-sm font-medium hover:underline">
                      Read interview <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Investors & Events */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-raleway font-semibold flex items-center">
                  <Users className="h-5 w-5 text-accent mr-2" />
                  Featured Investors
                </h2>
                <button 
                  className="text-accent flex items-center text-sm font-medium hover:underline"
                  onClick={() => setCurrentPage('investors')}
                >
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {featuredInvestors.map(investor => (
                  <InvestorCard key={investor.id} {...investor} />
                ))}
              </div>
              
              <div className="flex items-center justify-between mt-8">
                <h2 className="text-xl font-raleway font-semibold flex items-center">
                  <Calendar className="h-5 w-5 text-accent mr-2" />
                  Upcoming Events
                </h2>
                <button 
                  className="text-accent flex items-center text-sm font-medium hover:underline"
                  onClick={() => setCurrentPage('events')}
                >
                  View all <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <EventCard key={event.id} {...event} />
                ))}
              </div>
              
              <div className="bg-secondary rounded-xl p-6">
                <h3 className="font-raleway font-semibold text-lg mb-3">Are you an investor?</h3>
                <p className="text-text-secondary mb-4">Join our network to discover promising startups and connect with founders.</p>
                <button className="btn btn-primary w-full">
                  Join as Investor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-secondary py-16">
        <div className="container-custom">
          <h2 className="text-center text-3xl font-raleway font-semibold mb-12">Venture Nest by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="block text-4xl font-bold text-accent mb-2">2,500+</span>
              <span className="text-text-secondary">Startups</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-accent mb-2">850+</span>
              <span className="text-text-secondary">Investors</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-accent mb-2">{formatCompactCurrency(145)}</span>
              <span className="text-text-secondary">Funding Raised</span>
            </div>
            <div className="text-center">
              <span className="block text-4xl font-bold text-accent mb-2">28</span>
              <span className="text-text-secondary">Countries</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-accent rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-raleway font-bold mb-4">Ready to take your startup to new heights?</h2>
              <p className="text-white/90 text-lg mb-8">Join thousands of founders and investors on Venture Nest and be part of a thriving ecosystem of innovation and growth.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn bg-white text-accent hover:bg-white/90">
                  Create an Account
                </button>
                <button className="btn bg-transparent border border-white text-white hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-0 w-1/3 h-full opacity-20">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="white" d="M46.5,-54.6C57.9,-44.7,63.2,-27.4,65.7,-9.8C68.1,7.8,67.7,25.7,59,38.5C50.3,51.3,33.3,59,16.2,62.5C-0.9,65.9,-18.1,65,-33.1,58C-48.2,51,-61.1,37.9,-67.3,21.7C-73.5,5.6,-73,-13.5,-64.7,-27.2C-56.4,-41,-40.4,-49.3,-25.4,-57.2C-10.5,-65.1,3.5,-72.6,16.9,-70.6C30.4,-68.6,35.1,-64.5,46.5,-54.6Z" transform="translate(100 100)" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;