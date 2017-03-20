var rowCounter = 0
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
function generateLine() {
    var report = document.getElementById('report');
    var contentWrapper = document.getElementById('page-content');
    if (!report) {
        report = document.createElement('div');
        report.setAttribute('id', 'report');
        contentWrapper.appendChild(report);
    }
    var args = rowData();
    report.appendChild(newLine(args));
}

function newLine(elementsArray, rowId) {
    rowCounter++
    var line = document.createElement('div');
    line.setAttribute('class', 'table-row');
    for (var i = 0; i < elementsArray.length; i++) {
        var cell = document.createElement('div');
        cell.setAttribute('class', 'table-cell');
        cell.setAttribute('id', `row${rowCounter}col${i}`);
        cell.appendChild(document.createTextNode(elementsArray[i]));
        cell.style.width = `${Math.floor(100/elementsArray.length)}%`;
        if (rowCounter > 1) {
            cell.style.borderTop = 'none';
        }
        if (i > 0) {
            cell.style.borderLeft = 'none';
        }
        line.appendChild(cell);
    }
    return line;
}

function rowData() {
    var yearEnd = rnd(17, 7);
    var monthIndex = rnd(12, 1);
    var month = months[monthIndex];
    var refs = rnd(10, 0);
    var conversions = rnd(refs, 0);
    var percent = Math.floor(conversions / refs * 100)
    if (percent == NaN) percent = 0;
    return [`${month} 20${twoDigitString(yearEnd)}`,
                refs,
                conversions,
                `${percent}%`]
}

function rnd(max,  min) {
    if (min === undefined || min === null) min = 0;
    if (max === undefined || min ===  null) max = 10;
    return Math.floor(Math.random() * (max - min) + min);
}

function twoDigitString(num) {
    if (num < 10 && num > 0) {
        return `0${num}`;
    }
    return `${num}`;
}