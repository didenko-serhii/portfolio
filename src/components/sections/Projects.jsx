import React from 'react'
import RevealOnScroll from "../RevealOnScroll.jsx";

const Projects = () => {

	const centriaHub = ['Docker', 'Coolify', 'Next.js', 'React', 'Tailwind', 'ShadcnUi', 'Payload CMS']

	return (
		<section
			id="projects"
			className="min-h-screen flex items-center justify-center py-20"
		>
			<RevealOnScroll>
				<div className="max-w-5xl mx-auto px-4">
					<h2
						className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
						{" "}
						Featured Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div
							className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
							<h3 className="text-xl font-bold mb-2"> Centria Hub</h3>
							<p className="text-gray-400 mb-4">
								Centria Hub is a centralized digital platform that integrates all university resources—news, events,
								articles, and emails—into one intuitive space. It enhances accessibility, collaboration, and engagement
								for students, staff, and faculty.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{centriaHub.map((tech, key) => (<span
									key={key}
									className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
								>
                    {tech}
                  </span>))}
							</div>

							<div className="flex justify-between items-center">
								<a
									href="https://hub.solo-web.studio/"
									className="text-blue-400 hover:text-blue-300 transition-colors my-4"
								>
									View Project →
								</a>
							</div>
						</div>
						<div
							className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">Educom</h3>
							<p className="text-gray-400 mb-4">
								I developed a WordPress website for a school, featuring news, events, information for students and parents, a photo gallery, and general school details. The site provides an organized and user-friendly experience, ensuring easy access to essential updates and resources.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{["Wordpress", "Elementor", "PHP"].map((tech, key) => (<span
									key={key}
									className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
								>
                    {tech}
                  </span>))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="https://educom.org.ua/"
									className="text-blue-400 hover:text-blue-300 transition-colors my-4"
								>
									View Project →
								</a>
							</div>
						</div>

						<div
							className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">chuchatv</h3>
							<p className="text-gray-400 mb-4">
								I developed an e-commerce website using WordPress, Elementor, WooCommerce, and PHP for selling 3D printers and 3D modeling services. The site includes a blog section to share industry insights and updates.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{["Wordpress", "Elementor", "WooCommerce", "PHP"].map((tech) => (<span
									key={tech}
									className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
								>
                      {tech}
                    </span>))}
							</div>
							<div className="flex justify-between items-center">
								<a
									href="https://zbroyari.com.ua/"
									className="text-blue-400 hover:text-blue-300 transition-colors my-4"
								>
									View Project →
								</a>
							</div>
						</div>

						<div
							className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
						>
							<h3 className="text-xl font-bold mb-2">business site for RPC company</h3>
							<p className="text-gray-400 mb-4">
								I developed a website for RPCgroup using WordPress and Elementor, providing a user-friendly interface and functionality to showcase the company's services.
							</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{["Wordpress", "Elementor"].map((tech, key) => (<span
									key={key}
									className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
								>
                    {tech}
                  </span>))}
							</div>
							<div className="flex justify-between items-center ">
								<a
									href="https://rpc.in.ua/"
									className="text-blue-400 hover:text-blue-300 transition-colors my-4"
								>
									View Project →
								</a>
							</div>
						</div>
					</div>
				</div>
			</RevealOnScroll>
		</section>
		)
}
export default Projects