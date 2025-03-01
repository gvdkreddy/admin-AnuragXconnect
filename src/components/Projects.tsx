import React, { useState } from 'react';
import { Search, Filter, Plus, MoreHorizontal, Users } from 'lucide-react'; // Import Users here
import { Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState('active');
  const [searchQuery, setSearchQuery] = useState('');
  
  const projects = [
    {
      id: 1,
      title: 'Solar System Project',
      description: 'Create a model of the solar system',
      status: 'Active',
      dueDate: 'June 15, 2025',
      completedDate: null,
      progress: 75,
      grade: null,
      students: [
        { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
        { id: 2, name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' }
      ],
      tasks: [
        { id: 1, title: 'Research planets', completed: true },
        { id: 2, title: 'Create scale model', completed: false },
        { id: 3, title: 'Write report', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Ecosystem Diorama',
      description: 'Build a diorama of a specific ecosystem',
      status: 'Completed',
      dueDate: 'June 8, 2025',
      completedDate: 'June 8, 2025',
      progress: 100,
      grade: 'A',
      students: [
        { id: 3, name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' },
        { id: 4, name: 'Sophia Martinez', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' }
      ],
      tasks: [
        { id: 4, title: 'Research ecosystem', completed: true },
        { id: 5, title: 'Gather materials', completed: true },
        { id: 6, title: 'Build diorama', completed: true },
        { id: 7, title: 'Write report', completed: true }
      ]
    },
    {
      id: 3,
      title: 'Shakespearean Play Analysis',
      description: 'Analyze a Shakespearean play',
      status: 'At Risk',
      dueDate: 'June 10, 2025',
      completedDate: null,
      progress: 25,
      grade: null,
      students: [
        { id: 5, name: 'James Johnson', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80' }
      ],
      tasks: [
        { id: 8, title: 'Read play', completed: true },
        { id: 9, title: 'Write analysis', completed: false }
      ]
    }
  ];
  
  const displayedProjects = searchQuery
    ? projects.filter((project) => project.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : projects;
  
  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'At Risk':
        return 'bg-red-100 text-red-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects..."
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
            New Project
          </button>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              onClick={() => setSelectedTab('active')}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                selectedTab === 'active'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Active Projects
            </button>
            <button
              onClick={() => setSelectedTab('completed')}
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                selectedTab === 'completed'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Completed Projects
            </button>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {displayedProjects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1 text-gray-400" />
                    {selectedTab === 'active' ? (
                      <span>Due: {project.dueDate}</span>
                    ) : (
                      <span>Completed: {project.completedDate}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-400" /> {/* Users icon is now used */}
                    <span>{project.students.length} Students</span>
                  </div>
                </div>
                
                {selectedTab === 'active' && (
                  <>
                    <div className="mb-2 flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500">Progress</span>
                      <span className="text-xs font-medium text-gray-700">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div 
                        className={`h-2.5 rounded-full ${
                          project.status === 'At Risk' ? 'bg-red-600' : 'bg-primary-600'
                        }`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Tasks</h4>
                      <div className="space-y-2">
                        {project.tasks.slice(0, 3).map((task) => (
                          <div key={task.id} className="flex items-center">
                            {task.completed ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            ) : (
                              <Clock className="h-4 w-4 text-gray-400 mr-2" />
                            )}
                            <span className={`text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-700'}`}>
                              {task.title}
                            </span>
                          </div>
                        ))}
                        {project.tasks.length > 3 && (
                          <div className="text-xs text-primary-600 font-medium">
                            +{project.tasks.length - 3} more tasks
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                
                {selectedTab === 'completed' && (
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Final Grade</h4>
                    <div className="text-2xl font-bold text-gray-900">{project.grade}</div>
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex -space-x-2">
                    {project.students.map((student) => (
                      <img 
                        key={student.id}
                        className="w-8 h-8 rounded-full border-2 border-white" 
                        src={student.avatar} 
                        alt={student.name}
                        title={student.name}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    {selectedTab === 'active' && (
                      <button className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                        <MoreHorizontal className="h-4 w-4 mr-1" />
                        Comments
                      </button>
                    )}
                    <button className="text-gray-400 hover:text-gray-500">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
