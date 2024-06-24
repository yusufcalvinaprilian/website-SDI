import Image from "next/image";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ProgramCard: React.FC = () => {
	return (
		<section className="w-full mx-auto min-h-screen mt-16 bg-gray-900 p-8">
			<div className="py-8 px-4 mx-auto max-w-screen-xl">
				<div className="mb-8 lg:mb-16">
					<div className="mx-auto mb-20">
						<h1 className="text-center font-bold text-4xl text-white">Program Kegiatan Unggulan</h1>
						<p className="text-center text-lg mt-6 text-slate-300 lg:w-3/4 mx-auto">
							Dalam dunia teknologi yang terus berkembang sekolah kami menonjol dengan enam program unggulan dalam teknologi, menciptakan landasan kuat bagi generasi masa depan yang sukses
						</p>
					</div>
				</div>

				<div className="flex flex-wrap -m-4">
					{programData.map((program, index) => (
						<div key={index} className="p-4 lg:w-1/3 sm:w-1/2">
							<div className="rounded-lg overflow-hidden">
								<Image alt={program.alt} className="object-cover object-center w-full h-64 rounded-lg shadow-lg hover:scale-95 transition-all duration-300" src={program.src} width={634} height={480} />
							</div>
							<h2 className="text-xl font-medium title-font text-white mt-5">{program.title}</h2>
							<p className="text-base text-slate-400 leading-relaxed mt-2">{program.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const programData = [
	{
		src: "/program/qurancamp.jpg",
		alt: "qurancamp",
		title: "Quran Camp",
		description:
			"Suasana Quran Camp untuk santri baru di awal tahun ajaran. Para santri berfokus pada tahsin al-quran yang dibimbing oleh ustadz yang fasih. Kegiatan tahsin ini berfokus pada perbaikan makhraj dan tajwid, menciptakan suasana belajar yang serius namun penuh semangat.",
	},
	{
		src: "/program/englishhcamp.jpg",
		alt: "englishcamp",
		title: "English Camp",
		description:
			"English Camp di Kampung Inggris Pare berlangsung selama 2 bulan, bertujuan meningkatkan keterampilan bahasa Inggris santri sebelum memasuki pembelajaran IT di sekolah. Para santri mengikuti aktivitas interaktif seperti kelompok, presentasi, dan permainan edukatif.",
	},
	{
		src: "/program/sertifikasi.jpg",
		alt: "coding",
		title: "Sertifikasi IT",
		description:
			"Kegiatan sertifikasi JavaScript dan Laravel ini dirancang untuk santri yang sudah menguasai materi kedua bahasa pemrograman tersebut, memberikan kesempatan bagi mereka untuk mengikuti ujian sertifikasi resmi. Sertifikasi ini bisa meningkatkan daya saing santri di dunia kerja.",
	},
	{
		src: "/program/farhann.jpeg",
		alt: "ujian",
		title: "Syahadah Al-quran",
		description:
			"Program ini ditujukan untuk santri yang telah mencapai tingkat mutqin dalam menghafal Al-Quran dan mampu menyetorkan hafalan sekali duduk. Syahadah ini memberikan pengakuan resmi atas prestasi siswa dalam menjaga Al-Quran dengan mutqin.",
	},
	{
		src: "/program/tarhib.jpeg",
		alt: "karakter",
		title: "Character Building",
		description:
			"Ini adalah petualangan emosional dan intelektual yang mengukir karakter mandiri, bertanggung jawab, dan peduli dalam langkah pembelajaran. Melalui perjalanan ini, santri akan memperoleh keterampilan teknis di dunia kerja dan karakter dasar yang sangat dibutuhkan.",
	},
	{
		src: "/program/kelas.jpeg",
		alt: "belajar",
		title: "Try Out Bulanan",
		description:
			"Program bulanan ini bertujuan untuk mengukur kemampuan siswa, mempersiapkan mereka, dan mengevaluasi hasilnya secara berkala. Dengan menyelenggarakan secara rutin, siswa memiliki kesempatan untuk mengetahui sejauh mana kemampuannya.",
	},
];

export default ProgramCard;
