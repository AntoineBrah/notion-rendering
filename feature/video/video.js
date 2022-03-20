import { textProcess } from "../text/text";
export var videoProcess = function (data) {
    var figure = document.createElement('figure');
    figure.style.position = 'relative';
    figure.style.paddingBottom = '56.26%';
    figure.style.height = '0';
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', data.video.external.url);
    iframe.setAttribute('allowfullscreen', 'true');
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    figure.appendChild(iframe);
    if (Array.isArray(data.video.caption) && data.video.caption.length !== 0) {
        var figCaption = textProcess(data, document.createElement('figcaption'));
        figure.appendChild(figCaption);
    }
    return figure;
};
