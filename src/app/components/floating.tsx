import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const FloatingWhatsApp: React.FC = () => {
	return (
		<a href="https://wa.me/6281393242056" className="fixed bottom-4 right-4 z-50" target="_blank" rel="noopener noreferrer">
			<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-200 animate-bounce">
				<span className="text-white text-4xl">
					<i className="fa-brands fa-whatsapp"></i>
				</span>
			</div>
		</a>
	);
};

export default FloatingWhatsApp;
