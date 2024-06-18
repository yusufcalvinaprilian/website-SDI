import React from "react";
import Image from "next/image";
export default function GaleriPage() {
	return (
		<section className="w-full mx-auto min-h-screen  bg-gray-900 p-8">
			<div className="text-center mb-20">
				<h1 className="text-4xl font-bold text-white">Galeri Kegiatan Santri</h1>
				<p className="text-center text-lg mt-6 text-white dark:text-slate-300 lg:w-3/4 mx-auto">
					Galeri foto kegiatan santri Sekolah Developer Indonesia yang kami laksanakan untuk menunjang pembelajaran, penanaman nilai-nilai positif, dan softskill yang harus dimiliki
				</p>
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:px-6 mb-12">
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/outdoor .jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/sdi1.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/kelud.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/kodein1.jpeg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/english-tank.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/indoor.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/mark.jpeg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/jabatan1.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/paris.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/fotbar.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/farewell.jpg" alt="." width={500} height={500} />
				</div>
				<div>
					<Image className="h-full max-w-full rounded-lg hover:scale-95 transition-all duration-200" src="/img/sdi2.jpg" alt="." width={500} height={500} />
				</div>
			</div>
		</section>
	);
}
