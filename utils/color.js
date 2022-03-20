export var colorMapping = function (color) {
    switch (color) {
        case 'gray':
            return 'rgba(120, 119, 116, 1)';
        case 'brown':
            return 'rgba(159, 107, 83, 1)';
        case 'orange':
            return 'rgba(217, 115, 13, 1)';
        case 'yellow':
            return 'rgba(203, 145, 47, 1)';
        case 'green':
            return 'rgba(68, 131, 97, 1)';
        case 'blue':
            return 'rgba(51, 126, 169, 1)';
        case 'purple':
            return 'rgba(144, 101, 176, 1)';
        case 'pink':
            return 'rgba(193, 76, 138, 1)';
        case 'red':
            return 'rgba(212, 76, 71, 1)';
        default:
            return 'inherit';
    }
};
export var bgColorMapping = function (color) {
    switch (color) {
        case 'gray':
            return 'rgba(241, 241, 239, 1)';
        case 'brown':
            return 'rgba(244, 238, 238, 1)';
        case 'orange':
            return 'rgba(251, 236, 221, 1)';
        case 'yellow':
            return 'rgba(251, 243, 219, 1)';
        case 'green':
            return 'rgba(237, 243, 236, 1)';
        case 'blue':
            return 'rgba(231, 243, 248, 1)';
        case 'purple':
            return 'rgba(244, 240, 247, 0.8)';
        case 'pink':
            return 'rgba(249, 238, 243, 0.8)';
        case 'red':
            return 'rgba(253, 235, 236, 1)';
        default:
            return 'inherit';
    }
};
