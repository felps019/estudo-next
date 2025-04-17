import Link from "next/link";
import { getCursos } from "./api/cursos";

// export const dynamic = "force-dynamic"; //força que essa página seja dinamica

export default async function CursosPage() {
	const cursos = await getCursos();
	return (
		<main>
			<h1>Cursos</h1>
			<ul>
				{cursos.map((curso) => (
					<li key={curso.id}>
						<Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
