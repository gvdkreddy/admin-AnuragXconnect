import React, { useState } from 'react';
import { Search, Paperclip, Send, Users, MoreHorizontal, UserPlus, X, Edit, ChevronDown } from 'lucide-react';

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [showNewMessageModal, setShowNewMessageModal] = useState(false);
  const [messageText, setMessageText] = useState('');
  
  const conversations = [
    {
      id: 1,
      type: 'individual',
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      lastMessage: 'Hello Ms. Johnson, I have a question about the upcoming quiz.',
      time: 'Today',
      unread: 0,
      online: true,
      messages: [
        { id: 1, sender: 'You', text: 'Hello John! How can I help you?', time: 'Today, 10:15 AM', isUser: true },
        { id: 2, sender: 'John Doe', text: 'Hello Ms. Johnson, I have a question about the upcoming quiz.', time: 'Today, 10:20 AM', isUser: false },
        { id: 3, sender: 'You', text: 'Please ask away!', time: 'Today, 10:25 AM', isUser: true },
        { id: 4, sender: 'John Doe', text: 'Will the quiz cover sections 5.1 through 5.4?', time: 'Today, 10:30 AM', isUser: false },
        { id: 5, sender: 'You', text: 'Yes, John. The quiz will cover sections 5.1 through 5.4. Make sure to review the practice problems we did in class.', time: 'Today, 10:35 AM', isUser: true }
      ]
    },
    {
      id: 2,
      type: 'individual',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      lastMessage: 'I\'m having trouble understanding the concept of photosynthesis.',
      time: 'Yesterday',
      unread: 0,
      online: false,
      messages: [
        { id: 1, sender: 'You', text: 'Hello Emma! I\'m happy to help you with photosynthesis. Can you tell me more about what you\'re struggling with?', time: 'Yesterday, 2:15 PM', isUser: true },
        { id: 2, sender: 'Emma Wilson', text: 'I\'m having trouble understanding the concept of photosynthesis.', time: 'Yesterday, 2:20 PM', isUser: false },
        { id: 3, sender: 'You', text: 'Let\'s go over the key steps together.  We can also review some diagrams and examples.', time: 'Yesterday, 2:25 PM', isUser: true }
      ]
    },
    {
      id: 3,
      type: 'group',
      name: 'Science Project Group',
      avatar: null,
      members: ['Michael Brown', 'Sophia Martinez', 'James Johnson'],
      lastMessage: 'Let\'s meet after class to discuss the project.',
      time: 'Yesterday',
      unread: 5,
      online: false,
      messages: [
        { id: 1, sender: 'You', text: 'Hello everyone! I\'ve created this group to discuss your solar system project.', time: 'Yesterday, 9:15 AM', isUser: true },
        { id: 2, sender: 'Michael Brown', text: 'Thanks Ms. Johnson! We\'ve already started researching the planets.', time: 'Yesterday, 9:20 AM', isUser: false },
        { id: 3, sender: 'Sophia Martinez', text: 'I\'m working on the scale calculations. Should we include Pluto?', time: 'Yesterday, 9:25 AM', isUser: false },
        { id: 4, sender: 'You', text: 'Great question, Sophia! While Pluto is no longer classified as a planet, you can include it as a dwarf planet with a note about its reclassification.', time: 'Yesterday, 9:30 AM', isUser: true },
        { id: 5, sender: 'James Johnson', text: 'Let\'s meet after class to discuss the project.', time: 'Yesterday, 9:35 AM', isUser: false }
      ]
    },
    {
      id: 4,
      type: 'individual',
      name: 'Robert Doe (Parent)',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      lastMessage: 'We\'ll be there at 5:30 PM.',
      time: 'Monday',
      unread: 0,
      online: false,
      messages: [
        { id: 1, sender: 'You', text: 'Hello Mr. Doe, I\'d like to schedule a parent-teacher conference to discuss John\'s progress in class.', time: 'Monday, 10:15 AM', isUser: true },
        { id: 2, sender: 'Robert Doe (Parent)', text: 'Hello Ms. Johnson, thank you for reaching out. My wife and I would be happy to meet with you.', time: 'Monday, 11:20 AM', isUser: false },
        { id: 3, sender: 'You', text: 'Great! I have availability this Thursday between 4:00 PM and 6:00 PM. Would any time in that window work for you?', time: 'Monday, 11:25 AM', isUser: true },
        { id: 4, sender: 'Robert Doe (Parent)', text: 'Thursday works for us. We\'ll be there at 5:30 PM.', time: 'Monday, 12:30 PM', isUser: false }
      ]
    },
    {
      id: 5,
      type: 'group',
      name: 'Math 101 Class',
      avatar: null,
      members: ['All Students'],
      lastMessage: 'Don\'t forget to submit your homework by Friday!',
      time: 'Monday',
      unread: 0,
      online: false,
      messages: [
        { id: 1, sender: 'You', text: 'Good morning class! Just a reminder that we have a quiz tomorrow on Chapter 5.', time: 'Monday, 8:15 AM', isUser: true },
        { id: 2, sender: 'John Doe', text: 'Will the quiz cover sections 5.1 through 5.4?', time: 'Monday, 8:20 AM', isUser: false },
        { id: 3, sender: 'You', text: 'Yes, John. The quiz will cover sections 5.1 through 5.4. Make sure to review the practice problems we did in class.', time: 'Monday, 8:25 AM', isUser: true },
        { id: 4, sender: 'Emma Wilson', text: 'Is there a study guide available?', time: 'Monday, 8:30 AM', isUser: false },
        { id: 5, sender: 'You', text: 'I\'ve uploaded a study guide to the class portal. Don\'t forget to submit your homework by Friday!', time: 'Monday, 8:35 AM', isUser: true }
      ]
    }
  ];
  
  const sendMessage = () => {
    if (messageText.trim() === '') return;
    
    // In a real app, this would send the message to the server
    setMessageText('');
  };
  
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };
  
  const getConversation = (id) => {
    return conversations.find(conv => conv.id === id);
  };
  
  const currentConversation = getConversation(selectedConversation);

  return (
    <div className="h-[calc(100vh-12rem)] flex overflow-hidden bg-white rounded-lg shadow">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search messages..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        
        <div className="p-4 border-b border-gray-200">
          <button 
            onClick={() => setShowNewMessageModal(true)}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            <Edit className="h-4 w-4 mr-2" />
            New Message
          </button>
        </div>
        
        <div className="overflow-y-auto flex-1">
          {conversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`w-full flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50 ${
                selectedConversation === conversation.id ? 'bg-gray-50' : ''
              }`}
            >
              <div className="relative flex-shrink-0">
                {conversation.avatar ? (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={conversation.avatar}
                    alt=""
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-800">
                      {conversation.type === 'group' ? 
                        <Users className="h-5 w-5 text-primary-600" /> : 
                        getInitials(conversation.name)
                      }
                    </span>
                  </div>
                )}
                {conversation.online && (
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
                )}
              </div>
              <div className="ml-3 flex-1 flex flex-col items-start overflow-hidden">
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {conversation.name}
                  </span>
                  <span className="text-xs text-gray-500">{conversation.time}</span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </span>
                  {conversation.unread > 0 && (
                    <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary-600 text-xs font-medium text-white">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="hidden md:flex flex-col flex-1">
        {currentConversation ? (
          <>
            {/* Conversation header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-gray-200">
              <div className="flex items-center">
                {currentConversation.avatar ? (
                  <img
                    className="h-10 w-10 rounded-full"
                    src={currentConversation.avatar}
                    alt=""
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary-800">
                      {currentConversation.type === 'group' ? 
                        <Users className="h-5 w-5 text-primary-600" /> : 
                        getInitials(currentConversation.name)
                      }
                    </span>
                  </div>
                )}
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">{currentConversation.name}</h3>
                  {currentConversation.type === 'group' && (
                    <p className="text-xs text-gray-500">
                      {currentConversation.members.join(', ')}
                    </p>
                  )}
                  {currentConversation.type === 'individual' && (
                    <p className="text-xs text-gray-500">
                      {currentConversation.online ? 'Online' : 'Offline'}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button className="text-gray-400 hover:text-gray-500">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="space-y-4">
                {currentConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${
                      message.isUser 
                        ? 'bg-primary-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                    } px-4 py-2 shadow`}>
                      {!message.isUser && (
                        <p className="text-xs font-medium mb-1">{message.sender}</p>
                      )}
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-100' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Message input */}
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center">
                <button className="text-gray-400 hover:text-gray-500 mr-2">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type a message..."
                  className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      sendMessage();
                    }
                  }}
                />
                <button 
                  onClick={sendMessage}
                  className="ml-2 inline-flex items-center justify-center p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Users className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No conversation selected</h3>
              <p className="mt-1 text-sm text-gray-500">Select a conversation or start a new one.</p>
              <div className="mt-6">
                <button
                  onClick={() => setShowNewMessageModal(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  New Message
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Mobile view - show only the selected conversation or the list */}
      <div className="md:hidden flex flex-col flex-1">
        {selectedConversation ? (
          <>
            {/* Conversation header with back button */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <button 
                onClick={() => setSelectedConversation(null)}
                className="mr-2 text-gray-400 hover:text-gray-500"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
              <div className="flex items-center flex-1">
                {currentConversation.avatar ? (
                  <img
                    className="h-8 w-8 rounded-full"
                    src={currentConversation.avatar}
                    alt=""
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-xs font-medium text-primary-800">
                      {currentConversation.type === 'group' ? 
                        <Users className="h-4 w-4 text-primary-600" /> : 
                        getInitials(currentConversation.name)
                      }
                    </span>
                  </div>
                )}
                <div className="ml-3 truncate">
                  <h3 className="text-sm font-medium text-gray-900">{currentConversation.name}</h3>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {currentConversation.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs ${
                      message.isUser 
                        ? 'bg-primary-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                    } px-4 py-2 shadow`}>
                      {!message.isUser && (
                        <p className="text-xs font-medium mb-1">{message.sender}</p>
                      )}
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? 'text-primary-100' : 'text-gray-500'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Message input */}
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center">
                <button className="text-gray-400 hover:text-gray-500 mr-2">
                  <Paperclip className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type a message..."
                  className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      sendMessage();
                    }
                  }}
                />
                <button 
                  onClick={sendMessage}
                  className="ml-2 inline-flex items-center justify-center p-2 rounded-full bg-primary-600 text-white hover:bg-primary-700"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          // Show conversation list on mobile when no conversation is selected
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className="w-full flex items-center px-4 py-3 border-b border-gray-200 hover:bg-gray-50"
              >
                <div className="relative flex-shrink-0">
                  {conversation.avatar ? (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={conversation.avatar}
                      alt=""
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-800">
                        {conversation.type === 'group' ? 
                          <Users className="h-5 w-5 text-primary-600" /> : 
                          getInitials(conversation.name)
                        }
                      </span>
                    </div>
                  )}
                  {conversation.online && (
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white"></span>
                  )}
                </div>
                <div className="ml-3 flex-1 flex flex-col items-start overflow-hidden">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </span>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="text-sm text-gray-500 truncate">
                      {conversation.lastMessage}
                    </span>
                    {conversation.unread > 0 && (
                      <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-primary-600 text-xs font-medium text-white">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
      
      {/* New Message Modal */}
      {showNewMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-lg font-medium text-gray-900">New Message</h2>
              <button 
                onClick={() => setShowNewMessageModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                  To:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="recipient"
                    placeholder="Search for a student, parent, or group..."
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <UserPlus className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message:
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Type your message here..."
                  className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowNewMessageModal(false)}
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle sending new message
                    setShowNewMessageModal(false);
                  }}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;
