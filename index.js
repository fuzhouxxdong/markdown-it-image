'use strict';


var myimage_rule = require('./lib/image');
var myimage_render = require('./lib/render');

module.exports = function img_plugin(md, options) {
    md.inline.ruler.before('image', 'myImage', myimage_rule);
    md.renderer.rules.myImage = myimage_render;
};
