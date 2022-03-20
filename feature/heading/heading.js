import { textProcess } from "../text/text";
export var headingProcess = function (data) {
    switch (data.type) {
        case 'heading_1':
            var h1 = document.createElement('h1');
            return textProcess(data, h1);
        case 'heading_2':
            var h2 = document.createElement('h2');
            return textProcess(data, h2);
        case 'heading_3':
            var h3 = document.createElement('h3');
            return textProcess(data, h3);
        default:
            return new HTMLElement();
    }
};
