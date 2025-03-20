// import Acesso from "@/components/acesso";
import ServerFetch from "@/components/serverFetch";

export default async function HomePage() {
	return (
		<main>
			<h1>Home</h1>
			{/* <Acesso /> */}
			<ServerFetch />
		</main>
	);
}
