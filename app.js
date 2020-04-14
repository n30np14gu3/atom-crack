const path = require('path');
const url = require('url');
const {app, BrowserWindow} = require('electron');

let win;

function createWindow(){
    win = new BrowserWindow({
        resizable: false,
        maximizable: false,
        width: 750,
        height: 200,
        icon: __dirname + '/icon.png',
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    win.setMenu(null);
    
    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    app.quit();
});
