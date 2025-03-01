import React, { useState } from 'react';
import { Search, Filter, Download, ChevronDown, ArrowUp, ArrowDown, MoreHorizontal } from 'lucide-react';

const Gradebook = () => {
  const [selectedClass, setSelectedClass] = useState('Math 101');
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'ascending' });
  
  const classes = ['Math 101', 'Science 202', 'History 303', 'English 404'];
  
  const students = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      grades: {
        'Quiz 1': 85,
        'Quiz 2': 92,
        'Midterm': 88,
        'Project': 95,
        'Final': 90
      }
    },
    {
      id: 2,
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      grades: {
        'Quiz 1': 78,
        'Quiz 2': 85,
        'Midterm': 80,
        'Project': 92,
        'Final': 84
      }
    },
    {
      id: 3,
      name: 'Michael Brown',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      grades: {
        'Quiz 1': 95,
        'Quiz 2': 98,
        'Midterm': 96,
        'Project': 100,
        'Final': 97
      }
    },
    {
      id: 4,
      name: 'Sophia Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      grades: {
        'Quiz 1': 88,
        'Quiz 2': 90,
        'Midterm': 85,
        'Project': 93,
        'Final': 89
      }
    },
    {
      id: 5,
      name: 'James Johnson',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      grades: {
        'Quiz 1': 82,
        'Quiz 2': 79,
        'Midterm': 75,
        'Project': 88,
        'Final': 80
      }
    }
  ];
  
  const assignments = [
    { id: 1, name: 'Quiz 1', weight: 10, maxScore: 100, date: 'May 5, 2025' },
    { id: 2, name: 'Quiz 2', weight: 10, maxScore: 100, date: 'May 15, 2025' },
    { id: 3, name: 'Midterm', weight: 25, maxScore: 100, date: 'May 25, 2025' },
    { id: 4, name: 'Project', weight: 30, maxScore: 100, date: 'June 5, 2025' },
    { id: 5, name: 'Final', weight: 25, maxScore: 100, date: 'June 15, 2025' }
  ];
  
  const calculateAverage = (grades) => {
    const values = Object.values(grades);
    return values.reduce((sum, grade) => sum + grade, 0) / values.length;
  };
  
  const getLetterGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };
  
  const getGradeColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };
  
  const sortedStudents = [...students].sort((a, b) => {
    if (sortConfig.key === 'name') {
      const comparison = a.name.localeCompare(b.name);
      return sortConfig.direction === 'ascending' ? comparison : -comparison;
    } else if (sortConfig.key === 'average') {
      const aAvg = calculateAverage(a.grades);
      const bAvg = calculateAverage(b.grades);
      return sortConfig.direction === 'ascending' ? aAvg - bAvg : bAvg - aAvg;
    } else {
      // Sort by specific assignment
      const aGrade = a.grades[sortConfig.key] || 0;
      const bGrade = b.grades[sortConfig.key] || 0;
      return sortConfig.direction === 'ascending' ? aGrade - bGrade : bGrade - aGrade;
    }
  });
  
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const getSortIcon = (key) => {
    if (sortConfig.key !== key) {
      return <ChevronDown className="h-4 w-4 text-gray-400" />;
    }
    return sortConfig.direction === 'ascending' ? 
      <ArrowUp className="h-4 w-4 text-primary-600" /> : 
      <ArrowDown className="h-4 w-4 text-primary-600" />;
  };
  
  const calculateClassAverage = (assignmentName) => {
    let sum = 0;
    let count = 0;
    
    students.forEach(student => {
      if (student.grades[assignmentName]) {
        sum += student.grades[assignmentName];
        count++;
      }
    });
    
    return count > 0 ? Math.round(sum / count) : 0;
  };
  
  const calculateOverallClassAverage = () => {
    let sum = 0;
    
    students.forEach(student => {
      sum += calculateAverage(student.grades);
    });
    
    return Math.round(sum / students.length);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search students..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex space-x-2">
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
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('name')}
                >
                  <div className="flex items-center">
                    Student
                    {getSortIcon('name')}
                  </div>
                </th>
                {assignments.map((assignment) => (
                  <th 
                    key={assignment.id} 
                    scope="col" 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    onClick={() => requestSort(assignment.name)}
                  >
                    <div className="flex items-center">
                      {assignment.name}
                      <span className="text-gray-400 ml-1">({assignment.weight}%)</span>
                      {getSortIcon(assignment.name)}
                    </div>
                  </th>
                ))}
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => requestSort('average')}
                >
                  <div className="flex items-center">
                    Average
                    {getSortIcon('average')}
                  </div>
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedStudents.map((student) => {
                const average = Math.round(calculateAverage(student.grades));
                const letterGrade = getLetterGrade(average);
                
                return (
                  <tr key={student.id} className="hover:bg-gray-50">
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
                    {assignments.map((assignment) => {
                      const grade = student.grades[assignment.name];
                      return (
                        <td key={assignment.id} className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="number"
                            value={grade || ''}
                            onChange={() => {/* Handle grade change */}}
                            className="w-16 p-1 text-sm border border-gray-300 rounded-md"
                          />
                          <span className="ml-2 text-sm text-gray-500">/ {assignment.maxScore}</span>
                        </td>
                      );
                    })}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getGradeColor(average)}`}>
                          {average}% ({letterGrade})
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-gray-400 hover:text-gray-500">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
              
              {/* Class Average Row */}
              <tr className="bg-gray-50 font-medium">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Class Average
                </td>
                {assignments.map((assignment) => {
                  const average = calculateClassAverage(assignment.name);
                  return (
                    <td key={assignment.id} className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${getGradeColor(average)}`}>
                        {average}%
                      </span>
                    </td>
                  );
                })}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`text-sm font-medium ${getGradeColor(calculateOverallClassAverage())}`}>
                    {calculateOverallClassAverage()}% ({getLetterGrade(calculateOverallClassAverage())})
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Grade Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">A (90-100%)</span>
                <span className="text-sm font-medium text-gray-700">1 student</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">B (80-89%)</span>
                <span className="text-sm font-medium text-gray-700">3 students</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">C (70-79%)</span>
                <span className="text-sm font-medium text-gray-700">1 student</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">D (60-69%)</span>
                <span className="text-sm font-medium text-gray-700">0 students</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-700">F (0-59%)</span>
                <span className="text-sm font-medium text-gray-700">0 students</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Assignment Performance</h3>
          <div className="space-y-4">
            {assignments.map((assignment) => {
              const average = calculateClassAverage(assignment.name);
              return (
                <div key={assignment.id}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{assignment.name}</span>
                    <span className={`text-sm font-medium ${getGradeColor(average)}`}>{average}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        average >= 90 ? 'bg-green-600' :
                        average >= 80 ? 'bg-blue-600' :
                        average >= 70 ? 'bg-yellow-600' :
                        average >= 60 ? 'bg-orange-600' :
                        'bg-red-600'
                      }`} 
                      style={{ width: `${average}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gradebook;
