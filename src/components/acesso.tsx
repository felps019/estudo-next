import fs from "fs/promises";

export default async function Acesso() {
	await fs.appendFile("acesso.txt", `${Date.now()} `, "utf8"); //adiciona um timestamp sempre que for executado no serverside
	const data = fs.readFile("acesso.txt", "utf8");
	return <div>{data}</div>;
}
