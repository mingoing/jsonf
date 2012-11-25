var jsonf = require('../')
var json = {
    encoding: 'utf-8',
    outputDirName: './',
    ignore: ['./_lilt.json'],
    min: {
        css: {
            outputName: '{name}-min.css'
        },
        js: {
            outputName: '{name}-min.js'
        },
        image: {
            outputName: '{name}{ext}',
            service: 'http://www.smushit.com/ysmush.it/ws.php'
        },
        uglifyjs: {},
        uglifycss: {}
    },
    check: {
        jshint: {}
    },
    build: {
        local_cache: {
            meta: './_lilt_meta.json',
            insertLilts: true
        }
    }
}

var data = JSON.stringify(json);
console.log(jsonf(data))
