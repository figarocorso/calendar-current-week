Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Set to Thursday in the current week to determine the correct year
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4th is always in week 1
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Calculate full weeks to the current date
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

function getHeaderElement() {
    return document.evaluate(
        '//*/header',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
    ).singleNodeValue;
}

function showUiCustomizations() {
    getHeaderElement().style.background = "rgba(3, 106, 0, 0.45)";
}

function removeUiCustomizations() {
    getHeaderElement().style.background = "";
}

function updateUi() {
    let current_week_number = (new Date()).getWeek();
    let week_element = document.evaluate(
        '//*/header//*[text()="Week ' + current_week_number + '"]',
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null,
    ).singleNodeValue;

    if (week_element != null) {
        showUiCustomizations();
    } else {
        removeUiCustomizations();
    }
}

async function highlightHeader() {
    setTimeout(updateUi, 0);
    setTimeout(updateUi, 1000);
}

document.body.addEventListener("click", highlightHeader);
document.body.addEventListener("keyup", highlightHeader);
highlightHeader();
