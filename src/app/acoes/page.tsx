export default async function AcoesPage() {
	const response = await fetch("https://api.origamid.online/acoes/lua", {
		next: {
			revalidate: 5, //valida o valor da api a cada 5 seg
		},
	});
	const acao = (await response.json()) as {
		atualizada: string;
		simbolo: string;
	};
	return (
		<main>
			<h1>Ações</h1>
			<p>{acao.atualizada}</p>
			<p>{acao.simbolo}</p>
		</main>
	);
}
