import React, { useState } from 'react';
import { Search, Filter, Plus, FolderPlus, File, FileText, Download, Share2, MoreHorizontal, Trash2, Edit } from 'lucide-react';

const Notes = () => {
  const [selectedTab, setSelectedTab] = useState('notes');
  const [selectedFolder, setSelectedFolder] = useState('All Notes');
  
  const folders = [
    { id: 'all', name: 'All Notes', count: 24 },
    { id: 'math', name: 'Mathematics', count: 8 },
    { id: 'science', name: 'Science', count: 6 },
    { id: 'history', name: 'History', count: 5 },
    { id: 'english', name: 'English', count: 5 },
  ];
  
  const notes = [
    {
      id: 1,
      title: 'Algebra Fundamentals',
      description: 'Basic algebraic operations and equations',
      folder: 'Mathematics',
      date: 'June 5, 2025',
      size: '2.4 MB',
      type: 'PDF',
      shared: true
    },
    {
      id: 2,
      title: 'Geometry Formulas',
      description: 'Common formulas for geometric shapes and theorems',
      folder: 'Mathematics',
      date: 'June 3, 2025',
      size: '1.8 MB',
      type: 'PDF',
      shared: true
    },
    {
      id: 3,
      title: 'Cell Structure and Function',
      description: 'Detailed notes on cell biology',
      folder: 'Science',
      date: 'June 2, 2025',
      size: '3.2 MB',
      type: 'DOCX',
      shared: false
    },
    {
      id: 4,
      title: 'World War II Timeline',
      description: 'Chronological events of WWII',
      folder: 'History',
      date: 'May 28, 2025',
      size: '1.5 MB',
      type: 'PDF',
      shared: true
    },
    {
      id: 5,
      title: 'Essay Writing Guide',
      description: 'Structure and tips for writing effective essays',
      folder: 'English',
      date: 'May 25, 2025',
      size: '1.1 MB',
      type: 'DOCX',
      shared: false
    },
    {
      id: 6,
      title: 'Chemical Reactions',
      description: 'Types of chemical reactions with examples',
      folder: 'Science',
      date: 'May 22, 2025',
      size: '2.7 MB',
      type: 'PDF',
      shared: true
    }
  ];
  
  const assignments = [
    {
      id: 1,
      title: 'Algebra Problem Set',
      description: 'Practice problems on linear equations',
      folder: 'Mathematics',
      dueDate: 'June 15, 2025',
      status: 'Active',
      submissions: 18,
      totalStudents: 25
    },
    {
      id: 2,
      title: 'Cell Diagram Project',
      description: 'Create a detailed diagram of a plant cell',
      folder: 'Science',
      dueDate: 'June 18, 2025',
      status: 'Active',
      submissions: 12,
      totalStudents: 25
    },
    {
      id: 3,
      title: 'Historical Figure Essay',
      description: 'Write a 500-word essay on a historical figure',
      folder: 'History',
      dueDate: 'June 20, 2025',
      status: 'Active',
      submissions: 8,
      totalStudents: 25
    },
    {
      id: 4,
      title: 'Poetry Analysis',
      description: 'Analyze the themes in selected poems',
      folder: 'English',
      dueDate: 'June 22, 2025',
      status: 'Draft',
      submissions: 0,
      totalStudents: 25
    },
    {
      id: 5,
      title: 'Geometry Quiz',
      description: 'Online quiz on triangles and circles',
      folder: 'Mathematics',
      dueDate: 'June 12, 2025',
      status: 'Active',
      submissions: 20,
      totalStudents: 25
    }
  ];
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Closed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getSubmissionPercentage = (submissions, total) => {
    return Math.round((submissions / total) * 100);
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
            placeholder={`Search ${selectedTab}...`}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
          />
        </div>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
            <Plus className="h-4 w-4 mr-2" />
            {selectedTab === 'notes' ? 'Upload Note' : 'Create Assignment'}
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setSelectedTab('notes')}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                selectedTab === 'notes'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Notes & Resources
            </button>
            <button
              onClick={() => setSelectedTab('assignments')}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                selectedTab === 'assignments'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Assignments
            </button>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-200">
            <div className="p-4">
              <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-md">
                <FolderPlus className="mr-3 h-5 w-5" />
                New Folder
              </button>
            </div>
            <div className="px-4 pb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Folders</h3>
              <div className="mt-2 space-y-1">
                {folders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setSelectedFolder(folder.name)}
                    className={`w-full flex items-center px-3 py-2 text-sm rounded-md ${
                      selectedFolder === folder.name
                        ? 'bg-gray-100 text-gray-900 font-medium'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <File className="mr-3 h-5 w-5 text-gray-400" />
                    <span className="flex-1 truncate">{folder.name}</span>
                    <span className="ml-auto bg-gray-100 text-gray-600 text-xs rounded-full px-2 py-0.5">
                      {folder.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-x-auto">
            {selectedTab === 'notes' ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Folder
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Shared
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {notes.map((note) => (
                    <tr key={note.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                            <FileText className="h-6 w-6 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{note.title}</div>
                            <div className="text-sm text-gray-500">{note.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{note.folder}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{note.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{note.size}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          note.shared ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {note.shared ? 'Shared' : 'Private'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-400 hover:text-gray-500">
                            <Download className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <Share2 className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Assignment
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Due Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submissions
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {assignments.map((assignment) => (
                    <tr key={assignment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100">
                            <FileText className="h-6 w-6 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{assignment.title}</div>
                            <div className="text-sm text-gray-500">{assignment.description}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{assignment.folder}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{assignment.dueDate}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(assignment.status)}`}>
                          {assignment.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-primary-600 h-2.5 rounded-full" 
                              style={{ width: `${getSubmissionPercentage(assignment.submissions, assignment.totalStudents)}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            {assignment.submissions}/{assignment.totalStudents}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="text-gray-400 hover:text-gray-500">
                            <Edit className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <Share2 className="h-5 w-5" />
                          </button>
                          <button className="text-gray-400 hover:text-gray-500">
                            <MoreHorizontal className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
