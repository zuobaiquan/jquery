/**
 * Created by bh on 2016/5/27.
 */
define(["jquery"],function(){
    $.fn.tab=function(options){

        var defaults = {
            currentClass:"currentClass",
            eventType:"click",
            tabNav:".course-rank-nav>li",
            tabContent:".tab>div"
        }
        var options = $.extend(defaults,options);
        this.each(function(){
            var _this = $(this);
            _this.find(options.tabNav).bind(options.eventType,function(){
                $(this).addClass(options.currentClass).siblings().removeClass(options.currentClass);
                var index = $(this).index();
                _this.find(options.tabContent).eq(index).show().siblings().hide()
            })
        })
        return this;
    }

})


