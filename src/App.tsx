import React, { useState } from 'react';
import { 
  Users, 
  CalendarDays, 
  BookOpen, 
  FileText, 
  Bell, 
  MessageSquare, 
  Settings, 
  LogOut, 
  CheckSquare, 
  Layers, 
  Home,
  Menu,
  X
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Attendance from './components/Attendance';
import Notes from './components/Notes';
import Projects from './components/Projects';
import Calendar from './components/Calendar';
import Gradebook from './components/Gradebook';
import Messages from './components/Messages';
import AppSettings from './components/AppSettings'; // Renamed import

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <Students />;
      case 'attendance':
        return <Attendance />;
      case 'notes':
        return <Notes />;
      case 'projects':
        return <Projects />;
      case 'calendar':
        return <Calendar />;
      case 'gradebook':
        return <Gradebook />;
      case 'messages':
        return <Messages />;
      case 'settings':
        return <AppSettings />; // Renamed component usage
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-primary-600 text-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition duration-200 ease-in-out lg:relative lg:flex z-40 w-64 min-h-screen bg-white shadow-lg`}>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-center h-16 bg-primary-600 text-white">
            <BookOpen className="mr-2" />
            <span className="text-xl font-semibold">TeachEase</span>
          </div>
          <nav className="flex-1 px-2 py-4 space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'dashboard' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'students' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Users className="mr-3 h-5 w-5" />
              Students
            </button>
            <button
              onClick={() => setActiveTab('attendance')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'attendance' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <CheckSquare className="mr-3 h-5 w-5" />
              Attendance
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'notes' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <FileText className="mr-3 h-5 w-5" />
              Notes & Assignments
            </button>
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'projects' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Layers className="mr-3 h-5 w-5" />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'calendar' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <CalendarDays className="mr-3 h-5 w-5" />
              Calendar
            </button>
            <button
              onClick={() => setActiveTab('gradebook')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'gradebook' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <BookOpen className="mr-3 h-5 w-5" />
              Gradebook
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'messages' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex items-center w-full px-4 py-2 text-left rounded-md ${activeTab === 'settings' ? 'bg-primary-100 text-primary-600' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </button>
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center w-full px-4 py-2 text-left text-red-600 rounded-md hover:bg-red-50">
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
            <div className="flex items-center space-x-4">
              <button className="relative p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <div className="flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">Sarah Johnson</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
