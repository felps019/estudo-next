"use client";

import React from "react";

type Produto = {
	id: number;
	nome: string;
};

//Não guarda as informações em cache
//Entao se atualizar uma nova informacao na api sera carregada automaticamente
export default function ClientFetch() {
	const [data, setData] = React.useState<Produto[]>([]);
	//Carrega a api no client(browser)
	//Tempo de requisicao/carregamento mais lento
	//Depende do js do browser para os dados serem exibidos pro cliente
	React.useEffect(() => {
		async function fetchData() {
			const response = await fetch("https://api.origamid.online/produtos");
			const json = (await response.json()) as Produto[];
			setData(json);
		}
		fetchData();
	}, []);

	return (
		<ul>
			{data.map((produto) => (
				<li key={produto.id}>{produto.nome}</li>
			))}
		</ul>
	);
}
