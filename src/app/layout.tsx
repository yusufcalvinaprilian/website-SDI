import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FloatingWhatsApp from "./components/floating";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "Sekolah Developer Indonesia",
// 	description: "Sekolah Developer Indonesia",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" href="/sdi.png" /> 
				<title>Sekolah Developer Indonesia</title>
				<meta name="description" content="Sekolah Developer Indonesia" />
			</head>
			<body className={inter.className}>
				<Navbar />
				{children}
				<FloatingWhatsApp />
				<Footer />
			</body>
		</html>
	);
}
