type Produto = {
	id: number;
	nome: string;
};

//O fetch no server side guarda as informações em cache
//Isso pode fazer com que novas informações nao sejam carregadas
export default async function ServerFetch() {
	const response = await fetch("https://api.origamid.online/produtos");
	const data = (await response.json()) as Produto[]; //O log da api aparece no terminal, pois é renderizado no servidor
	return (
		//Carrega os dados no servidor e já fica pré renderizado para ser exibido no browser
		<ul>
			{data.map((produto) => (
				<li key={produto.id}>{produto.nome}</li>
			))}
		</ul>
	);
}
