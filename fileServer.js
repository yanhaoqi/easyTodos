/**
 * Created by yanhaoqi on 2017/12/28.
 */
var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html;charset=utf-8'
    })
    console.log('请求路由', url.parse(req.url).pathname)
    //    根目录解析test.html页面
    if(url.parse(req.url).pathname == '/') {
        fs.createReadStream('./test.html').pipe(res)
    //    下载图片
    } else if(url.parse(req.url).pathname == '/download') {
        res.writeHead(200,{'Content-Type':'image/png'})
        fs.createReadStream('./test.png').pipe(res)
    } else if(url.parse(req.url).pathname == '/test') {
        console.log('test-----')
        res.end('TEST=====')
    }
}).listen(12120, function() {
    console.log('server is listening ar 12120')
})