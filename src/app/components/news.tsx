
export default function News() {
	return (
		<section className="bg-white px-4 dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
				<div className="flex flex-col justify-center">
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl lg:text-left dark:text-white text-center ">Generasi Revolusi Digital Dunia</h1>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 lg:text-left text-center">
						Revolusi digital membuka peluang baru di era digital. Sekolah Developer Indonesia siap membantumu menguasai keahlian desain dan programming yang dibutuhkan industri melalui pembelajaran intensif dengan kurikulum terkini, mentor
						berpengalaman, dan sertifikasi terpercaya.
					</p>
					<div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
						<a
							className="group rounded-lg relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
							href="https://tekno.kompas.com/read/2021/06/21/10030097/profesi-bidang-it-yang-banyak-dicari-5-tahun-ke-depan"
							target="_blank"
						>
							<span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>

							<span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">Baca Artikel</span>
						</a>
					</div>
				</div>
				<div>
					<iframe
						className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
						src="https://www.youtube.com/embed/S2DaqwtHuXs?si=Qa286Wt99rhEJE6P"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			</div>
		</section>
	);
}
