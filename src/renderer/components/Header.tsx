import { FC } from "react";
import styled from "styled-components";

import colors from "../styles/color-palette";

const HeaderContainer = styled.h2`
	width: 100vw;
	height: 15vh;
	background-color: ${colors.medBlue};
	font-size: 3rem;
`;

export const Header: FC = () => {
	return <HeaderContainer>Welcome to react-electron-skeleton!!!</HeaderContainer>;
};
