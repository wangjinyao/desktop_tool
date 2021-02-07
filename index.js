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

  require('./main/menu'); //定义菜单栏
  require('./main/main-functions')

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})