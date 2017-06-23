/**
 * Created by bh on 2016/5/25.
 */

define(['jquery','tab','superslide'], function() {
    function searchclick(){
        $(".mod-search-dropdown-item-select").toggle(function(){
            $(".mod-search-dropdown-item-show").show();
            $(".mod-search-dropdown").addClass("mod-search-dropdown-click")
        },function(){
            $(".mod-search-dropdown-item-show").hide();
            $(".mod-search-dropdown").removeClass("mod-search-dropdown-click")
        });
    };
    function lunbo(){
        var imglength = json.img.length;
        for(var i=0;i<imglength;i++){
            $(".banner-img").append("<li><a href='#'><img src="+json.img[i].src+"></a></li>")
        }
    };
    function navhover(){
        $(".nav-li").bind("mouseover",function(){
            var q = $(this).index();
            $(this).addClass("nav-li-current").siblings().removeClass("nav-li-current");
            $(".nav-wrap").eq(q-1).show().siblings().hide()
        }).bind("mouseout",function(){
            $(".nav-wrap").hide();
            $(this).removeClass("nav-li-current")
        });
        $(".nav-wrap").hover(function(){
            $(this).show()
        },function(){
            $(this).hide()
        })
    }
    function superslide(){
            $(".slideBox").slide({mainCell:".bd ul",autoPlay:true,
                startFun:function(i){
                    $(".wrap-banner-bg").css("background",json.img[i].color)
                }
            });
    }
    function tab(){
        $(".wrap-board").tab({
        currentClass:"wrap-board-current",
        eventType:"mouseover",
        tabNav:".tabli",
        tabContent:".wrap-board-content>div"
      });
        //$(".wrap-box-container").tab({
        //    currentClass:"catalog-box-nav-current",
        //    eventType:"mouseover",
        //    tabNav:".catalog-box-nav li",
        //    tabContent:".catalog-box-content>div"
        //})
        $("#it").find(".catalog-box-nav li").mouseover(function(){
            var index = $(this).index();
            $(this).addClass("catalog-box-nav-current").siblings().removeClass("catalog-box-nav-current")
            $("#it").find(".item-img>img").attr("src",json.ittj[index].img);
            $("#it").find(".item-status>span").html(json.ittj[index].status);
            $("#it").find(".item-tt>a").html(json.ittj[index].tt);
            $("#it").find(".item-course>a").html(json.ittj[index].course)
        }).parents("#it").find(".course-rank-nav li").mouseover(function(){
            $(this).addClass("course-rank-nav-current").siblings().removeClass("course-rank-nav-current")
            var index = $(this).index();
            $("#it").find(".course-rank-list>li").eq(0).find(".rank-list-tt").html(json.itrank[index].tt[0].firsttt);
            $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-img>img").attr("src",json.itrank[index].tt[0].img);
            $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-person").html(json.itrank[index].tt[0].person);
            $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-name").html(json.itrank[index].tt[0].couname);
            for(var i=1;i<10;i++){
                $("#it").find(".course-rank-list>li").eq(i).find(".rank-list-tt").html(json.itrank[index].tt[i])
            }
        });

        $("#create").find(".catalog-box-nav li").mouseover(function(){
            var index = $(this).index();
            $(this).addClass("catalog-box-nav-current").siblings().removeClass("catalog-box-nav-current")
            $("#create").find(".item-img>img").attr("src",json.createtj[index].img);
            $("#create").find(".item-status>span").html(json.createtj[index].status);
            $("#create").find(".item-tt>a").html(json.createtj[index].tt);
            $("#create").find(".item-course>a").html(json.createtj[index].course)
        }).parents("#create").find(".course-rank-nav li").mouseover(function(){
            var index = $(this).index();
            $(this).addClass("course-rank-nav-current").siblings().removeClass("course-rank-nav-current")
            $("#create").find(".course-rank-list>li").eq(0).find(".rank-list-tt").html(json.createrank[index].tt[0].firsttt);
            $("#create").find(".course-rank-list>li").eq(0).find(".rank-top1-img>img").attr("src",json.createrank[index].tt[0].img);
            $("#create").find(".course-rank-list>li").eq(0).find(".rank-top1-person").html(json.createrank[index].tt[0].person);
            $("#create").find(".course-rank-list>li").eq(0).find(".rank-top1-name").html(json.createrank[index].tt[0].couname);
            for(var i=1;i<10;i++){
                $("#create").find(".course-rank-list>li").eq(i).find(".rank-list-tt").html(json.createrank[index].tt[i])
            }
        });

        //$("#it .course-rank").tab2({
        //    currentClass:"course-rank-nav-current",
        //    eventType:"mouseover",
        //    tabNav:".course-rank-nav li"
        //}).find(".course-rank-nav li").mouseover(function(){
        //    var index = $(this).index();
        //    $("#it").find(".course-rank-list>li").eq(0).find(".rank-list-tt").html(json.itrank[index].tt[0].firsttt);
        //    $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-img>img").attr("src",json.itrank[index].tt[0].img);
        //    $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-person").html(json.itrank[index].tt[0].person);
        //    $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-name").html(json.itrank[index].tt[0].couname);
        //    for(var i=1;i<10;i++){
        //        $("#it").find(".course-rank-list>li").eq(i).find(".rank-list-tt").html(json.itrank[index].tt[i])
        //    }
        //});
    }
    function addcourse(){
        for(var i=0;i<5;i++){
            $("#box-like"). find(".course-card-item").eq(i).find(".item-img>img").attr("src",json.course[i].img);
            $("#box-like"). find(".course-card-item").eq(i).find(".item-status>span").html(json.course[i].status);
            $("#box-like"). find(".course-card-item").eq(i).find(".item-tt>a").html(json.course[i].tt);
            $("#box-like"). find(".course-card-item").eq(i).find(".item-course>a").html(json.course[i].course);
            $("#box-hot"). find(".course-card-item").eq(i).find(".item-img>img").attr("src",json.course[i].img);
            $("#box-hot"). find(".course-card-item").eq(i).find(".item-status>span").html(json.course[i].status);
            $("#box-hot"). find(".course-card-item").eq(i).find(".item-tt>a").html(json.course[i].tt);
            $("#box-hot"). find(".course-card-item").eq(i).find(".item-course>a").html(json.course[i].course);
        }
        $("#it").find(".item-img>img").attr("src",json.ittj[0].img);
        $("#it").find(".item-status>span").html(json.ittj[0].status);
        $("#it").find(".item-tt>a").html(json.ittj[0].tt);
        $("#it").find(".item-course>a").html(json.ittj[0].course);
        $("#create").find(".item-img>img").attr("src",json.createtj[0].img);
        $("#create").find(".item-status>span").html(json.createtj[0].status);
        $("#create").find(".item-tt>a").html(json.createtj[0].tt);
        $("#create").find(".item-course>a").html(json.createtj[0].course);

        $("#it").find(".course-rank-list>li").eq(0).find(".rank-list-tt").html(json.itrank[0].tt[0].firsttt).attr("title",json.itrank[0].tt[0].firsttt);
        $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-img>img").attr("src",json.itrank[0].tt[0].img);
        $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-person").html(json.itrank[0].tt[0].person);
        $("#it").find(".course-rank-list>li").eq(0).find(".rank-top1-name").html(json.itrank[0].tt[0].couname);
        $("#create").find(".course-rank-list>li").eq(0).find(".rank-list-tt").html(json.createrank[0].tt[0].firsttt).attr("title",json.createrank[0].tt[0].firsttt);
        $("#create").find(".course-rank-list>li").eq(0).find(".rank-top1-img>img").attr("src",json.createrank[0].tt[0].img);
        $("#create").find(".course-rank-list>li").eq(0).find(".rank-top1-person").html(json.createrank[0].tt[0].person);
        $("#create").find(".course-rank-list>li").eq(0).find(".rank-top1-name").html(json.createrank[0].tt[0].couname);
        for(var a=1;a<10;a++){
            $("#it").find(".course-rank-list>li").eq(a).find(".rank-list-tt").html(json.itrank[0].tt[a]).attr("title",json.itrank[0].tt[a])
            $("#create").find(".course-rank-list>li").eq(a).find(".rank-list-tt").html(json.createrank[0].tt[a]).attr("title",json.createrank[0].tt[a])
        };

        $.each(json.cooperation,function(i,item){
            $(".cooperation-con ul").append('<li><a href="#">'+this+'</a></li>')
        })
    }
    return {
        searchclick:searchclick(),
        lunbo:lunbo(),
        navhover:navhover(),
        slide:superslide(),
        tab:tab(),
        addcourse:addcourse()
    }
});

