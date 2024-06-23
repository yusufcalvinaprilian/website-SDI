"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="fixed top-0 left-0 w-full px-4 bg-transparent z-50 bg-gray-800">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<div className="flex items-center space-x-3 rtl:space-x-reverse">
					<Image src="/sdi.png" alt="Brand Logo" width={50} height={50} className="h-8 w-14" />
				</div>
				<button
					onClick={toggleMenu}
					type="button"
					className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
					aria-controls="navbar-default"
					aria-expanded={isOpen ? "true" : "false"}
				>
					<span className="sr-only">Open main menu</span>
					<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
					</svg>
				</button>
				<div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-default">
					<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-gray-800 md:bg-gray-800 border-gray-700">
						<li>
							<a
								href="/"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
								aria-current="page"
							>
								Beranda
							</a>
						</li>
						<li>
							<a
								href="/portofolio"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Portofolio
							</a>
						</li>
						<li>
							<a
								href="/program"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Program
							</a>
						</li>
						<li>
							<a
								href="/tentang"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Tentang
							</a>
						</li>
						<li>
							<a
								href="/kontak"
								className="block py-2 px-3  rounded md:border-0 md:p-0 text-white md:hover:text-blue-600 hover:bg-gray-700  md:hover:bg-transparent hover:underline hover:underline-offset-8 transition duration-300 ease-in-out"
							>
								Kontak
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
