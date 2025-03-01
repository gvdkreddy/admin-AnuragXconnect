import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Edit, Trash2, UserPlus } from 'lucide-react';

const Students = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  const students = [
    {
      id: 1,
      name: 'John Doe',
      grade: '10th',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: '95%',
      gpa: '3.8',
      parent: 'Robert & Mary Doe',
      parentEmail: 'robert.doe@example.com',
      parentPhone: '(555) 987-6543',
      subjects: ['Math', 'Science', 'English', 'History'],
      notes: 'Excellent student, shows great potential in mathematics.'
    },
    {
      id: 2,
      name: 'Emma Wilson',
      grade: '10th',
      email: 'emma.wilson@example.com',
      phone: '(555) 234-5678',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: '82%',
      gpa: '3.2',
      parent: 'Thomas & Sarah Wilson',
      parentEmail: 'thomas.wilson@example.com',
      parentPhone: '(555) 876-5432',
      subjects: ['Math', 'Science', 'English', 'Art'],
      notes: 'Has been absent frequently. Need to schedule a parent meeting.'
    },
    {
      id: 3,
      name: 'Michael Brown',
      grade: '10th',
      email: 'michael.brown@example.com',
      phone: '(555) 345-6789',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: '98%',
      gpa: '4.0',
      parent: 'David & Jennifer Brown',
      parentEmail: 'david.brown@example.com',
      parentPhone: '(555) 765-4321',
      subjects: ['Math', 'Science', 'English', 'Computer Science'],
      notes: 'Top performer in class. Interested in advanced placement.'
    },
    {
      id: 4,
      name: 'Sophia Martinez',
      grade: '10th',
      email: 'sophia.martinez@example.com',
      phone: '(555) 456-7890',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: '93%',
      gpa: '3.6',
      parent: 'Carlos & Elena Martinez',
      parentEmail: 'carlos.martinez@example.com',
      parentPhone: '(555) 654-3210',
      subjects: ['Math', 'Science', 'Spanish', 'History'],
      notes: 'Bilingual student, helps peers with Spanish.'
    },
    {
      id: 5,
      name: 'James Johnson',
      grade: '10th',
      email: 'james.johnson@example.com',
      phone: '(555) 567-8901',
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
      attendance: '90%',
      gpa: '3.4',
      parent: 'William & Patricia Johnson',
      parentEmail: 'william.johnson@example.com',
      parentPhone: '(555) 543-2109',
      subjects: ['Math', 'Science', 'English', 'Physical Education'],
      notes: 'Athletic student, excels in team activities.'
    }
  ];

  const openStudentProfile = (student) => {
    setSelectedStudent(student);
    setShowProfileModal(true);
  };

  const StudentProfileModal = ({ student, onClose }) => {
    if (!student) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Student Profile</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 flex flex-col items-center mb-6 md:mb-0">
                <img 
                  src={student.avatar} 
                  alt={student.name} 
                  className="h-40 w-40 rounded-full object-cover border-4 border-primary-100"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{student.name}</h3>
                <p className="text-gray-600">{student.grade} Grade</p>
                <div className="mt-4 flex space-x-2">
                  <button className="p-2 bg-primary-100 text-primary-600 rounded-full">
                    <Edit className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-blue-100 text-blue-600 rounded-full">
                    <MessageSquare className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Contact Information</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm font-medium">{student.email}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-sm font-medium">{student.phone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Parent/Guardian</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Name</p>
                        <p className="text-sm font-medium">{student.parent}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Email</p>
                        <p className="text-sm font-medium">{student.parentEmail}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Phone</p>
                        <p className="text-sm font-medium">{student.parentPhone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Academic Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500">GPA</p>
                      <p className="text-2xl font-bold text-gray-800">{student.gpa}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500">Attendance</p>
                      <p className="text-2xl font-bold text-gray-800">{student.attendance}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-xs text-gray-500">Subjects</p>
                      <p className="text-sm font-medium">{student.subjects.join(', ')}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Notes</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm">{student.notes}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t pt-6">
              <h4 className="text-lg font-medium text-gray-800 mb-4">Recent Activity</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <FileText className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Math Assignment Submitted</p>
                    <p className="text-xs text-gray-500">Algebra Quiz #3</p>
                    <p className="text-xs text-gray-400">June 8, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckSquare className="h-4 w-4 text-green-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Attendance Marked</p>
                    <p className="text-xs text-gray-500">Present</p>
                    <p className="text-xs text-gray-400">June 7, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <BookOpen className="h-4 w-4 text-purple-600" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Grade Updated</p>
                    <p className="text-xs text-gray-500">Science Project: A-</p>
                    <p className="text-xs text-gray-400">June 5, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end p-6 border-t">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2 hover:bg-gray-300"
            >
              Close
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
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
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Student
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
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendance
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  GPA
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parent/Guardian
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => openStudentProfile(student)}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={student.avatar} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.grade}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.attendance}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.gpa}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.parent}</div>
                    <div className="text-sm text-gray-500">{student.parentPhone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                      className="text-gray-400 hover:text-gray-500"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add dropdown menu logic here
                      }}
                    >
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">42</span> students
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>

      {showProfileModal && (
        <StudentProfileModal 
          student={selectedStudent} 
          onClose={() => setShowProfileModal(false)} 
        />
      )}
    </div>
  );
};

export default Students;
