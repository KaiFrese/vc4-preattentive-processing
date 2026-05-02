('use strict');

//The API-key to read the results is exposed in code because github
//secrets could not be used in a static page,
//but data can only be read with it not changed.
const API_KEY = 'AIzaSyBCxSKz2WdpkTDQCVGYEBGkBZrWkn0jLrY';
const SHEET_ID = '10rJ7UajggY0MpcXdacHZm-NIlr-9YKkCnamMyLwrDoQ';

const TEST_ATTRIBUTES = [
    'none',
    'color',
    'shape',
    'motion',
    'shape-distractor',
    'none-distractor',
    'motion-distractor',
    'color-distractor',
    'motion-conjunction',
    'color-conjunction',
    'shape-conjunction',
    'none-conjunction',
];

const TARGET_TEXT = [
    'den Kreis',
    'das grüne Objekt',
    'das Dreieck',
    'motion',
    'shape-distractor',
    'none-distractor',
    'motion-distractor',
    'color-distractor',
    'motion-conjunction',
    'color-conjunction',
    'shape-conjunction',
    'none-conjunction',
];

const formData = new FormData();
let testIndex = -1;

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('start-button').addEventListener('click', () => {
        if (testIndex < 0) {
            testIndex++;
            document.getElementById('instruction-text').innerHTML =
                `Identifizieren Sie im folgenden ${TARGET_TEXT[testIndex]}.`;
        } else {
            showTest(TEST_ATTRIBUTES[testIndex], 200);
        }
    });
});

function showTest(testAttribute, delay) {
    document.getElementById('test-container').style.display = 'flex';
    document.getElementById('instruction-container').style.display = 'none';
    drawTestShapes(testAttribute, delay);
}

function testObjectOnClickHandler(isTarget, testAttribute, delay) {
    if (isTarget) {
        testIndex++;

        formData.set(`${testIndex + 200}`, `${delay}`);

        if (testIndex >= TEST_ATTRIBUTES.length) {
            sendResults(formData);

            document.getElementById('test-container').style.display = 'none';
            document.getElementById('instruction-container').style.display =
                'flex';
            document.getElementById('start-button').style.display = 'none';
            document.getElementById('instruction-text').innerHTML =
                'Vielen Dank für Ihre Teilnahme!';
        } else {
            document.getElementById('test-container').style.display = 'none';
            document.getElementById('instruction-container').style.display =
                'flex';
            document.getElementById('instruction-text').innerHTML =
                `Identifizieren Sie im folgenden ${TARGET_TEXT[testIndex]}.`;
        }
    } else {
        drawTestShapes(testAttribute, delay + 200);
    }
}
