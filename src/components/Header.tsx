import { FC } from "react";
import styled from "styled-components";

import colors from "../styles/color-palette";

const HeaderContainer = styled.div`
	width: 100vw;
	height: 15vh;
	background-color: ${colors.medBlue};
`;

const HeaderText = styled.text`
	font-size: 3rem;
`;

export const Header: FC = () => {
	return (
		<>
			<HeaderContainer>
				<HeaderText>This is Header</HeaderText>
			</HeaderContainer>
		</>
	);
};
