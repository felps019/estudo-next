"use server";

import { cookies } from "next/headers";

// export async function setCookie(key: string, value: string) {
// 	cookies().set(key, value, {
// 		httpOnly: true,
// 		secure: true,
// 	});
// 	return { funcionou: true, value };
// }

export async function setCookieLogin(username: string, password: string) {
	cookies().set(username, password, {
		httpOnly: true,
		secure: true,
	});
	return { username, password };
}
