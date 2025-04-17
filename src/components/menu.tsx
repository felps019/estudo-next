import Link from "next/link";

export default function Menu() {
	return (
		<ul className="menu">
			<li>
				{" "}
				<Link href="/">Home</Link>
			</li>
			<li>
				<Link href="/sobre" prefetch={true}>
					Sobre
				</Link>
			</li>
			<li>
				<Link href="/contato" prefetch={true}>
					Contato
				</Link>
			</li>
			<li>
				<Link href="/imc">IMC</Link>
			</li>
			<li>
				<Link href="/produtos">Produtos</Link>
			</li>
			<li>
				<Link href="/cursos">Cursos</Link>
			</li>
			<li>
				<Link href="/acoes">Ações</Link>
			</li>
		</ul>
	);
}
