const { Menu, dialog } = require('electron');
const pjson = require('../package.json');
let menuTemplate = [{
  label: '设置',
  submenu: [
    { label: '快捷键设置' },
    { label: '系统设置' }
  ]
},
{
  label: '帮助',
  submenu: [{
    label: '关于',
    click: about
  }]
},
];

function about() {
  msg = ""
  msg += '版本: ' + pjson.version
  msg += '\rChrome: ' + process.versions.chrome
  msg += '\rElectron: ' + process.versions.electron
  msg += '\rNode: ' + process.versions.node
  msg += '\rV8: ' + process.versions.v8
  dialog.showMessageBox({
    message: msg,
  }).then(result => {
    console.log(result)
  })
}


const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);