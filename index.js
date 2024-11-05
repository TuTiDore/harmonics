function createWhiteKey(x, y) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", "24");
    rect.setAttribute("height", "168");
    rect.setAttribute("fill", "white");
    rect.setAttribute("stroke", "gray");
    return rect;
}

function createBlackKey(x, y) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", "14");
    rect.setAttribute("height", "112");
    rect.setAttribute("fill", "black");
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