import Card from "./components/card";
import Hero from "./components/hero";
import News from "./components/news";
import Stats from "./components/statistic";
import Testimonial from "./components/testimonial";

export default function Home() {
	return (
		<main className="mt-16">
			<Hero />
			<News />
			<Stats />
			<Card />
			<Testimonial />
		</main>
	);
}
