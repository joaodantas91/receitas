import Link from 'next/link';
import { HeaderComponent } from './styles';

interface HeaderProps {}

export function Header({}: HeaderProps) {
	return (
		<HeaderComponent>
			<div className="container">
				<Link href="/">
					<a>Receitas</a>
				</Link>
				<nav>
					<Link href="/login">
						<a>login</a>
					</Link>
				</nav>
			</div>
		</HeaderComponent>
	);
}
