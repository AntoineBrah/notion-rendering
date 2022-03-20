import { textProcess } from "./feature/text/text";
import { headingProcess } from "./feature/heading/heading";
import { quoteProcess } from "./feature/quote/quote";
import { codeProcess } from "./feature/code/code";
import { imageProcess } from "./feature/image/image";
import { videoProcess } from "./feature/video/video";
export var buildHtml = function (rootTag, notionData) {
    for (var _i = 0, _a = notionData.results; _i < _a.length; _i++) {
        var data = _a[_i];
        var htmlElement = null;
        switch (true) {
            case new RegExp('^heading').test(data.type):
                htmlElement = headingProcess(data);
                break;
            case new RegExp('^paragraph$').test(data.type):
                htmlElement = textProcess(data, document.createElement('p'));
                break;
            case new RegExp('^code$').test(data.type):
                htmlElement = codeProcess(data);
                break;
            case new RegExp('^quote$').test(data.type):
                htmlElement = quoteProcess(data);
                break;
            case new RegExp('^image$').test(data.type):
                htmlElement = imageProcess(data);
                break;
            case new RegExp('^video$').test(data.type):
                htmlElement = videoProcess(data);
                break;
            default:
                console.log('unsupported type');
                break;
        }
        if (htmlElement)
            rootTag.appendChild(htmlElement);
    }
    return rootTag;
};
