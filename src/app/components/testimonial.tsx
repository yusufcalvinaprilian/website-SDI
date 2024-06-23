
export default function Testimonial() {
	return (
		<section id="testimoni" className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 py-12 lg:py-20">
			<div className="py-8 px-6 mx-auto max-w-screen-xl">
				<h2 className="text-2xl lg:text-4xl font-bold text-center mb-20 text-white md:px-32">Testimoni Wali Santri Sekolah Developer Indonesia</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 group">

					<div className="relative lg:pb-20 md:mx-auto">
						<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur hover:!blur-none hover:scale-110">
							<div className="flex flex-col mb-6 space-y-5">
								<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 fill-current">
									<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
								</svg>
								<p className="text-gray-200">”Saya optimis apa yang dipelajari di Sekolah Developer Indonesia akan jauh melampaui apa yang akan dipelajari oleh anak saya saat menempuh perguruan tinggi nanti”</p>
							</div>
							<div className="flex items-center space-x-2 bg-gray-900/60 px-6 pt-6 pb-5 rounded-b-xl text-gray-200">
								<div className="flex flex-col justify-center">
									<p className="font-bold">Bpk. Tri Aguska</p>
									<p className="text-sm mt-1">(wali santri angkatan 1)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative md:mx-auto">
						<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur  hover:!blur-none hover:scale-110">
							<div className="flex flex-col mb-6 space-y-5">
								<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 fill-current">
									<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
								</svg>
								<p className="text-gray-200">”Terkait pembelajaran yang disampaikan oleh Sekolah Developer Indonesia itu jauh diluar bayangan saya, saya senang menemukan sekolah ini. Semoga istiqomah”</p>
							</div>
							<div className="flex items-center space-x-2 bg-gray-900/60 text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
								<div className="flex flex-col justify-center">
									<p className="font-bold">Bpk. Herman Harminggana</p>
									<p className="text-sm mt-1">(wali santri angkatan 1)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative md:mx-auto">
						<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur  hover:!blur-none hover:scale-110">
							<div className="flex flex-col mb-6 space-y-5">
								<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 fill-current">
									<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
								</svg>
								<p className="text-gray-200">”Saya menemukan Sekolah Developer Indonesia ini seprti menemukan emas, benar-benar melebihi ekspektasi saya. Semoga benar-benar sesuai dengan minat anak saya”</p>
							</div>
							<div className="flex items-center space-x-2 bg-gray-900/60 text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
								<div className="flex flex-col justify-center">
									<p className="font-bold">Ibu Nelly Sulistyo</p>
									<p className="text-sm mt-1">(wali santri angkatan 1)</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative md:mx-auto">
						<div className="flex flex-col max-w-md align-center justify-between border border-solid border-gray-200 bg-gray-800 rounded-xl p-6 transition-all duration-300 transform group-hover:blur hover:!blur-none hover:scale-110">
							<div className="flex flex-col mb-6 space-y-5">
								<svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 fill-current">
									<path d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z" fill="current"></path>
								</svg>
								<p className="text-gray-200">”Kami sebagai orang tua tidak salah memilih Sekolah Developer Indonesia untuk putra kami karena kurikulum Pendidikan IT yang sesuai harapan kami. Kurikulum yang relevan dengan industry IT”</p>
							</div>
							<div className="flex items-center space-x-2 bg-gray-900/60 text-gray-200 px-6 pt-6 pb-5 rounded-b-xl">
								<div className="flex flex-col justify-center">
									<p className="font-bold">Bpk. Wihandani</p>
									<p className="text-sm mt-1">(wali santri angkatan 2)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
