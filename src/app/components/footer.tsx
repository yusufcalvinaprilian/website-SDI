import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
	return (
		<footer className="bg-white dark:bg-gray-800 px-10 pt-10">
			<div className="w-full max-w-screen-xl px-6 py-6 justify-center mx-auto lg:py-8">
				<div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
					<div className="text-center lg:text-left mb-8 lg:mb-0">
						<h1 className="text-2xl font-semibold  dark:text-white ">Sekolah Developer Indonesia</h1>
						<p className="mt-4 text-gray-300 dark:text-gray-400 lg:w-2/3 mx-auto lg:mx-0">
							Menghasilkan lulusan yang tidak hanya ahli dalam bidang teknologi informasi tetapi juga memiliki integritas moral yang tinggi, siap berkontribusi positif pada masyarakat
						</p>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:me-auto gap-8 lg:gap-16">
						<div className="text-center  lg:text-left ">
							<h2 className="mb-6 text-sm font-semibold  uppercase text-white ">QUICK LINKS</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-2 ">
									<a href="/portofolio" className="hover:underline hover:text-blue-500">
										Portofolio
									</a>
								</li>
								<li className="mb-2">
									<a href="/program" className="hover:underline hover:text-blue-500">
										Program
									</a>
								</li>
								<li className="mb-2">
									<a href="/tentang" className="hover:underline hover:text-blue-500">
										Tentang
									</a>
								</li>
								<li>
									<a href="/kontak" className="hover:underline hover:text-blue-500">
										Kontak
									</a>
								</li>
							</ul>
						</div>
						<div className="text-center lg:text-left hidden lg:block">
							<h2 className="mb-6 text-sm font-semibold uppercase text-white">Follow us</h2>
							<ul className="text-gray-500 dark:text-gray-400 font-medium">
								<li className="mb-2">
									<a href="https://www.facebook.com/profile.php?id=61559051970117&locale=id_ID" target="_blank" className="hover:underline hover:text-blue-500">
										Facebook
									</a>
								</li>
								<li className="mb-2">
									<a href="https://www.instagram.com/sekolahdeveloperind/" target="_blank" className="hover:underline hover:text-blue-500">
										Instagram
									</a>
								</li>
								<li className="mb-2">
									<a href="https://www.youtube.com/@sekolahdeveloperind" target="_blank" className="hover:underline hover:text-blue-500">
										Youtube
									</a>
								</li>
								<li className="mb-2">
									<a href="https://www.tiktok.com/@kodein.sch" target="_blank" className="hover:underline hover:text-blue-500">
										Tiktok
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<div className="flex flex-col items-center text-center">
					<span className="text-sm text-gray-500 dark:text-gray-400">
						Copyright ©2024{" "}
						<a href="/" className="hover:underline">
							Sekolah Developer Indonesia
						</a>
						. All Rights Reserved. Powered By Tim Creatives
					</span>
					<div className="flex justify-center mt-4">
						<a href="https://www.facebook.com/profile.php?id=61559051970117&locale=id_ID" target="_blank" className="text-gray-500  dark:hover:text-blue-500 hover:text-white mx-2">
							<i className="fa-brands fa-facebook text-2xl"></i>
						</a>
						<a href="https://www.instagram.com/sekolahdeveloperind?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" className="text-gray-500 dark:hover:text-blue-500 hover:text-white mx-2">
							<i className="fa-brands fa-instagram text-2xl"></i>
						</a>
						<a href="https://www.youtube.com/@sekolahdeveloperind" target="_blank" className="text-gray-500 dark:hover:text-blue-500 hover:text-white mx-2">
							<i className="fa-brands fa-youtube text-2xl"></i>
						</a>
						<a href="https://www.tiktok.com/@kodein.sch" target="_blank" className="text-gray-500 dark:hover:text-blue-500 hover:text-white mx-2">
							<i className="fa-brands fa-tiktok text-2xl"></i>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
