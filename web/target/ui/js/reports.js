var comprehensiveReportLoans = [];

function formatLocalDateTime(date) {
    return date.dayOfMonth + "/" + date.monthValue + "/" + date.year + " " + date.hour + ":" + date.minute + ":" + date.second;
}

function replaceAmount(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function insertBranches(data) {
    $('#entityLabel').text('Branches');
    $('#entities').empty();

    var entitiesHtml = "<option value='' disabled selected>Select Branch</option>";

    for (var i = 0; i < data.length; i++) {
        entitiesHtml += "<option value='" + data[i].id + "'>" + data[i].name + "</option>"
    }

    $('#entities').append(entitiesHtml);
}

function insertUsers(data) {
    $('#entityLabel').text('Users');
    $('#entities').empty();

    var entitiesHtml = "<option value='' disabled selected>Select User</option>";

    for (var i = 0; i < data.length; i++) {
        entitiesHtml += "<option value='" + data[i].id + "'>" + data[i].fullName + "</option>"
    }

    $('#entities').append(entitiesHtml);
}

function insertMovementStages(data) {
    $('#entityLabel').text('Movement Stages');
    $('#entities').empty();

    var entitiesHtml = "<option value='' disabled selected>Select Movement Stage</option>";

    for (var i = 0; i < data.length; i++) {
        entitiesHtml += "<option value='" + data[i].id + "'>" + data[i].displayName + "</option>"
    }

    $('#entities').append(entitiesHtml);
}

function insertLoans(data) {
    $('#reportTable tbody').empty();
    var loansHtml = ""

    for (var i = 0; i < data.length; i++) {
        var loan = data[i];

        loansHtml += "<tr><td><a href='#' class='text-dark-blue'></a>" + loan.id + "</td><td><a href='#' class='text-dark-blue'></a>" + loan.customer.name + "</td><td><a href='#' class='text-dark-blue'>" + loan.type + "</a></td><td><a href='#' class='text-dark-blue'>" + loan.tenure + "</a></td><td><a href='#' class='text-dark-blue'>" + replaceAmount(loan.amount) + "</a></td><td><a href='#' class='text-dark-blue'>" + loan.role.displayName + "</a></td><td><a href='#' class='text-dark-blue'>" + loan.status + "</a></td><td><a href='#' class='text-dark-blue'>" + loan.user.fullName + "</a></td><td><a href='#' class='text-dark-blue'></a>" + loan.user.branch.name + "</td><td><a href='#' class='text-dark-blue'>" + formatLocalDateTime(loan.stageTimestamp) + "</a></td><td><a href='#' class='text-dark-blue'>" + formatLocalDateTime(loan.createdAt) + "</a></td><td><a href='#' class='text-dark-blue'>" + loan.comment + "</a></td></tr>"
    }

    $('#reportTable tbody').append(loansHtml);
}

function insertAuditing(min, max) {
    $('#reportTable tbody').empty();
    var auditingHtml = "";

    for (var i = min; i < max; i++) {
        var auditing = comprehensiveReportLoans[i];

        auditingHtml += "<tr><td><a href='#' class='text-dark-blue'>" + auditing.id + "</a></td><td><a href='#' class='text-dark-blue'>" + auditing.loan.customer.name + "</a></td><td><a href='#' class='text-dark-blue'>" + auditing.role.displayName + "</a></td><td><a href='#' class='text-dark-blue'>" + auditing.status + "</a></td><td><a href='#' class='text-dark-blue'>" + formatLocalDateTime(auditing.createdAt) + "</a></td><td><a href='#' class='text-dark-blue'>" + auditing.user.fullName + "</a></td><td><a href='#' class='text-dark-blue'>" + auditing.user.branch.name + "</a></td><td><a href='#' class='text-dark-blue'>" + auditing.comment + "</a></td></tr>"
    }

    $('#reportTable tbody').append(auditingHtml);
}

function sort(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length - (i + 1); j++) {
            if (parseInt(array[j]) > parseInt(array[j + 1])) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

function sortItemsPerPageNumbers() {
    var numbersArray = [];

    $('#items-per-page-menu .editable span:first-child').each(function (index, element) {
        numbersArray.push(parseInt($(element).text()));
    });

    numbersArray = sort(numbersArray);

    $('#items-per-page-menu .editable').each(function (index, element) {
        $(element).find('span:first-child').text(numbersArray[index]);
    });
}

function editButtonPressedEvent(e) {
    $itemsPerPageBlock = $(this).parent().find('span:first-child');
    $itemsPerPageNumber = $itemsPerPageBlock.text();

    $itemsPerPageBlock.parent().html('<input type="number" class="form-control items-number-input mr-2" value="' + $itemsPerPageNumber + '"/><span class="material-icons save-record mr-2 pointer">forward</span><span class="material-icons delete-record pointer">delete</span>');

    $('.save-record').on('click', function (e) {
        var $parent = $(this).parent();
        var $items = $parent.find('input').val();

        $parent.html('');
        $parent.append('<span class="pointer">' + $items + '</span><span class="material-icons edit-button pointer" hidden>edit</span>');

        $('.edit-button').on('click', editButtonPressedEvent);

        sortItemsPerPageNumbers();

        e.stopPropagation();
    });

    $('.delete-record').on('click', function (e) {
        $(this).parent().remove();

        e.stopPropagation();
    });

    e.stopPropagation();
}

function createButtonPressedEvent(e) {
    $(this).html('<input type="number" class="form-control items-number-input mr-2"/><span class="material-icons create-record mr-2 pointer">forward</span>');

    $('.items-number-input').on('click', function (e) {
        e.stopPropagation();
    });

    $('.create-record').on('click', function (e) {
        var $parent = $(this).parent();
        var $newNumberOfItems = $parent.find('input').val();

        $parent.prev().before('<li class="dropdown-item d-flex align-items-center justify-content-between editable" href="#"><span class="pointer">' + $newNumberOfItems + '</span><span class="material-icons edit-button pointer" hidden>edit</span></li>');

        $('.create-new')
            .html('<a class="no-decoration" href="javascript:void(0)">Custom</a>')
            .on('click', createButtonPressedEvent);

        $('#items-per-page-menu .editable').on('mouseover', function (e) {
            $(this).find('.edit-button').removeAttr('hidden');
        }).on('mouseout', function (e) {
            $(this).find('.edit-button').attr('hidden', 'true');
        });

        sortItemsPerPageNumbers();

        e.stopPropagation();
    });

    e.stopPropagation();
}

function initPagination() {
    var itemsPerPageNumber = parseInt($('#itemsPerPageDropdownMenuButton').text().trim());
    var pagesCount = comprehensiveReportLoans.length % itemsPerPageNumber ? parseInt(comprehensiveReportLoans.length / itemsPerPageNumber) : parseInt(comprehensiveReportLoans.length / itemsPerPageNumber) + 1;

    $('#pagination').remove();
    $('#reportTable').after('<ul class="blade-pagination d-flex justify-content-center" id="pagination" data-current="1" data-total="' + pagesCount + '"></ul>');

    $('#pagination').bladePagination({
        maxPageNum: 3,
        rebuildAfterClick: true,
        clickPage: function(page, jqPagination) {
            var $itemsPerPage = parseInt($('#itemsPerPageDropdownMenuButton').text().trim());
            insertAuditing((page - 1) * $itemsPerPage, page * $itemsPerPage);

            jqPagination.attr('data-current', page);
        }
    })
}

$(function () {
    $('#items-per-page-menu .editable').on('mouseover', function (e) {
        $(this).find('.edit-button').removeAttr('hidden');
    }).on('mouseout', function (e) {
        $(this).find('.edit-button').attr('hidden', 'true');
    });

    $('#items-per-page-menu .editable').on('click', function (e) {
        var $child = $(this).find('span:first-child');

        $('#itemsPerPageDropdownMenuButton').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + $child.text() + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
        insertAuditing(0, parseInt($('#itemsPerPageDropdownMenuButton').text().trim()));
        initPagination();
    });

    $('.edit-button').on('click', editButtonPressedEvent);
    $('.create-new').on('click', createButtonPressedEvent);

    $('#filterButton').on('click', function (e) {
        var $minDateValue = $('#minDate').val();
        var minDate = $minDateValue ? $minDateValue + ' 00:00' : '';

        var $maxDateValue = $('#maxDate').val();
        var maxDate = $maxDateValue ? $maxDateValue + ' 00:00' : '';

        var $reportTypeValue = $('#reportType')[0].value;
        var $selectedEntity;
        var entityParam = '';

        if ($reportTypeValue.startsWith('pendingBy') && ($selectedEntity = $('#entities').val()) != null) {
            entityParam = 'entityId=' + $selectedEntity;
        }

        var itemsPerPage = $('#itemsPerPageDropdownMenuButton').text().trim();

        $.ajax({
            url: 'api/loans/' + $reportTypeValue,
            type: 'GET',
            data: entityParam + '&minDate=' + minDate + '&maxDate=' + maxDate + '&itemsPerPage=' + itemsPerPage,
            dataType: 'json',
            success: function (data) {
                if ($reportTypeValue === 'comprehensive') {
                    $('#reportTable thead').empty().append('<tr><th>ID</th><th>Customer</th><th>Stage</th><th>Status</th><th>Auditing Timestamp</th><th>User</th><th>Branch</th><th>Comment</th></tr>');

                    insertAuditing(data);
                } else {
                    $('#reportTable thead').empty().append('<tr><th>ID</th><th>Customer</th><th>Type</th><th>Tenure</th><th>Amount</th><th>Stage</th><th>Status</th><th>User</th><th>Branch</th><th>Stage at</th><th>Created ad</th><th>Comment</th></tr>');

                    insertLoans(data);
                }
            }
        })
    });
});