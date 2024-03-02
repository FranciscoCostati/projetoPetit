const { app, BrowserWindow } = require('electron');
console.log("linha 2 main.js")
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1600,
    height: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })
  console.log("linha 12 main.js")
  win.loadFile('src/views/index.html');  
}
console.log("linha 15 main.js")
app.whenReady().then(() => {
  createWindow();
})
console.log("linha 19 main.js")
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
