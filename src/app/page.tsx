import Cookie from "@/components/cookie";
import { Login } from "@/components/login";

export default async function HomePage() {
	return (
		<main>
			<h1>Home</h1>
			<Cookie />
			<Login />
		</main>
	);
}
