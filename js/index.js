$(function () {
    var one = document.querySelector('.one')
    var two = document.querySelector('.two')
    var three = document.querySelector('.three')
    var four = document.querySelector('.four')
    two.addEventListener('click', function () {
        this.src = 'upload/profile22.png';
        one.src = 'upload/profile1.png';
        three.src = 'upload/profile3.png';
        four.src = 'upload/profile4.png';
    })
    one.addEventListener('click', function () {
        this.src = 'upload/profile11.png';
        two.src = 'upload/profile2.png';
        three.src = 'upload/profile3.png';
        four.src = 'upload/profile4.png';
    })
    three.addEventListener('click', function () {
        this.src = 'upload/profile33.png';
        two.src = 'upload/profile2.png';
        one.src = 'upload/profile1.png';
        four.src = 'upload/profile4.png';
    })
    four.addEventListener('click', function () {
        this.src = 'upload/profile44.png';
        two.src = 'upload/profile2.png';
        three.src = 'upload/profile3.png';
        one.src = 'upload/profile1.png';
    })
    $('.section3 li').click(function () {
        var index = $(this).index();
        $('.figure').eq(index).show().siblings('.figure').hide();
    })
    $('.figure1 .zcv1').hover(function () {
        $(this)[0].src = 'upload/figure-zcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure-zcv-1.png';
    })
    $('.figure1 .jcv1').hover(function () {
        $(this)[0].src = 'upload/figure-jcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure-jcv-1.png';
    })
    $('.figure2 .zcv1').hover(function () {
        $(this)[0].src = 'upload/figure2-zcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure2-zcv-1.png';
    })
    $('.figure2 .jcv1').hover(function () {
        $(this)[0].src = 'upload/figure2-jcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure2-jcv-1.png';
    })
    $('.figure3 .zcv1').hover(function () {
        $(this)[0].src = 'upload/figure3-zcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure3-zcv-1.png';
    })
    $('.figure3 .jcv1').hover(function () {
        $(this)[0].src = 'upload/figure3-jcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure3-jcv-1.png';
    })
    $('.figure4 .zcv1').hover(function () {
        $(this)[0].src = 'upload/figure4-zcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure4-zcv-1.png';
    })
    $('.figure4 .jcv1').hover(function () {
        $(this)[0].src = 'upload/figure4-jcv.png';
    }, function () {
        $(this)[0].src = 'upload/figure4-jcv-1.png';
    })
    $('.link .one').hover(function () {
        $(this)[0].src = 'images/weibo2.png';
    }, function () {
        $(this)[0].src = 'images/weibo.png';
    })
    $('.link .two').hover(function () {
        $(this)[0].src = 'images/wechat2.png';
    }, function () {
        $(this)[0].src = 'images/wechat.png';
    })
    $('.link .three').hover(function () {
        $(this)[0].src = 'images/bili2.png';
    }, function () {
        $(this)[0].src = 'images/bili.png';
    })
    $('.link .four').hover(function () {
        $(this)[0].src = 'images/community2.png';
    }, function () {
        $(this)[0].src = 'images/community.png';
    })


    // jq 点击按钮显示div,点击页面其他任何地方隐藏div
    $(".section1 .play").on("click", function (e) {
        $(".section1 .mask1").show();
        $(".section1 .mask1 video")[0].load();

        $('.section1').one("click", function () {
            $(".section1 .mask1").hide();
            $(".section1 .mask1 video")[0].pause();
        });

        e.stopPropagation();
    });
    $(".section1 .mask1 video").on("click", function (e) {
        e.stopPropagation();
    });

    // 
    // 四个人物视频
    $(".section3 .figure1 .player").on("click", function (e) {
        $(".section3 .mask-figure1").show();
        $(".section3 .mask-figure1 video")[0].load();

        $('.section3').one("click", function () {
            $(".section3 .mask-figure1").hide();
            $(".section3 .mask-figure1 video")[0].pause();
        });

        e.stopPropagation();
    });
    $(".section3 .mask-figure1 video").on("click", function (e) {
        e.stopPropagation();
    });
    // 
    $(".section3 .figure2 .player").on("click", function (e) {
        $(".section3 .mask-figure2").show();
        $(".section3 .mask-figure2 video")[0].load();

        $('.section3').one("click", function () {
            $(".section3 .mask-figure2").hide();
            $(".section3 .mask-figure2 video")[0].pause();
        });

        e.stopPropagation();
    });
    $(".section3 .mask-figure2 video").on("click", function (e) {
        e.stopPropagation();
    });
    // 
    $(".section3 .figure3 .player").on("click", function (e) {
        $(".section3 .mask-figure3").show();
        $(".section3 .mask-figure3 video")[0].load();

        $('.section3').one("click", function () {
            $(".section3 .mask-figure3").hide();
            $(".section3 .mask-figure3 video")[0].pause();
        });

        e.stopPropagation();
    });
    $(".section3 .mask-figure3 video").on("click", function (e) {
        e.stopPropagation();
    });
    // 
    $(".section3 .figure4 .player").on("click", function (e) {
        $(".section3 .mask-figure4").show();
        $(".section3 .mask-figure4 video")[0].load();

        $('.section3').one("click", function () {
            $(".section3 .mask-figure4").hide();
            $(".section3 .mask-figure4 video")[0].pause();
        });

        e.stopPropagation();
    });
    $(".section3 .mask-figure4 video").on("click", function (e) {
        e.stopPropagation();
    });


    // 
    $(".section1 .age").on("click", function (e) {
        $(".section1 .mask2").show();

        $('.section1').one("click", function () {
            $(".section1 .mask2").hide();
        });
        e.stopPropagation();
    });
    $(".section1 .mask2 .agetip").on("click", function (e) {
        e.stopPropagation();
    });

    $(".section5 .two").on("click", function (e) {
        $(".section5 .mask3").show();

        $('.section5').one("click", function () {
            $(".section5 .mask3").hide();
        });
        e.stopPropagation();
    });
    $(".section5 .mask3 .wechat3").on("click", function (e) {
        e.stopPropagation();
    });


    $(' .section1 .play img').hover(function () {
        $(this)[0].src = 'upload/play2.png';
    }, function () {
        $(this)[0].src = 'upload/play.png';
    })
    $(' .section3 .figure .player img').hover(function () {
        $(this)[0].src = 'upload/player2.png';
    }, function () {
        $(this)[0].src = 'upload/player.png';
    })
    $(' .section1 .enter img').hover(function () {
        $(this)[0].src = 'images/enter2.png';
    }, function () {
        $(this)[0].src = 'images/enter.png';
    })
    $(' .section1 .pcdownload img').hover(function () {
        $(this)[0].src = 'images/pcdownload2.png';
    }, function () {
        $(this)[0].src = 'images/pcdownload.png';
    })


})