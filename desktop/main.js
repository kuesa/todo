//Electron requirements
const { app, BrowserWindow } = require('electron');

//make sure the main window doesnt just close
let mainWindow;

//create initial window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 640,
    'min-width': 260,
    titleBarStyle: 'hidden'
  });

  //mainWindow.loadFile('public/index.html');
  mainWindow.loadURL('http://localhost:3000'); // DEV MODE

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

//create window when ready
app.on('ready', createWindow);

//when closed, close, except for the mac people
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

//mac people opening programs in a silly way
app.on('activate', function() {
  if (mainWindow == null) {
    createWindow();
  }
});
