jsonf
=====

A json formatter, inspired by [jsonlint](http://jsonlint.com/)

Install :
=====

    npm install jsonf

Example :
=====

    var jsonf = require('jsonf');
    var data = '{"encoding": "utf-8", "outputDirName": "./", "ignore": [ "./_lilt.json" ]}'
    jsonf(data);

output:

    {
        "encoding": "utf-8",
        "outputDirName": "./",
        "ignore": [
             "./_lilt.json"
         ]
    }


MIT License
=====

