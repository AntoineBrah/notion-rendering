import { textDecoration } from "../../utils/textDecoration";
export var textProcess = function (data, htmlElement, classProp) {
    var txtProp = '';
    switch (data.type) {
        case 'image':
        case 'video':
            txtProp = 'caption';
            break;
        default:
            txtProp = 'text';
            break;
    }
    var dataText = data[data.type][txtProp];
    for (var _i = 0, dataText_1 = dataText; _i < dataText_1.length; _i++) {
        var text = dataText_1[_i];
        var inlineTag = document.createElement('span');
        if (text.href) {
            inlineTag = document.createElement('a');
            inlineTag.setAttribute('href', text.href);
            inlineTag.setAttribute('title', text.href);
        }
        inlineTag.textContent = text.plain_text;
        textDecoration(text.annotations, inlineTag);
        htmlElement.appendChild(inlineTag);
    }
    return htmlElement;
};
