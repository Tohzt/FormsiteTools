/*
 * Author: Tohzt
 * Description: This is a development tool for generating FormSite data
 */

const { app, BrowserWindow, Menu } = require('electron');

// Main Process
const path = require('path')
const url = require('url')
let win 

function createWindow() {
	win = new BrowserWindow(
		{
			width :600,
			height:700,
			useContentSize: true,
			webPreferences: {
				nodeIntegration: true,
				contextIsolation: false,
			}
		})
	win.loadURL(url.format({
		pathname:path.join(__dirname,'./html/home.html'),
		protocol: 'file',
		slashes: true
	}))

	win.on('close', () => {
		win = null
	})

	//win.openDevTools()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	//if (process.platform !== 'darwin'){
	app.quit()
	//}
})

app.on('activate', () => {
	if (win == null) {
		createWindow()
	}
})
