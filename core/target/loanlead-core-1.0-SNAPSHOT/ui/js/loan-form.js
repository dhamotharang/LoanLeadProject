function sortItemsByName(e) {
    var value = $(e.target).val();

    $('#customersList li').filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value.toLowerCase()) > -1);
    })
}

$(function () {
    var $collateralTypes = $('#collateralTypes').val().split(';');

    for (var i = 0; i < $collateralTypes.length; i++) {
        $('#securityTypes option[value="' + $collateralTypes[i] + '"]').prop('selected', 'true');
    }

    if ($('#customerId').val() !== '') {
        $('#customer').val($('#customersList #' + $('#customerId').val()).text());

        sortItemsByName();
    }

    $('#customer').on('input', sortItemsByName);

    $('#customersList li').on('click', function () {
        $('#customer').val($(this).text());
        $('#customerId').val($(this).attr('id'));
    })
});