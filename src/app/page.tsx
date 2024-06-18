import Card from "./components/card";
import GaleriPage from "./components/carousel";
import Hero from "./components/hero";
import Jumbotron from "./components/jumbotron";
import News from "./components/news";
import Stats from "./components/statistic";
import Testimonial from "./components/testimonial";

export default function Home() {
	return (
		<main className="mt-16">
			{/* <Hero /> */}
			<Jumbotron />
			<News />
			<Stats />
			<Card />
			<Testimonial />
			<GaleriPage />
		</main>
	);
}
