import { FC } from "react";
import styled from "styled-components";

import { Header } from "./components/Header";

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const App: FC = () => {
	return (
		<AppContainer>
			<Header />
		</AppContainer>
	);
};

export default App;
