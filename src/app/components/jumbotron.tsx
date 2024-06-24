import Image from "next/image";
import React from "react";

const Jumbotron: React.FC = () => {
	return (
		<section className="relative w-full min-h-screen flex items-center justify-center bg-gray-700 bg-blend-multiply">
			<div className="absolute inset-0 z-0">
				<Image
					src="/program/code2.avif"
					alt="Jumbotron background"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
					quality={75}
					priority={true}
				/>
				<div className="absolute inset-0 bg-gray-700 opacity-50"></div>
			</div>
			<div className="container relative z-10 mx-auto flex items-center justify-center px-6 py-12">
				<div className="text-center">
					<h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
						Sekolah IT Pencetak <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-indigo-600">Programmer Muda</span>
					</h1>
					<p className="mb-4 text-lg font-normal mx-auto text-gray-300 lg:text-xl lg:w-2/3">Raih Masa Depan Cemerlang dengan Pendidikan IT Terbaik. Bergabunglah dengan Sekolah IT Boarding Setingkat SMA Kami Sekarang!</p>
					<p className="mb-8 text-lg font-normal lg:w-2/3 mx-auto text-gray-300 lg:text-xl px-4">Jadilah Bagian dari Revolusi Digital. Daftar di Sekolah Developer Indonesia dan Siapkan Diri untuk Karir Gemilang di Dunia Teknologi.</p>
					<a className="group rounded-lg relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring" href="https://forms.gle/4JvCkUH2RvUT5eGd7" target="_blank" rel="noopener noreferrer">
						<span className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"></span>
						<span className="relative text-sm font-medium text-indigo-400 transition-colors group-hover:text-white">Daftar Sekarang</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Jumbotron;
