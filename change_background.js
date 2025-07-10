Date.prototype.getWeek = function(){
    const dayInMiliseconds = 86400000;
    const firstOfJanuary = new Date(this.getFullYear(), 0, 1);
    const dateAtMidnight = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const daysSinceFirstOfJan = ((dateAtMidnight - firstOfJanuary) / dayInMiliseconds) + 1;
    const firstOfJanuaryWeekday = firstOfJanuary.getDay() ? firstOfJanuary.getDay() : 7;
    const offset = firstOfJanuaryWeekday - 1;
    return Math.ceil((daysSinceFirstOfJan + offset) / 7);
}

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
        '//*/header//div[normalize-space(.)="Week ' + current_week_number + '"]',
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
