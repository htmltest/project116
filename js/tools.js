$(document).ready(function() {

    $('.main-anonces-list-inner').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
            {
                breakpoint: 1169,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }).on('beforeChange', function(slick) {
        $(window).trigger('resize');
    });

    $(window).on('load resize', function() {

        $('.main-anonces-list-inner').each(function() {
            var curList = $(this);

            curList.find('.main-anonces-item-preview').css({'min-height': '0px'});
            var previewMax = 0;

            curList.find('.main-anonces-item-preview').each(function() {
                var curBlock = $(this);
                var curHeight = curBlock.height();
                if (curHeight > previewMax) {
                    previewMax = curHeight;
                }
            });
            curList.find('.main-anonces-item-title').css({'min-height': previewMax + 'px'});

            curList.find('.main-anonces-item-title').css({'min-height': '0px'});
            var titleMax = 0;

            curList.find('.main-anonces-item-title').each(function() {
                var curBlock = $(this);
                var curHeight = curBlock.height();
                if (curHeight > titleMax) {
                    titleMax = curHeight;
                }
            });
            curList.find('.main-anonces-item-title').css({'min-height': titleMax + 'px'});
        });

    });

    if ($('.events-filter-years').length > 0) {
        var eventsYear = $('.events-filter-years input').index($('.events-filter-years input:checked'));

        $('.events-filter-years').slick({
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: eventsYear,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>'
        });
    }

    $('body').on('click', '.events-filter-all', function(e) {
        $('.events-filter-types input').prop('checked', true);
        e.preventDefault();
    });

    $('body').on('click', '.events-filter-clear', function(e) {
        $('.events-filter-types input').prop('checked', false);
        e.preventDefault();
    });

    $('body').on('click', '.vacancy-header', function(e) {
        $(this).parents().filter('.vacancy').toggleClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.results-menu ul li a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.results-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.results-menu ul li').index(curLi);
            $('.results-tab').stop(true, true);
            if ($('.results-tab:visible').length > 0) {
                $('.results-tab:visible').fadeOut(200, function() {
                    $('.results-tab').eq(curIndex).fadeIn(200);
                });
            } else {
                $('.results-tab').eq(curIndex).fadeIn(200);
            }
        }
        e.preventDefault();
    });

    $('.gallery').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.gallery-item a').fancybox({
        buttons : [
            'close'
        ],
        lang : 'ru',
        i18n : {
            'ru' : {
                DOWNLOAD    : 'Скачать',
                CLOSE       : 'Закрыть',
                NEXT        : 'Вперед',
                PREV        : 'Назад'
            }
        }
    });

    $.validator.addMethod('maskPhone',
        function(value, element) {
            if (value == '') {
                return true;
            }
            return /^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/.test(value);
        },
        'Не соответствует формату'
    );

    $('form').each(function() {
        initForm($(this));
    });

    $('body').on('click', '.webinar-header-link', function(e) {
        $('html, body').animate({'scrollTop': $('.webinars-forms').offset().top - 24});
        $('.webinars-forms-menu li:first a').trigger('click');
        e.preventDefault();
    });

    $('body').on('click', '.webinars-forms-menu li a', function(e) {
        var curLi = $(this).parent();
        $('.webinars-form').stop(true, true);
        if (curLi.hasClass('active')) {
            curLi.removeClass('active');
            $('.webinars-form:visible').fadeOut(200);
        } else {
            $('.webinars-forms-menu li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.webinars-forms-menu li').index(curLi);
            if ($('.webinars-form:visible').length > 0) {
                $('.webinars-form:visible').fadeOut(200, function() {
                    $('.webinars-form').eq(curIndex).fadeIn(200);
                });
            } else {
                $('.webinars-form').eq(curIndex).fadeIn(200);
            }
        }
        e.preventDefault();
    });

    $('body').on('click', '.webinars-form-all', function(e) {
        $('.webinars-form-items input').prop('checked', true).trigger('change');
        e.preventDefault();
    });

    $('body').on('click', '.webinars-form-clear', function(e) {
        $('.webinars-form-items input').prop('checked', false).trigger('change');
        e.preventDefault();
    });

    $('body').on('change', '.webinars-form-items input', function() {
        recalcWebinars();
    });

    recalcWebinars();

    $('body').on('click', '.profit-header-text', function(e) {
        $(this).parents().filter('.profit').toggleClass('open');
        e.preventDefault();
    });

    $('body').on('click', '.feedback-menu ul li a', function(e) {
        var curLi = $(this).parent();
        if (!curLi.hasClass('active')) {
            $('.feedback-menu ul li.active').removeClass('active');
            curLi.addClass('active');
            var curIndex = $('.feedback-menu ul li').index(curLi);
            $('.feedback-tab').stop(true, true);
            if ($('.feedback-tab:visible').length > 0) {
                $('.feedback-tab:visible').fadeOut(200, function() {
                    $('.feedback-tab').eq(curIndex).fadeIn(200);
                });
            } else {
                $('.feedback-tab').eq(curIndex).fadeIn(200);
            }
        }
        e.preventDefault();
    });

    $('body').on('click', '.feedback-result-header-text', function(e) {
        $(this).parents().filter('.feedback-result').toggleClass('open');
        e.preventDefault();
    });

    $('.personnel-filter, .table').jScrollPane({autoReinitialise: true});

    $('.mobile-menu-link').click(function(e) {
        $('html').toggleClass('mobile-menu-open');
        e.preventDefault();
    });

    $('nav ul li a').click(function(e) {
        var curLi = $(this).parent();
        if (curLi.find('ul').length > 0) {
            curLi.toggleClass('open');
            e.preventDefault();
        }
    });

});

$(window).on('resize', function() {
    $('.form-select select').chosen('destroy');
    $('.form-select select').chosen({disable_search: true, placeholder_text_multiple: ' ', no_results_text: 'Нет результатов'});
});

var dateFormat = 'dd.mm.yy';

function initForm(curForm) {
    curForm.find('input.maskPhone').mask('+7 (999) 999-99-99');

    curForm.find('.form-select select').chosen({disable_search: true, no_results_text: 'Нет результатов'});

    curForm.find('.form-input-date input').datepicker({
        dateFormat: dateFormat
    });

    curForm.find('.form-file input').change(function() {
        var curInput = $(this);
        var curField = curInput.parent().parent().parent().parent();
        curField.find('.form-file-name-text').html(curInput.val().replace(/.*(\/|\\)/, ''));
        curField.find('label.error').remove();
        curField.removeClass('error');
    });

    curForm.find('.form-file-name-remove').click(function() {
        var curField = $(this).parents().filter('.form-file');
        curField.find('.form-file-name-text').html('');
        curField.find('input').val(null);
    });

    curForm.validate({
        ignore: '',
        invalidHandler: function(form, validatorcalc) {
            validatorcalc.showErrors();
            checkErrors();
        }
    });
}

function checkErrors() {
    $('.form-input').each(function() {
        var curField = $(this).parent().parent();
        if (curField.find('input.error').length > 0 || curField.find('textarea.error').length > 0) {
            curField.addClass('error');
        } else {
            curField.removeClass('error');
        }
        if (curField.find('input.valid').length > 0 || curField.find('textarea.valid').length > 0) {
            curField.addClass('valid');
        } else {
            curField.removeClass('valid');
        }
    });

    $('.form-checkbox, .form-file').each(function() {
        var curField = $(this);
        if (curField.find('input.error').length > 0) {
            curField.addClass('error');
        } else {
            curField.removeClass('error');
        }
        if (curField.find('input.valid').length > 0) {
            curField.addClass('valid');
        } else {
            curField.removeClass('valid');
        }
    });

    $('.form-select').each(function() {
        var curField = $(this).parent().parent();
        if (curField.find('select.error').length > 0) {
            curField.addClass('error');
        } else {
            curField.removeClass('error');
        }
        if (curField.find('select.valid').length > 0) {
            curField.addClass('valid');
        } else {
            curField.removeClass('valid');
        }
    });
}

function recalcWebinars() {
    var curCount = $('.webinars-form-items input:checked').length;
    var curCost = 0;
    $('.webinars-form-items input:checked').each(function() {
        curCost += Number($(this).data('price'));
    });
    $('.webinars-form-summ-count').html(curCount);
    $('.webinars-form-summ-cost').html(curCost);
}