'use strict';

var path = require('path');
var markdownit = require('markdown-it');
var generate = require('markdown-it-testgen');

var img = require('../index');

describe('markdown-it-image', function () {
    var md = markdownit().use(img);
    generate(path.join(__dirname, 'fixtures/full.txt'), {header: true}, md);
});
