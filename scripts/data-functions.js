// Submit a HTML form to Google Sheets
// Authors: Levi Nunnink, Dave Justice
// Accessed last: 19.04.2026
// Availability: https://github.com/levinunnink/html-form-to-google-sheet
function sendResults(formData) {
    const url =
        'https://script.google.com/macros/s/AKfycbwoSSwnhAmIq6pttps8pO6VUx8ZJn9poZuH6cApJhv0-4_GsroV0Pkn9Eqoav8jLO69/exec';

    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.send(formData);
}

// Title: Step-by-Step Guide: Reading Public Google Sheets Data Using Javascript and Displaying it on an HTML Page
// Author: Ravi Patel
// Date: 16.10.2024
// Availability: https://medium.com/@ravipatel.it/step-by-step-guide-reading-public-google-sheets-data-using-javascript-and-displaying-it-on-an-html-f6aee8416a9c
async function getResults() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.values;
}
