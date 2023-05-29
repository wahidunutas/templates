// membuat objek date dengan waktu saat ini
$(document).ready(function () {
    let date = new Date();

    let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    let months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let year = date.getFullYear();
    let dateNum = date.getDate();

    let currentDate = `${day}, ${dateNum} ${month} ${year}`;
    $('#time-zone').html(currentDate);
});


$(document).ready(function () {
    const navbar = $(".navbar");
    const sticky = navbar.offset();

    function stickNavbar() {
        if ($(window).scrollTop() >= sticky) {
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    }

    $(window).scroll(function () {
        stickNavbar();
    });
});

$(document).ready(function () {
    $("#list").click(function () {
        $("#content-articles").removeClass("grid").addClass("list");
    });

    $("#grid").click(function () {
        $("#content-articles").removeClass("list").addClass("grid");
    });
});


// substr title pupolar and artikel title
$('.list-group-item').each(function () {
    const titleFashion = $(this).text();
    const maxLength = 80;
    const trimmedText =
        titleFashion.length > maxLength
            ? titleFashion.substr(0, maxLength) + "..."
            : titleFashion;
    $(this).text(trimmedText);
});
$('.card-title-faashion').each(function () {
    const titleFashion = $(this).text();
    const maxLength = 120;
    const trimmedText =
        titleFashion.length > maxLength
            ? titleFashion.substr(0, maxLength) + "..."
            : titleFashion;
    $(this).text(trimmedText);
});
$('.related-title').each(function () {
    const titleFashion = $(this).text();
    const maxLength = 80;
    const trimmedText =
        titleFashion.length > maxLength
            ? titleFashion.substr(0, maxLength) + "..."
            : titleFashion;
    $(this).text(trimmedText);
});

// footer title 
$("title").each(function () {
    const contentWeb = $(this).text();
    console.log(contentWeb)
    $(".footer-content").text(contentWeb);
    $(".copyright").text(contentWeb);

})


// back to top function JQUERY
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#btn-back-to-top').fadeIn();
        } else {
            $('#btn-back-to-top').fadeOut();
        }
    });
    $('#btn-back-to-top').click(function () {
        $('html, body').scrollTop(0);
        return false;
    });
});




// author {admin / user}
$(document).ready(function () {
    $("#hideSide").click(function () {
        if ($("#aside").is(":visible")) {
            $("#aside").hide();
            $("#main").css({
                "left": "0px",
                "width": "100%"
            });
        } else {
            $("#aside").show();
            $("#main").css({
                "left": "240px",
                "width": "calc(100% - 240px)"
            });
        }
    });
})