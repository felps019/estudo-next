//basicamente a rota dinâmica permite que caso seja adicionado qualquer valor na url, essa pagina é acessada
//Ex: localhost:3000/produtos/tricolor
//esse valor adicionado na url fica dentro dos parametros
//retorna esses parametros - { params: { id: 'tricolor' }, searchParams: {} }

type PageParams = {
	params: {
		id: string;
	};
};

type Produto = {
	id: number;
	nome: string;
	preco: number;
	descricao: string;
	estoque: number;
	importado: number;
};

export default async function ProdutoPage({ params }: PageParams) {
	const response = await fetch(
		`https://api.origamid.online/produtos/${params.id}`,
	);
	const data = (await response.json()) as Produto;

	return (
		<main>
			<h1>{data.nome}</h1>
			<h2>{data.preco}</h2>
			<p>{data.descricao}</p>
			<p>{data.estoque}</p>
		</main>
	);
}
