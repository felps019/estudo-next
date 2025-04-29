//A forma abaixo pode ser usado para esconder chaves de api's

import { cookies } from "next/headers";
import { NextRequest } from "next/server";

// export async function GET() {
// 	const response = await fetch("https://api.origamid.online/vendas", {
// 		headers: {
// 			apikey: "ORIGAMID123456",
// 		},
// 	});
// 	const vendas = await response.json();
// 	return Response.json(vendas);
// }

export async function GET() {
	const response = await fetch("https://api.origamid.online/conta/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: "dog",
			password: "dog",
		}),
	});
	if (!response.ok) {
		return Response.json({ erro: "Erro na api" });
	}
	const data = await response.json();
	cookies().set("token", data.token, {
		//Na função set deve ser passado o nome e o valor, permite que seja inserido/setado um cookie.
		httpOnly: true, //torna o cookie inacessivel para api javascript(Document.cookie)
		secure: true, //só pode se comunicar com esse cookie via https
	});

	return Response.json(data);
}

export async function POST(request: NextRequest) {
	const param = request.nextUrl.searchParams.get("busca");
	const body = await request.json();
	return Response.json({ body });
}
