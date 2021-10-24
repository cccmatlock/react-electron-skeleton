import { FC } from "react";

import { Header } from "./components/Header";

const App: FC = () => {
	return (
		<div>
			<Header />
			<section>First Section</section>
			<h2>Check it out</h2>
		</div>
	);
};

export default App;
