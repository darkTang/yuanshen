$(function () {
    // 筋斗云案例开始
    // 1. 获取元素
    var cloud = document.querySelector('.navbar');
    var c_nav = document.querySelector('.header-navwrap');
    var lis = c_nav.querySelectorAll('.header-navitem');
    // 2. 给所有的小li绑定事件 
    // 这个current 做为筋斗云的起始位置
    var current = 20;
    for (var i = 0; i < lis.length; i++) {
        // (1) 鼠标经过把当前小li 的位置做为目标值
        lis[i].addEventListener('mouseenter', function () {
            animate(cloud, this.offsetLeft);
            $(this).addClass('focus').siblings().removeClass('focus');
        });
        // 在原来的header-navitem--focus类基础上又新建了一个focus(与header-navitem--focus样式一样)类，header-navitem--focus控制点击，focus控制鼠标离开/经过
        $('.header-navitem').mouseleave(function () {
            $(this).removeClass('focus');
        })
        // (2) 鼠标离开就回到起始的位置 
        c_nav.addEventListener('mouseleave', function () {
            animate(cloud, current);
        });
        // (3) 当我们鼠标点击，就把当前位置做为目标值
        lis[i].addEventListener('click', function () {
            current = this.offsetLeft;
            $(this).addClass('header-navitem--focus').siblings().removeClass('header-navitem--focus');
        });
    }
    $('.header-navitem').click(function () {
        var index = $(this).index();
        $('.content-wrap').eq(index).show().siblings('.content-wrap').hide();
    })
    // 筋斗云案例结束
    $('.login-btn').hover(function () {
        $(this).css({
            color: '#fff',
        });
        $(this).children('img').css('opacity', 1);
    }, function () {
        $(this).css({
            color: '#ccc',
        });
        $(this).children('img').css('opacity', .6);
    })

    var flag = 1;
    $('.audio-controller').click(function () {
        if (flag === 1) {
            $(this).empty();
            var img = $('<img src="images/music.png" alt="" class="audio-controller--off">')
            $(this).append(img);
            $('.music1')[0].play();
            $('.music2')[0].play();
            flag = 0;
        } else {
            $(this).empty();
            var img = $('<img src="images/music-stop.png" alt="" class="audio-controller--on">')
            $(this).append(img);
            $('.music1')[0].pause();
            $('.music2')[0].pause();
            flag = 1;
        }
    })
    // 登录tab栏切换
    $('.tab-item1').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.mhy-account-flow-yzm-login').show().siblings('.mhy-account-flow-password-login').hide();
        $('.login-tip span').text('未注册的手机验证后将自动登录。注册/登录即代表您同意并遵守');
    })
    $('.tab-item2').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.mhy-account-flow-password-login').show().siblings('.mhy-account-flow-yzm-login').hide();
        $('.login-tip span').text('登录即代表您同意并遵守');
    })
    // 验证表单
    $('.input-container input').focus(function () {
        $(this).parent().addClass('focus');
    })
    $('.input-container input').blur(function () {
        $(this).parent().removeClass('focus');
    })
    var rg1 = /^1[3|4|5|6|7|8|9]\d{9}$/;
    $('.input-container #tel').blur(function () {
        if (rg1.test($(this).val())) {
            $(this).parent().siblings('.error-text').hide();
        } else if ($(this).val() == '') {
            $(this).parent().siblings('.error-text').text('*手机号不能为空');
            $(this).parent().siblings('.error-text').show();
        } else {
            $(this).parent().siblings('.error-text').text('*手机格式错误');
            $(this).parent().siblings('.error-text').show();
        }
    })
    $('.input-container #content').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().siblings('.error-text').show();
        } else {
            $(this).parent().siblings('.error-text').hide();
        }
    })
    $('.input-container #password').blur(function () {
        if ($(this).val() == '') {
            $(this).parent().siblings('.error-text').show();
        } else {
            $(this).parent().siblings('.error-text').hide();
        }
    })
    // 点击登录，打开模态框
    $('.login-btn').click(function () {
        $('.mhy-account-flow-dialog').show();
    })
    // 点击×，关闭模态框
    $('.close-icon').click(function () {
        $('.mhy-account-flow-dialog').hide();
    })
    $('.ys-download-pc__btn1').hover(function () {
        $(this).children('img')[0].src = 'images/foreign-download1.png';
    }, function () {
        $(this).children('img')[0].src = 'images/foreign-download.png';
    })
    $('.ys-download-pc__btn2').hover(function () {
        $(this).children('img')[0].src = 'images/appstore-download1.png';
    }, function () {
        $(this).children('img')[0].src = 'images/appstore-download.png';
    })
    $('.ys-download-pc__btn3').hover(function () {
        $(this).children('img')[0].src = 'images/tabtab-download1.png';
    }, function () {
        $(this).children('img')[0].src = 'images/tabtab-download.png';
    })
    $('.ys-download-pc__btn4').hover(function () {
        $(this).children('img')[0].src = 'images/Android-download1.png';
    }, function () {
        $(this).children('img')[0].src = 'images/Android-download.png';
    })
    $('.pc-download').hover(function () {
        $(this).children('img')[0].src = 'images/pc-download1.png';
    }, function () {
        $(this).children('img')[0].src = 'images/pc-download.png';
    })

    $(".poster .poster-video").on("click", function (e) {
        $(".poster .mask1").show();
        $(".poster .mask1 video")[0].load();

        $('.poster').one("click", function () {
            $(".poster .mask1").hide();
            $(".poster .mask1 video")[0].pause();
        });
        $('.audio-controller').click();
        e.stopPropagation();
    });
    $(".poster .mask1 video").on("click", function (e) {
        e.stopPropagation();
    });

    $(".poster .poster__badge").on("click", function (e) {
        $(".poster .mask2").show();

        $('.poster').one("click", function () {
            $(".poster .mask2").hide();
        });
        e.stopPropagation();
    });
    $(".poster .mask2 .agetip-big").on("click", function (e) {
        e.stopPropagation();
    });

    // tab栏切换
    $('.news__tab__item').click(function () {
        var index = $(this).index();
        $(this).addClass('news__tab__item--active').siblings().removeClass('news__tab__item--active');
        $('.news__list').eq(index).show().siblings('.news__list').hide();
    })
    // 侧边栏
    $('.social__btn').click(function () {
        $('.social').toggleClass('social--fold');
    })
    // 侧边栏/新闻页显示隐藏
    var indextop = $('.poster-video--entry').offset().top;
    var newstop = $('.recommend__title').offset().top;
    $(window).scroll(function () {
        if ($(document).scrollTop() >= indextop) {
            $('.social, .backTop').css('opacity', 1);
        } else {
            $('.social, .backTop').css('opacity', 0);
        }
    })
    // 新闻页
    // 回到顶部
    $('.backTop').click(function () {
        $(document).scrollTop(0);
        // $('html, body').stop().animate({
        //     scrollTop: 0
        // });
    })
    // 新闻页内部的tab栏切换
    $('.category__item').click(function () {
        $(this).addClass('category__item--active').siblings('.category__item').removeClass('category__item--active');
        var index = $(this).index();
        $('.press').eq(index).show().siblings('.press').hide();
    })
    // 角色背景图片自动切换
    var i = 1;
    setInterval(function () {
        i++;
        $('.character__bg1').css('opacity', 0);
        $('.character__bg2').css('opacity', 1);
        if (i > 2) {
            i = 1;
            $('.character__bg2').css('opacity', 0);
            $('.character__bg1').css('opacity', 1);
        }
        // css层叠性
    }, 8000)

    // 城市tab栏切换
    $('.character__city a').click(function () {
        $(this).parent().addClass('character__city--active').siblings('.character__city').removeClass('character__city--active');
    })

    // 人物轮播图
    var num1 = 0;
    var temp1 = 0;
    var distance1;
    var num2 = 0;
    var temp2 = 0;
    var distance2;
    var num3 = 0;
    var temp3 = 0;
    var distance3;
    $('.gallery-thumbs1 .swiper-slide').click(function () {
        var index1 = $(this).index();
        num1 = index1;
        if (num1 >= 2 && num1 < 16) {
            temp1 = index1 - 2;
            distance1 = temp1 * 144;
            $('.gallery-thumbs1 .swiper-wrapper').css('transform', 'translate3d(-' + distance1 + 'px,0,0)');
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        }
        $(this).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
        $('.gallery-top1 .swiper-slide').eq(index1).show().siblings('.gallery-top1 .swiper-slide').hide();
    })
    $('.gallery-thumbs2 .swiper-slide').click(function () {
        var index2 = $(this).index();
        num2 = index2;
        if (num2 >= 2 && num2 < 13) {
            temp2 = index2 - 2;
            distance2 = temp2 * 144;
            $('.gallery-thumbs2 .swiper-wrapper').css('transform', 'translate3d(-' + distance2 + 'px,0,0)');
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        }
        $(this).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
        $('.gallery-top2 .swiper-slide').eq(index2).show().siblings('.gallery-top2 .swiper-slide').hide();
    })
    $('.gallery-thumbs3 .swiper-slide').click(function () {
        var index3 = $(this).index();
        num3 = index3;
        if (num3 >= 2 && num3 < 7) {
            temp3 = index3 - 2;
            distance3 = temp3 * 144;
            $('.gallery-thumbs3 .swiper-wrapper').css('transform', 'translate3d(-' + distance3 + 'px,0,0)');
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        }
        $(this).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
        $('.gallery-top3 .swiper-slide').eq(index3).show().siblings('.gallery-top3 .swiper-slide').hide();
    })


    $('.swiper-button-next1').click(function () {
        num1++;
        if (num1 >= 3 && num1 < 16) {
            temp1++;
            distance1 = temp1 * 144;
            $('.gallery-thumbs1 .swiper-wrapper').css('transform', 'translate3d(-' + distance1 + 'px,0,0)');
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        }
        else if (num1 >= 16 && num1 <= 18) {
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        } else if (num1 > 18) {
            num1 = 0;
            distance1 = num1;
            temp1 = 0
            $('.gallery-thumbs1 .swiper-wrapper').css('transform', 'translate3d(-' + distance1 + 'px,0,0)');
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        } else {
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        }
    })

    $('.swiper-button-next2').click(function () {
        num2++;
        if (num2 >= 3 && num2 < 13) {
            temp2++;
            distance2 = temp2 * 144;
            $('.gallery-thumbs2 .swiper-wrapper').css('transform', 'translate3d(-' + distance2 + 'px,0,0)');
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        }
        else if (num2 >= 13 && num2 <= 15) {
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        } else if (num2 > 15) {
            num2 = 0;
            distance2 = num2;
            temp2 = 0
            $('.gallery-thumbs2 .swiper-wrapper').css('transform', 'translate3d(-' + distance2 + 'px,0,0)');
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        } else {
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        }
    })

    $('.swiper-button-next3').click(function () {
        num3++;
        if (num3 >= 3 && num3 < 7) {
            temp3++;
            distance3 = temp3 * 144;
            $('.gallery-thumbs3 .swiper-wrapper').css('transform', 'translate3d(-' + distance3 + 'px,0,0)');
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        }
        else if (num3 >= 7 && num3 <= 9) {
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        } else if (num3 > 9) {
            num3 = 0;
            distance3 = num3;
            temp3 = 0
            $('.gallery-thumbs3 .swiper-wrapper').css('transform', 'translate3d(-' + distance3 + 'px,0,0)');
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        } else {
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        }
    })

    $('.swiper-button-prev1').click(function () {
        num1--;
        if (num1 < 0) {
            num1 = 18;
            temp1 = num1 - 5;
            distance1 = temp1 * 144;
            $('.gallery-thumbs1 .swiper-wrapper').css('transform', 'translate3d(-' + distance1 + 'px,0,0)');
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        } else if (num1 < 15) {
            temp1--;
            distance1 = temp1 * 144;
            $('.gallery-thumbs1 .swiper-wrapper').css('transform', 'translate3d(-' + distance1 + 'px,0,0)');
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        }
        else {
            $('.gallery-thumbs1 .swiper-slide').eq(num1).addClass('swiper-slide-active').siblings('.gallery-thumbs1 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top1 .swiper-slide').eq(num1).show().siblings('.gallery-top1 .swiper-slide').hide();
        }

    })
    $('.swiper-button-prev2').click(function () {
        num2--;
        if (num2 < 0) {
            num2 = 15;
            temp2 = num2 - 5;
            distance2 = temp2 * 144;
            $('.gallery-thumbs2 .swiper-wrapper').css('transform', 'translate3d(-' + distance2 + 'px,0,0)');
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        } else if (num2 < 12) {
            temp2--;
            distance2 = temp2 * 144;
            $('.gallery-thumbs2 .swiper-wrapper').css('transform', 'translate3d(-' + distance2 + 'px,0,0)');
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        }
        else {
            $('.gallery-thumbs2 .swiper-slide').eq(num2).addClass('swiper-slide-active').siblings('.gallery-thumbs2 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top2 .swiper-slide').eq(num2).show().siblings('.gallery-top2 .swiper-slide').hide();
        }

    })
    $('.swiper-button-prev3').click(function () {
        num3--;
        if (num3 < 0) {
            num3 = 9;
            temp3 = num3 - 5;
            distance3 = temp3 * 144;
            $('.gallery-thumbs3 .swiper-wrapper').css('transform', 'translate3d(-' + distance3 + 'px,0,0)');
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        } else if (num3 < 6) {
            temp3--;
            distance3 = temp3 * 144;
            $('.gallery-thumbs3 .swiper-wrapper').css('transform', 'translate3d(-' + distance3 + 'px,0,0)');
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        }
        else {
            $('.gallery-thumbs3 .swiper-slide').eq(num3).addClass('swiper-slide-active').siblings('.gallery-thumbs3 .swiper-slide').removeClass('swiper-slide-active');
            $('.gallery-top3 .swiper-slide').eq(num3).show().siblings('.gallery-top3 .swiper-slide').hide();
        }

    })

    var j = 1;
    $('.character__switch--wrap').click(function () {
        if (j == 1) {
            $('.character__cv__name2').stop().show().siblings('.character__cv__name1').stop().hide();
            j = 0;
        } else if (j == 0) {
            $('.character__cv__name1').stop().show().siblings('.character__cv__name2').stop().hide();
            j = 1;
        }
        $('.character__sbtn1').toggleClass('character__sbtn--active').siblings().toggleClass('character__sbtn--active');


    })
    var timer1;
    $('.character__voice1').click(function () {
        $('.character__voice--active').show();
        var timer = setTimeout(function () {
            $('.character__voice--active').hide();
        }, 4000)
        timer1 = timer;

    })
    $('.character__voice--active').click(function () {
        $('.character__voice--active').hide();
        clearTimeout(timer1);
    })

    // city tab栏切换
    $('.character__city').click(function () {
        var index4 = $(this).index();
        $('.character__main').eq(index4).show().siblings('.character__main').hide();
    })
    $('.character__city1').click(function () {
        $('.character__bg1').css('background-image', 'url(./upload-firstPage/character-bg1.jpg)')
        $('.character__bg2').css('background-image', 'url(./upload-firstPage/character-bg2.jpg)')
    })
    $('.character__city2').click(function () {
        $('.character__bg1').css('background-image', 'url(./upload-firstPage/character-bg1-1.jpg)')
        $('.character__bg2').css('background-image', 'url(./upload-firstPage/character-bg1-2.jpg)')
    })
    $('.character__city3').click(function () {
        $('.character__bg1').css('background-image', 'url(./upload-firstPage/character-bg2-1.jpg)')
        $('.character__bg2').css('background-image', 'url(./upload-firstPage/character-bg2-2.jpg)')
    })
    // 世界查看详情模态框
    $('.city__detail').click(function () {
        // $('#dowebok').fullpage.setAllowScrolling(false);
        // $('#dowebok').fullpage.moveTo(2, 2);
        $('.map .detail').show();
    })
    $('.detail__close').click(function () {
        $('#dowebok').fullpage.setAllowScrolling(true);
        $('.map .detail').hide();
    })

})
