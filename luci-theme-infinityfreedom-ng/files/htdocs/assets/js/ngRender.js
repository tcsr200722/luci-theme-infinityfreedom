function renderPage(t){function e(){$("select.cbi-input-select,select:not([class])").each(function(){let t=$(this);t.addClass("form-select")})}function i(){$("input.cbi-input-text").each(function(){let t=$(this);t.addClass("form-control")})}function l(){var t={attributes:!1,childList:!0,subtree:!1};let e=$("div[data-dynlist]");if(e.length>0){var i=new MutationObserver(function(t,e){for(var i of t)"childList"===i.type||i.type;$("div[data-dynlist] > input").each(function(t,e){let i=$(e),l=i.next("img");i.addClass("mb-3"),i.addClass("form-control"),i.css("width","calc(100% - 20px)"),l.css("display","inline-block"),i.is(":visible")&&i.css("display","inline-block")}),$("div[data-dynlist] > select").each(function(t,e){let i=$(e),l=i.next("img");i.addClass("mb-3"),i.addClass("form-select"),i.css("display","inline-block"),l.css("display","inline-block"),i.css("width","calc(100% - 20px)")})});e.each(function(e,l){i.observe(l,t)})}}$("fieldset.cbi-section").each(function(t,e){let i=$(e),l=$('<div class="col-12"></div>'),a=$('<div class="card"></div>');i.wrap(l),i.wrap(a),i.addClass("card-body")}),$(".cbi-section").children("br").each(function(t,e){let i=$(e);i.next().length>0?i.replaceWith("<hr>"):i.remove()}),$("ul.cbi-tabmenu").each(function(t,e){let i=$(e),l=i.children("li");i.addClass("nav nav-tabs nav-bordered");let a=i.next();(a.is("fieldset")||a.hasClass("cbi-section-node")||a.hasClass("cbi-section-node-tabbed"))&&i.addClass("mb-3"),l.each(function(t,e){let i=$(e);i.addClass("nav-item");let l=i.find("a");i.hasClass("cbi-tab-disabled")?l.addClass("nav-link"):l.addClass("nav-link active")})}),$("input.cbi-button-add").each(function(t,e){let i=$(this);i.addClass("btn btn-success waves-effect waves-light")}),$("input.cbi-button-edit").each(function(t,e){let i=$(this);i.addClass("btn btn-info waves-effect waves-light")}),$("input.cbi-button-apply").each(function(t,e){let i=$(this);i.addClass("btn btn-primary waves-effect waves-light")}),$("input.cbi-button-save").each(function(t,e){let i=$(this);i.addClass("btn btn-info waves-effect waves-light")}),$("input.cbi-button-reset").each(function(t,e){let i=$(this);i.addClass("btn btn-warning waves-effect waves-light")}),$("input.cbi-input-remove").each(function(t,e){let i=$(this);i.addClass("btn btn-danger waves-effect waves-light")}),$("input.cbi-button-remove").each(function(t,e){let i=$(this);i.addClass("btn btn-danger waves-effect waves-light")}),$("input.cbi-button-reload").each(function(t,e){let i=$(this);i.addClass("btn btn-purple waves-effect waves-light")}),$("div.cbi-page-actions").each(function(t,e){let i=$(this);i.addClass("button-list"),i.css("text-align","right")}),$("input.cbi-button-up").each(function(t,e){let i=$(this);i.addClass("btn btn-purple waves-effect waves-light fa"),i.val("")}),$("input.cbi-button-down").each(function(t,e){let i=$(this);i.addClass("btn btn-purple waves-effect waves-light fa"),i.val("")}),$("input.cbi-button").each(function(t,e){let i=$(e);i.hasClass("btn")||i.addClass("btn btn-purple waves-effect waves-light")}),$("div.cbi-value").each(function(t,e){let i=$(e);i.addClass("mb-3");let l=i.children("label.cbi-value-title");l.length>0&&(i.addClass("row"),l.addClass("col-md-3 col-lg-3 col-xl-2 col-form-label"));let a=i.children("div.cbi-value-field");a.addClass("col-md-9 col-lg-9 col-xl-6")}),$("input.cbi-input-checkbox").each(function(){let t=$(this);t.addClass("form-check-input")}),e(),i(),$("input[type='text']").each(function(){let t=$(this);t.addClass("form-control mx-1")}),$("textarea").each(function(t,e){let i=$(e);i.addClass("form-control")}),$("input.cbi-input-password").each(function(t,e){let i=$(e);i.addClass("form-control")}),$("div.cbi-optionals").each(function(t,e){let i=$(e);i.css("display","flex");let l=i.children("select[data-optionals]");l.each(function(t,e){$(e).addClass("form-select"),$(e).css("width","auto")})}),$("div.cbi-section-create").each(function(t,e){let i=$(e),l=i.children("input.cbi-section-create-name");l.each(function(t,e){let i=$(e);i.css("width","auto")})}),l(),$("span.cbi-value-helpicon").each(function(t,e){let i=$(e),l='<i class="fas fa-info-circle"></i>';i.replaceWith(l)}),$("img[src='/luci-static/resources/cbi/reload.gif']").each(function(t,e){let i=$(e),l='<i class="fas fa-sync" title="'+i.attr("title")+'" onclick="'+i.attr("onclick")+'" style="cursor:pointer"></i>';i.after(l),i.hide(),i.siblings("input.form-control").each(function(t,e){$(e).css("display","inline"),$(e).css("width","90%")})}),$("img[src='/luci-static/resources/icons/tunnel.png']").each(function(t,e){let i=$(e),l='<i class="mdi mdi-connection" title=\''+i.attr("title")+"'></i>";i.after(l),i.hide()}),$("img[src='/luci-static/resources/icons/ethernet.png']").each(function(t,e){let i=$(e),l='<i class="fas fa-ethernet" title=\''+i.attr("title")+"'></i>";i.after(l),i.hide()}),$("table.cbi-section-table").each(function(){let e=$(this),i=e.children("tbody").first(),l=i.find("tr.cbi-section-table-titles").first(),a=i.find("tr.cbi-section-table-descr").first();if(!t&&l.length>0){let t=!0,e=!0;l.children("th").each(function(e,i){let l=$(i).html();null!=l&&null!=l&&""!=l&&(t=!1)}),a.children("th").each(function(t,i){let l=$(i).html();null!=l&&null!=l&&""!=l&&(e=!1)});let s="";if(t)l.remove();else{let t=l.detach();s=t.prop("outerHTML")}let n="";if(e)a.remove();else{let t=a.detach();n=t.prop("outerHTML")}if(!t||!e){let t="<thead>"+s+n+"</thead>";i.before(t)}}e.addClass("table");let s=$('<div class="table-responsive"></div>');e.wrap(s)}),$("table:not([class])").each(function(){let t=$(this);t.addClass("table"),t.addClass("mb-0");let e=$('<div class="table-responsive"></div>');t.wrap(e)}),$("legend").each(function(t,e){let i=$(e);if(null!=i.attr("id"))return;let l='<h4 class="header-title mb-3" style="font-size:large">'+i.text()+"</h4>";i.replaceWith(l)}),$("span.panel-title").each(function(t,e){let i=$(e),l=i.html(),a='<h3 class="card-title">'+l+"</h3>";i.replaceWith(a)})}let titleEle=$("h2[name=content]");if(titleEle.length>0){let t=$(titleEle[0]),e=t.html();$("#homelede_page_title").html(e),t.css("display","none")}else"undefined"!=typeof PageLevel2Title&&$("#homelede_page_title").html(PageLevel2Title);titleEle.length>1&&titleEle.each(function(t,e){if(t<1)return;let i=$(e);i.addClass("page-title"),i.css("display","inline-block"),i.css("color","#f3f7f9")});let cbiMapDescr=$("div.cbi-map-descr");if(cbiMapDescr.length>0){let t=$(cbiMapDescr[0]),e=t.html();$("#homelede_page_desc").html(e),$("#homelede_page_desc").attr("title",e),t.css("display","none")}if(cbiMapDescr.length>1&&cbiMapDescr.each(function(t,e){if(t<1)return;let i=$(e);i.css("display","inline-block"),i.attr("id","homelede_page_desc")}),"undefined"!=typeof luciLocation){let t=3==luciLocation.length&&"status"==luciLocation[1]&&"overview"==luciLocation[2];renderPage(t)}$(function(){if(cbi_init(),$("[data-password]").on("click",function(){"false"==$(this).attr("data-password")?($(this).siblings("input").attr("type","text"),$(this).attr("data-password","true"),$(this).addClass("show-password")):($(this).siblings("input").attr("type","password"),$(this).attr("data-password","false"),$(this).removeClass("show-password"))}),$("ul.nav-tabs>li.nav-item").on("click",function(){$("ul.nav-tabs>li.nav-item>a").each(function(t,e){let i=$(e);i.removeClass("active")});let t=$(this),e=t.find("a");e.addClass("active")}),-1!=window.location.href.indexOf("/docker/overview")){let t=$("div.pure-g.status");if(t.length>0){t.addClass("card-body");let e='<div class="col-12"><div class="card">'+t.prop("outerHTML")+"</div></div>";t.replaceWith(e)}$("div.pure-g.status div.img-con > img").each(function(t,e){let i=$(e);i.css("filter","brightness(0) invert(1)")})}-1!=window.location.href.indexOf("/network/diagnostics")&&$('div.cbi-map fieldset input:not([type="button"])').each(function(t,e){let i=$(e);i.css("cssText","margin-left:0!important;margin-bottom:5px");let l=i.nextAll("select");l.length>0&&l.css("display","inline-block");let a=i.nextAll('input[type="button"]');a.length>0&&a.css("display","inline-block")})});