const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const fs = require('fs');

// Función para obtener la URL base desde config.json
function getBaseUrl() {
  const configPath = path.join(__dirname, 'config.json');
  try {
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      return config.BASE_URL || 'https://bicicletero.test';
    }
  } catch (error) {
    console.log('Error leyendo config.json:', error.message);
  }
  
  // Valor por defecto si no existe config.json
  return 'https://bicicletero.test';
}

const BASE_URL = getBaseUrl();

function createWindow() {
  // Selecciona el icono según la plataforma
  const iconName =
    process.platform === 'win32' ? 'icon.ico' :
    process.platform === 'darwin' ? 'icon.icns' :
    'icon_512.png';  // PNG recomendado para Linux/u otros

  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    autoHideMenuBar: true,    // oculta la barra de menú
    menuBarVisible: false,    // asegura que no se muestre
    icon: path.join(__dirname, 'assets', iconName),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // En macOS, fija el icono en el Dock
  if (process.platform === 'darwin') {
    app.dock.setIcon(path.join(__dirname, 'assets', 'icon.icns'));
  }

  // Carga la URL inicial
  win.loadURL(`${BASE_URL}/bici/device/login`);

  // Permite navegación interna solo bajo /bici/ en el dominio
  win.webContents.on('will-navigate', (event, targetUrl) => {
    const parsed = new URL(targetUrl);
    if (parsed.host === new URL(BASE_URL).host && parsed.pathname.startsWith('/bici/')) {
      // navegación permitida
    } else {
      event.preventDefault();
      shell.openExternal(targetUrl);
    }
  });

  // Controla enlaces target="_blank" o window.open()
  win.webContents.setWindowOpenHandler(({ url: newUrl }) => {
    const parsed = new URL(newUrl);
    if (parsed.host === new URL(BASE_URL).host && parsed.pathname.startsWith('/bici/')) {
      return { action: 'allow' };
    }
    shell.openExternal(newUrl);
    return { action: 'deny' };
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});