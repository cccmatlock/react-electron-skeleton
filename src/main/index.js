const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
		},
	});

	win.loadURL("http://localhost:3000");
}

try {
	require("electron-reloader")(module, {
		watchRenderer: true,
	});
} catch (error) {
	console.log(error);
}

app.whenReady().then(createWindow);
