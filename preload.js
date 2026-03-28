const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('dev', {
    name: () => 'Kerel DEvE',
    age: () => 28,
    job: () => 'Software Engineer',
})

contextBridge.exposeInMainWorld('api', {
    ping: () => ipcRenderer.invoke('ping')
})