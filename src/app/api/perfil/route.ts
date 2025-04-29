import { cookies } from "next/headers";

//Exemplo para mais de uma rota localhost:3000/api/perfil
export async function GET() {
	const token = cookies().get("token");
	const response = await fetch("https://api.origamid.online/conta/perfil", {
		method: "GET",
		headers: {
			Authorization: "Bearer " + token?.value, //Maneira para puxar um token
		},
	});
	const data = await response.json();

	return Response.json(data);
}
