import { BrowserWindow } from 'electron';
import { logger } from './logging/logger';

export default class Main {
    static mainWindow?: BrowserWindow | null;
    static application: Electron.App;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            Main.application.quit();
        }
    }

    private static onClose() {
        // Dereference the window object. 
        Main.mainWindow = null;
    }

    private static createWindow() {
        Main.mainWindow = new BrowserWindow({ width: 800, height: 600 });
        Main.mainWindow.loadURL('file://' + __dirname + '/pages/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    }

    private static onReady() {
        this.createWindow();
        
        Main.application.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                logger.info("reactivating window...");
                this.createWindow();
            }
        });
    }

    static main(app: Electron.App) {
        Main.application = app;
        Main.application.on('window-all-closed', () => Main.onWindowAllClosed());
        Main.application.on('ready', () => Main.onReady());
    }
}