import { render, screen, within } from "@testing-library/react";
import React from "react";

import { Header } from "./Header";
import App from "../App";

describe("header tests", () => {
	it("says stuff", () => {
		render(<App />);

		expect(screen.getByRole("heading", { name: "Welcome to react-electron-skeleton!!!" })).toBeTruthy();
	});
});
