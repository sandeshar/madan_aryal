'use client';
import { fadeUp } from "@/utils/animations";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    tags: string[];
    createdAt: string;
}

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();
            setProjects(data.projects || []);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fallback images if no projects are uploaded yet
    const fallbackImages: string[] = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    ];

    const displayProjects = projects.length > 0 ? projects : fallbackImages.map((img, idx) => ({
        id: `fallback-${idx}`,
        title: `Sample Project ${idx + 1}`,
        description: 'Upload your own projects in the admin panel',
        imageUrl: img,
        link: '',
        tags: [],
        createdAt: '',
    }));

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10">
            <motion.h1 className="text-5xl font-bold text-center mb-12" {...fadeUp}>
                Projects
            </motion.h1>

            {loading ? (
                <div className="text-center py-20">
                    <p className="text-xl">Loading projects...</p>
                </div>
            ) : (
                <div className="w-full max-w-7xl">
                    {projects.length === 0 && (
                        <motion.div {...fadeUp} className="text-center mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-lg">
                                No projects uploaded yet. Visit <a href="/admin" className="text-blue-600 hover:underline font-bold">/admin</a> to add your projects!
                            </p>
                        </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-14">
                        {displayProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                {...fadeUp}
                                transition={{ delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        className="w-full h-64 object-cover group-hover:scale-110 duration-500"
                                        src={project.imageUrl}
                                        alt={project.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                                    {project.description && (
                                        <p className="text-sm mb-3 opacity-90">{project.description}</p>
                                    )}
                                    {project.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs"
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
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                                        >
                                            View Project <FiExternalLink />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
