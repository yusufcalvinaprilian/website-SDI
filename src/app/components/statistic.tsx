"use client";

import Image from "next/image";

export default function Stats() {
	return (
		<div className="bg-gray-900 pt-12 lg:pt-0 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<dl className="mb-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4 pb-6  lg:pb-12">
						<div className="flex flex-col bg-white/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-300">berada dikawasan yang sangat luas</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-white">1500M+</dd>
						</div>
						<div className="flex flex-col bg-white/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-300">kecepatan internet yang tak terbatas</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-white">500MBPS+</dd>
						</div>
						<div className="flex flex-col bg-white/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-300">pengalaman mentor di industri 10 tahunan</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-white">10+</dd>
						</div>
						<div className="flex flex-col bg-white/5 p-8">
							<dt className="text-sm font-semibold leading-6 text-gray-300">sertifikasi javascript, laravel, dan tahfidz</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-white">5+</dd>
						</div>
					</dl>
					<div className="text-center space-y-4 lg:mb-20 mb-8">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Roadmap Pembelajaran IT</h2>
						<p className="text-lg leading-8 lg:w-2/3  mx-auto text-gray-300 ">kurikulum yang relevan dengan industri, diajarkan oleh mentor expert berpengalaman dibidangnya, dan metode pembelajaran yang dinamis dan intensif </p>
					</div>

					<Image className="w-full rounded-lg" src="/roadmap.jpg" alt="roadmap" width={1200} height={600} />
				</div>
			</div>
		</div>
	);
}
