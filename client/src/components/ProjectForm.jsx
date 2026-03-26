import { Plus, ProjectorIcon, Trash2 } from 'lucide-react';
import React from 'react'

const ProjectForm = ({ data, onChange }) => {

    const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
      
    };
    onChange([...data, newProject]);
  };

  const removeProject = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...data];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    onChange(updated);
  };
  return (
     <div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            <ProjectorIcon className="size-5" />
            Projects
          </h3>
          <p className="text-sm text-gray-500">
            Add your projects
          </p>
        </div>

        <button
          onClick={addProject}
          type="button"
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

    
        <div className="space-y-4 mt-6">
          {data.map((project, index) => (
            <div
              key={index}
              className="p-5 border border-gray-200 rounded-xl shadow-sm space-y-4"
            >
              {/* Top Row */}
              <div className="flex justify-between items-start">
                <h4 className="font-medium">
                  Project #{index + 1}
                </h4>

                <button
                  onClick={() => removeProject(index)}
                  type="button"
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* Inputs */}
              <div className="grid gap-3">

                <input
                  type="text"
                  placeholder="Project Name"
                  value={project.name || ""}
                  onChange={(e) =>
                    updateProject(index, "name", e.target.value)
                  }
                  className="px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
                />

                 <input
                  type="text"
                  placeholder="Project Type"
                  value={project.type || ""}
                  onChange={(e) =>
                    updateProject(index, "type", e.target.value)
                  }
                  className="px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg"
                />

                 <textarea
                  rows={4}
                  placeholder="Describe your project"
                  value={project.description || ""}
                  onChange={(e) =>
                    updateProject(index, "description", e.target.value)
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg resize-none"
                />
              
              </div>

            </div>
          ))}
        </div>
    </div>
  );
};

export default ProjectForm;