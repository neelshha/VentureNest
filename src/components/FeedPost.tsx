import { useState } from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, Clock } from 'lucide-react';

interface FeedPostProps {
  id: string;
  author: {
    name: string;
    avatar: string;
    title: string;
    company?: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  isSponsored?: boolean;
}

const FeedPost = ({
  author,
  content,
  image,
  likes,
  comments,
  shares,
  timestamp,
  isSponsored = false,
}: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  
  return (
    <div className="card p-5">
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <img 
            src={author.avatar} 
            alt={`${author.name}'s avatar`} 
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
          <div className="ml-3">
            <h4 className="font-medium text-gray-900">{author.name}</h4>
            <p className="text-sm text-text-secondary">
              {author.title}{author.company ? ` at ${author.company}` : ''}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center text-xs text-text-secondary mr-2">
            <Clock className="h-3 w-3 mr-1" />
            {timestamp}
          </div>
          <button className="p-1 rounded-full hover:bg-secondary transition-colors">
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      
      {isSponsored && (
        <div className="mt-2 text-xs text-text-secondary">
          <span className="font-medium">Sponsored</span>
        </div>
      )}
      
      <div className="mt-3">
        <p className="text-gray-700 whitespace-pre-line">{content}</p>
      </div>
      
      {image && (
        <div className="mt-3">
          <img 
            src={image} 
            alt="Post attachment" 
            className="rounded-lg w-full h-auto object-cover max-h-96"
          />
        </div>
      )}
      
      <div className="mt-4 flex justify-between text-sm text-text-secondary">
        <div>
          {likeCount > 0 && (
            <span className="flex items-center">
              <span className="bg-accent/10 p-1 rounded-full mr-1">
                <ThumbsUp className="h-3 w-3 text-accent" />
              </span>
              {likeCount}
            </span>
          )}
        </div>
        <div className="flex space-x-3">
          {comments > 0 && <span>{comments} comments</span>}
          {shares > 0 && <span>{shares} shares</span>}
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between">
        <button 
          className={`flex items-center py-1 px-3 rounded-md ${isLiked ? 'text-accent' : 'text-text-secondary'} hover:bg-secondary transition-colors`}
          onClick={handleLike}
        >
          <ThumbsUp className={`h-5 w-5 mr-1 ${isLiked ? 'fill-current' : ''}`} />
          Like
        </button>
        <button 
          className="flex items-center py-1 px-3 rounded-md text-text-secondary hover:bg-secondary transition-colors"
          onClick={() => {}}
        >
          <MessageSquare className="h-5 w-5 mr-1" />
          Comment
        </button>
        <button 
          className="flex items-center py-1 px-3 rounded-md text-text-secondary hover:bg-secondary transition-colors"
          onClick={() => {}}
        >
          <Share2 className="h-5 w-5 mr-1" />
          Share
        </button>
      </div>
    </div>
  );
};

export default FeedPost;