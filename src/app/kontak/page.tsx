import "@fortawesome/fontawesome-free/css/all.min.css";

export default function KontakPage() {
	return (
		<section className="bg-white mt-16 lg:pb-10 pb-6 dark:bg-gray-900">
			<div className="container px-6 py-12 mx-auto">
				<div className="mb-10">
					<h1 className="font-bold text-4xl pt-4 text-black dark:text-white text-center">Hubungi Kami</h1>
					<p className="mt-6 px-4 lg:w-3/5 mx-auto text-gray-500 dark:text-gray-400 text-center">
						Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut mengenai program dan pendaftaran di sekolah kami. Tim kami siap membantu menjawab pertanyaan Anda dan memberikan detail yang Anda butuhkan
					</p>
				</div>

				<div className="grid grid-cols-1 px-6 gap-12 mt-32 lg:grid-cols-3 justify-center text-center lg:justify-start lg:text-left">
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
						<div>
							<span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 hover:bg-gray-700 hover:border hover:border-blue-500">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
									/>
								</svg>
							</span>

							<h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Tim kami siap membantu anda</p>
							<p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
								<a href="mailto:sekolahdeveloper.id@gmail.com" target="_blank" rel="noopener noreferrer">
									sekolahdeveloper.id@gmail.com
								</a>
							</p>
						</div>

						<div>
							<span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 hover:bg-gray-700 hover:border hover:border-blue-500">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
									<path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
									<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
								</svg>
							</span>

							<h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Lokasi</h2>
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Cek alamat sekolah kami disini</p>
							<p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
								<a href="https://maps.app.goo.gl/uGbW96Xagw5V92Nq6" target="_blank" rel="noopener noreferrer">
									Sekolah Developer Indonesia
								</a>
							</p>
						</div>

						<div>
							<span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 hover:bg-gray-700 hover:border hover:border-blue-500">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
									/>
								</svg>
							</span>

							<h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Phone</h2>
							<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Segera hubungi tim kami</p>
							<p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
								<a href="https://wa.me/+6281703703111?text=Kami%20ingin%20mendapatan%20bantuan%20dan%informasi%20untuk%20pendaftaran" target="_blank" rel="noopener noreferrer">
									+6281703703111
								</a>
							</p>
						</div>
					</div>

					<div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
						<iframe
							className="border-0 h-full w-full"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.084842091742!2d107.01301677527194!3d-6.383050462435684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699753f452a75d%3A0x25e019e428a06c70!2sSekolah%20Developer%20Indonesia!5e0!3m2!1sid!2sid!4v1717470527891!5m2!1sid!2sid"
							width="600"
							height="450"
							loading="lazy"
							allowFullScreen
							referrerPolicy="no-referrer-when-downgrade"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
}
