import { colorMapping, bgColorMapping } from "./color";
;
var annotationCssMaping = {
    bold: function (str) {
        return [
            {
                prop: 'fontWeight',
                value: 'bold',
                available: true
            }
        ];
    },
    code: function (str) {
        return [
            {
                prop: 'backgroundColor',
                value: 'rgba(135,131,120,0.15)',
                available: true
            },
            {
                prop: 'padding',
                value: '0.2em 0.4em',
                available: true
            },
            {
                prop: 'border-radius',
                value: '3px',
                available: true
            },
            {
                prop: 'color',
                value: '#EB5757',
                available: true
            }
        ];
    },
    color: function (str) {
        var c = str.indexOf('_background');
        if (c === -1) {
            return [
                {
                    prop: 'color',
                    value: colorMapping(str),
                    available: true
                }
            ];
        }
        return [
            {
                prop: 'backgroundColor',
                value: bgColorMapping(str.substring(0, c)),
                available: true
            }
        ];
    },
    italic: function (str) {
        return [
            {
                prop: 'fontStyle',
                value: 'italic',
                available: true
            }
        ];
    },
    strikethrough: function (str) {
        return [
            {
                prop: 'textDecoration',
                value: 'line-through',
                available: true
            }
        ];
    },
    underline: function (str) {
        return [
            {
                prop: 'textDecoration',
                value: 'underline',
                available: true
            }
        ];
    }
};
export var textDecoration = function (annotations, text) {
    var _loop_1 = function (key, value) {
        var css = annotationCssMaping[key](value);
        css.forEach(function (style) {
            if (style.available && value)
                text.style[style.prop] += ' ' + style.value;
        });
    };
    for (var _i = 0, _a = Object.entries(annotations); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return text;
};
