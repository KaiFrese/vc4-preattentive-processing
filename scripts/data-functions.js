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
