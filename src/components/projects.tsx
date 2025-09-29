const Projects = () => {
    return (
        <div className="min-h-screen flex md:flex-col items-center justify-center p-10">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Project Title 1</h2>
                    <p className="text-gray-700">
                        Brief description of the project goes here. Highlight key features and technologies used.
                    </p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Project Title 2</h2>
                    <p className="text-gray-700">
                        Brief description of the project goes here. Highlight key features and technologies used.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;