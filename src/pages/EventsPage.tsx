import { useState } from 'react';
import { Search, Filter, Calendar, ChevronDown, ArrowRight, MapPin, Users } from 'lucide-react';
import EventCard from '../components/EventCard';

const EventsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedDate, setSelectedDate] = useState('All');
  
  // Mock data for events
  const events = [
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
    {
      id: '2',
      title: 'Future of FinTech Summit',
      date: 'June 8, 2025',
      time: '9:00 AM - 6:00 PM EST',
      location: 'New York Marriott Marquis',
      isVirtual: false,
      description: 'Explore the latest trends and innovations in financial technology with industry leaders, founders, and investors. Topics include blockchain, digital banking, embedded finance, and more.',
      attendees: 500,
      imageSrc: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['FinTech', 'Conference', 'Networking'],
      registrationUrl: '#',
    },
    {
      id: '3',
      title: 'AI Startups Virtual Showcase',
      date: 'April 22, 2025',
      time: '10:00 AM - 12:00 PM GMT',
      location: 'Online',
      isVirtual: true,
      description: 'A virtual showcase featuring 8 promising AI startups from around the world. Hear their pitches, see product demos, and connect with founders revolutionizing industries with artificial intelligence.',
      attendees: 350,
      imageSrc: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['AI', 'Virtual Event', 'Demo Day'],
      registrationUrl: '#',
    },
    {
      id: '4',
      title: 'Healthcare Innovation Workshop',
      date: 'May 5, 2025',
      time: '2:00 PM - 5:00 PM CET',
      location: 'Berlin Innovation Center',
      isVirtual: false,
      description: 'An interactive workshop focused on solving healthcare challenges through technology. Connect with medical professionals, technologists, and investors interested in advancing healthcare solutions.',
      attendees: 120,
      imageSrc: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HealthTech', 'Workshop', 'Innovation'],
      registrationUrl: '#',
    },
    {
      id: '5',
      title: 'Women Founders Network',
      date: 'April 28, 2025',
      time: '5:30 PM - 8:00 PM PST',
      location: 'Los Angeles Creative Center',
      isVirtual: false,
      description: 'A networking event dedicated to supporting women entrepreneurs. Meet fellow founders, investors specifically interested in women-led startups, and mentors who can help guide your journey.',
      attendees: 150,
      imageSrc: 'https://images.pexels.com/photos/3810756/pexels-photo-3810756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Women Founders', 'Networking', 'Mentorship'],
      registrationUrl: '#',
    },
    {
      id: '6',
      title: 'Sustainable Innovation Summit',
      date: 'June 15, 2025',
      time: '9:00 AM - 5:00 PM CEST',
      location: 'Online',
      isVirtual: true,
      description: 'Join leading sustainability experts, impact investors, and green tech founders for a day of discussions on how technology can address climate challenges and create sustainable business models.',
      attendees: 400,
      imageSrc: 'https://images.pexels.com/photos/3182755/pexels-photo-3182755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Sustainability', 'CleanTech', 'Impact Investing'],
      registrationUrl: '#',
    },
  ];
  
  const eventTypes = ['All', 'Conferences', 'Pitch Competitions', 'Networking', 'Workshops', 'Webinars', 'Demo Days'];
  const locations = ['All', 'San Francisco', 'New York', 'London', 'Berlin', 'Virtual', 'Los Angeles', 'Singapore'];
  const dates = ['All', 'This Week', 'This Month', 'Next Month', 'Next 3 Months'];

  const filteredEvents = events.filter(event => {
    const matchesSearch = searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesType = selectedType === 'All' || 
      (selectedType === 'Conferences' && event.tags.includes('Conference')) ||
      (selectedType === 'Pitch Competitions' && event.tags.includes('Pitch Competition')) ||
      (selectedType === 'Networking' && event.tags.includes('Networking')) ||
      (selectedType === 'Workshops' && event.tags.includes('Workshop')) ||
      (selectedType === 'Webinars' && event.isVirtual && event.tags.includes('Virtual Event')) ||
      (selectedType === 'Demo Days' && event.tags.includes('Demo Day'));
    
    const matchesLocation = selectedLocation === 'All' || 
      (selectedLocation === 'Virtual' && event.isVirtual) ||
      (!event.isVirtual && event.location.includes(selectedLocation));
    
    // This is a simplified date matching logic - in a real app, you'd use proper date comparisons
    const matchesDate = selectedDate === 'All';
    
    return matchesSearch && matchesType && matchesLocation && matchesDate;
  });
  
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1).toLocaleString('default', { month: 'long' });
  
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-raleway font-bold mb-4">Events & Networking</h1>
          <p className="text-text-secondary max-w-3xl">
            Discover upcoming events, workshops, and networking opportunities for founders and investors. Connect with the community and stay up-to-date with the latest in the startup ecosystem.
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
                placeholder="Search events by title, description, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <div className="w-full md:w-auto">
                <select
                  className="w-full h-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  {eventTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
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
              
              <div className="w-full md:w-auto">
                <select
                  className="w-full h-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                >
                  {dates.map(date => (
                    <option key={date} value={date}>{date}</option>
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
              Showing <span className="font-medium">{filteredEvents.length}</span> events
            </p>
            <button className="flex items-center text-accent hover:underline text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              Add to Calendar
            </button>
          </div>
        </div>
        
        {/* Featured Event */}
        <div className="mb-12">
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Global Startup Summit" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">Featured Event</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Global Startup Summit 2025</h2>
              <div className="flex flex-wrap gap-y-2 gap-x-4 text-white mb-4">
                <div className="flex items-center text-white/80">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>July 10-12, 2025</span>
                </div>
                <div className="flex items-center text-white/80">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Singapore Expo Center</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Users className="h-4 w-4 mr-1" />
                  <span>2000+ Attendees</span>
                </div>
              </div>
              <button className="btn btn-primary">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Month Sections */}
        <div className="mb-8">
          <h2 className="text-2xl font-raleway font-semibold mb-4 flex items-center">
            <Calendar className="h-5 w-5 text-accent mr-2" />
            {currentMonth} 2025
          </h2>
          
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map(event => (
                <EventCard key={event.id} {...event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-secondary inline-flex rounded-full p-4 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium mb-2">No matching events found</h3>
              <p className="text-text-secondary max-w-lg mx-auto">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
        
        {/* Upcoming Months */}
        <div className="mt-12">
          <h2 className="text-xl font-raleway font-semibold mb-4 flex items-center justify-between">
            <span className="flex items-center">
              <Calendar className="h-5 w-5 text-accent mr-2" />
              {nextMonth} 2025
            </span>
            <button className="text-accent flex items-center text-sm font-medium hover:underline">
              View all <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </h2>
          
          {/* Collapsed preview section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-secondary rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-accent font-medium">{nextMonth} {index + 10}, 2025</span>
                  {index % 2 === 0 && (
                    <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full">
                      Virtual
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-gray-900 line-clamp-2">
                  {["Investor Roundtable", "StartupTech Expo", "Founder Meetup", "VC Office Hours"][index - 1]}
                </h3>
                <button className="text-accent text-sm hover:underline mt-2 flex items-center">
                  Details <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Host Event CTA */}
        <div className="mt-12 bg-accent/5 rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <h2 className="text-xl font-raleway font-semibold mb-2">Want to host your own event?</h2>
              <p className="text-text-secondary mb-4">
                Organize a pitch competition, workshop, or networking event and reach thousands of founders and investors in our community.
              </p>
              <ul className="space-y-2">
                {[
                  'Promotion to our network of 10,000+ startup professionals',
                  'Event listing and registration management',
                  'Post-event analytics and attendee insights',
                  'Virtual event hosting platform for online events'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-2 flex-shrink-0">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3 flex flex-col items-center">
              <button className="btn btn-primary w-full">Host an Event</button>
              <p className="text-sm text-text-secondary mt-3 text-center">
                Join 200+ event organizers who have hosted on our platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;