var $ = $ || window.$; //获得jquery的$标识符
const window_url = window.location.href;
const window_host = window.location.host;
class windowSize {
    constructor() {}
    updateSize() {
        var winWidth = null;
        var winHeight = null;
        if (window.innerWidth) {
            winWidth = window.innerWidth;
        } else if (document.body && document.body.clientWidth) {
            winWidth = document.body.clientWidth;
        }
        if (window.innerHeight) {
            winHeight = window.innerHeight;
        } else if (document.body && document.body.clientHeight) {
            winHeight = document.body.clientHeight;
        }
        if (
            document.documentElement &&
            document.documentElement.clientHeight &&
            document.documentElement.clientWidth
        ) {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
        }
        this.width = winWidth;
        this.height = winHeight;
    }
    width() {
        this.updateSize();
        return this.width;
    }
    height() {
        this.updateSize();
        return this.height;
    }
}
(function() {
    "use strict";
    //超星学习通
    if (window_host.indexOf("i.chaoxing.com") != -1) {
        //个人主页点击课程按钮
        $("#first108969").click();
        $("#first54652 h5").html("问卷");
        $("#siteName").html("华中科技大学");
        //修改网页标题
        document.title = "学习通";
    }
    if (window_host.indexOf("mooc2-ans.chaoxing.com") != -1) {
        //课程详情点击作业按钮
        $(
            ".stuNavigationList.nav-content ul:nth-of-type(1) li:nth-of-type(4)"
        ).click();
    }
    //中国大学慕课
    if (window_host.indexOf("www.icourse163.org") != -1) {
        var moocTitle = document.title.split("_")[0];
        document.title = moocTitle;
        if (window_url == "https://www.icourse163.org/") {
            //修改网页标题
            document.title = "中国大学MOOC";
            var moocTimesRun = 0;
            var moocInterval = setInterval(function() {
                moocTimesRun += 1;
                if (moocTimesRun === 2) {
                    clearInterval(moocInterval);
                }
                $(".slick-track>.slick-slide").each(function() {
                    console.log($(this).attr("data-index"));
                    $(this).hide();
                });
                $("._2QYIL>._31ZKq ").each(function() {
                    $(this).hide();
                });
                $(".ZvBbU").hide();
                $(".iYY4d").hide();
                $(".ha9Vg").hide();
                $("._1OE97").html(
                    '<div data-index="0" class="slick-slide" tabindex="-1" aria-hidden="true" style="outline: none; width: 776px; position: relative; left: 0px;"><div><div class="customMooc" tabindex="-1" style="width: 100%;height:100%; display: inline-block;"><img src="https://edu-image.nosdn.127.net/8EA2B6D4CF0CCE3155519C2BFDD46AE7.jpg" alt="MOOC" title="MOOC" style="width: 100%;height:100%;display:inline-block;"></div></div></div>'
                );
            }, 300);
        }
    }
    //智慧树
    if (window_host.indexOf("passport.zhihuishu.com") != -1) {
        document.title = "智慧树";
        setInterval(function() {
            $(".active.switch-wrap-signin.switch-wrap > .wall-sub-btn").click();
        }, 3000);
    }
    if (window_host.indexOf("onlineweb.zhihuishu.com") != -1) {
        setInterval(function() {
            document.title = "学生首页";
        }, 300);
    }
    if (
        window_host.indexOf("stuonline.zhihuishu.com") != -1 ||
        window_host.indexOf("onlineexamh5new.zhihuishu.com") != -1 ||
        window_host.indexOf("qah5.zhihuishu.com") != -1 ||
        window_host.indexOf("lc.zhihuishu.com") != -1
    ) {
        var zhihuishuTitle = document.title.split("_")[0];
        setInterval(function() {
            document.title = zhihuishuTitle;
        }, 300);
    }
    //洛谷
    if (window_host.indexOf("www.luogu.com.cn") != -1) {
        setTimeout(function() {
            var luoguOldTitle = document.title;
            console.log(luoguOldTitle);
            var luoguTimesRun = 0;
            var luoguInterval = setInterval(function() {
                luoguTimesRun += 1;
                if (luoguTimesRun === 5) {
                    clearInterval(luoguInterval);
                }
                var luoguTitle = luoguOldTitle.substring(0, luoguOldTitle.length - 18);
                document.title = luoguTitle;
            }, 300);
        }, 300);
    }
    //微助教
    if (window_host.indexOf("www.teachermate.com.cn") != -1) {
        setTimeout(function() {
            document.title = "微助教";
        }, 300);
    }
    //必应
    if (window_host.indexOf("bing.com") != -1) {
        setTimeout(function() {
            $(".cipa.sw_plus").click();
        }, 600);
    }
    //Github
    if (window_host.indexOf("github.com") != -1) {
        $("h2").each(function() {
            console.log($(this).attr("class"));
            console.log($(this).text());
            if ($(this).text().indexOf("Recent Repositories") != -1) {
                console.log("ok");
            }
        });
        $("h2:contains('Recent Repositories')").html("近期仓库");
    }
    //达达龟
    if (window_host.indexOf("www.dadagui.com") != -1) {
        $(".play-switch.pull-right").html("切换线路");
        setInterval(function() {
            var dadaguiTitle = document.title.split("-")[0];
            document.title = dadaguiTitle;
            var listHeight = $(".stui-player__left").css("height");
            $(".stui-player__side").css("height", listHeight);
        }, 300);
    }
    //茶杯狐
    if (window_host.indexOf("cupfox.app") != -1) {
        setTimeout(function() {
            $(".show-more-text").click();
            $(".show-more-text").remove();
        }, 800);
        setInterval(function() {
            //平铺模式
            $(".container").css("width", "1268");
            $(".main").css("width", "898");
            $(".container").css("margin", "0px 176px 0px 124px");
            $(".header").css("margin", "0px 0px 0px 124px");
            $(".search-box").css("margin", "0px 0px 0px 150px");
            $(".navs li:nth-of-type(1)").hide();
            $(".navs li:nth-of-type(2)").hide();
            $(".navs li:nth-of-type(3)").hide();
            //$(".fixed-nav").hide();
            $(".fixed-nav").css("right", "0px");
            $(".navs li:nth-of-type(4)").css("padding-left", "200px");
            $(".navs").css("right", "150px");
            $(".head").hide();
            $(".sidebar .banner-box").each(function() {
                $(this).remove();
            });
            $(".sidebar .items").hide();
            $(".search-field").attr("placeholder", "搜索");
            var cupfoxTitle = document.title.split("-")[0];
            document.title = cupfoxTitle;
        }, 300);
    }
    //知乎
    if (window_host.indexOf("www.zhihu.com") != -1) {
        setTimeout(function() {
            //自动展开
            $(".Button.ContentItem-more").click();
            $(".Button.ContentItem-more").remove();
            //问题详情页添加按钮
            //var questionUrl=$('meta[itemprop="url"]').attr('content');
            //$(".QuestionHeader-footer-main.QuestionHeader-main > .QuestionButtonGroup > a > .Button--blue.Button").after("<button type='button' class='Button Menu-item QuestionHeader-menu-item Button--blue'>使用匿名身份</button>");
            //$(".QuestionHeader-footer-main.QuestionHeader-main > .QuestionButtonGroup > a > .Button--blue.Button").after("<a href="+questionUrl+"/log type='button' class='Button Button--blue'>问题日志</a>");
            //$(".QuestionHeader-footer-main.QuestionHeader-main > .QuestionButtonGroup > a > .Button--blue.Button").after("<button type='button' class='Button Menu-item QuestionHeader-menu-item Button--blue'>举报问题</button>");
            //去除功能右栏多余按钮
            $("li.GlobalSideBar-categoryItem:nth-of-type(5)").remove();
            $("li.GlobalSideBar-categoryItem:nth-of-type(2)").remove();
            $("li.GlobalSideBar-categoryItem:nth-of-type(1)").remove();
        }, 300);
        //简化标题
        var zhihuTitleInterval = setInterval(function() {
            var zhihuTitle = document.title.substring(0, document.title.length - 5);
            document.title = zhihuTitle;
            if (document.title.indexOf("- 知乎") == -1) {
                clearInterval(zhihuTitleInterval);
            }
        }, 300);
        setInterval(function() {
            ///////////////设定平铺模式
            //首页顶栏容器
            $(".LoadingBar").remove();
            $(".AppHeader-inner").css("width", "1460px");
            $(".AppHeader-inner").css("max-width", "1460px");
            $(".AppHeader-inner").css("margin", "0px 20px 0px 20px");
            //首页底栏容器
            $(".Topstory-container").css("width", "1460px");
            $(".Topstory-container").css("margin", "10px 20px 10px 20px");
            //首页底栏左侧容器
            $(".Topstory-mainColumn").css("width", "1200px");
            //首页底栏右侧容器
            $(".GlobalSideBar").css("float", "left");
            $(".GlobalSideBar").css("width", "300px");
            //问题详情页底栏容器
            $(".Question-main").css("width", "1460px");
            //问题详情页底栏左侧容器
            $(".QuestionHeader-content").css("width", "1460px");
            $(".QuestionHeader-content").css("margin-left", "20px");
            $(".QuestionHeader-content").css("padding-left", "20px");
            $(".isLogin.QuestionHeader-content > .QuestionHeader-main").css(
                "max-width",
                "1000px"
            );
            //$(".isLogin.QuestionHeader-content > .QuestionHeader-side").css("max-width","200px");
            //问题详情页顶栏底侧按钮容器
            $(".QuestionHeader-footer-inner").css("width", "1460px");
            $(".QuestionHeader-footer-inner").css("padding-left", "0px");
            //问题详情页底栏左侧容器
            $(".Question-mainColumn").css("width", "1150px");
            //问题详情页顶栏容器
            $(".QuestionHeader-main").css("width", "1200px");
            $(".QuestionHeader-footer-main").css("margin-left", "20px");
            $(".QuestionHeader-footer-main").css("padding-left", "0px");
            //主页和问题详情页底栏左侧容器固定栏长度适应
            if (window_url == "https://www.zhihu.com/") {
                $(
                    ".ContentItem-actions.Sticky.RichContent-actions.is-fixed.is-bottom"
                ).css("width", $(".Topstory-mainColumn").outerWidth());
                $(
                    ".ContentItem-actions.Sticky.RichContent-actions.is-fixed.is-bottom"
                ).css("left", $(".Topstory-mainColumn").offset().left);
                $(".css-hdkarl.isCatalogV2.Catalog").css("opacity", "1");
                $(".css-hdkarl.isCatalogV2.Catalog").css("background-color", "white");
                $(".css-hdkarl.isCatalogV2.Catalog").css("border-radius", "5px");
                $(".css-hdkarl.isCatalogV2.Catalog").css(
                    "box-shadow",
                    "0 2px 7px rgb(0 0 0 / 30%)"
                );
                $(".css-hdkarl.isCatalogV2.Catalog").css(
                    "left",
                    $(".Topstory-mainColumn").offset().left +
                    $(".Topstory-mainColumn").outerWidth(true) +
                    300
                );
            } else if (window_url.indexOf("www.zhihu.com/question") != -1) {
                $(
                    ".is-bottom.is-fixed.RichContent-actions.Sticky.ContentItem-actions"
                ).css("width", $(".Question-mainColumn").outerWidth());
                $(
                    ".is-bottom.is-fixed.RichContent-actions.Sticky.ContentItem-actions"
                ).css("left", $(".Question-mainColumn").offset().left);
                $(".css-hdkarl.isCatalogV2.Catalog.css-1czzy4f").html("展开");
                $(".css-hdkarl.isCatalogV2.Catalog").css("opacity", "1");
                $(".css-hdkarl.isCatalogV2.Catalog").css("background-color", "white");
                $(".css-hdkarl.isCatalogV2.Catalog").css("border-radius", "5px");
                $(".css-hdkarl.isCatalogV2.Catalog").css(
                    "box-shadow",
                    "0 2px 7px rgb(0 0 0 / 30%)"
                );
                $(".css-hdkarl.isCatalogV2.Catalog").css(
                    "left",
                    $(".Question-mainColumn").offset().left +
                    $(".Question-mainColumn").outerWidth(true) +
                    800
                );
            }
            //发现页底栏容器
            $(".ExploreHomePage").css("width", "1460px");
            //发现页底栏内容容器
            $(".ExploreHomePage-sectionn").css("width", "1200px");
            $(".ExploreHomePage-ContentSection-body")
                .children()
                .children()
                .css("float", "left");
            $(".ExploreHomePage-ContentSection-body")
                .children()
                .children()
                .css("width", "700px");
            $(".ExploreHomePage-ContentSection-body")
                .children()
                .children()
                .css("margin-right", "20px");
            ///////////////进行细节优化
            //去除顶栏左侧多余入口
            $(".AppHeader-Tabs li:nth-of-type(2)").hide();
            $(".AppHeader-Tabs li:nth-of-type(4)").hide();
            //去除底栏左侧视频入口
            $(".TopstoryTabs-link:nth-of-type(4)").remove();
            //去除侧栏创作入口
            $(".CreatorEntrance").remove();
            //去除版权页脚
            $(".Footer").remove();
            $(".PageBottomFooter").remove();
            $(".ColumnHomeBottom-footer").remove();
            //去除侧栏推荐广告
            $(".AdvertImg").remove();
            $(".Business-Card-PcRightBanner-link").remove();
            //去除侧栏列表多余项目
            $(".GlobalSideBar-navList li:nth-of-type(3)").hide();
            $(".GlobalSideBar-navList li:nth-of-type(4)").hide();
            $(".GlobalSideBar-navList li:nth-of-type(5)").hide();
            $(".GlobalSideBar-navList li:nth-of-type(6)").hide();
            $(".GlobalSideBar-navList li:nth-of-type(7)").hide();
            $(".GlobalSideBar-navList li:nth-of-type(8)").hide();
            //修改搜索框提示词
            $(".SearchBar-input input").attr("placeholder", "搜索");
            $(".SimpleSearchBar-input input").attr("placeholder", "搜索");
            console.log(
                $(
                    "#Popover2-content > div > div:nth-child(1) > div.SearchBar-label"
                ).html()
            );
            if (
                $(
                    "#Popover2-content > div > div:nth-child(1) > div.SearchBar-label"
                ).html() == "搜索发现"
            ) {
                //去除搜索热榜
                $("#Popover2-content > div > div:nth-child(1)").remove();
            } else if ($("#Popover2-content > div > div:nth-child(1)") == undefined) {
                $("#Popover2-content").remove();
            }
            //去除问题锁定提示
            $(".QuestionAnswers-answerTip").remove();
            //去除文章内容中的更多操作按钮
            $(".Button.OptionsButton").remove();
            //去除文章内容中的词语搜索图标
            $(".css-1dvsrp").remove();
            $(".css-9ouloa").remove();
            $(".ImagePopover.Popover").remove();
            //去除文章内容中的答主徽章
            $("span.UserLink>span").remove();
            //去除文章内容中的标签(谢邀等)
            $(".LabelContainer-wrapper").remove();
            //去除文章内容中的赞赏容器
            $(".Reward").remove();
            //去除邀请回答栏
            $(".QuestionInvitation.Card").remove();
            //去除左侧栏底部撰写按钮
            $(
                ".Button--spread.Button--blue.QuestionAnswers-answerButton.Button"
            ).remove();
            //更改文章内容中的赞同与反对按钮
            $(".VoteButton--down.VoteButton.Button").html("反对");
            $(".VoteButton--up.VoteButton.Button > span").remove();
            //去除撰写评论时插入图片的vip小图标
            $(".css-agjc5i").remove();
            //去除热榜到底的文字提示
            $(".HotList-end").remove();
            //去除问题详情页顶栏多余按钮
            $(".GoodQuestionAction").remove();
            $(".QuestionButton-icon.Zi--Edit.Zi").remove();
            $(".ContentItem-action.ShareMenu.Popover").remove();
            $(".QuestionHeaderActions > .ShareMenu.Popover").remove();
            $(".Button--withLabel.Button--withIcon.Button--grey.Button").remove();
            //添加问题详情页顶栏相关按钮
            $(".Button--blue.Button--primary.FollowButton.Button").attr(
                "class",
                "Button Button--blue"
            );
            $(
                ".QuestionHeader-side > .QuestionButtonGroup > a > .Button--blue.Button"
            ).html("撰写回答");
            $(
                ".QuestionHeader-footer-main.QuestionHeader-main > .QuestionButtonGroup > a > button.Button--blue.Button"
            ).html("撰写回答");
            $(
                ".QuestionHeader-footer-main.QuestionHeader-main > .QuestionButtonGroup > a > button.Button--blue.Button > span > .QuestionButton-icon.Zi--Edit.Zi"
            ).remove();
            $(
                ".QuestionHeader-footer-main.QuestionHeader-main > .QuestionButtonGroup > .Button--blue.Button--primary.FollowButton.Button"
            ).attr("class", "Button Button--blue");
        }, 300);
    }
    //知乎专栏
    if (
        window_host.indexOf("zhuanlan.zhihu.com") != -1 ||
        window_url.indexOf("https://www.zhihu.com/column") != -1
    ) {
        if (window_url == "https://zhuanlan.zhihu.com/") {
            //添加按钮
            $(".ColumnPageHeader-Button").append(
                "<button type='button' class='Button ColumnPageHeader-WriteButton Button--blue'><a href='https://www.zhihu.com/creator/manage/creation/article'>我的文章</a></button>"
            );
            $(".ColumnPageHeader-Button").append(
                "<button type='button' class='Button ColumnPageHeader-WriteButton Button--blue'><a href='https://www.zhihu.com/people/cun-zai-87-8-48/columns'>我的专栏</a></button>"
            );
            $(".ColumnPageHeader-Button").append(
                "<button type='button' class='Button ColumnPageHeader-WriteButton Button--blue'><a href='https://zhuanlan.zhihu.com/'>换一换</a></button>"
            );
        }
        $(
            ".Button--withLabel.Button--withIcon.Button--grey.ColumnHomeRecommendation-refreshButton.Button"
        ).remove();
        $(".ColumnPageHeader-Button").children().css("margin-right", "10px");
        $(".ColumnHomeTitle").css("margin-bottom", "18px");
        //专栏页面简化
        setInterval(function() {
            let windowSizeInstance = new windowSize();
            let winWidth = windowSizeInstance.width();
            $(".ColumnPageHeader-content").css("width", "1460px");
            $(".ColumnPageHeader-Button").css("max-width", "1150px");
            $(".css-10l2ro8.Card").css("width", winWidth);
            $(".css-1xy3kyp").css("width", winWidth);
            $(".css-1xy3kyp").css("margin", "24px 20px 24px 20px");
            $(".css-7q9l37").remove();
            $(".Card.css-1xhi2j9").css("width", winWidth - 40);
            $(".Card.css-1xhi2j9")
                .children()
                .children()
                .css("width", winWidth - 40);
            $(".Card.css-1xhi2j9").css("margin", "10px 20px 0px 20px");
            $(".ContentItem-action.ShareMenu.Popover").remove();
            var buttonText = $(
                "button.Button--plain.ContentItem-action.Button:nth-of-type(2)"
            ).text();
            buttonText = buttonText.substring(
                buttonText.length - 2,
                buttonText.length
            );
            if (buttonText == "举报") {
                $(
                    "button.Button--plain.ContentItem-action.Button:nth-of-type(2)"
                ).remove();
            }
            $(".ColumnHomeTop").remove();
            $(".ColumnPageHeader-TitleMeta").remove();
            $(".Zi--EditSurround.Zi").remove();
            $(".ColumnHome-HomeBttom.ColumnHomeBottom").remove();
            $(".Button--plain.ColumnPageHeader-MenuToggler.Button").remove();
            $(
                "button.Button--blue.ColumnPageHeader-WriteButton.Button:nth-of-type(1)"
            ).html("撰写文章");
            $(".VoteButton--down.VoteButton.Button").html("反对");
            $(".VoteButton--up.VoteButton.Button > span").remove();
            $(".css-agjc5i").remove();
            $(".CornerButtons").remove();
            $(".public-DraftEditorPlaceholder-inner").html("评论");
        }, 300);
        //简化标题
        var zhihuZhuanlanTitleInterval = setInterval(function() {
            var zhihuZhuanlanTitle = document.title.substring(
                0,
                document.title.length - 5
            );
            document.title = zhihuZhuanlanTitle;
            if (window_url == "https://zhuanlan.zhihu.com/") {
                document.title = "知乎专栏";
            }
            if (document.title.indexOf("- 知乎") == -1) {
                clearInterval(zhihuZhuanlanTitleInterval);
            }
        }, 300);
    }
    //腾讯视频
    if (window_host.indexOf("v.qq.com") != -1) {
        setTimeout(function() {
            var tengxunshipinTitle = document.title.split("_")[0];
            tengxunshipinTitle = tengxunshipinTitle.split("-")[0];
            document.title = tengxunshipinTitle;
            $(".player_container_wide_switch").click();
            $("#new_vs_focus").remove();
            $("body > div.site_board_ads._dkb").remove();
            $(".mod_main_nav").remove();
            $("#new_vs_header").css("opacity", "1");
            $(".search_container").css("background-color", "#0f0f1e");
            $(".search_tools").css("background-color", "#0f0f1e");
            $(".search_tools .mod_filter .filter_item >a").css("color", "white");
            $("body").css("background-color", "#0f0f1e");
            $("body").css("height", $("body").outerHeight() + 150);
            $("#new_vs_header").css("height", $("#new_vs_header").outerHeight() + 12);
            $("#new_vs_header").css("background-color", "#0f0f1e");
            $(".search_btn > .btn_inner").html("搜索");
            $(".mod_row_box  ").css("margin-top", "80px");
            $(".mod_row_box  ").css("padding-top", "10px");
            $(".bold.figure_title_two_row.figure_title").css("color", "white");
            $(".mod_hd > .mod_title > .title_link").css("color", "white");
            $(".mod_hd > .mod_title").css("color", "white");
            $(".main_nav_3.main_nav").css("color", "white");
            $(
                "._quickopen_duration._quickopen.cf.mod_bd > .mod_column_side > .mod_rank_list > .rank_item > .rank_title"
            ).css("color", "white");
            $(".mod_column_side > .mod_rank_list").css("background-color", "#0f0f1e");
            $(".mod_column_side > .mod_rank_list").css(
                "box-shadow",
                "0 2px 7px rgb(0 0 0 / 30%)"
            );
            $(".mod_column_side > .mod_rank_list").css("border", "1px white solid");
            $("div > div.mod_column_side > div.mod_rank_list> a.rank_item.cf").css(
                "border",
                "none"
            );
            $(".mod_hd > .mod_page_small").css("background-color", "#0f0f1e");
            $(".desc_text > .desc_more").css("background-color", "#0f0f1e");
            $("div.item").css("background-color", "black");
            $(
                "._quickopen_duration._quickopen.cf.mod_bd > .mod_column_side > .mod_column_hd.mod_hd > .mod_title"
            ).css("color", "white");
            $(
                "#container_player > div > div.player_container > div.mod_player_section.cf"
            ).css(
                "height",
                $(
                    "#container_player > div > div.player_container > div.mod_player_section.cf"
                ).outerHeight() - 45
            );
            $("#container_player > div > div.player_container").css(
                "height",
                $(
                    "#container_player > div > div.player_container > div.mod_player_section.cf"
                ).outerHeight()
            );
        }, 300);
        setInterval(function() {
            let windowSizeInstance = new windowSize();
            let winHeight = windowSizeInstance.height();
            $(".txp_alert_info").remove();
            var columnname = $(
                "#video_scroll_wrap > div:nth-child(5) > div:nth-child(5)"
            ).attr("_wind");
            if (columnname == "columnname=精彩周边") {
                $("#video_scroll_wrap > div:nth-child(5) > div:nth-child(5)").remove();
                $("#video_scroll_wrap > div:nth-child(5) > div.mod_title").remove();
            }
            $("#container_player").css("height", winHeight - 68);
            $("#keywords").attr("placeholder", "搜索");
            $("#keywords").attr("value", "搜索");
            $("#smartbox").remove();
            $(
                "#search_container > div.wrapper > div.wrapper_main > div.mix_warp > div:nth-child(1) > div > div > div._playlist > div > a"
            ).remove();
            $("span.name").css("color", "white");
        }, 300);
    }
})();