const Home = () => {
	return (
		<section className='min-h-screen flex items-center justify-center relative' id='home' >
			<div className='text-center z-10 px-4'>
				<h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right'>
					Hi, I&#39;m Serhii
				</h1>
				<hr className="h-1 mb-8 max-w-lg mx-auto border-0 bg-gradient-to-r from-blue-500 to-purple-600" />
				<p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
					I&#39;m a FullStack developer with a passion for react and node.js. I&#39;m continuously learning and expanding my skill set to become a proficient developer.
				</p>
			</div>
		</section>
	)
}
export default Home