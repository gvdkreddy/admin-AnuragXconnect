import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Filter, Download, Users } from 'lucide-react';

const Attendance = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState('Math 101');
  
  const classes = ['Math 101', 'Science 202', 'History 303', 'English 404'];
  
  const students = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: [
        { date: '2025-06-01', status: 'present' },
        { date: '2025-06-02', status: 'present' },
        { date: '2025-06-03', status: 'present' },
        { date: '2025-06-04', status: 'present' },
        { date: '2025-06-05', status: 'present' },
        { date: '2025-06-06', status: 'absent' },
        { date: '2025-06-07', status: 'present' },
        { date: '2025-06-08', status: 'present' },
        { date: '2025-06-09', status: 'present' },
        { date: '2025-06-10', status: 'present' },
      ]
    },
    {
      id: 2,
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: [
        { date: '2025-06-01', status: 'present' },
        { date: '2025-06-02', status: 'present' },
        { date: '2025-06-03', status: 'absent' },
        { date: '2025-06-04', status: 'absent' },
        { date: '2025-06-05', status: 'absent' },
        { date: '2025-06-06', status: 'present' },
        { date: '2025-06-07', status: 'present' },
        { date: '2025-06-08', status: 'present' },
        { date: '2025-06-09', status: 'present' },
        { date: '2025-06-10', status: 'present' },
      ]
    },
    {
      id: 3,
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: [
        { date: '2025-06-01', status: 'present' },
        { date: '2025-06-02', status: 'present' },
        { date: '2025-06-03', status: 'present' },
        { date: '2025-06-04', status: 'present' },
        { date: '2025-06-05', status: 'present' },
        { date: '2025-06-06', status: 'present' },
        { date: '2025-06-07', status: 'present' },
        { date: '2025-06-08', status: 'present' },
        { date: '2025-06-09', status: 'present' },
        { date: '2025-06-10', status: 'present' },
      ]
    },
    {
      id: 4,
      name: 'Sophia Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: [
        { date: '2025-06-01', status: 'present' },
        { date: '2025-06-02', status: 'present' },
        { date: '2025-06-03', status: 'present' },
        { date: '2025-06-04', status: 'present' },
        { date: '2025-06-05', status: 'present' },
        { date: '2025-06-06', status: 'present' },
        { date: '2025-06-07', status: 'late' },
        { date: '2025-06-08', status: 'present' },
        { date: '2025-06-09', status: 'present' },
        { date: '2025-06-10', status: 'present' },
      ]
    },
    {
      id: 5,
      name: 'James Johnson',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: [
        { date: '2025-06-01', status: 'present' },
        { date: '2025-06-02', status: 'present' },
        { date: '2025-06-03', status: 'present' },
        { date: '2025-06-04', status: 'late' },
        { date: '2025-06-05', status: 'present' },
        { date: '2025-06-06', status: 'present' },
        { date: '2025-06-07', status: 'present' },
        { date: '2025-06-08', status: 'present' },
        { date: '2025-06-09', status: 'present' },
        { date: '2025-06-10', status: 'absent' },
      ]
    }
  ];

  // Get dates for the current week
  const getDatesForCurrentWeek = () => {
    const dates = [];
    const day = currentDate.getDay(); // 0 = Sunday, 6 = Saturday
    const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    
    const monday = new Date(currentDate);
    monday.setDate(diff);
    
    for (let i = 0; i < 5; i++) { // Monday to Friday
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };
  
  const weekDates = getDatesForCurrentWeek();
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
  
  const formatDateForComparison = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };
  
  const getAttendanceStatus = (student, date) => {
    const dateStr = formatDateForComparison(date);
    const record = student.attendance.find(a => a.date === dateStr);
    return record ? record.status : 'unknown';
  };
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800';
      case 'absent':
        return 'bg-red-100 text-red-800';
      case 'late':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const previousWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };
  
  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };
  
  const today = () => {
    setCurrentDate(new Date());
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={previousWeek}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            onClick={today}
            className="flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Today
          </button>
          <button 
            onClick={nextWeek}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
          <h2 className="text-lg font-medium text-gray-900">
            Week of {formatDate(weekDates[0])} - {formatDate(weekDates[4])}
          </h2>
        </div>
        <div className="flex space-x-2">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                {weekDates.map((date) => (
                  <th key={date.toString()} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}<br />
                    {formatDate(date)}
                  </th>
                ))}
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Weekly<br />Attendance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => {
                // Calculate weekly attendance percentage
                const weeklyRecords = weekDates.map(date => getAttendanceStatus(student, date));
                const presentCount = weeklyRecords.filter(status => status === 'present' || status === 'late').length;
                const weeklyPercentage = Math.round((presentCount / weekDates.length) * 100);
                
                return (
                  <tr key={student.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={student.avatar} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        </div>
                      </div>
                    </td>
                    {weekDates.map((date) => {
                      const status = getAttendanceStatus(student, date);
                      return (
                        <td key={date.toString()} className="px-6 py-4 whitespace-nowrap text-center">
                          <select
                            value={status}
                            onChange={() => {/* Handle status change */}}
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(status)}`}
                          >
                            <option value="present" className="bg-green-100 text-green-800">Present</option>
                            <option value="absent" className="bg-red-100 text-red-800">Absent</option>
                            <option value="late" className="bg-yellow-100 text-yellow-800">Late</option>
                          </select>
                        </td>
                      );
                    })}
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className={`text-sm font-medium ${weeklyPercentage >= 90 ? 'text-green-600' : weeklyPercentage >= 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {weeklyPercentage}%
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Attendance Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500">Total Students</h4>
                <p className="text-2xl font-bold text-gray-800">5</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500">Present</h4>
                <p className="text-2xl font-bold text-green-600">4</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100 text-red-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500">Absent</h4>
                <p className="text-2xl font-bold text-red-600">1</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <Users className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <h4 className="text-sm font-medium text-gray-500">Late</h4>
                <p className="text-2xl font-bold text-yellow-600">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
