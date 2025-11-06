'use client';
import React, { useState, useEffect } from 'react';
import { FiUpload, FiTrash2, FiPlus, FiX } from 'react-icons/fi';

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    tags: string[];
    createdAt: string;
}

const AdminPage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        link: '',
        tags: '',
    });

    // Fetch projects
    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();
            setProjects(data.projects || []);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    // Handle file upload
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                setFormData(prev => ({ ...prev, imageUrl: data.url }));
                alert('Image uploaded successfully!');
            } else {
                alert('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            alert('Failed to upload image');
        } finally {
            setUploading(false);
        }
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
                }),
            });

            const data = await response.json();
            if (data.success) {
                alert('Project added successfully!');
                setFormData({ title: '', description: '', imageUrl: '', link: '', tags: '' });
                setShowForm(false);
                fetchProjects();
            } else {
                alert('Failed to add project');
            }
        } catch (error) {
            console.error('Error adding project:', error);
            alert('Failed to add project');
        } finally {
            setLoading(false);
        }
    };

    // Handle delete
    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        try {
            const response = await fetch(`/api/projects?id=${id}`, {
                method: 'DELETE',
            });

            const data = await response.json();
            if (data.success) {
                alert('Project deleted successfully!');
                fetchProjects();
            } else {
                alert('Failed to delete project');
            }
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Failed to delete project');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Project Management
                    </h1>
                    <button
                        onClick={() => setShowForm(!showForm)}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        {showForm ? <FiX /> : <FiPlus />}
                        {showForm ? 'Cancel' : 'Add Project'}
                    </button>
                </div>

                {/* Add Project Form */}
                {showForm && (
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Add New Project
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="Enter project title"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    rows={3}
                                    placeholder="Enter project description"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Upload Image *
                                </label>
                                <div className="flex gap-4 items-center">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                    />
                                    {uploading && <span className="text-blue-600">Uploading...</span>}
                                </div>
                                {formData.imageUrl && (
                                    <div className="mt-2">
                                        <img
                                            src={formData.imageUrl}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover rounded-lg"
                                        />
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Image URL (or upload above) *
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={formData.imageUrl}
                                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Project Link
                                </label>
                                <input
                                    type="url"
                                    value={formData.link}
                                    onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="https://github.com/username/project"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tags (comma-separated)
                                </label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                                    placeholder="React, Next.js, TypeScript"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400"
                            >
                                <FiUpload />
                                {loading ? 'Adding...' : 'Add Project'}
                            </button>
                        </form>
                    </div>
                )}

                {/* Projects List */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                        Current Projects ({projects.length})
                    </h2>

                    {projects.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                            No projects yet. Add your first project above!
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        {project.description && (
                                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                                                {project.description}
                                            </p>
                                        )}
                                        {project.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {project.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 dark:text-blue-400 text-sm hover:underline mb-3 block"
                                            >
                                                View Project →
                                            </a>
                                        )}
                                        <button
                                            onClick={() => handleDelete(project.id)}
                                            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors w-full justify-center"
                                        >
                                            <FiTrash2 />
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
