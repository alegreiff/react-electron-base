import { app, BrowserWindow } from 'electron'
import path from 'path'
import { isDev } from './util.js';

type test = string;
app.on('ready', () => {
  const mainWindow = new BrowserWindow({});

  if (isDev()) {
    // SOLO EN DEV CARGA DESDE EL PROYECTO REACT
    mainWindow.loadURL('http://localhost:5123')

  } else {
    // EN PROD CARGA EL PROYECTO FINAL
    mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react/index.html'))
  }


})