// ==UserScript==
// @name         知乎手机页面优化
// @namespace    https://greasyfork.org/users/439775
// @version      0.2
// @description  知乎手机页面优化，自动展开，无APP提示
// @author       EricSong
// @include      http*://www.zhihu.com/question/*
// @include      http*://*.zhihu.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('body').style.removeProperty('overflow');

    // 自动展开
    document.querySelectorAll('.RichContent.is-collapsed')
        .forEach(n => {
            n.firstElementChild.style.removeProperty('max-height');
            n.classList.remove('is-collapsed');
        });

    // 调整样式，不显示APP打开按钮及手机页面modal
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.OpenInAppButton, .MobileModal-wrapper { display: none }`;
    document.querySelector('head').appendChild(style);
})();