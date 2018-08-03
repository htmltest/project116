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

    $('.events-filter-years').slick({
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.events-filter-all').click(function(e) {
        $('.events-filter-types input').prop('checked', true);
        e.preventDefault();
    });

    $('.events-filter-clear').click(function(e) {
        $('.events-filter-types input').prop('checked', false);
        e.preventDefault();
    });

});