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
    const svg = document.getElementById('test-svg-container');
    svg.textContent = '';

    switch (testAttribute) {
        case 'none':
            for (let i = 0; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    (currentPositions[i].x - 10).toString(),
                );
                distractor.setAttribute(
                    'y',
                    (currentPositions[i].y - 10).toString(),
                );
                distractor.setAttribute('width', '20');
                distractor.setAttribute('height', '20');
                distractor.setAttribute('fill', '#ad2020');

                svg.appendChild(distractor);
            }

            break;
        case 'color':
            const colorTarget = document.createElementNS(NAMESPACE, 'circle');
            colorTarget.setAttribute('cx', currentPositions[0].x.toString());
            colorTarget.setAttribute('cy', currentPositions[0].y.toString());
            colorTarget.setAttribute('r', '10');
            colorTarget.setAttribute('fill', '#076216');

            svg.appendChild(colorTarget);

            for (let i = 1; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(
                    NAMESPACE,
                    'circle',
                );
                distractor.setAttribute('cx', currentPositions[i].x.toString());
                distractor.setAttribute('cy', currentPositions[i].y.toString());
                distractor.setAttribute('r', '10');
                distractor.setAttribute('fill', '#ad2020');

                svg.appendChild(distractor);
            }

            break;
        case 'shape':
            const shapeTarget = document.createElementNS(NAMESPACE, 'polygon');
            shapeTarget.setAttribute(
                'points',
                `${currentPositions[0].x},${currentPositions[0].y - 10} ${currentPositions[0].x - 12},${currentPositions[0].y + 10} ${currentPositions[0].x + 12},${currentPositions[0].y + 10}`,
            );
            shapeTarget.setAttribute('fill', '#4e4e4e');

            svg.appendChild(shapeTarget);

            for (let i = 1; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    (currentPositions[i].x - 10).toString(),
                );
                distractor.setAttribute(
                    'y',
                    (currentPositions[i].y - 10).toString(),
                );
                distractor.setAttribute('width', '20');
                distractor.setAttribute('height', '20');
                distractor.setAttribute('fill', '#4e4e4e');

                svg.appendChild(distractor);
            }

            break;
        case 'motion':
            const motionTarget = document.createElementNS(NAMESPACE, 'rect');
            motionTarget.setAttribute(
                'x',
                (currentPositions[0].x - 15).toString(),
            );
            motionTarget.setAttribute(
                'y',
                (currentPositions[0].y - 5).toString(),
            );
            motionTarget.setAttribute('width', '10');
            motionTarget.setAttribute('height', '10');
            motionTarget.setAttribute('fill', '#4e4e4e');

            svg.appendChild(motionTarget);

            const motionTargetAnimation = document.createElementNS(
                NAMESPACE,
                'animate',
            );
            motionTargetAnimation.setAttribute('attributeName', 'x');
            motionTargetAnimation.setAttribute('begin', '0s');
            motionTargetAnimation.setAttribute('dur', '2s');
            motionTargetAnimation.setAttribute(
                'from',
                `${currentPositions[0].x - 15}`,
            );
            motionTargetAnimation.setAttribute(
                'to',
                `${currentPositions[0].x + 5}`,
            );
            motionTargetAnimation.setAttribute('repeatCount', 'indefinite');

            motionTarget.appendChild(motionTargetAnimation);

            for (let i = 1; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    (currentPositions[i].x + 5).toString(),
                );
                distractor.setAttribute(
                    'y',
                    (currentPositions[i].y - 5).toString(),
                );
                distractor.setAttribute('width', '10');
                distractor.setAttribute('height', '10');
                distractor.setAttribute('fill', '#4e4e4e');

                svg.appendChild(distractor);

                const distractorAnimation = document.createElementNS(
                    NAMESPACE,
                    'animate',
                );
                distractorAnimation.setAttribute('attributeName', 'x');
                distractorAnimation.setAttribute('begin', '0s');
                distractorAnimation.setAttribute('dur', '2s');
                distractorAnimation.setAttribute(
                    'from',
                    `${currentPositions[i].x + 5}`,
                );
                distractorAnimation.setAttribute(
                    'to',
                    `${currentPositions[i].x - 15}`,
                );
                distractorAnimation.setAttribute('repeatCount', 'indefinite');

                distractor.appendChild(distractorAnimation);
            }

            break;
        case 'shape-distractor':
            const shapeDistractorTarget = document.createElementNS(
                NAMESPACE,
                'polygon',
            );
            shapeDistractorTarget.setAttribute(
                'points',
                `${currentPositions[0].x},${currentPositions[0].y - 10} ${currentPositions[0].x - 12},${currentPositions[0].y + 10} ${currentPositions[0].x + 12},${currentPositions[0].y + 10}`,
            );
            shapeDistractorTarget.setAttribute('fill', '#4e4e4e');

            svg.appendChild(shapeDistractorTarget);

            for (let i = 1; i < Math.floor(currentPositions.length / 2); i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    (currentPositions[i].x - 10).toString(),
                );
                distractor.setAttribute(
                    'y',
                    (currentPositions[i].y - 10).toString(),
                );
                distractor.setAttribute('width', '20');
                distractor.setAttribute('height', '20');
                distractor.setAttribute('fill', '#4e4e4e');

                svg.appendChild(distractor);
            }

            for (
                let i = Math.floor(currentPositions.length / 2);
                i < currentPositions.length;
                i++
            ) {
                const distractor = document.createElementNS(
                    NAMESPACE,
                    'polygon',
                );
                distractor.setAttribute(
                    'points',
                    `${currentPositions[i].x},${currentPositions[i].y - 12} ${currentPositions[i].x - 10},${currentPositions[i].y - 5} ${currentPositions[i].x - 10},${currentPositions[i].y + 5} ${currentPositions[i].x},${currentPositions[i].y + 12} ${currentPositions[i].x + 10},${currentPositions[i].y + 5} ${currentPositions[i].x + 10},${currentPositions[i].y - 5}`,
                );
                distractor.setAttribute('fill', '#4e4e4e');

                svg.appendChild(distractor);
            }

            break;
        case 'none-distractor':
            for (let i = 0; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    (currentPositions[i].x - 10).toString(),
                );
                distractor.setAttribute(
                    'y',
                    (currentPositions[i].y - 10).toString(),
                );
                distractor.setAttribute('width', '20');
                distractor.setAttribute('height', '20');
                if (i < currentPositions.length / 4) {
                    distractor.setAttribute('fill', '#2f00ff');
                } else if (i < currentPositions.length / 2) {
                    distractor.setAttribute('fill', '#bd0097');
                } else if (i < (currentPositions.length / 2) * 3) {
                    distractor.setAttribute('fill', '#ad2020');
                } else {
                    distractor.setAttribute('fill', '#eeff00');
                }

                svg.appendChild(distractor);
            }

            break;
        case 'motion-distractor':
            const motionDistractorTarget = document.createElementNS(
                NAMESPACE,
                'rect',
            );
            motionDistractorTarget.setAttribute(
                'x',
                (currentPositions[0].x - 15).toString(),
            );
            motionDistractorTarget.setAttribute(
                'y',
                (currentPositions[0].y - 5).toString(),
            );
            motionDistractorTarget.setAttribute('width', '10');
            motionDistractorTarget.setAttribute('height', '10');
            motionDistractorTarget.setAttribute('fill', '#4e4e4e');

            svg.appendChild(motionDistractorTarget);

            const motionDistractorTargetAnimation = document.createElementNS(
                NAMESPACE,
                'animate',
            );
            motionDistractorTargetAnimation.setAttribute('attributeName', 'x');
            motionDistractorTargetAnimation.setAttribute('begin', '0s');
            motionDistractorTargetAnimation.setAttribute('dur', '2s');
            motionDistractorTargetAnimation.setAttribute(
                'from',
                `${currentPositions[0].x - 15}`,
            );
            motionDistractorTargetAnimation.setAttribute(
                'to',
                `${currentPositions[0].x + 5}`,
            );
            motionDistractorTargetAnimation.setAttribute(
                'repeatCount',
                'indefinite',
            );

            motionDistractorTarget.appendChild(motionDistractorTargetAnimation);

            for (let i = 1; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    i < currentPositions.length / 2
                        ? (currentPositions[i].x + 5).toString()
                        : (currentPositions[i].x - 5).toString(),
                );
                distractor.setAttribute(
                    'y',
                    i < currentPositions.length / 2
                        ? (currentPositions[i].y - 5).toString()
                        : (currentPositions[i].y - 15).toString(),
                );
                distractor.setAttribute('width', '10');
                distractor.setAttribute('height', '10');
                distractor.setAttribute('fill', '#4e4e4e');

                svg.appendChild(distractor);

                const distractorAnimation = document.createElementNS(
                    NAMESPACE,
                    'animate',
                );
                distractorAnimation.setAttribute(
                    'attributeName',
                    i < currentPositions.length / 2 ? 'x' : 'y',
                );
                distractorAnimation.setAttribute('begin', '0s');
                distractorAnimation.setAttribute('dur', '2s');
                distractorAnimation.setAttribute(
                    'from',
                    `${
                        i < currentPositions.length / 2
                            ? (currentPositions[i].x + 5).toString()
                            : (currentPositions[i].y - 15).toString()
                    }`,
                );
                distractorAnimation.setAttribute(
                    'to',
                    `${i < currentPositions.length / 2 ? currentPositions[i].x - 15 : currentPositions[i].y + 5}`,
                );
                distractorAnimation.setAttribute('repeatCount', 'indefinite');

                distractor.appendChild(distractorAnimation);
            }

            break;
        case 'color-distractor':
            const colorDistractorTarget = document.createElementNS(
                NAMESPACE,
                'circle',
            );
            colorDistractorTarget.setAttribute(
                'cx',
                currentPositions[0].x.toString(),
            );
            colorDistractorTarget.setAttribute(
                'cy',
                currentPositions[0].y.toString(),
            );
            colorDistractorTarget.setAttribute('r', '10');
            colorDistractorTarget.setAttribute('fill', '#076216');

            svg.appendChild(colorDistractorTarget);

            for (let i = 1; i < currentPositions.length; i++) {
                const distractor = document.createElementNS(
                    NAMESPACE,
                    'circle',
                );
                distractor.setAttribute('cx', currentPositions[i].x.toString());
                distractor.setAttribute('cy', currentPositions[i].y.toString());
                distractor.setAttribute('r', '10');
                if (i < currentPositions.length / 4) {
                    distractor.setAttribute('fill', '#2f00ff');
                } else if (i < currentPositions.length / 2) {
                    distractor.setAttribute('fill', '#bd0097');
                } else if (i < (currentPositions.length / 2) * 3) {
                    distractor.setAttribute('fill', '#ad2020');
                } else {
                    distractor.setAttribute('fill', '#eeff00');
                }

                svg.appendChild(distractor);
            }

            break;
        case 'color-shape-conjunction':
            const shapeConjunctionTarget = document.createElementNS(
                NAMESPACE,
                'polygon',
            );
            shapeConjunctionTarget.setAttribute(
                'points',
                `${currentPositions[0].x},${currentPositions[0].y - 10} ${currentPositions[0].x - 12},${currentPositions[0].y + 10} ${currentPositions[0].x + 12},${currentPositions[0].y + 10}`,
            );
            shapeConjunctionTarget.setAttribute('fill', '#2f00ff');

            svg.appendChild(shapeConjunctionTarget);

            for (let i = 1; i < Math.floor(currentPositions.length / 2); i++) {
                const distractor = document.createElementNS(NAMESPACE, 'rect');
                distractor.setAttribute(
                    'x',
                    (currentPositions[i].x - 10).toString(),
                );
                distractor.setAttribute(
                    'y',
                    (currentPositions[i].y - 10).toString(),
                );
                distractor.setAttribute('width', '20');
                distractor.setAttribute('height', '20');
                distractor.setAttribute(
                    'fill',
                    i < currentPositions.length / 4 ? '#2f00ff' : '#eeff00',
                );

                svg.appendChild(distractor);
            }

            for (
                let i = Math.floor(currentPositions.length / 2);
                i < currentPositions.length;
                i++
            ) {
                const distractor = document.createElementNS(
                    NAMESPACE,
                    'polygon',
                );
                distractor.setAttribute(
                    'points',
                    `${currentPositions[i].x},${currentPositions[i].y - 10} ${currentPositions[i].x - 12},${currentPositions[i].y + 10} ${currentPositions[i].x + 12},${currentPositions[i].y + 10}`,
                );
                distractor.setAttribute('fill', '#eeff00');

                svg.appendChild(distractor);
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
        const uniformElement = document.createElementNS(NAMESPACE, 'circle');
        uniformElement.setAttribute('cx', currentPositions[i].x.toString());
        uniformElement.setAttribute('cy', currentPositions[i].y.toString());
        uniformElement.setAttribute('r', '10');
        uniformElement.setAttribute('fill', '#4e4e4e');

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

        svg.appendChild(uniformElement);
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
    textElement.textContent = number.toString();

    svg.appendChild(textElement);
}
