import React from 'react'
import RevealOnScroll from "../RevealOnScroll.jsx";

const About = () => {

	const frontendSkills = [
		'React',
		'Next.js',
		'Tailwindcss',
		'Css'
	]

	const backendSkills = [
		'Node.js',
		'Bun.js',
		'Python',
		'Sql',
	]

	return (
		<section className='min-h-screen flex items-center justify-center py-20' id='about'>
			<RevealOnScroll>
				<div className='max-w-3xl mx-auto px-4'>
					<h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
						About Me
					</h2>
					<div className=' rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all '>
						<p className='text-gray-300 mb-6'>
							I&#39;m a FullStack developer with a passion for react and node.js. I&#39;m continuously learning and expanding my skill set to become a proficient developer.
						</p>

						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div className='rounded-xl p-6 hover:-translate-y-1 transition-all '>
								<h3 className='text-xl font-bold mb-4'>
									Frontend
								</h3>
								<div className='flex flex-wrap gap-2'>
									{frontendSkills.map((skill, i) => (
										<span className='bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,224,0.2)] transition ' key={i}>{skill}</span>
									))}
								</div>
							</div>

							<div className='rounded-xl p-6 hover:-translate-y-1 transition-all '>
								<h3 className='text-xl font-bold mb-4'>
									Backend
								</h3>
								<div className='flex flex-wrap gap-2'>
									{backendSkills.map((skill, i) => (
										<span className='bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130,224,0.2)] transition ' key={i}>{skill}</span>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
						<div className='rounded-xl border border-white/10 p-6 hover:-translate-y-1 transition-all '>
							<h3 className='text-xl font-bold mb-4 '>🎓 Education</h3>
							<ul className='list-disc list-inside text-gray-300 space-y-2'>
								<li>
									<strong>
										B.Eng. IT
									</strong> - Centria University of Applied Sciences (present)
								</li>
							</ul>
						</div>
						<div className='rounded-xl border border-white/10 p-6 hover:-translate-y-1 transition-all '>
							<h3 className='text-xl font-bold mb-4 '>💼 Work experience</h3>
							<div className='space-y-4 text-gray-300 '>
								<div>
									<h4 className='font-semibold'>
										<strong>Herizon Internship (2024 - 1 mo.)</strong>
									</h4>
									<p>developed a finance calculator for WordPress based on vue.js</p>
								</div>
								<div>
									<h4 className='font-semibold'>
										<strong>internship at Villa Elba (Mar 2024 - Jul 2024 5 mos.)</strong>
									</h4>
									<p>WordPress website development and design, UI/UX prototyping in Figma, Office 365 administration, and poster design.</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</RevealOnScroll>
		</section>
	)
}
export default About