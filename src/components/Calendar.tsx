import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon, Clock, Users, MapPin } from 'lucide-react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState('month');
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const events = [
    {
      id: 1,
      title: 'Math Quiz',
      date: '2025-06-12',
      time: '10:00 AM - 11:00 AM',
      location: 'Room 101',
      type: 'quiz',
      class: 'Math 101'
    },
    {
      id: 2,
      title: 'Science Fair',
      date: '2025-06-15',
      time: '9:00 AM - 3:00 PM',
      location: 'Main Hall',
      type: 'event',
      class: 'Science 202'
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      date: '2025-06-18',
      time: '5:00 PM - 8:00 PM',
      location: 'Conference Room',
      type: 'meeting',
      class: 'All Classes'
    },
    {
      id: 4,
      title: 'Field Trip',
      date: '2025-06-20',
      time: '8:30 AM - 4:00 PM',
      location: 'Natural History Museum',
      type: 'field-trip',
      class: 'History 303'
    },
    {
      id: 5,
      title: 'English Essay Due',
      date: '2025-06-22',
      time: '11:59 PM',
      location: 'Online Submission',
      type: 'assignment',
      class: 'English 404'
    }
  ];
  
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };
  
  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-24 border border-gray-200 bg-gray-50"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = events.filter(event => event.date === date);
      
      days.push(
        <div key={day} className="h-24 border border-gray-200 p-1 overflow-hidden">
          <div className="flex justify-between items-center mb-1">
            <span className={`text-sm font-medium ${day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? 'bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''}`}>
              {day}
            </span>
            {dayEvents.length > 0 && (
              <button className="text-gray-400 hover:text-gray-600">
                <Plus className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="space-y-1 overflow-y-auto max-h-16">
            {dayEvents.map(event => (
              <div 
                key={event.id} 
                className={`text-xs p-1 rounded truncate ${
                  event.type === 'quiz' ? 'bg-yellow-100 text-yellow-800' :
                  event.type === 'event' ? 'bg-blue-100 text-blue-800' :
                  event.type === 'meeting' ? 'bg-purple-100 text-purple-800' :
                  event.type === 'field-trip' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return days;
  };
  
  const previousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };
  
  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };
  
  const today = () => {
    setCurrentDate(new Date());
  };
  
  const getUpcomingEvents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return events
      .filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5);
  };
  
  const formatEventDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  
  const getEventTypeClass = (type) => {
    switch (type) {
      case 'quiz':
        return 'bg-yellow-100 text-yellow-800';
      case 'event':
        return 'bg-blue-100 text-blue-800';
      case 'meeting':
        return 'bg-purple-100 text-purple-800';
      case 'field-trip':
        return 'bg-green-100 text-green-800';
      case 'assignment':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={previousMonth}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            onClick={today}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <CalendarIcon className="h-4 w-4 mr-2" />
            Today
          </button>
          <button 
            onClick={nextMonth}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          <h2 className="text-lg font-medium text-gray-900">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
        </div>
        <div className="flex space-x-2">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setCurrentView('month')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                currentView === 'month'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Month
            </button>
            <button
              onClick={() => setCurrentView('week')}
              className={`px-4 py-2 text-sm font-medium ${
                currentView === 'week'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setCurrentView('day')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                currentView === 'day'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              Day
            </button>
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-3/4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {dayNames.map((day) => (
                <div key={day} className="bg-gray-50 py-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200">
              {renderCalendarDays()}
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/4">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {getUpcomingEvents().map((event) => (
                <div key={event.id} className="border-l-4 pl-4 py-2" style={{ borderColor: event.type === 'quiz' ? '#FCD34D' : event.type === 'event' ? '#93C5FD' : event.type === 'meeting' ? '#C4B5FD' : event.type === 'field-trip' ? '#6EE7B7' : '#FCA5A5' }}>
                  <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    <span>{formatEventDate(event.date)}</span>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="mt-1 flex items-center text-xs text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getEventTypeClass(event.type)}`}>
                      {event.class}
                    </span>
                    <button className="text-primary-600 hover:text-primary-700 text-xs font-medium">
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 w-full text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
              View All Events
            </button>
          </div>
          
          <div className="mt-6 bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Event Categories</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                <span className="text-sm text-gray-700">Quizzes & Tests</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
                <span className="text-sm text-gray-700">School Events</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
                <span className="text-sm text-gray-700">Meetings</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-green-400 mr-2"></span>
                <span className="text-sm text-gray-700">Field Trips</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 rounded-full bg-red-400 mr-2"></span>
                <span className="text-sm text-gray-700">Assignments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
