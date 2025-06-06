"use client";

import { getCookie } from "@/actions/get-cookie";
import React from "react";

export default function Cookie() {
	const [token, setToken] = React.useState("");
	async function handleClick() {
		const token = await getCookie("token");
		if (token) setToken(token);
	}

	return (
		<div>
			<h2>Cookie: {token}</h2>
			<button type="button" onClick={handleClick}>
				Pegar cookie
			</button>
		</div>
	);
}
