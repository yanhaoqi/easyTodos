/**
 * Created by yanhaoqi on 2017/12/28.
 */
var http = require('http')
var item = ''
var items = []

http.createServer(function(req, res) {
    res.writeHead('200', {'Content-Type': 'text/html;charset=utf-8'})
    //新增一个待办项
    if (req.method == 'POST') {
        req.setEncoding('utf-8')
        req.on('data', function(chunk) {
            item += chunk
        })
        req.on('end', function() {
            console.log('post来的内容', item)
            items.push(item)
            item = ''
            res.end('<h1>服务器已接收到发送的内容</h1>')
        })
    //获取所有的待办事项
    }else if (req.method == 'GET') {
        var itemsStr = items.join('--')
        res.writeHead('200', {
            'Content-Length': Buffer.byteLength(itemsStr),
            'Content-Type': 'text/html;charset=utf-8'
        })
        res.end(itemsStr)
    //删除待办事项    懒得写了
    }else if (req.method == 'DELETE') {

    }
}).listen('30130', function() {
    console.log('todos server starting')
})
