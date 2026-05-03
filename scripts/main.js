('use strict');

//The API-key to read the results is exposed in code because github
//secrets could not be used in a static page,
//but data can only be read with it not changed.
const API_KEY = 'AIzaSyBCxSKz2WdpkTDQCVGYEBGkBZrWkn0jLrY';
const SHEET_ID = '10rJ7UajggY0MpcXdacHZm-NIlr-9YKkCnamMyLwrDoQ';

const TEST_ATTRIBUTES = [
    'color',
    'none',
    'color',
    'shape',
    'motion',
    'shape-distractor',
    'none-distractor',
    'motion-distractor',
    'color-distractor',
    'color-shape-conjunction',
];

const TARGET_TEXT = [
    'das grüne Objekt',
    'den Kreis',
    'das grüne Objekt',
    'das Dreieck',
    'das Objekt, das sich nach rechts bewegt',
    'das Dreieck',
    'den Kreis',
    'das Objekt, das sich nach rechts bewegt',
    'das grüne Objekt',
    'das blaue Dreieck',
];

const formData = new FormData();
let testIndex = -1;
let delay = 100;

document.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('start-button').addEventListener('click', () => {
        if (testIndex < 0) {
            testIndex++;
            document.getElementById('instruction-text').innerHTML =
                `Identifizieren Sie im folgenden <span class="highlight">${TARGET_TEXT[testIndex]}</span>.`;
        } else {
            document.getElementById('test-container').style.display = 'flex';
            document.getElementById('instruction-container').style.display =
                'none';
            drawTestSVG(TEST_ATTRIBUTES[testIndex], delay);
        }
    });
});

function testObjectOnClickHandler(isTarget) {
    if (isTarget) {
        testIndex++;
        formData.set(`${testIndex + 200}`, `${delay}`);
        delay = 100;
    } else {
        delay += 50;
    }

    if (testIndex >= TEST_ATTRIBUTES.length) {
        sendResults(formData);

        document.getElementById('test-container').style.display = 'none';
        document.getElementById('instruction-container').style.display = 'flex';
        document.getElementById('start-button').style.display = 'none';
        document.getElementById('instruction-text').innerHTML =
            'Vielen Dank für Ihre Teilnahme!';
    } else {
        document.getElementById('test-container').style.display = 'none';
        document.getElementById('instruction-container').style.display = 'flex';
        document.getElementById('instruction-text').innerHTML =
            `Identifizieren Sie im folgenden <span class="highlight">${TARGET_TEXT[testIndex]}</span>.`;
    }
}
