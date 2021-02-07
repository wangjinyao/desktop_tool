const { app, BrowserWindow } = require('electron')
const { Notification } = require('electron')
const { ipcMain } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  require('./common/menu'); //定义菜单栏


  win.loadFile('index.html')
  // win.setProgressBar(0.5)  //进度条
  win.once('focus', () => win.flashFrame(false))
  // win.flashFrame(true)

  ipcMain.on('msgToMain', (event, arg) => {
    console.log("helloworld")
  })
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
