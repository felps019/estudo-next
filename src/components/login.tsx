"use client";

// import { cookies } from "next/headers";

// export async function GET() {
// 	const token = cookies().get("token");
// 	const response = await fetch("https://api.origamid.online/conta/perfil", {
// 		method: "GET",
// 		headers: {
// 			Authorization: "Bearer " + token?.value,
// 		},
// 	});
// 	const data = await response.json();
// 	return Response.json(data);
// }

export function Login() {
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const username = event.currentTarget.username.value;
		const password = event.currentTarget.password.value;
		const response = await fetch("api/login", {
			method: "POST",
			headers: {
				"Context-Type": "application/json",
			},
			body: JSON.stringify({ username, password }),
		});
		if (response.ok) window.location.href = "/";
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username">Usuário</label>
			<input id="username" type="text" name="Username" />
			<label htmlFor="password">Senha</label>
			<input id="password" type="password" name="Password" />
			<button type="submit">Enviar</button>
		</form>
	);
}
