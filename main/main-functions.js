const { BrowserWindow } = require('electron');
const ipc = require('electron').ipcMain

ipc.on('msgToMain', (event, arg) => {
  console.log("helloworld")
})

ipc.on('newWindow', (event, arg) => {
  win = BrowserWindow.getFocusedWindow()
  win.loadFile('./views/other.html')
})
