import dynamic from "next/dynamic";

const Width = dynamic(() => import("@/components/width"), { ssr: false });

export default function SobrePage() {
	return (
		<main>
			<h2>Sobre</h2>
			<Width />
		</main>
	);
}
