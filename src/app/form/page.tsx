// pages/form.tsx
import React from "react";
import Image from "next/image";

const Form: React.FC = () => {
	return (
		<section className="mt-16 lg:pb-10 pb-6 bg-gray-900">
			<div className="relative min-h-screen bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500 flex items-center justify-center ">
				<div className="absolute inset-0 z-0 overflow-hidden">
					<Image src="/background/form-bg.jpg" alt="Form background" layout="fill" objectFit="cover" objectPosition="center" quality={75} priority={true} className="opacity-20" />
				</div>
				<div className="relative z-10 w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-60">
					<h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">Formulir Pendaftaran</h1>
					<p className="text-center text-lg text-gray-700 font-medium lg:px-14 mb-8">Bergabunglah dengan Sekolah IT Boarding Setingkat SMA Kami Sekarang! Isi formulir berikut untuk mendaftar.</p>
					<div className="aspect-w-16 aspect-h-9 mb-8">
						<iframe src="https://forms.gle/d295UHojk5uz9CKXA" width="100%" height="600" title="Google Form" className="w-full rounded-lg shadow-lg">
							Loading…
						</iframe>
					</div>
					<p className="text-center text-gray-700">
						Jika Anda mengalami kesulitan mengisi formulir, silakan hubungi kami di{" "}
						<a href="mailto:info@sekolahit.com" className="text-indigo-600">
							sekolahdeveloper.id@gmail.com
						</a>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Form;
