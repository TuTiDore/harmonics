function createWhiteKey(x, y) {
    return createSVGRect({x, y, width: 24, height: 168, fill: "white"});
}

function createBlackKey(x, y) {
    return createSVGRect({x, y, width: 14, height: 112, fill: "black"});
}

function createSVGRect(rectProps) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", rectProps.x);
    rect.setAttribute("y", rectProps.y);
    rect.setAttribute("width", rectProps.width);
    rect.setAttribute("height", rectProps.height);
    rect.setAttribute("fill", rectProps.fill);
    rect.setAttribute("stroke", "gray");
    return rect;
}

function generate() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    document.body.appendChild(svg);
    svg.setAttribute("height", "100%");
    svg.setAttribute("width", "100%");
    
    for (let i = 0; i < 88; i++) {
        for (let newKey of keysAtPosition(i))
            svg.appendChild(newKey);
    }
}

function keysAtPosition(i) {
    const x = 24 * Math.round(7 / 12 * i);
    switch (i % 12) {
        case 0:
            return [createWhiteKey(x, 0), ...(i > 0 ? [createBlackKey(x - 7, 0)] : [])];
        case 2:
            return [createWhiteKey(x, 0), createBlackKey(x - 5, 0)];
        case 3:
            return [createWhiteKey(x, 0)];
        case 5:
            return [createWhiteKey(x, 0), createBlackKey(x - 9, 0)];
        case 7:
            return [createWhiteKey(x, 0), createBlackKey(x - 5, 0)];
        case 8:
            return [createWhiteKey(x, 0)];
        case 10:
            return [createWhiteKey(x, 0), createBlackKey(x - 9, 0)];
        default:
            return []
    }
}