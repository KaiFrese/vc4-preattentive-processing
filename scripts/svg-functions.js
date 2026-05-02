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

function drawTestShapes(testAttribute, delay) {
    const svg = document.getElementById('test-svg-container');
    const currentPositions = [];

    console.log(testAttribute);

    for (let i = 0; i < Math.floor(Math.random() * 10) + 10; i++) {
        let positionIndex = Math.floor(Math.random() * POSITIONS.length);

        while (currentPositions.includes(POSITIONS[positionIndex])) {
            positionIndex = Math.floor(Math.random() * POSITIONS.length);
        }

        currentPositions[i] = POSITIONS[positionIndex];
    }

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
            const a = document.createElementNS(NAMESPACE, 'rect');
            a.setAttribute('x', (currentPositions[0].x - 10).toString());
            a.setAttribute('y', (currentPositions[0].y - 10).toString());
            a.setAttribute('width', '20');
            a.setAttribute('height', '20');
            a.setAttribute('fill', '#ad2020');

            svg.appendChild(a);
            break;
        case 'shape':
            const z = document.createElementNS(NAMESPACE, 'rect');
            z.setAttribute('x', (currentPositions[0].x - 10).toString());
            z.setAttribute('y', (currentPositions[0].y - 10).toString());
            z.setAttribute('width', '20');
            z.setAttribute('height', '20');
            z.setAttribute('fill', '#ad2020');

            svg.appendChild(z);
            break;
        case 'motion':
            const b = document.createElementNS(NAMESPACE, 'rect');
            b.setAttribute('x', (currentPositions[0].x - 10).toString());
            b.setAttribute('y', (currentPositions[0].y - 10).toString());
            b.setAttribute('width', '20');
            b.setAttribute('height', '20');
            b.setAttribute('fill', '#ad2020');

            svg.appendChild(b);
            break;
        case 'shape-distractor':
            const c = document.createElementNS(NAMESPACE, 'rect');
            c.setAttribute('x', (currentPositions[0].x - 10).toString());
            c.setAttribute('y', (currentPositions[0].y - 10).toString());
            c.setAttribute('width', '20');
            c.setAttribute('height', '20');
            c.setAttribute('fill', '#ad2020');

            svg.appendChild(c);
            break;
        case 'none-distractor':
            const d = document.createElementNS(NAMESPACE, 'rect');
            d.setAttribute('x', (currentPositions[0].x - 10).toString());
            d.setAttribute('y', (currentPositions[0].y - 10).toString());
            d.setAttribute('width', '20');
            d.setAttribute('height', '20');
            d.setAttribute('fill', '#ad2020');

            svg.appendChild(d);
            break;
        case 'motion-distractor':
            const e = document.createElementNS(NAMESPACE, 'rect');
            e.setAttribute('x', (currentPositions[0].x - 10).toString());
            e.setAttribute('y', (currentPositions[0].y - 10).toString());
            e.setAttribute('width', '20');
            e.setAttribute('height', '20');
            e.setAttribute('fill', '#ad2020');

            svg.appendChild(e);
            break;
        case 'color-distractor':
            const f = document.createElementNS(NAMESPACE, 'rect');
            f.setAttribute('x', (currentPositions[0].x - 10).toString());
            f.setAttribute('y', (currentPositions[0].y - 10).toString());
            f.setAttribute('width', '20');
            f.setAttribute('height', '20');
            f.setAttribute('fill', '#ad2020');

            svg.appendChild(f);
            break;
        case 'motion-conjunction':
            const g = document.createElementNS(NAMESPACE, 'rect');
            g.setAttribute('x', (currentPositions[0].x - 10).toString());
            g.setAttribute('y', (currentPositions[0].y - 10).toString());
            g.setAttribute('width', '20');
            g.setAttribute('height', '20');
            g.setAttribute('fill', '#ad2020');

            svg.appendChild(g);
            break;
        case 'color-conjunction':
            const h = document.createElementNS(NAMESPACE, 'rect');
            h.setAttribute('x', (currentPositions[0].x - 10).toString());
            h.setAttribute('y', (currentPositions[0].y - 10).toString());
            h.setAttribute('width', '20');
            h.setAttribute('height', '20');
            h.setAttribute('fill', '#ad2020');

            svg.appendChild(h);
            break;
        case 'shape-conjunction':
            const i = document.createElementNS(NAMESPACE, 'rect');
            i.setAttribute('x', (currentPositions[0].x - 10).toString());
            i.setAttribute('y', (currentPositions[0].y - 10).toString());
            i.setAttribute('width', '20');
            i.setAttribute('height', '20');
            i.setAttribute('fill', '#ad2020');

            svg.appendChild(i);
            break;
        case 'none-conjunction':
            const j = document.createElementNS(NAMESPACE, 'rect');
            j.setAttribute('x', (currentPositions[0].x - 10).toString());
            j.setAttribute('y', (currentPositions[0].y - 10).toString());
            j.setAttribute('width', '20');
            j.setAttribute('height', '20');
            j.setAttribute('fill', '#ad2020');

            svg.appendChild(j);
            break;
        default:
            break;
    }

    setTimeout(() => {
        svg.textContent = '';
        for (let i = 0; i < currentPositions.length; i++) {
            const uniformElement = document.createElementNS(
                NAMESPACE,
                'circle',
            );
            uniformElement.setAttribute('cx', currentPositions[i].x.toString());
            uniformElement.setAttribute('cy', currentPositions[i].y.toString());
            uniformElement.setAttribute('r', '10');
            uniformElement.setAttribute('fill', '#4e4e4e');
            uniformElement.addEventListener('click', () => {
                svg.textContent = '';

                if (i == 0 && testAttribute !== 'none') {
                    testObjectOnClickHandler(true, testAttribute, delay);
                } else {
                    testObjectOnClickHandler(false, testAttribute, delay);
                }
            });

            svg.appendChild(uniformElement);
        }

        const noneElement = document.createElementNS(NAMESPACE, 'rect');
        noneElement.setAttribute('x', '0');
        noneElement.setAttribute('y', '250');
        noneElement.setAttribute('width', '300');
        noneElement.setAttribute('height', '35');
        noneElement.setAttribute('rx', '10');
        noneElement.setAttribute('ry', '10');
        noneElement.setAttribute('fill', '#ad2020');

        const textElement = document.createElementNS(NAMESPACE, 'text');
        textElement.setAttribute('x', '70');
        textElement.setAttribute('y', '275');
        textElement.setAttribute('fill', '#ffffff');
        textElement.setAttribute('font-size', '1.5rem');
        textElement.textContent = 'Nicht enthalten';

        const clickElement = document.createElementNS(NAMESPACE, 'rect');
        clickElement.setAttribute('x', '0');
        clickElement.setAttribute('y', '250');
        clickElement.setAttribute('width', '300');
        clickElement.setAttribute('height', '35');
        clickElement.setAttribute('fill-opacity', '0');
        clickElement.addEventListener('click', () => {
            svg.textContent = '';

            if (testAttribute === 'none') {
                testObjectOnClickHandler(true, testAttribute, delay);
            } else {
                testObjectOnClickHandler(false, testAttribute, delay);
            }
        });

        svg.appendChild(noneElement);
        svg.appendChild(textElement);
        svg.appendChild(clickElement);
    }, delay);
}
