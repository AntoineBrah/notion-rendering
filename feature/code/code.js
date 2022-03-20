import { textProcess } from "../text/text";
export var codeProcess = function (data) {
    var pre = document.createElement('pre');
    pre.setAttribute('class', 'code');
    var code = document.createElement('code');
    pre.appendChild(textProcess(data, code));
    return pre;
};
