Date.prototype.getWeek = function(){
    // From stackoverflow: https://stackoverflow.com/a/9781448
    var day_miliseconds = 86400000,
        onejan = new Date(this.getFullYear(),0,1,0,0,0),
        onejan_day = (onejan.getDay()==0) ? 7 : onejan.getDay(),
        days_for_next_monday = (8-onejan_day),
        onejan_next_monday_time = onejan.getTime() + (days_for_next_monday * day_miliseconds),
        first_monday_year_time = (onejan_day>1) ? onejan_next_monday_time : onejan.getTime(),
        this_date = new Date(this.getFullYear(), this.getMonth(),this.getDate(),0,0,0),// This at 00:00:00
        this_time = this_date.getTime(),
        days_from_first_monday = Math.round(((this_time - first_monday_year_time) / day_miliseconds));

    var first_monday_year = new Date(first_monday_year_time);

    return (days_from_first_monday>=0 && days_from_first_monday<364) ? Math.ceil((days_from_first_monday+1)/7) : 52;
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
