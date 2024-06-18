import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ProgramPage() {
	return (
		<section className="bg-white dark:bg-gray-900 mt-16">
			<div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white">Program Unggulan</h1>
				<p className="text-center text-lg mt-6 w-2/2 px-4 lg:w-3/5 mx-auto  dark:text-slate-300 text-white ">
					Dalam dunia teknologi yang terus berkembang sekolah kami menonjol dengan enam program unggulan dalam teknologi, menciptakan landasan kuat bagi generasi masa depan yang sukses.
				</p>
			</div>
			<div className="mt-10  px-4 mx-auto max-w-screen grid lg:grid-cols-1 gap-8 lg:gap-16">
				{/* Quran Camp */}
				<div className="relative mb-4">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<Image alt="coding" className="max-w-full rounded-lg shadow-lg hover:scale-90 transition-all duration-300" src="/img/tahfidz.jpg" width={634} height={480} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-white">
							<div className="md:pr-12">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-8">
									<span className="text-3xl font-semibold">
										{" "}
										<i className="fa-solid fa-book-quran"></i>
									</span>
								</div>
								<h3 className="text-3xl font-semibold">Quran Camp</h3>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Suasana Quran Camp untuk santri baru di awal tahun ajaran. Para santri berfokus pada tahsin al-quran yang dibimbing oleh ustadz yang fasih. Kegiatan tahsin ini berfokus pada perbaikan makhraj dan tajwid, menciptakan
									suasana belajar yang serius namun penuh semangat.
								</p>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Kegiatan tahsin ini dilaksanakan untuk mempersiapkan santri baru agar santri sudah siap untuk menghafal dan meningkatkan kualitas tahsin dan tajwid sebelum memulai aktivitas rutin didalam halaqoh.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* English Camp */}
				<div className="relative mb-4">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<Image alt="coding" className="max-w-full rounded-lg shadow-lg hover:scale-90 transition-all duration-300" src="/img/sdi3.jpg" width={634} height={480} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-white">
							<div className="md:pr-12">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-8">
									<span className="text-3xl">
										{" "}
										<i className="fa-solid fa-user-graduate"></i>
									</span>
								</div>
								<h3 className="text-3xl font-semibold">English Camp</h3>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									English Camp di Kampung Inggris Pare berlangsung selama 2 bulan, bertujuan meningkatkan keterampilan bahasa Inggris santri sebelum memasuki pembelajaran IT di sekolah. Para santri mengikuti aktivitas interaktif seperti
									kelompok, presentasi, dan permainan edukatif.
								</p>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Kegiatan ini dilaksanakan dengan bimbingan instruktur berpengalaman, santri terlibat dalam kelas intensif yang meliputi speaking, listening, reading, dan writing.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Sertifikasi IT */}
				<div className="relative mb-4">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<Image alt="coding" className="max-w-full rounded-lg shadow-lg hover:scale-90 transition-all duration-300" src="/img/sertifikasi.jpg" width={634} height={480} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-white">
							<div className="md:pr-12">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-8">
									<span className="text-3xl ">
										{" "}
										<i className="fa-solid fa-address-card"></i>
									</span>
								</div>
								<h3 className="text-3xl font-semibold">Sertifikasi IT</h3>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Kegiatan sertifikasi JavaScript dan Laravel ini dirancang untuk santri yang sudah menguasai materi kedua bahasa pemrograman tersebut, memberikan kesempatan bagi mereka untuk mengikuti ujian sertifikasi resmi.
								</p>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Melalui kegiatan ini, santri dapat memperdalam pengetahuan mereka, menguji keterampilan dalam proyek nyata, dan menambah portofolio profesional mereka dengan sertifikat yang diakui secara internasional, sehingga
									meningkatkan daya saing mereka di dunia kerja.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Syahadah Quran */}
				<div className="relative mb-4">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<Image alt="coding" className="max-w-full rounded-lg shadow-lg hover:scale-90 transition-all duration-300" src="/img/farhan1.jpeg" width={634} height={480} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-white">
							<div className="md:pr-12">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-8">
									<span className="text-3xl font-semibold">
										{" "}
										<i className="fa-solid fa-book-open-reader"></i>
									</span>
								</div>
								<h3 className="text-3xl font-semibold">Syahadah Quran</h3>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Program sertifikat tahfidz ini ditujukan untuk santri yang telah mencapai tingkat mutqin dalam menghafal Al-Quran dan mampu menyetorkan hafalan sekali duduk. Program ini memberikan pengakuan resmi atas prestasi siswa dalam
									Al-Quran dengan tingkat keakuratan.
								</p>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Selain itu, melalui proses evaluasi yang ketat dan bimbingan langsung dari para pengajar yang berpengalaman, siswa dapat terus mempertahankan hafalan mereka, serta meningkatkan kualitas bacaan dan pemahaman mereka terhadap
									Al-Quran.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Character Building */}
				<div className="relative mb-4">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<Image alt="coding" className="max-w-full rounded-lg shadow-lg hover:scale-90 transition-all duration-300" src="/img/building.jpg" width={634} height={480} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-white">
							<div className="md:pr-12">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-8">
									<span className="text-2xl ">
										{" "}
										<i className="fa-solid fa-user-gear"></i>
									</span>
								</div>
								<h3 className="text-3xl font-semibold">Character Building</h3>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Program charakter building adalah petualangan emosional dan intelektual yang mengukir karakter mandiri, bertanggung jawab, dan peduli dalam setiap langkah pembelajaran. Melalui perjalanan ini, santri tidak hanya memperoleh
									keterampilan teknis yang diperlukan untuk sukses di dunia kerja, tetapi juga menemukan kekuatan dalam kemandirian, keberanian dalam bertanggung jawab, dan kehangatan dalam kepedulian terhadap sesama.
								</p>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">Inilah fondasi yang menyiapkan mereka untuk menaklukkan dunia dengan integritas dan kebijaksanaan yang dibentuk didalam lingkungan sekolah.</p>
							</div>
						</div>
					</div>
				</div>

				{/* Try out bulanan */}
				<div className="relative mb-14">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
							<Image alt="coding" className="max-w-full rounded-lg shadow-lg hover:scale-90 transition-all duration-300" src="/img/kodein2.jpeg" width={634} height={480} />
						</div>
						<div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-white">
							<div className="md:pr-12">
								<div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-500 mt-8">
									<span className="text-2xl">
										{" "}
										<i className="fa-solid fa-pen"></i>
									</span>
								</div>
								<h3 className="text-3xl font-semibold">Try Out Bulanan</h3>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">
									Program try out UTBK perbulan bertujuan untuk mengukur kemampuan siswa, mempersiapkan mereka untuk pembelajaran, dan mengevaluasi hasilnya secara berkala. Dengan menyelenggarakan secara rutin, siswa memiliki kesempatan
									untuk menguji pengetahuan dan keterampilan mereka dalam kondisi ujian yang sesungguhnya, sehingga dapat mengetahui sejauh mana kemampuan.
								</p>
								<p className="mt-4 text-lg leading-8 text-blueGray-500 dark:text-gray-300">Kegiatan try out ini dipersiapkan untuk menjadi bahan evaluasi bagi mentor dari hasil pembelajaran setiap bulannya.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
