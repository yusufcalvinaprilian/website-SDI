import Image from "next/image";

export default function TentangPage() {
	return (
		<section className="bg-white w-full min-h-screen mt-16 pt-16 dark:bg-gray-900">
			<div>
				<h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white">Tentang Kami</h1>
			</div>
			<div className="py-8 mt-10 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
				<div className="flex flex-col justify-center px-4">
					<h2 className=" font-semibold text-2xl lg:text-3xl lg:mb-10 text-white mb-6">Sejarah</h2>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
						Sekolah Developer Indonesia didirikan sebagai jawaban atas tantangan besar yang dihadapi oleh banyak lulusan perguruan tinggi, yang kesulitan mendapatkan pekerjaan sesuai dengan minat dan jurusan mereka. Melihat banyaknya
						lulusan yang tersendat dalam meraih karir impian mereka, pendiri sekolah ini tergerak untuk menciptakan sebuah institusi yang tidak hanya mempersiapkan generasi muda dengan keterampilan IT yang relevan, tetapi juga membekali
						mereka dengan nilai-nilai agama yang kuat.
					</p>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
						Sekolah Developer Indonesia hadir sebagai pionir dalam mengintegrasikan pendidikan IT dengan pembinaan karakter berbasis agama. Kami percaya bahwa kesuksesan sejati tidak hanya diukur dari kecakapan teknis, tetapi juga dari
						kualitas moral dan spiritual yang dimiliki oleh individu. Oleh karena itu, kurikulum kami dirancang secara komprehensif untuk mengembangkan keahlian profesional di bidang teknologi sekaligus menanamkan nilai-nilai kejujuran,
						tanggung jawab, dan kepedulian sosial.
					</p>
					<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
						Dalam perjalanan pendirian sekolah ini, kami menyadari betapa pentingnya membentuk lulusan yang tidak hanya mahir dalam coding dan pengembangan perangkat lunak, tetapi juga memiliki akhlak yang mulia. Dengan pendekatan holistik,
						kami menggabungkan sesi pembelajaran IT intensif dengan kegiatan keagamaan yang mendalam, seperti pengajian rutin, tahsin Al- Quran, dan kajian fiqh muamalah yang relevan dengan dunia kerja.
					</p>
				</div>
				{/* Video youtube */}
				<div className="flex flex-col justify-center px-4 embed-responsive embed-responsive-16by9 relative w-full overflow-hidden">
					<iframe
						className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
						src="https://www.youtube.com/embed/ue_nwkp9U_E?si=wA1CDUtGqp4AWHYc"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<div className=" mt-16">
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
							Dalam perjalanan pendirian sekolah ini, kami menyadari betapa pentingnya membentuk lulusan yang tidak hanya mahir dalam coding dan pengembangan perangkat lunak, tetapi juga memiliki akhlak yang mulia. Dengan pendekatan
							holistik, kami menggabungkan sesi pembelajaran IT intensif dengan kegiatan keagamaan yang mendalam, seperti pengajian rutin, tahsin Al- Quran, dan kajian fiqh muamalah yang relevan dengan dunia kerja.
						</p>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
							Program kami mencakup berbagai sertifikasi IT internasional yang diakui oleh industri, memastikan setiap siswa mendapatkan pengakuan atas keterampilan mereka. Selain itu, melalui berbagai proyek kolaboratif dan internship di
							perusahaan teknologi terkemuka, siswa kami mendapatkan pengalaman praktis yang sangat berharga. Kami juga menyediakan bimbingan karir yang membantu siswa merancang jalur karir mereka dengan jelas dan tepat.
						</p>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
							Komunitas sekolah kami juga sangat mendukung pengembangan karakter siswa. Dengan suasana yang kondusif dan penuh Peduli inspirasi, para siswa diajak untuk aktif dalam kegiatan sosial dan kepedulian lingkungan. Hal ini
							bertujuan untuk membentuk mereka menjadi pribadi yang peduli dan bertanggung jawab terhadap masyarakat sekitar.
						</p>
						<p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-300">
							Dengan segala upaya ini, Sekolah Developer Indonesia berkomitmen untuk menghasilkan lulusan yang siap bersaing di industri teknologi dan sekaligus menjadi pribadi yang berakhlak mulia. Kami yakin, kombinasi antara keterampilan
							IT yang handal dan fondasi agama yang kuat akan menciptakan generasi pemimpin masa depan yang tidak hanya kompeten, tetapi juga bijaksana dan berintegritas tinggi.
						</p>
					</div>
				</div>
			</div>

			{/* Card */}
			<div className="py-8 px-4 mx-auto w-full lg:py-16 flex justify-center">
				<a href="#" className="flex flex-col items-center  border border-gray-200 rounded-lg shadow lg:flex-row lg:max-w-full dark:border-gray-700 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800">
					<Image className="object-fit w-full rounded-t-md h-96 lg:w-1/3 lg:rounded-none" src="/npsn.jpg" alt="img" width={200} height={200} />
					<div className="flex flex-col justify-center p-4 leading-normal ms-6">
						<h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PKBM SEKOLAH DEVELOPER INDONESIA</h5>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							<span className="font-semibold text-slate-300">NPSN :</span> P9998718
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							<span className="font-semibold text-slate-300">Status :</span> Swasta
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							<span className="font-semibold text-slate-300">Bentuk Pendidikan :</span> PKBM
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							{" "}
							<span className="font-semibold text-slate-300">Status Kepemilikan :</span> Yayasan
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							<span className="font-semibold text-slate-300">SK Pendirian Sekolah :</span> DK.01.01/4523/XII/2022
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							<span className="font-semibold text-slate-300">Tanggal SK Pendirian :</span> 2022-12-28
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							{" "}
							<span className="font-semibold text-slate-300">SK Izin Operasional :</span> 711220081886
						</p>
						<p className="mb-1 text-gray-700 dark:text-gray-400">
							<span className="font-semibold text-slate-300">Tanggal SK Izin Operasional :</span> 2022-11-07
						</p>
					</div>
				</a>
			</div>
		</section>
	);
}
