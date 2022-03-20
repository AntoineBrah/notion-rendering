import { textProcess } from "../text/text";
export var quoteProcess = function (data) {
    var blockquote = document.createElement('blockquote');
    blockquote.setAttribute('class', 'quote');
    return textProcess(data, blockquote);
};
