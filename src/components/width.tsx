"use client";

import React from "react";

export default function Width() {
	const [width, setWidth] = React.useState(
		document.documentElement.clientWidth,
	);

	React.useEffect(() => {
		//funcao que verifica o tamanho da largura da tela
		const handleResize = () => {
			setWidth(document.documentElement.clientWidth);
		};
		handleResize();
		//atualiza sempre que mudar o resize
		window.addEventListener("resize", handleResize);
		//limpa o valor para que possa ser atualizado
		return () => window.removeEventListener("resize", handleResize);
	});

	const [ativo, setAtivo] = React.useState(false);

	return (
		<div>
			<h2 style={{ color: ativo ? "#680" : "#b00" }}>
				Largura da tela: {width}
			</h2>
			<button type="button" onClick={() => setAtivo((b) => !b)}>
				Ativar
			</button>
		</div>
	);
}
