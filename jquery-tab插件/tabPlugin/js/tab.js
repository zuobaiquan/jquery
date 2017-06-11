(function ($) {
    var Tab = function (tab) {
        var that = this;
        //保存单个tab组件
        this.tab = tab;
        //配置默认参数
        this.config = {
            'triggerType': 'mouseover',  //鼠标触发类型
            'effect': 'default',        //内容切换效果
            'invoke': 1,             //默认显示第几个tab
            'auto': false             //定义是否自动切换
        };
        //如果配置参数存在，就扩展默认的配置参数
        if (this.getConfig()) {
            $.extend(this.config, this.getConfig());
        }
        //保存tab标签列表,对应的内容列表
        this.tabItems = this.tab.find("ul.tab-nav li");
        this.contentItems = this.tab.find("div.content-wrap div.content-item");
        //保存配置参数
        var config = this.config;
        if (config.triggerType === 'click') {
            this.tabItems.bind(config.triggerType, function () {
                that.invoke($(this));
            })
        } else if (config.triggerType === 'mouseover') {
            this.tabItems.bind(config.triggerType, function () {
                alert(2)
            });
        } else {
            this.tabItems.mouseover(function () {
                alert(2)
            });
        }
        //自动切换
        if (config.auto) {
            //定义一个全局的定时器
            this.timer = null;
            //计数器
            this.loop = 0;
            this.autoPlay();
            this.tab.hover(function () {
                window.clearInterval(that.timer);
            }, function () {
                that.autoPlay();
            });
        }
        //设置默认显示第几个tab
        if (config.invoke > 1) {
            this.invoke(this.tabItems.eq(config.invoke - 1));
        }
    };

    Tab.prototype = {
        //获取配置参数
        getConfig: function () {
            //获取tab节点上的data-config
            var config = this.tab.attr("data-config");
            //确保有配置参数
            if (config && config != "") {
                return $.parseJSON(config);
            } else {
                return null;
            }
        },
        //事件驱动函数
        invoke: function (currentTab) {
            var that = this;
            var index = currentTab.index();
            currentTab.addClass('active').siblings().removeClass('active');
            var effect = this.config.effect;
            var contentItems = this.contentItems;
            if (effect === 'default') {
                contentItems.eq(index).addClass('current').siblings().removeClass('current');
            } else if (effect === 'fade') {
                contentItems.eq(index).fadeIn().siblings().fadeOut();
            } else {
                contentItems.eq(index).addClass('current').siblings().removeClass('current');
            }
            //如果配置的自动切换，要把当前的loop值设置成当前tab的index
            if (this.config.auto) {
                this.loop = index;
            }
        },
        autoPlay: function () {
            var that = this,
                tabItems = this.tabItems,//临时保存tab列表
                tabLength = tabItems.size(),
                config = this.config;
            this.timer = window.setInterval(function () {
                that.loop++;
                if (that.loop >= tabLength) {
                    that.loop = 0;
                }
                tabItems.eq(that.loop).trigger(config.triggerType);
            }, config.auto);
        }
    };

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