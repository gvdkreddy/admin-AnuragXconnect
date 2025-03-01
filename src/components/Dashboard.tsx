import React from 'react';
import { Users, CheckSquare, FileText, Bell, Calendar, BookOpen } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Welcome Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800">Welcome back, Sarah!</h2>
          <p className="mt-2 text-gray-600">Today is Monday, June 10, 2025. You have 3 classes scheduled today.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              Math 101 - 9:00 AM
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Science 202 - 11:30 AM
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              History 303 - 2:00 PM
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Students</h3>
              <p className="text-3xl font-bold text-gray-700">87</p>
              <p className="text-sm text-gray-500">Across 4 classes</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <CheckSquare className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Attendance</h3>
              <p className="text-3xl font-bold text-gray-700">94%</p>
              <p className="text-sm text-gray-500">Average this week</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <FileText className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-gray-900">Assignments</h3>
              <p className="text-3xl font-bold text-gray-700">12</p>
              <p className="text-sm text-gray-500">Due this week</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Math Assignment Submitted</p>
                <p className="text-xs text-gray-500">John Doe submitted "Algebra Quiz #3"</p>
                <p className="text-xs text-gray-400">Today, 8:30 AM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                  <Bell className="h-4 w-4 text-red-600" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Attendance Alert</p>
                <p className="text-xs text-gray-500">Emma Wilson has missed 3 consecutive classes</p>
                <p className="text-xs text-gray-400">Yesterday, 3:45 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-green-600" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Parent-Teacher Conference</p>
                <p className="text-xs text-gray-500">Scheduled with Michael Brown's parents</p>
                <p className="text-xs text-gray-400">Yesterday, 1:15 PM</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <BookOpen className="h-4 w-4 text-purple-600" />
                </div>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">New Learning Resource</p>
                <p className="text-xs text-gray-500">You uploaded "Introduction to Photosynthesis"</p>
                <p className="text-xs text-gray-400">June 8, 10:20 AM</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-sm text-primary-600 hover:text-primary-700">
            View all activity →
          </button>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Events</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-blue-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-blue-800">JUN</span>
                  <span className="text-lg font-bold text-blue-800">12</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">Science Fair</h4>
                <p className="text-xs text-gray-500">9:00 AM - 3:00 PM • Main Hall</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-green-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-green-800">JUN</span>
                  <span className="text-lg font-bold text-green-800">15</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">Math Quiz</h4>
                <p className="text-xs text-gray-500">11:30 AM - 12:30 PM • Room 101</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-purple-800">JUN</span>
                  <span className="text-lg font-bold text-purple-800">18</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">Field Trip</h4>
                <p className="text-xs text-gray-500">8:30 AM - 4:00 PM • Natural History Museum</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-lg bg-yellow-100 flex flex-col items-center justify-center">
                  <span className="text-xs font-medium text-yellow-800">JUN</span>
                  <span className="text-lg font-bold text-yellow-800">20</span>
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-900">Parent-Teacher Meeting</h4>
                <p className="text-xs text-gray-500">5:00 PM - 8:00 PM • Conference Room</p>
              </div>
            </div>
          </div>
          <button className="mt-4 text-sm text-primary-600 hover:text-primary-700">
            View calendar →
          </button>
        </div>
      </div>

      {/* To-Do List */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">To-Do List</h3>
          <button className="text-sm text-primary-600 hover:text-primary-700">+ Add Task</button>
        </div>
        <div className="space-y-2">
          <div className="flex items-center p-3 bg-gray-50 rounded-md">
            <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
            <span className="ml-3 text-sm text-gray-700">Grade Science quizzes (23)</span>
            <span className="ml-auto text-xs text-red-600 font-medium">Due Today</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-md">
            <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
            <span className="ml-3 text-sm text-gray-700">Prepare lesson plan for next week</span>
            <span className="ml-auto text-xs text-orange-600 font-medium">Due Tomorrow</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-md">
            <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
            <span className="ml-3 text-sm text-gray-700">Call Emma Wilson's parents</span>
            <span className="ml-auto text-xs text-orange-600 font-medium">Due Tomorrow</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-md">
            <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
            <span className="ml-3 text-sm text-gray-700">Finalize field trip details</span>
            <span className="ml-auto text-xs text-gray-500 font-medium">Due Jun 15</span>
          </div>
          <div className="flex items-center p-3 bg-gray-50 rounded-md">
            <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" />
            <span className="ml-3 text-sm text-gray-700">Update student progress reports</span>
            <span className="ml-auto text-xs text-gray-500 font-medium">Due Jun 18</span>
          </div>
        </div>
        <button className="mt-4 text-sm text-primary-600 hover:text-primary-700">
          View all tasks →
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
