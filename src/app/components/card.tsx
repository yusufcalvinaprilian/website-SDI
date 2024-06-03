export default function Card() {
	return (
		<section id="features" className="w-full mx-auto px-4 space-y-6 dark:bg-gray-900 py-8 md:py-12 lg:py-20">
			<div className="py-8 px-4 mx-auto max-w-screen-xl">
				<div className="mx-auto text-white flex pb-10 max-w-[58rem] flex-col items-center space-y-4 text-center">
					<h2 className="font-bold pb-5 text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Karakter Dasar</h2>

					<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
						Kami membimbing siswa untuk menjadi individu mandiri yang siap mengambil inisiatif, bertanggung jawab dalam setiap tindakan, dan peduli terhadap sesama serta lingkungan. Dengan nilai-nilai ini, kami mencetak generasi yang tidak
						hanya cerdas dalam teknologi, tetapi juga berakhlak mulia.
					</p>
				</div>
				<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 sm:p-10">
					<div className="relative overflow-hidden rounded-lg  bg-white select-none p-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-slate-300 hover:bg-blue-600 group">
						<div className="flex flex-col justify-between rounded-md p-6 hover:bg-blue-500 group">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit" className="size-6 mx-auto group-hover:fill-white">
								<path
									fillRule="evenodd"
									d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
									clipRule="evenodd"
								/>
							</svg>

							<div className="space-y-2 ">
								<h3 className="font-bold text-center group-hover:text-white">Mandiri</h3>
								<p className="text-sm group-hover:text-white">
									Di era digital ini, kemampuan di bidang Teknologi menjadi salah satu keahlian yang sangat bernilai. Siswa-siswa jago IT yang mandiri memiliki kemampuan untuk memecahkan masalah, berinovasi, dan beradaptasi dengan cepat
									terhadap perkembangan teknologi untuk menjadi garda terdepan dalam dunia yang semakin canggih.
								</p>
							</div>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-lg bg-white select-none p-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300 hover:bg-blue-600 group">
						<div className="flex flex-col justify-between rounded-md p-6 hover:bg-blue-500 group">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit" className="h-6 w-6 mx-auto group-hover:fill-white">
								{" "}
								<path
									fillRule="evenodd"
									d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
									clipRule="evenodd"
								/>
							</svg>

							<div className="space-y-2">
								<h3 className="font-bold text-center group-hover:text-white">Bertanggung jawab</h3>
								<p className="text-sm group-hover:text-white">
									Siswa jago IT yang bertanggung jawab memiliki peran penting dalam membangun dunia digital dengan menguasai teknologi dan memahami etika serta dampak sosial. Kami mendorong pengembangan keterampilan IT sambil menjunjung
									tinggi tanggung jawab, keamanan, dan integritas.
								</p>
							</div>
						</div>
					</div>

					<div className="relative overflow-hidden rounded-lg bg-white select-none p-2 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-300 hover:bg-blue-600 group">
						<div className="flex flex-col justify-between rounded-md p-6 hover:bg-blue-500 group">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="inherit" className="h-6 w-6 mx-auto group-hover:fill-white">
								{" "}
								<path
									fillRule="evenodd"
									d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
									clipRule="evenodd"
								/>
								<path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
							</svg>

							<div className="space-y-2">
								<h3 className="font-bold text-center group-hover:text-white">Peduli</h3>
								<p className="text-sm group-hover:text-white">
									Siswa jago IT yang peduli berperan penting dalam menciptakan dunia digital yang inklusif dan berempati. Mereka menampilkan kisah inspiratif penggunaan keterampilan teknologi untuk membantu orang lain dan meningkatkan
									kualitas hidup, menjembatani kesenjangan dan membawa perubahan positif.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
