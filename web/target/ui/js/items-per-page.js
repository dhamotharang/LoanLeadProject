function formatLocalDateTime(date) {
    return ((date.dayOfMonth < 10) ? '0' + date.dayOfMonth : date.dayOfMonth) + "/" + ((date.monthValue < 10) ? '0' + date.monthValue : date.monthValue) + "/" + date.year + " " + ((date.hour < 10) ? '0' + date.hour : date.hour) + ":" + ((date.minute < 10) ? '0' + date.minute : date.minute) + ":" + ((date.second < 10) ? '0' + date.second : date.second);
}

function replaceAmount(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertDateToMatching(datetime) {
    var days = datetime.substring(0, datetime.indexOf('/'));
    var month = datetime.substring(datetime.indexOf('/') + 1, datetime.indexOf('/') + 3);
    var otherDatetimePart = datetime.substring(datetime.indexOf('/') + 3);

    return month + '/' + days + otherDatetimePart;
}

function differenceInDaysAndHours(firstDate, lastDate) {
    var milliseconds = firstDate.getTime() - lastDate.getTime();
    var hours = parseInt(milliseconds / 1000 / 3600);
    var days = parseInt(Math.floor(hours / 24));

    return days + " days " + (hours - days * 24) + " hours";
}

function differenceInDays(firstDate, lastDate) {
    var milliseconds = firstDate.getTime() - lastDate.getTime();
    var hours = parseInt(milliseconds / 1000 / 3600);
    var days = parseInt(Math.floor(hours / 24));

    return days;
}

function insertLoans(data) {
	$('#contentTable tbody').html('');

	var loansHtml = "";

	for (var i = 0; i < data.length; i++) {
		loansHtml += '<tr data-toggle="modal" data-target="#choseLink" id="' + data[i].id + '">\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].id + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].customer.name + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].type + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].loanThreshold.type + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].tenure + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue amount">' + data[i].amount + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue stage" id="' + data[i].stage + '">' + data[i].role.displayName + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue status">' + data[i].status + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].user.fullName + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].user.branch.name + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue stage-timestamp">' + formatLocalDateTime(data[i].stageTimestamp) + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].ageAtStage + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue creation-timestamp">' + formatLocalDateTime(data[i].createdAt) + '</a></td>\n' +
            '                    <td><a href="#" class="text-dark-blue">' + data[i].totalAge + '</a></td>\n' +
            '                    <input type="hidden" value="' + data[i].loanThreshold.timeThreshold + '">\n' +
            '                </tr>'
	}

	$('#contentTable tbody').html(loansHtml);

    $("table tr").on('click', function (e) {
        $("#audit_reference").attr("href", $("#audit_reference").attr("href") + "/" + $(this).attr('id'));
    });

    $('.amount').each(function () {
        $(this).text(replaceAmount($(this).text()));
    });

    $('#filterInput').on('change', function (e) {
        var value = $(this).val().toLowerCase();

        $("#contentTable tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });

        e.preventDefault();
    });

    $('table tbody tr').each(function () {
        if (differenceInDays(new Date(), new Date(convertDateToMatching($(this).find('.creation-timestamp').text()))) > $(this).find('input[type="hidden"]').val()) {
            $(this).addClass('bg-danger').find('td a').addClass('text-light');
        } else if ($(this).find('.status').text() === 'Deferred') {
            $(this).addClass('bg-warning');
        } else if ($(this).find('.stage').attr('id') > 4) {
            $(this).addClass('bg-pink').find('td a').addClass('text-light');
        } else {
            $(this).addClass('bg-success').find('td a').addClass('text-light');
        }
    });

    if ($('#newlyCreated').val() === 'true') {
        $('a').not('.nav-menu-header').not('.enabled').attr('href', '').attr('data-toggle', 'modal').attr('data-target', '#warningMessage');
    }
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

function filterLoans(numberOfLoans) {
    $('#contentTable tbody tr').each(function (index, loan) {
        $(loan).toggle(index < numberOfLoans);
    })
}

$(function () {
    $('#filterInput').on('input', function (e) {
        var value = $(this).val().toLowerCase();

        $("#contentTable tbody tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $.ajax({
        url: 'api/main/loans',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            insertLoans(data);
        }
    });

	$('#items-per-page-menu .editable').on('mouseover', function (e) {
		$(this).find('.edit-button').removeAttr('hidden');
	}).on('mouseout', function (e) {
		$(this).find('.edit-button').attr('hidden', 'true');
	});

    $('#items-per-page-menu .editable').on('click', function (e) {
    	var $child = $(this).find('span:first-child');

        $('#itemsPerPageDropdownMenuButton').html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + $child.text() + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');

        filterLoans($child.text())
    });

    $('#showAll').on('click', function () {
        filterLoans($('#loansCount').val());
    });

	$('.edit-button').on('click', editButtonPressedEvent);

	$('.create-new').on('click', createButtonPressedEvent);
});