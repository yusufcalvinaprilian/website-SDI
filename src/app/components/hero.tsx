"use client";

export default function Hero() {
	return (
		<section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply min-h-screen flex items-center">
			<div className="px-8 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
				<h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
					Sekolah IT Pencetak <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-300 from-blue-600">Programmer Muda</span>
				</h1>
				<p className="mb-4 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Raih Masa Depan Cemerlang dengan Pendidikan IT Terbaik. Bergabunglah dengan Sekolah IT Boarding Setingkat SMA Kami Sekarang!</p>
				<p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Jadilah Bagian dari Revolusi Digital. Daftar di Sekolah Developer Indonesia dan Siapkan Diri untuk Karir Gemilang di Dunia Teknologi.</p>
				<div className=" space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
					<a
						href="https://forms.gle/4JvCkUH2RvUT5eGd7"
						className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					>
						Daftar Sekarang
					</a>
				</div>
			</div>
		</section>
	);
}
