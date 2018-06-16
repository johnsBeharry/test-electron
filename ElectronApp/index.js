const {app, BrowserWindow} = require('electron');
const url = require('url');

function boot(){
    win = new BrowserWindow()
    win.loadURL('http://www.peakshift.com/?electron=true')
    win.setMenu(null);
    //win.openDevTools()
}

app.on('ready', boot);

var express = require('express')
var cors = require('cors')
var api = express()

api.use(cors())

api.get('/wallet', function (req, res, next) {
  res.json({address: '0x4kdsmfkidsmfdskfmsdkfmdskfsd'})
})

api.listen(1133, function () {
  console.log('CORS-enabled web server listening on port 80')
})