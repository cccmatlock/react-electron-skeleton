import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import GlobalStyles from "./styles/Global";

const Root: React.FC = () => (
	<React.Fragment>
		<GlobalStyles />
		<App />
	</React.Fragment>
);

ReactDOM.render(<Root />, document.getElementById("root"));
