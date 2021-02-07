const { Menu, dialog } = require('electron');
const {BrowserWindow} = require('electron');
const pjson = require('../package.json');
let menuTemplate = [
  {
    label: '设置',
    submenu: [
      { label: '快捷键设置' },
      { label: '系统设置' }
    ]
  },
  {
    label: '调试',
    submenu: [{
      label: 'devtools',
      click: openDevTools
    },
    {
      label: 'windows_list',
      click: getAllWindows
    }
  ]
  },
  {
    label: '帮助',
    submenu: [{
      label: '关于',
      click: getAboutInfo
    }]
  },
];

function getAllWindows(){
  //获取窗口列表
  wins = BrowserWindow.getAllWindows()
  console.log(wins)
}

function openDevTools() {
  //打开开发者工具
  win = BrowserWindow.getFocusedWindow()
  win.webContents.openDevTools()
}

function getAboutInfo() {
  msg = ""
  msg += '版本: ' + pjson.version
  msg += '\rChrome: ' + process.versions.chrome
  msg += '\rElectron: ' + process.versions.electron
  msg += '\rNode: ' + process.versions.node
  msg += '\rV8: ' + process.versions.v8
  msg += '\rplatform: ' + process.platform + '(' + process.arch +')'
  dialog.showMessageBox({
    message: msg,
  }).then(result => {
    console.log(result)
  })
}



const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);