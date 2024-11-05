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
    svg.setAttribute("height", "100%");
    svg.setAttribute("width", "100%");
    
    for (let i = 0; i < 88; i++) {
        let x = 24 * Math.round(7 / 12 * i);
        switch (i % 12) {
            case 0:
                svg.appendChild(createWhiteKey(x, 0));
                if (i > 0) {
                    svg.appendChild(createBlackKey(x - 7, 0));
                }
                break;
            case 2:
                svg.appendChild(createWhiteKey(x, 0));
                svg.appendChild(createBlackKey(x - 5, 0));
                break;
            case 3:
                svg.appendChild(createWhiteKey(x, 0));
                break;
            case 5:
                svg.appendChild(createWhiteKey(x, 0));
                svg.appendChild(createBlackKey(x - 9, 0));
                break;
            case 7:
                svg.appendChild(createWhiteKey(x, 0));
                svg.appendChild(createBlackKey(x - 5, 0));
                break;
            case 8:
                svg.appendChild(createWhiteKey(x, 0));
                break;
            case 10:
                svg.appendChild(createWhiteKey(x, 0));
                svg.appendChild(createBlackKey(x - 9, 0));
                break;
        }
    }

    document.body.appendChild(svg);
}