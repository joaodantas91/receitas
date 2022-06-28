import styled from 'styled-components';

export const HeaderComponent = styled.header`
	height: 80px;
	border-bottom: 1px solid orange;

	.container {
		height: 100%;
		margin: 0 auto;
		padding: 0 16px;
		max-width: 1080px;

		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
