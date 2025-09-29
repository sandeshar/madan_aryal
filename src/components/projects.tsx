const Projects: React.FC = () => {
    const images: string[] = [
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-10">
            <h1 className="text-5xl font-bold text-center mb-12">Projects</h1>

            <div className="columns-2 md:columns-4 gap-4 space-y-4 py-14">
                {images.map((src, index) => (
                    <img
                        key={index}
                        className="w-full rounded-lg hover:scale-105 duration-300"
                        src={src}
                        alt={`gallery-${index}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default Projects;
