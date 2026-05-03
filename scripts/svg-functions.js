const NAMESPACE = 'http://www.w3.org/2000/svg';
const POSITIONS = [
    { x: 10, y: 20 },
    { x: 22, y: 60 },
    { x: 15, y: 100 },
    { x: 43, y: 104 },
    { x: 46, y: 79 },
    { x: 13, y: 140 },
    { x: 47, y: 25 },
    { x: 143, y: 178 },
    { x: 115, y: 180 },
    { x: 61, y: 168 },
    { x: 175, y: 178 },
    { x: 240, y: 178 },
    { x: 256, y: 56 },
    { x: 87, y: 25 },
    { x: 80, y: 89 },
    { x: 76, y: 56 },
    { x: 216, y: 156 },
    { x: 215, y: 54 },
    { x: 38, y: 145 },
    { x: 10, y: 170 },
    { x: 150, y: 59 },
    { x: 167, y: 100 },
    { x: 135, y: 10 },
    { x: 200, y: 89 },
    { x: 130, y: 89 },
    { x: 190, y: 20 },
    { x: 150, y: 130 },
    { x: 110, y: 123 },
    { x: 70, y: 120 },
    { x: 250, y: 138 },
    { x: 100, y: 150 },
    { x: 120, y: 59 },
    { x: 190, y: 130 },
    { x: 243, y: 100 },
    { x: 236, y: 16 },
    { x: 286, y: 76 },
    { x: 286, y: 40 },
    { x: 278, y: 12 },
    { x: 286, y: 176 },
    { x: 282, y: 124 },
];

function drawTestSVG(testAttribute, delay) {
    const currentPositions = [];

    for (let i = 0; i < Math.floor(Math.random() * 10) + 10; i++) {
        let positionIndex = Math.floor(Math.random() * POSITIONS.length);

        while (currentPositions.includes(POSITIONS[positionIndex])) {
            positionIndex = Math.floor(Math.random() * POSITIONS.length);
        }

        currentPositions[i] = POSITIONS[positionIndex];
    }

    showCountdown(3);

    setTimeout(() => {
        showCountdown(2);
        setTimeout(() => {
            showCountdown(1);
            setTimeout(() => {
                drawTestShapes(testAttribute, currentPositions);
                setTimeout(
                    () => drawUniformShapes(testAttribute, currentPositions),
                    delay,
                );
            }, 1000);
        }, 1000);
    }, 1000);
}

function drawTestShapes(testAttribute, currentPositions) {
    let border = Math.floor(currentPositions.length / 2);
    const svg = document.getElementById('test-svg-container');
    svg.textContent = '';

    switch (testAttribute) {
        case 'color':
            drawCircle(currentPositions[0], '#076216', svg);

            for (let i = 1; i < currentPositions.length; i++) {
                drawCircle(currentPositions[i], '#ad2020', svg);
            }

            break;
        case 'shape':
            drawTriangle(currentPositions[0], '#4e4e4e', svg);

            for (let i = 1; i < currentPositions.length; i++) {
                drawRect(currentPositions[i], '#4e4e4e', 20, svg);
            }

            break;
        case 'motion':
            const motionTarget = drawRect(
                currentPositions[0],
                '#4e4e4e',
                10,
                svg,
            );
            animatePosition(
                motionTarget,
                'x',
                currentPositions[0].x - 15,
                currentPositions[0].x + 5,
                '2s',
            );

            for (let i = 1; i < currentPositions.length; i++) {
                const distractor = drawRect(
                    currentPositions[i],
                    '#4e4e4e',
                    10,
                    svg,
                );
                animatePosition(
                    distractor,
                    'x',
                    currentPositions[i].x + 5,
                    currentPositions[i].x - 15,
                    '2s',
                );
            }

            break;
        case 'triangle-distractor':
            drawTriangle(currentPositions[0], '#4e4e4e', svg);

            for (let i = 1; i < border; i++) {
                drawRect(currentPositions[i], '#4e4e4e', 20, svg);
            }

            for (let i = border; i < currentPositions.length; i++) {
                drawHexagon(currentPositions[i], '#4e4e4e', svg);
            }

            break;
        case 'rect-distractor':
            drawRect(currentPositions[0], '#4e4e4e', 20, svg);

            for (let i = 1; i < border; i++) {
                drawTriangle(currentPositions[i], '#4e4e4e', svg);
            }

            for (let i = border; i < currentPositions.length; i++) {
                drawHexagon(currentPositions[i], '#4e4e4e', svg);
            }

            break;
        case 'motion-distractor':
            const motionDistractorTarget = drawRect(
                currentPositions[0],
                '#4e4e4e',
                10,
                svg,
            );
            animatePosition(
                motionDistractorTarget,
                'x',
                currentPositions[0].x - 15,
                currentPositions[0].x + 5,
                '2s',
            );

            for (let i = 1; i < border; i++) {
                const motionDistractorTarget = drawRect(
                    currentPositions[i],
                    '#4e4e4e',
                    10,
                    svg,
                );
                animatePosition(
                    motionDistractorTarget,
                    'x',
                    currentPositions[i].x + 5,
                    currentPositions[i].x - 15,
                    '2s',
                );
            }

            for (let i = border; i < currentPositions.length; i++) {
                const motionDistractorTarget = drawRect(
                    currentPositions[i],
                    '#4e4e4e',
                    10,
                    svg,
                );
                animatePosition(
                    motionDistractorTarget,
                    'y',
                    currentPositions[i].y - 15,
                    currentPositions[i].y + 5,
                    '2s',
                );
            }

            break;
        case 'color-distractor':
            border = Math.floor(currentPositions.length / 4);
            drawCircle(currentPositions[0], '#ff0000', svg);

            for (let i = 1; i < border; i++) {
                drawCircle(currentPositions[i], '#2f00ff', svg);
            }

            for (let i = border; i < border * 2; i++) {
                drawCircle(currentPositions[i], '#bd0097', svg);
            }

            for (let i = border * 2; i < border * 3; i++) {
                drawCircle(currentPositions[i], '#076216', svg);
            }

            for (let i = border * 3; i < currentPositions.length; i++) {
                drawCircle(currentPositions[i], '#eeff00', svg);
            }

            break;
        case 'color-shape-conjunction':
            drawTriangle(currentPositions[0], '#2f00ff', svg);

            for (let i = 1; i < border; i++) {
                drawRect(
                    currentPositions[i],
                    i < currentPositions.length / 4 ? '#2f00ff' : '#eeff00',
                    20,
                    svg,
                );
            }

            for (let i = border; i < currentPositions.length; i++) {
                drawTriangle(currentPositions[i], '#eeff00', svg);
            }
            break;
        default:
            break;
    }
}

function drawUniformShapes(testAttribute, currentPositions) {
    const svg = document.getElementById('test-svg-container');
    svg.textContent = '';

    for (let i = 0; i < currentPositions.length; i++) {
        const uniformElement = drawCircle(currentPositions[i], '#4e4e4e', svg);

        uniformElement.addEventListener('click', () => {
            svg.textContent = '';

            if (
                i == 0 &&
                testAttribute !== 'none' &&
                testAttribute !== 'none-distractor'
            ) {
                testObjectOnClickHandler(true, testAttribute);
            } else {
                testObjectOnClickHandler(false, testAttribute);
            }
        });
    }

    const buttonBackgroundElement = document.createElementNS(NAMESPACE, 'rect');
    buttonBackgroundElement.setAttribute('x', '50');
    buttonBackgroundElement.setAttribute('y', '253');
    buttonBackgroundElement.setAttribute('width', '200');
    buttonBackgroundElement.setAttribute('height', '25');
    buttonBackgroundElement.setAttribute('rx', '5');
    buttonBackgroundElement.setAttribute('ry', '5');
    buttonBackgroundElement.setAttribute('fill', '#771701');

    const buttonTextElement = document.createElementNS(NAMESPACE, 'text');
    buttonTextElement.setAttribute('x', '110');
    buttonTextElement.setAttribute('y', '270');
    buttonTextElement.setAttribute('fill', '#ffffff');
    buttonTextElement.setAttribute('font-size', '0.8rem');
    buttonTextElement.textContent = 'Nicht gesehen';

    const buttonClickElement = document.createElementNS(NAMESPACE, 'rect');
    buttonClickElement.setAttribute('x', '50');
    buttonClickElement.setAttribute('y', '253');
    buttonClickElement.setAttribute('width', '200');
    buttonClickElement.setAttribute('height', '25');
    buttonClickElement.setAttribute('fill-opacity', '0');

    buttonClickElement.addEventListener('click', () => {
        svg.textContent = '';

        if (testAttribute === 'none' || testAttribute === 'none-distractor') {
            testObjectOnClickHandler(true, testAttribute);
        } else {
            testObjectOnClickHandler(false, testAttribute);
        }
    });

    svg.appendChild(buttonBackgroundElement);
    svg.appendChild(buttonTextElement);
    svg.appendChild(buttonClickElement);
}

function showCountdown(number) {
    const svg = document.getElementById('test-svg-container');
    svg.textContent = '';

    const textElement = document.createElementNS(NAMESPACE, 'text');
    textElement.setAttribute('x', '140');
    textElement.setAttribute('y', '140');
    textElement.setAttribute('fill', '#511000');
    textElement.setAttribute('font-size', '5rem');
    textElement.textContent = `${number}`;

    svg.appendChild(textElement);
}

function drawCircle(position, color, svg) {
    const circle = document.createElementNS(NAMESPACE, 'circle');
    circle.setAttribute('cx', `${position.x}`);
    circle.setAttribute('cy', `${position.y}`);
    circle.setAttribute('r', '10');
    circle.setAttribute('fill', color);

    svg.appendChild(circle);

    return circle;
}

function drawRect(position, color, size, svg) {
    const rect = document.createElementNS(NAMESPACE, 'rect');
    rect.setAttribute('x', `${position.x - size / 2}`);
    rect.setAttribute('y', `${position.y - size / 2}`);
    rect.setAttribute('width', size);
    rect.setAttribute('height', size);
    rect.setAttribute('fill', color);

    svg.appendChild(rect);

    return rect;
}

function drawTriangle(position, color, svg) {
    const triangle = document.createElementNS(NAMESPACE, 'polygon');
    triangle.setAttribute(
        'points',
        `${position.x},${position.y - 10} ${position.x - 12},${position.y + 10} ${position.x + 12},${position.y + 10}`,
    );
    triangle.setAttribute('fill', color);

    svg.appendChild(triangle);

    return triangle;
}

function drawHexagon(position, color, svg) {
    const hexagon = document.createElementNS(NAMESPACE, 'polygon');
    hexagon.setAttribute(
        'points',
        `${position.x},${position.y - 12} ${position.x - 10},${position.y - 5} ${position.x - 10},${position.y + 5} ${position.x},${position.y + 12} ${position.x + 10},${position.y + 5} ${position.x + 10},${position.y - 5}`,
    );
    hexagon.setAttribute('fill', color);

    svg.appendChild(hexagon);

    return hexagon;
}

function animatePosition(shape, property, start, end, duration) {
    const animation = document.createElementNS(NAMESPACE, 'animate');
    animation.setAttribute('attributeName', property);
    animation.setAttribute('begin', '0s');
    animation.setAttribute('dur', duration);
    animation.setAttribute('from', `${start}`);
    animation.setAttribute('to', `${end}`);
    animation.setAttribute('repeatCount', 'indefinite');

    shape.appendChild(animation);
}
