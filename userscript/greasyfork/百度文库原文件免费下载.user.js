// ==UserScript==
// @name         百度文库原文件免费下载！
// @namespace    aiwenku
// @version      1.0.2
// @description  【长期稳定下载，永久维护更新】百度文库破解，每天免费下载百度文库原文件，无需登录百度文库，无需百度文库下载券，下载百度文库的原文件，非文字提取。脚本用户每天都有福利，能免费下载。为了防止下载接口被别人刷爆，扫码登录是必须的，没办法，谢谢大家的理解。使用方法：安装插件后打开百度文库文档页面，在页面左边会出现下载按钮，直接点击下载按钮即可。
// @author       zengyutong
// @include      *://wenku.baidu.com/view/*
// @require      https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js
// ==/UserScript==


(function () {
    'use strict';
    function render() {
        var content = $('<div>', {
            style: 'height:100px;width:50px;position:fixed;left:30px;top:200px;text-align:center;font-size:16px;text-decoration: none;'
        });
        var download = $('<a>', {
            style: 'display:inline-block;width:100%;height:50px;background-color:#ff7a45;color:white;line-height:50px;cursor:pointer;text-decoration: none;border-radius:50%;box-shadow:0px 1px 2px -2px rgba(0,0,0,0.16),0px 3px 6px 0px rgba(0,0,0,0.12),0px 5px 12px 4px rgba(0,0,0,0.09)'
        })
        download.text('下载');
        download.on('click', function () {
            var href = window.location.href;
            window.open('http://www.258wk.com/?url=' + href, '_blank');
        })
        content.append(download);
        $('body').append(content);
    }
    render();
})();