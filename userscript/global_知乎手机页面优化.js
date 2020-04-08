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

// 海阔视界·油猴转换 v20.4.6 - (o˘◡˘o)
(async function () {
  try {
    const VERSION = "20.4.6";
    const EXCLUDE = "";
    if (EXCLUDE && EXCLUDE.test(location.href)) return;
    const MATCH = /http(.*?):\/\/www.zhihu.com\/question\/(.*?)|http(.*?):\/\/(.*?).zhihu.com\/p\/(.*?)/i;
    if (MATCH.test(location.href)) {
      console.log('match: 知乎手机页面优化');
      function addCss(styles) {
        let css;

        styles = styles.replace(/\n+\s*/g, ' ');
        css = document.createElement('style');

        if (css.styleSheet) css.styleSheet.cssText = styles;
        // Support for IE
        else css.appendChild(document.createTextNode(styles)); // Support for the rest

        css.type = 'text/css';

        document.getElementsByTagName('head')[0].appendChild(css);
      }
      const storePrefix = '海阔视界.';

      const Store = {
        get(key, defaultValue = null) {
          let value = window.localStorage.getItem(storePrefix + key);
          try {
            value = JSON.parse(value);
          } catch (_) {}
          return value !== null ? value : defaultValue;
        },
        set(key, value = null) {
          window.localStorage.setItem(storePrefix + key, JSON.stringify(value));
        },
        remove(key) {
          window.localStorage.removeItem(storePrefix + key);
        },
      };
      function addJs(url) {
        const unsafeWindow = window;
        const GM_addStyle = addCss;
        const GM_getValue = Store.get;
        const GM_setValue = Store.set;
        const GM_deleteValue = Store.remove;
        eval(request(url));
      }


    await addJs("https://gitee.com/qiusunshine233/hikerView/raw/master/userscript/greasyfork/%E7%9F%A5%E4%B9%8E%E6%89%8B%E6%9C%BA%E9%A1%B5%E9%9D%A2%E4%BC%98%E5%8C%96.user.js");

    }
  } catch (error) {
    console.error(error);
  }
})();
