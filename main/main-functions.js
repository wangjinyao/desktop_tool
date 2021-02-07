const { ipcMain } = require('electron')

ipcMain.on('msgToMain', (event, arg) => {
    console.log("helloworld")
})