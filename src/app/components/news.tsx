
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
							href="https://tekno.kompas.com/read/2021/06/21/10030097/profesi-bidang-it-yang-banyak-dicari-5-tahun-ke-depan"
							className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" target="_blank"
						>
							Baca Artikel
							<svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
							</svg>
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
