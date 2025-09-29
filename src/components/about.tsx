import Image from "next/image";

const About = () => {
    return (
        <div className="md:flex md:flex-col items-center justify-center py-28">
            <h1 className="text-5xl font-bold text-center mb-12">About Me</h1>
            <div className="md:flex">
                <div className="my-8 md:my-0 md:mx-8 md:w-1/3 ">
                    <Image
                        src="/madan.png"
                        alt="Your Name"
                        width={400}
                        height={400}
                        className="rounded-full"
                    />
                </div>
                <div className="md:mt-4 md:w-2/3 text-justify text-lg">
                    <p>
                        Hi, I'm Madan Aryal, a graphic designer at Sunrise Graphics and a freelance designer. I create visually compelling designs that help brands stand out and connect with their audience.
                    </p>
                    <p>
                        I have experience in branding, digital illustration, and print, working with clients from startups to established businesses. My background in art and technology and formal design education inform my practical, creative approach.
                    </p>
                    <p>
                        My portfolio includes logo design, marketing collateral, social media graphics, packaging, and web assets. I focus on translating ideas into clear, engaging visuals and take pride in thoughtful, strategic work.
                    </p>
                    <p>
                        I believe design is about solving problems and communicating effectively. I work closely with clients, value collaboration and feedback, and tailor solutions to each project's goals.
                    </p>
                    <p>
                        I stay current with design trends and tools through workshops and design communities, and I enjoy experimenting to keep my work fresh and impactful.
                    </p>
                    <p>
                        I'm proficient with Adobe Creative Suite, Figma, and Canva, and I manage multiple projects while meeting deadlines to deliver high-quality visuals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;