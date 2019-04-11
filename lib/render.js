'use strict';

const jsdom = require("jsdom");
const dom = new jsdom.JSDOM(`<!DOCTYPE html>`);
const $ = require("jquery")(dom.window);

module.exports = function image_render(tokens, idx) {
    let content = tokens[idx].content;
    var  token = tokens[idx],
        aIndex = token.attrIndex('src');
    let url = token.attrs[aIndex][1];
    let image_data = ''
    $.ajaxSettings.async = false;
    $.get(url, function(result){
        image_data = result;
    });
    return `<img src="${image_data}" alt="${content}">`;
}
