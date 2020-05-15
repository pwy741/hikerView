// ==UserScript==
// @name         (持续更新)CSDN页面浮窗广告完全过滤净化(净化复制内容|自动展开|让你专注于文章|不影响功能使用)
// @namespace    https://github.com/AdlerED
// @version      2.1.9
// @description  ⚡️拥有数项独家功能的最强脚本，不服比一比⚡️|✔️CSDN体验秒杀AdBlock|✔️分辨率自适配，分屏不用滚动|✔️超级预优化|✔️独家超级免会员|✔️独家原创文章免登录展开|✔️独家推荐内容自由开关|✔️独家免登录复制|✔️独家防外链重定向|✔️独家论坛未登录自动展开文章、评论|✔️全面净化|✔️沉浸阅读|✔️净化剪贴板|✔️作者信息文章顶部展示
// @author       Adler
// @connect      www.csdn.net
// @include      *://*.csdn.net/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js
// @note         20-03-30 2.1.9 干掉“记录你的创作历程”，干掉未登录情况下的角标提醒
// @note         20-03-13 2.1.8 窄屏适配加强
// @note         20-03-13 2.1.7 更新简介
// @note         20-03-12 2.1.6 宽度自适应（感谢来自GitHub的朋友LeonG7的建议）！修复剪贴板净化无效的问题。
// @note         20-03-04 2.1.5 适配AdGuard
// @note         20-02-27 2.1.4 优化免登录复制
// @note         20-02-25 2.1.3 免登录复制更新，现已可用
// @note         20-02-24 2.1.2 By Github@JalinWang 更改去除剪贴板劫持的方式，使得原文格式在复制时能够保留
// @note         20-02-22 2.1.1 紧急修复由于 CSDN 修改前端结构导致的文章错位
// @note         20-02-11 2.1.0 若干动画优化，视觉体验更流畅
// @note         20-02-06 2.0.9 武汉加油！修改推荐内容切换开关位置，减少违和感
// @note         20-01-17 2.0.8 去除右侧广告
// @note         20-01-17 2.0.7 感谢来自GitHub的朋友“gleans”的建议，去掉页头广告
// @note         19-12-12 2.0.6 感谢来自GitHub的朋友“yexuesong”的建议，将作者信息在文章顶部展示
// @note         19-10-30 2.0.5 美化隐藏按钮，增加点击动画
// @note         19-10-30 2.0.4 删除CSDN官方在主页推送的文章（大多是广告）
// @note         19-10-30 2.0.3 添加更多屏蔽脚本
// @note         19-10-30 2.0.0 祝自己生日快乐~完全重写CSDNGreener，统一使用JQuery，效率更高
// @note         19-10-27 1.5.2 删除分享海报提示&&感谢GitHub的朋友“CHN-STUDENT”的反馈，去除底部课程推荐
// @note         19-10-27 1.5.1 感谢来自GitHub的朋友“CHN-STUDENT”的细致复现反馈，去除了底部的课程推荐广告
// @note         19-10-04 1.5.0 移除了底部主题信息和打赏
// @note         19-09-10 1.4.9 感谢来自GitHub的朋友“programmerZe”的细致复现反馈，修复了评论区点击查看回复后，已经展开的评论会收起的问题
// @note         19-09-04 1.4.8 感谢来自GitHub的朋友“dwdcth”的细致复现反馈，现在查看原创文章不会无限弹登录窗口了，且加强了自动展开功能
// @note         19-08-20 1.4.7 感谢油叉用户“SupremeSir”的反馈，修复了右侧悬浮栏遮挡文章的问题
// @note         19-08-14 1.4.6 无语。刚更新的免登录复制，又改了。修复！
// @note         19-08-13 1.4.5 更新了独家功能：免登录复制
// @note         19-08-13 1.4.4 感谢来自GitHub的朋友“iamsunxing”的反馈，修复了顶部不贴边的问题
// @note         19-08-01 1.4.3 感谢油叉用户“ddddy”的反馈，去除了更多推广广告
// @note         19-07-30 1.4.2 感谢油叉用户“周义杰”的反馈，增加了防CSDN外链重定向的功能（CSDN臭流氓）
// @note         19-07-20 1.4.1 修复了推荐内容开关跨文章无效问题（忘了配置Cookie作用域）
// @note         19-07-19 1.4.0 1. 构架大更新 2. 感谢来自GitHub的朋友"lukemin"的反馈，加入了下方推荐内容是否隐藏开关（实用）
// @note         19-07-13 1.3.0 感谢来自GitHub的朋友“Holaplace”的反馈，修复了文章无法自动展开的问题（CSDN总改这个，令人头疼）
// @note         19-06-08 1.2.6 感谢油叉用户“DeskyAki”的反馈，修复了文章无法自动展开的问题
// @note         19-06-07 1.2.4 修复了登录后评论无法正常打开的问题
// @note         19-06-07 1.2.3 感谢油叉用户"永远的殿下"的反馈，在一上午的努力攻克下，终于实现了未登录展开评论的语句
// @note         19-06-05 1.2.0 修复了评论无法自动展开的BUG
// @note         19-06-04 1.1.9 修复了无法自动展开的BUG（自闭了）
// @note         19-06-04 1.1.6 CSDN太坏了，把“消息”按钮的Class设置成了“GitChat”，所以修复了“消息”按钮消失的问题
// @note         19-06-04 1.1.5 1. 优化了论坛体验 2.美化、优化代码结构
// @note         19-06-04 1.1.4 感谢来自GitHub的朋友“iamsunxing”的反馈，增加了论坛广告匹配规则
// @note         19-06-03 1.1.3 感谢来自GitHub的朋友“wangwei135”的反馈，去除了评论区上方的广告
// @note         19-05-27 1.1.2 感谢油叉用户“夏伟杰”的反馈，修复了富文本编辑器无法使用的问题
// @note         19-05-25 1.1.0 1. 修复了主页广告的问题 2. 论坛自动展开 3. 论坛广告消除
// @note         19-05-25 1.0.9 感谢油叉用户“渣渣不准说话”的反馈，修复了收藏按钮消失的问题
// @note         19-03-01 1.0.3 添加页面选择性过滤规则
// @note         19-03-01 1.0.2 增加了净化剪贴板功能
// @note         19-03-01 1.0.1 修复了排版问题, 优化了代码结构
// @note         19-02-26 1.0.0 初版发布
// ==/UserScript==

// 海阔视界·油猴转换 v20.4.6 - (o˘◡˘o)
(async function () {
  try {
    const VERSION = "20.4.6";
    const EXCLUDE = "";
    if (EXCLUDE && EXCLUDE.test(location.href)) return;
    const MATCH = /(.*?):\/\/(.*?).csdn.net\/(.*?)/i;
    if (MATCH.test(location.href)) {
      console.log('match: (持续更新)CSDN页面浮窗广告完全过滤净化(净化复制内容|自动展开|让你专注于文章|不影响功能使用)');
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

    await addJs("https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js");
    await addJs("https://gitee.com/qiusunshine233/hikerView/raw/master/userscript/greasyfork/%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0-csdn%E9%A1%B5%E9%9D%A2%E6%B5%AE%E7%AA%97%E5%B9%BF%E5%91%8A%E5%AE%8C%E5%85%A8%E8%BF%87%E6%BB%A4%E5%87%80%E5%8C%96-%E5%87%80%E5%8C%96%E5%A4%8D%E5%88%B6%E5%86%85%E5%AE%B9-%E8%87%AA%E5%8A%A8%E5%B1%95%E5%BC%80-%E8%AE%A9%E4%BD%A0%E4%B8%93%E6%B3%A8%E4%BA%8E%E6%96%87%E7%AB%A0-%E4%B8%8D%E5%BD%B1%E5%93%8D%E5%8A%9F%E8%83%BD%E4%BD%BF%E7%94%A8.user.js");

    }
  } catch (error) {
    console.error(error);
  }
})();
