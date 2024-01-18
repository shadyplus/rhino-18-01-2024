$(function () {
    let resultWrapper = document.querySelector('.spin-result-wrapper')
    var count = 1;
    $(function () {
        $(".try").click(function () {
            if (count < 2) {
                $(this).addClass('opened');
                $(this).attr('src', "img/opened_box2.png");
                count++;
                setTimeout(function () {
                    var sc2 = document.getElementById("success02");
                    sc2.className += " animate";
                    var sctip02 = document.getElementById("successtip02");
                    sctip02.className += " animateSuccessTip";
                    var md2 = document.getElementById("modal02");
                    document.getElementById("modal02").classList.add('active')
                    md2.className += " visible";
                    var cnt = document.getElementById("cntVal");
                    var so = document.querySelector(".sweet-overlay");
                    so.style.display = "flex";
                }, 800);
            } else {
                if (document.getElementById("modal02").classList.contains('active') && count < 3 && !$(this).hasClass('opened')) {
                    count++
                    $(this).attr('src', 'img/discount100.png');
                    $(this).addClass('percent');
                    setTimeout(function () {
                        resultWrapper.style.display = "block";
                    }, 1000);
                    setTimeout(function () {
                        $('#boxes,.form__heading').slideUp();
                        $('.boxes__instructions').css('display', 'none')
                        $('.instructions').css('display', 'none')
                        $('.order_block').slideDown();
                        start_timer();
                    }, 3500);
                }
            }
        });
    });
    var counter = 1;
    $(document).ready(function () {
        $('#update').on('click', function () {
            if (counter === 1) {
                counter++;
                $('#cntVal').html(function (i, val) {
                    return +val - 1
                });
            }
        });
    });
    $('.pop-up-button').on('click', function () {
        resultWrapper.style.display = 'none';
        $('html, body').stop().animate({
            scrollTop: $('#form').offset()
        }, 777);
    })
    $('.close-popup').on('click', function () {
        resultWrapper.style.display = 'none';
    })
    $('#update').on('click', function () {
        document.getElementById("modal02").classList.remove("visible");
        document.querySelector(".sweet-overlay").style.display = "none";
        $('html, body').stop().animate({
            scrollTop: $('.boxes').offset().top
        }, 777);
    })
    var time = 600;
    var intr;

    function start_timer() {
        intr = setInterval(tick, 1000);
    }

    function tick() {
        time = time - 1;
        var mins = Math.floor(time / 60);
        var secs = time - mins * 60;
        if (mins == 0 && secs == 0) {
            clearInterval(intr);
        }
        secs = secs >= 10 ? secs : "0" + secs;
        $("#min").html("0" + mins);
        $("#sec").html(secs);
    }
});