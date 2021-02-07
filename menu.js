const { Menu } = require('electron');
let menuTemplate = [{
  label: '设置',
  submenu: [
    { label: '快捷键设置' },
    { label: '系统设置' }
  ]
},
{
  label: '关于',
  submenu: [{
    label: '关于Electron',
    click: () => {
      dialog.showMessageBox({
        message: '当前版本：' + pjson.version,
      }).then(result => {
        console.log(result)
      })
    }
  },
  { label: '关于Node' }
  ]
},
];

const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);