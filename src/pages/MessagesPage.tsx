import { useState } from 'react';
import { Search, ArrowLeft, Send, Paperclip, MoreVertical, UserCheck, X, Phone, Video, Star, Archive, Flag } from 'lucide-react';

const MessagesPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for conversations
  const conversations = [
    {
      id: '1',
      avatar: 'https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Sarah Chen',
      title: 'Managing Partner, Horizon Ventures',
      lastMessage: "Thanks for sharing your pitch deck. I'll like to schedule a call to discuss your startup in more detail.",
      timestamp: '25 min ago',
      unread: true,
    },
    {
      id: '2',
      avatar: 'https://images.pexels.com/photos/1070882/pexels-photo-1070882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Michael Torres',
      title: 'Founder, DataFlow Analytics',
      lastMessage: 'Hi, I saw your investor profile and wanted to connect regarding our Series A round. Are you currently investing in AI startups?',
      timestamp: '2 hours ago',
      unread: false,
    },
    {
      id: '3',
      avatar: 'https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Marcus Johnson',
      title: 'Founding Partner, Innovate Capital',
      lastMessage: 'Looking forward to seeing you at the pitch competition next week!',
      timestamp: 'Yesterday',
      unread: false,
    },
    {
      id: '4',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Elena Rodriguez',
      title: 'Angel Investor',
      lastMessage: "I've reviewed the materials you sent. Let's set up a meeting with your co-founder as well.",
      timestamp: '2 days ago',
      unread: false,
    },
  ];
  
  const filteredConversations = conversations.filter(convo => 
    convo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    convo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Mock data for selected chat messages
  const getMessages = (chatId: string) => {
    const conversation = conversations.find(c => c.id === chatId);
    if (!conversation) return [];
    
    return [
      {
        id: '1',
        sender: 'them',
        text: "Hi there! I noticed your startup on Venture Nest and I'm impressed with what you're building. Would you be open to sharing more details about your growth metrics?",
        timestamp: '11:30 AM',
      },
      {
        id: '2',
        sender: 'you',
        text: "Thanks for reaching out! I'd be happy to share more details. We've been growing at 20% MoM for the past 6 months and just crossed 10k monthly active users.",
        timestamp: '11:45 AM',
      },
      {
        id: '3',
        sender: 'them',
        text: "That's impressive growth! What channels are driving your user acquisition?",
        timestamp: '12:02 PM',
      },
      {
        id: '4',
        sender: 'you',
        text: "We've found that content marketing and strategic partnerships have been our most effective channels. About 60% from organic content and 30% from partnerships with related platforms.",
        timestamp: '12:15 PM',
      },
      {
        id: '5',
        sender: 'them',
        text: "Thanks for sharing your pitch deck. I'll like to schedule a call to discuss your startup in more detail.",
        timestamp: '12:30 PM',
      },
    ];
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim() === '') return;
    
    // In a real app, this would send the message to the API
    console.log('Sending message:', messageText);
    setMessageText('');
  };
  
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  return (
    <div className="bg-white min-h-[85vh]">
      <div className="h-full max-w-7xl mx-auto">
        <div className="flex h-full">
          {/* Conversation List - Hidden on mobile when chat is selected */}
          {(!selectedChat || !isMobile) && (
            <div className={`w-full md:w-96 md:border-r border-gray-200 ${selectedChat && isMobile ? 'hidden' : 'block'}`}>
              <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-raleway font-semibold mb-4">Messages</h1>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-accent focus:border-accent bg-white"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="overflow-y-auto h-[calc(85vh-80px)]">
                {filteredConversations.length > 0 ? (
                  filteredConversations.map((conversation) => (
                    <div 
                      key={conversation.id}
                      className={`p-4 border-b border-gray-100 hover:bg-secondary cursor-pointer transition-colors ${selectedChat === conversation.id ? 'bg-accent/5 border-l-4 border-l-accent' : ''}`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex items-start">
                        <img 
                          src={conversation.avatar} 
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full object-cover mr-3"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-baseline">
                            <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                            <span className="text-xs text-text-secondary whitespace-nowrap ml-2">{conversation.timestamp}</span>
                          </div>
                          <p className="text-sm text-text-secondary truncate">{conversation.title}</p>
                          <p className={`text-sm mt-1 truncate ${conversation.unread ? 'font-medium text-gray-900' : 'text-text-secondary'}`}>
                            {conversation.lastMessage}
                          </p>
                        </div>
                        {conversation.unread && (
                          <span className="bg-accent w-2 h-2 rounded-full ml-2 mt-2"></span>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-text-secondary">No conversations found</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Chat Window - Full width on mobile when selected */}
          {selectedChat && (
            <div className={`flex-1 flex flex-col h-[85vh] ${selectedChat && isMobile ? 'w-full' : ''}`}>
              {selectedChat && (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center">
                      {isMobile && (
                        <button 
                          className="mr-2 p-1 rounded-full hover:bg-secondary"
                          onClick={() => setSelectedChat(null)}
                        >
                          <ArrowLeft className="h-5 w-5 text-gray-500" />
                        </button>
                      )}
                      
                      <img 
                        src={conversations.find(c => c.id === selectedChat)?.avatar} 
                        alt={conversations.find(c => c.id === selectedChat)?.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{conversations.find(c => c.id === selectedChat)?.name}</h3>
                        <p className="text-xs text-text-secondary">{conversations.find(c => c.id === selectedChat)?.title}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                        <Phone className="h-5 w-5 text-gray-700" />
                      </button>
                      <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                        <Video className="h-5 w-5 text-gray-700" />
                      </button>
                      <div className="relative group">
                        <button className="p-2 rounded-full hover:bg-secondary transition-colors">
                          <MoreVertical className="h-5 w-5 text-gray-700" />
                        </button>
                        <div className="absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white hidden group-hover:block z-10">
                          <div className="py-1">
                            {[
                              { icon: <UserCheck className="h-4 w-4" />, text: 'View Profile' },
                              { icon: <Star className="h-4 w-4" />, text: 'Mark as Important' },
                              { icon: <Archive className="h-4 w-4" />, text: 'Archive Chat' },
                              { icon: <Flag className="h-4 w-4" />, text: 'Report' },
                              { icon: <X className="h-4 w-4" />, text: 'Block' },
                            ].map((item, index) => (
                              <button 
                                key={index}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-secondary hover:text-gray-900 flex items-center"
                              >
                                <span className="mr-2 text-gray-500">{item.icon}</span>
                                {item.text}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                    <div className="space-y-4">
                      {getMessages(selectedChat).map((message) => (
                        <div 
                          key={message.id}
                          className={`flex ${message.sender === 'you' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-xs md:max-w-md rounded-lg px-4 py-2 ${
                            message.sender === 'you' 
                              ? 'bg-accent text-white rounded-br-none' 
                              : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                          }`}>
                            <p className="text-sm">{message.text}</p>
                            <span className={`text-xs ${message.sender === 'you' ? 'text-white/80' : 'text-gray-500'} block text-right mt-1`}>
                              {message.timestamp}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Message Input */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex items-center">
                      <button 
                        type="button"
                        className="p-2 rounded-full hover:bg-secondary transition-colors"
                      >
                        <Paperclip className="h-5 w-5 text-gray-500" />
                      </button>
                      <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-full px-4 py-2 mx-2 focus:ring-accent focus:border-accent"
                        placeholder="Type a message..."
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                      />
                      <button 
                        type="submit"
                        className={`p-2 rounded-full ${
                          messageText.trim() ? 'bg-accent text-white' : 'bg-gray-200 text-gray-500'
                        } transition-colors`}
                        disabled={!messageText.trim()}
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </form>
                  </div>
                </>
              )}
              
              {/* Empty State */}
              {!selectedChat && (
                <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
                  <div className="bg-secondary rounded-full p-6 mb-4">
                    <MessageSquare className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Your Messages</h3>
                  <p className="text-text-secondary max-w-md">
                    Select a conversation to view messages or start a new conversation with a startup or investor.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// This is needed for the MessageSquare icon
const MessageSquare = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
};

export default MessagesPage;