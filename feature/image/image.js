import { textProcess } from "../text/text";
export var imageProcess = function (data) {
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    img.setAttribute('src', data.image.external.url);
    img.style.maxWidth = '100%';
    figure.appendChild(img);
    if (Array.isArray(data.image.caption) && data.image.caption.length !== 0) {
        var figCaption = textProcess(data, document.createElement('figcaption'));
        figure.appendChild(figCaption);
    }
    return figure;
};
