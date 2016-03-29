$('#page table thead').on('click', 'td', function () {
    'use strict';
    var el = $(this),
        place = el.index(),
        table = el.closest('table'),
        tbody = table.find('tbody'),
        datatype = el.data('datatype'),
        rows = tbody.find('tr').get();
    el.toggleClass('active');
    rows.sort(function (a, b) {
        var keyA = $(a).find('td').eq(place).text(),
            keyB = $(b).find('td').eq(place).text()
        if (datatype === 'float' || datatype === 'currency') {
            keyA = parseFloat(keyA.replace('$', ''));
            keyB = parseFloat(keyB.replace('$', ''));
        }
        if (el.hasClass('active')) {
            if (keyA > keyB) return 1;
            if (keyA < keyB) return -1;
        } else {
            if (keyA < keyB) return 1;
            if (keyA > keyB) return -1;
        }
        return 0;
    });
    $.each(rows, function (index, row) {
        tbody.append(row);
    });
});
