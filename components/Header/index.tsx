import { HeaderComponent } from './styles';

interface HeaderProps {}

export function Header({}: HeaderProps) {
	return (
		<HeaderComponent>
			<div className="container">
				Nome
				<nav>
					<a href="/login">login</a>
				</nav>
			</div>
		</HeaderComponent>
	);
}
