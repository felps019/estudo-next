import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
// 	return NextResponse.json(
// 		{ message: "Use o método POST para login." },
// 		{ status: 405 },
// 	);
// }

export async function POST(request: NextRequest) {
	const body = (await request.json()) as { username: string; password: string };

	const response = await fetch("https://api.origamid.online/conta/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ username: body.username, password: body.password }),
	});

	if (!response.ok) {
		return NextResponse.json(
			{ autorizado: false, error: "Algo deu errado com seu login!" },
			{ status: 401 },
		);
	}
	const data = await response.json();
	cookies().set("token", data.token, {
		httpOnly: true,
		secure: true,
	});
	return NextResponse.json({ autorizado: true });
}
