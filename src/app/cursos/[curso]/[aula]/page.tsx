import Link from "next/link";
import { getAulas } from "../../api/cursos";

type PageParams = {
	params: {
		curso: string;
		aula: string;
	};
};

export default async function AulaPage({ params }: PageParams) {
	const aula = await getAulas(params.curso, params.aula);
	return (
		<main>
			<Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
			<h1>Aula: {aula.nome}</h1>
			<p>{aula.descricao}</p>
			<p>Tempo: {aula.tempo}</p>
		</main>
	);
}
