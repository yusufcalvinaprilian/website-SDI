import React from "react";
import Image from "next/image";
export default function PortofolioPage() {
	return (
		<section className="w-full mx-auto min-h-screen mt-16 bg-gray-900 p-8">
			<div className="py-8 px-4 mx-auto max-w-screen-xl">
				<div className="mx-auto mb-20">
					<h1 className="text-center font-bold text-4xl text-white">Portofolio Karya Santri</h1>
					<p className="text-center text-lg mt-6 text-white w-3/4 mx-auto">
						Portofolio ini adalah bukti nyata dari ketekunan dan kerja keras para santri kami, yang telah berhasil menciptakan proyek-proyek inovatif dengan memanfaatkan pengetahuan yang diperoleh di Sekolah Developer Indonesia
					</p>
				</div>

				<div>
					<h2 className="text-center font-medium text-3xl text-white lg:text-left">Programming Showcase</h2>
				</div>
				<div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
					<div className=" rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden bg-slate-100">
						<Image className="h-56 lg:h-60 w-full  border" src="/portfol3.png" alt="portfolio" fetchPriority="high" width={500} height={500} />
						<div className="p-3">
							<h3 className=" text-md leading-6 text-gray-700 my-2">Our first weekly assignment was a simple form that had to be made with a simple HTML that followed HTML semantic.</h3>
							<p className="paragraph-normal text-blue-600">
								<a href="https://barraihsan.kodeintekno.com/week-1/" target="_blank">
									weekly assignment 1
								</a>
							</p>
						</div>
					</div>
					<div className="bg-slate-100 rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
						<Image className="h-56 lg:h-60 w-full border" src="/portfol2.png" alt="portfolio" fetchPriority="high" width={500} height={500} />
						<div className="p-3">
							<h3 className=" text-md leading-6 text-gray-700 my-2">Look, flexbox was here! In this assignment, we had to make a landing page for a product, in this case a Truck businesses.</h3>
							<p className="paragraph-normal text-blue-600">
								<a href="https://barraihsan.kodeintekno.com/week-3/" target="_blank">
									weekly assignment 2
								</a>
							</p>
						</div>
					</div>
					<div className="bg-slate-100 rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
						<Image className="h-56 lg:h-60 w-full  border" src="/portfol1.png" alt="portfolio" fetchPriority="high" width={500} height={500} />
						<div className="p-3">
							<h3 className=" text-md leading-6 text-gray-700 my-2">Is it time to ditch writing manual CSS? Of course not! With bootstrap, were able to make website faster than before!</h3>
							<p className="paragraph-normal text-blue-600">
								<a href="https://barraihsan.kodeintekno.com/week-4/" target="_blank">
									weekly assignment 3
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* Multimedia Showcase */}
				<div>
					<h2 className="text-center font-medium text-3xl text-white lg:text-left">Multimedia Showcase</h2>
				</div>
				<div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
					<div className=" rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden bg-slate-200">
						<Image className=" lg:h-auto w-full  border" src="/multim1.png" alt="portfolio" fetchPriority="high" width={500} height={500} />
						<div className="p-3">
							<h3 className=" text-md leading-6 text-gray-700 my-2">
								A poster about many kind of renewable resources, and explain about them a bit. Submitted it to a competition too, as you can see. But a competition is about winning and losing, isnt it? Sadly, I didnt win in this competition
							</h3>
							<p className="paragraph-normal text-blue-600">
								<a href="https://barraihsan.kodeintekno.com/multimedia/" target="_blank">
									Renewable Energy
								</a>
							</p>
						</div>
					</div>
					<div className="bg-slate-200 rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
						<Image className=" lg:h-auto w-full  border" src="/multim2.png" alt="portfolio" fetchPriority="high" width={500} height={500} />
						<div className="p-3">
							<h3 className=" text-md leading-6 text-gray-700 my-2">A Dakwah poster that told us how to post dakwah in social media. Submitted it to a competition, but sadly it was canceled. Totally not upset about it</h3>
							<p className="paragraph-normal text-blue-600">
								<a href="https://barraihsan.kodeintekno.com/multimedia/" target="_blank">
									Sosial Media Dakwah
								</a>
							</p>
						</div>
					</div>
					<div className="bg-slate-200 rounded-lg border shadow-md max-w-xs md:max-w-none overflow-hidden">
						<Image className=" lg:h-auto w-full  border" src="/multim3.png" alt="portfolio" fetchPriority="high" width={500} height={500} />
						<div className="p-3">
							<h3 className=" text-md leading-6 text-gray-700 my-2">A Vespa™ poster created using Adobe Photoshop, serving as a practical exercise for honing our design skills</h3>
							<p className="paragraph-normal text-blue-600">
								<a href="https://barraihsan.kodeintekno.com/multimedia/" target="_blank">
									Vespa Poster
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
