(function ($) {
    var Tab = function (tab) {
        var _that=this;
        this.tab=tab;
        this.config = {
            'triggerType': 'mouseover',  //鼠标触发类型
            'effect': 'default',        //内容切换效果
            'invoke': 1,             //默认显示第几个tab
            'auto': false             //定义是否自动切换
        };
        console.log(this.config);
        if(this.getConfig()){
            $.extend(this.config,this.getConfig());
        };


        //保存tab标签列表,对应的内容列表
        this.tabItems = this.tab.find("ul.tab-nav li");

        this.contentItems = this.tab.find("div.content-wrap div.content-item");

        var config = this.config;

        if(config.triggerType=='click'){
            this.tabItems.bind(config.triggerType,function(){
                _that.invokeStyle($(this));
            })
        }
        else if(config.triggerType=='mouseover'){
            this.tabItems.bind(config.triggerType,function(){
                _that.invokeStyle($(this));
            })
        }
        else{
            this.tabItems.mouseover(function () {
                _that.invokeStyle($(this));
            });
        }

        if(config.auto){
            this.timer=null;
            this.loop=0;
            this.autoPlay();

            //鼠标移入，停止tab切换，移除自动播放
            this.tab.hover(function () {
                clearInterval(_that.timer);
            }, function () {
                _that.autoPlay();
            });
        }

        //设置默认显示第几个tab
        if (config.invoke > 1) {
            this.invokeStyle(this.tabItems.eq(config.invoke - 1));
        }
    };

    Tab.prototype = {
        getConfig:function(){
            var config=this.tab.attr('data-config');
            if(config&&config!==''){
                //参数已经配置
                //console.log($.parseJSON(config));
                return $.parseJSON(config);
            }else{
                //人工参数未配置
                return null;
            }
        },
        //时间驱动函数，改变内容和样式
        invokeStyle:function(currentTab){
            //获取切换效果
            var effect = this.config.effect;
            
            currentTab.addClass("active").siblings().removeClass('active');

            //tab内容切换
            var index=currentTab.index();
            if(effect=='default'){
                this.contentItems.eq(index).addClass('current').siblings().removeClass('current');
            }else if(effect=='fade'){
                this.contentItems.eq(index).fadeIn().siblings().fadeOut();
            }else{
                this.contentItems.eq(index).addClass('current').siblings().removeClass('current');
            }

            //如果配置的自动切换，要把当前的loop值设置成当前tab的index
            if (this.config.auto) {
                this.loop = index;
            }
        },

        //自动间隔切换
        autoPlay:function(){
            var that=this;
            that.timer=setInterval(function(){
                that.loop++;
                if(that.loop==that.tabItems.size()){
                    that.loop=0;
                }
                that.tabItems.eq(that.loop).trigger(that.config.triggerType);
            },that.config.auto);
        }
    };


    
    //多个调用
    Tab.init = function (tabs) {
        var that = this;
        tabs.each(function () {
            new that($(this));
        });
    };

    //注册成jq方法
    $.fn.extend({
        tab: function () {
            this.each(function () {
                new Tab($(this));
            });
            return this;    //jq链式调用
        }
    });


    window.Tab = Tab;

})(jQuery);