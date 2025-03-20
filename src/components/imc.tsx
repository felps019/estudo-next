"use client";
import React from "react";

export default function Imc() {
	const [altura, setAltura] = React.useState("");
	const [peso, setPeso] = React.useState("");
	const [calculo, setCalculo] = React.useState("");

	function calculoImc(event: React.FormEvent) {
		event.preventDefault();
		const alturaMetro = Number(altura) / 100;
		const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
		setCalculo(total);
	}

	return (
		<form onSubmit={calculoImc}>
			<label htmlFor="altura">Altura</label>
			<input
				type="number"
				id="altura"
				name="Altura"
				value={altura}
				onChange={(e) => setAltura(e.target.value)}
			/>

			<label htmlFor="altura">Peso</label>
			<input
				type="number"
				id="peso"
				name="Peso"
				value={peso}
				onChange={(e) => setPeso(e.target.value)}
			/>

			<button type="submit">Calcular</button>
			<p>IMC: {calculo}</p>
		</form>
	);
}
