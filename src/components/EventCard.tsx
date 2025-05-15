import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  description: string;
  attendees: number;
  imageSrc: string;
  tags: string[];
  registrationUrl: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  isVirtual,
  description,
  attendees,
  imageSrc,
  tags,
  registrationUrl
}: EventCardProps) => {
  return (
    <div className="card overflow-hidden group">
      <div className="h-40 overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-lg px-3 py-1 text-sm font-medium flex items-center">
          <Calendar className="h-4 w-4 mr-1 text-accent" />
          {date}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-raleway font-semibold text-lg text-gray-900 line-clamp-2">{title}</h3>
        
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center text-text-secondary text-sm">
            <Clock className="h-4 w-4 mr-2 text-accent" />
            {time}
          </div>
          <div className="flex items-center text-text-secondary text-sm">
            <MapPin className="h-4 w-4 mr-2 text-accent" />
            {isVirtual ? 'Virtual Event' : location}
          </div>
          <div className="flex items-center text-text-secondary text-sm">
            <Users className="h-4 w-4 mr-2 text-accent" />
            {attendees} {attendees === 1 ? 'Attendee' : 'Attendees'}
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-sm text-text-secondary font-medium">
            {isVirtual ? 'Online' : 'In Person'}
          </span>
          <a 
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm py-2"
          >
            Register <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;