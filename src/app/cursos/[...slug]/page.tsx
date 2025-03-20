//Uma outra forma de ter rotas dinâmicas é utilizando o [...parametro]
//Dessa forma permite que a página tenha mais que uma rota
//Exemplo:localhost:3000/cursos/aula/introducao-react

type PageParams = {
	params: {
		slug: string[];
	};
};

export default async function CursosPage({ params }: PageParams) {
	console.log(params);
	return (
		<main>
			<h1>Cursos</h1>
		</main>
	);
}
