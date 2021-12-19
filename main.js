let discountPercent = 25;
let monthlyCost = 16; // in dollars
let isYearlyBilling = false;

function updateBillingInfo() {
    $('#range').css({background: 'linear-gradient(90deg, var(--clr-range-fill) ' +
                    $('#range').val() +
                    '%, var(--clr-range-empty) 0)'});
    
    switch($('#range').val()) {
        case '0':
            monthlyCost = 8;
            $('.pageviews').html('10K pageviews');
            $('#range').attr('aria-valuenow', ($('#range').val()).toString());
            $('#range').attr('aria-valuetext', "10000 page views");
            break;
        case '25':
            monthlyCost = 12;
            $('.pageviews').html('50K pageviews');
            $('#range').attr('aria-valuenow', ($('#range').val()).toString());
            $('#range').attr('aria-valuetext', "50000 page views");
            break;
        case '50':
            monthlyCost = 16;
            $('.pageviews').html('100K pageviews');
            $('#range').attr('aria-valuenow', ($('#range').val()).toString());
            $('#range').attr('aria-valuetext', "100000 page views");
            break;
        case '75':
            monthlyCost = 24;
            $('.pageviews').html('500K pageviews');
            $('#range').attr('aria-valuenow', ($('#range').val()).toString());
            $('#range').attr('aria-valuetext', "500000 page views");
            break;
        case '100':
            monthlyCost = 36;
            $('.pageviews').html('1M pageviews');
            $('#range').attr('aria-valuenow', ($('#range').val()).toString());
            $('#range').attr('aria-valuetext', "1000000 page views");
            break;
    }

    if (isYearlyBilling) {
        $('.cost-figure').html('$' + (monthlyCost * .12 * (100 - discountPercent)).toFixed(2));
        $('.cost-frequency').html('<span class="sr-only">per</span><span aria-hidden="true">/</span> year');
    }
    else {
        $('.cost-figure').html('$' + (monthlyCost).toFixed(2));
        $('.cost-frequency').html('<span class="sr-only">per</span><span aria-hidden="true">/</span> month');
    }
}

$('#range').on('input', () => updateBillingInfo());

$('[type="radio"').change(function() {
    if ($('#monthly').is(':checked')) {
        $('.toggle-inner').css('transform', 'translate(0)');
        isYearlyBilling = false;
    }
    else if ($('#yearly').is(':checked')) {
        $('.toggle-inner').css('transform', 'translateX(1.375rem)');
        isYearlyBilling = true;
    }
    updateBillingInfo();
  }); 