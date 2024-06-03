import Image from "next/image";

export default function Testimonial() {
	return (
		<section id="testimoni" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 lg:py-20">
			{/* Heading */}
			<h2 className="text-2xl lg:text-4xl font-bold text-center mb-20 text-gray-800 dark:text-gray-200">Testimoni Wali Santri Sekolah Developer Indonesia</h2>

			{/* Cards Container */}
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group">
				{/* Per Card */}
				<div className="relative">
					<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur  hover:!blur-none hover:scale-110">
						<div className="flex flex-col mb-6 space-y-5">
							<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-600 fill-current">
								<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
							</svg>
							<p className="text-gray-700 dark:text-gray-200">”Saya optimis apa yang dipelajari di Sekolah Developer Indonesia akan jauh melampaui apa yang akan dipelajari oleh anak saya saat menempuh perguruan tinggi nanti”</p>
						</div>
						<div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
							<div className="flex flex-col justify-center">
								<p className="font-bold">Bpk. Tri Aguska</p>
								<p className="text-sm mt-1">(wali santri angkatan 1)</p>
							</div>
						</div>
					</div>
				</div>

				{/* Duplicate above block for each card */}
				<div className="relative">
					<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur  hover:!blur-none hover:scale-110">
						<div className="flex flex-col mb-6 space-y-5">
							<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-600 fill-current">
								<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
							</svg>
							<p className="text-gray-700 dark:text-gray-200">
								”Sebagai orang tua, saya selalu ingin memberikan pendidikan IT terbaik bagi anak saya. Saya ingin dia memiliki ilmu pengetahuan yang luas dan juga nilai-nilai agama yang kuat”
							</p>
						</div>
						<div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
							<div className="flex flex-col justify-center">
								<p className="font-bold">Bpk. Tri Aguska</p>
								<p className="text-sm mt-1">(wali santri angkatan 1)</p>
							</div>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur  hover:!blur-none hover:scale-110">
						<div className="flex flex-col mb-6 space-y-5">
							<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-600 fill-current">
								<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
							</svg>
							<p className="text-gray-700 dark:text-gray-200">”Sejak anak saya belajar di Sekolah Developer Indonesia, dia menunjukkan minat yang besar terhadap IT. Dia selalu ingin belajar tentang programming dan desain grafis.”</p>
						</div>
						<div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
							<div className="flex flex-col justify-center">
								<p className="font-bold">Bpk. Tri Aguska</p>
								<p className="text-sm mt-1">(wali santri angkatan 1)</p>
							</div>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-white dark:bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur hover:!blur-none hover:scale-110">
						<div className="flex flex-col mb-6 space-y-5">
							<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-gray-600 fill-current">
								<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
							</svg>
							<p className="text-gray-700 dark:text-gray-200">
								”Dengan fasilitas dan pengajaran yang berkualitas, anak saya dapat mengembangkan kemampuan IT-nya dengan baik. Dia sudah bisa membuat website sendiri, mendesain logo, dan membuat short movie.”
							</p>
						</div>
						<div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-900/60 dark:text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
							<div className="flex flex-col justify-center">
								<p className="font-bold">Bpk. Tri Aguska</p>
								<p className="text-sm mt-1">(wali santri angkatan 1)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
