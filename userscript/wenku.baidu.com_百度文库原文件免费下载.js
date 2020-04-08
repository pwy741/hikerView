// ==UserScript==
// @name         百度文库原文件免费下载！
// @namespace    aiwenku
// @version      1.0.2
// @description  【长期稳定下载，永久维护更新】百度文库破解，每天免费下载百度文库原文件，无需登录百度文库，无需百度文库下载券，下载百度文库的原文件，非文字提取。脚本用户每天都有福利，能免费下载。为了防止下载接口被别人刷爆，扫码登录是必须的，没办法，谢谢大家的理解。使用方法：安装插件后打开百度文库文档页面，在页面左边会出现下载按钮，直接点击下载按钮即可。
// @author       zengyutong
// @include      *://wenku.baidu.com/view/*
// @require      https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js
// ==/UserScript==

// 海阔视界·油猴转换 v20.4.6 - (o˘◡˘o)
(async function () {
  try {
    const VERSION = "20.4.6";
    const EXCLUDE = "";
    if (EXCLUDE && EXCLUDE.test(location.href)) return;
    const MATCH = /(.*?):\/\/wenku.baidu.com\/view\/(.*?)/i;
    if (MATCH.test(location.href)) {
      console.log('match: 百度文库原文件免费下载！');
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

    await addJs("https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js");
    await addJs("https://gitee.com/qiusunshine233/hikerView/raw/master/userscript/greasyfork/%E7%99%BE%E5%BA%A6%E6%96%87%E5%BA%93%E5%8E%9F%E6%96%87%E4%BB%B6%E5%85%8D%E8%B4%B9%E4%B8%8B%E8%BD%BD.user.js
");

    }
  } catch (error) {
    console.error(error);
  }
})();
