import { ArrowRight, ExternalLink, Github } from "lucide-react";
const projects = [
	{
		id: 1,
		title: "Trending Movies",
		description: "A beautiful movies page app using React and Tailwind.",
		image: "/projects/project1.png",
		tags: ["React", "TailwindCSS", "appwrite"],
		demoUrl: "https://vire-livid.vercel.app/",
		githubUrl: "https://github.com/bulutbilisimbusiness/vire/tree/main",
	},
	{
		id: 2,
		title: "Chat Application",
		description:
			" It is a real-time, modern chat application developed with React, Node.js, Express, Socket.IO, MongoDB, Tailwind CSS, and cloud-based services",
		image: "/projects/project2.png",
		tags: ["React", "TailwindCSS", "Node.js", "Socket.IO", "MongoDB"],
		demoUrl: "https://chat-app-frontend-five-olive.vercel.app/",
		githubUrl: "https://github.com/bulutbilisimbusiness/chat-app/tree/main",
	},
	{
		id: 3,
		title: "Job Landing Page",
		description:
			"Find top tech talent faster with DevHire – the smart way to hire developers.",
		image: "/projects/project3.png",
		tags: ["Next", "TailwindCSS", "AOS"],
		demoUrl: "https://job-landing-plum.vercel.app/",
		githubUrl: "https://github.com/bulutbilisimbusiness/job_landing",
	},
	{
		id: 4,
		title: "PyFast",
		description:
			"PyFast is an AI-powered coding challenge generator that helps you create coding challenges for your programming courses.",
		image: "/projects/project4.png",
		tags: ["React", "Vite", "Groq API", "Clerk"],
		demoUrl: "https://py-fast-frontend-railway.vercel.app/",
		githubUrl: "https://github.com/bulutbilisimbusiness/pyFast_frontend",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-4 text-centerr">
					Featured<span className="text-primary"> Projects</span>
				</h2>
				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my featured projects that I've worked on. Each
					project was carefully crafted with attention to detail, performance,
					and user experience.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-1">{project.title}</h3>
								<p className="text-muted-foreground text-sm mb-4">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.demoUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githubUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<a
						className="cosmic-button w-fit flex items-center mx-auto gap-2"
						target="_blank"
						href="https://github.com/bulutbilisimbusiness"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
