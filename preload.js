const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('dev', {
    name: () => 'Kerel Khalif Afif',
    age: () => 28,
    job: () => 'Software Engineer',
})

contextBridge.exposeInMainWorld('api', {
    ping: () => ipcRenderer.invoke('ping')
})