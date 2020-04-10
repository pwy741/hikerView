const VERSION = '20.4.10';
const DEBUG = false;
const isTop = window.top === window.self;
const isNotTop = !isTop;
const PLUGIN_ATTR = 'userscript';
const PLUGIN_NAME = 'hiker';

let Href = location.href;

function log(...args) {
  if (!DEBUG) return;

  const message =
    `${new Date().toISOString().replace(/.+T|\..+/g, '')} › ` +
    args.map((v) => (typeof v === 'object' ? JSON.stringify(v) : v)).join(' ');

  console.log(
    '%c ' + message,
    'background: #d3f9d8; color: #343a40; padding: 6px; border-radius: 6px;'
  );
}

function Is(regex, href = Href) {
  return typeof regex === 'string'
    ? href.includes(regex)
    : regex.test(
        regex.source.includes('=http') ? href : href.replace(/=http[^&]+/, '')
      );
}

function IsNot(regex, href) {
  return !Is(regex, href);
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

async function fetchUrl(url, opts = {}) {
  let { name = url, version = VERSION } = opts;

  if (DEBUG) {
    log('fetchUrl:', url);
  }

  let data;

  const matches = url.match(/\/([^\/]+)\/(\d+\.\d+[^\/]+).*(\.\w+)$/);
  if (matches) {
    name = matches[1] + matches[3];
    version = matches[2];
    const cacheData = Store.get(name);

    if (cacheData && cacheData.version === version) {
      data = cacheData.data;
    }
  }

  if (!data) {
    data = await window
      .fetch(url)
      .then((res) => res.text())
      .then((data) => {
        Store.set(name, { data, version });
        return data;
      });
  }

  return data;
}

async function addJs(url, opts) {
  const data = await fetchUrl(url, opts);
  eval(data);
}

async function addCssUrl(url) {
  const data = await fetchUrl(url);
  addCss(data);
}

function addCss(styles) {
  let css;

  if (/^(http|\/)/.test(styles)) {
    return addCssUrl(styles);
  }

  styles = styles.replace(/\n+\s*/g, ' ');
  css = document.createElement('style');

  if (css.styleSheet) css.styleSheet.cssText = styles;
  // Support for IE
  else css.appendChild(document.createTextNode(styles)); // Support for the rest

  css.type = 'text/css';

  document.getElementsByTagName('head')[0].appendChild(css);
}

const PurifyStyle = `
display: none !important;
visibility: hidden !important;
width: 0 !important;
height: 0 !important;
max-width: 0 !important;
max-height: 0 !important;
overflow: hidden !important;
position: absolute !important;
left: -99999px !important;
opacity: 0 !important;
pointer-events: none !important;`;

async function go() {
  await addJs('https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js');

  const $ = jQuery.noConflict(true);

  $(function () {
    log('.install-link:', $('.install-link.is-hiker').length);

    if ($('.install-link.is-hiker').length > 1) return;

    $('#site-name-text a').html(
      `Greasy Fork<span>海阔视界 · 油猴转换 v${VERSION}</span>`
    );

    // fork: [e8a9a09](https://github.com/dankogai/js-base64/blob/master/base64.js)
    function setBase64(global = window) {
      // existing version for noConflict()
      global = global || {};
      var _Base64 = global.Base64;
      var version = '2.5.2';
      // if node.js and NOT React Native, we use Buffer
      var buffer;
      if (typeof module !== 'undefined' && module.exports) {
        try {
          buffer = eval("require('buffer').Buffer");
        } catch (err) {
          buffer = undefined;
        }
      }
      // constants
      var b64chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      var b64tab = (function (bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
      })(b64chars);
      var fromCharCode = String.fromCharCode;
      // encoder stuff
      var cb_utob = function (c) {
        if (c.length < 2) {
          var cc = c.charCodeAt(0);
          return cc < 0x80
            ? c
            : cc < 0x800
            ? fromCharCode(0xc0 | (cc >>> 6)) + fromCharCode(0x80 | (cc & 0x3f))
            : fromCharCode(0xe0 | ((cc >>> 12) & 0x0f)) +
              fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
              fromCharCode(0x80 | (cc & 0x3f));
        } else {
          var cc =
            0x10000 +
            (c.charCodeAt(0) - 0xd800) * 0x400 +
            (c.charCodeAt(1) - 0xdc00);
          return (
            fromCharCode(0xf0 | ((cc >>> 18) & 0x07)) +
            fromCharCode(0x80 | ((cc >>> 12) & 0x3f)) +
            fromCharCode(0x80 | ((cc >>> 6) & 0x3f)) +
            fromCharCode(0x80 | (cc & 0x3f))
          );
        }
      };
      var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
      var utob = function (u) {
        return u.replace(re_utob, cb_utob);
      };
      var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
          ord =
            (ccc.charCodeAt(0) << 16) |
            ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8) |
            (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
          chars = [
            b64chars.charAt(ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63),
          ];
        return chars.join('');
      };
      var btoa = global.btoa
        ? function (b) {
            return global.btoa(b);
          }
        : function (b) {
            return b.replace(/[\s\S]{1,3}/g, cb_encode);
          };
      var _encode = function (u) {
        var isUint8Array =
          Object.prototype.toString.call(u) === '[object Uint8Array]';
        return isUint8Array ? u.toString('base64') : btoa(utob(String(u)));
      };
      var encode = function (u, urisafe) {
        return !urisafe
          ? _encode(u)
          : _encode(String(u))
              .replace(/[+\/]/g, function (m0) {
                return m0 == '+' ? '-' : '_';
              })
              .replace(/=/g, '');
      };
      var encodeURI = function (u) {
        return encode(u, true);
      };
      // decoder stuff
      var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
      var cb_btou = function (cccc) {
        switch (cccc.length) {
          case 4:
            var cp =
                ((0x07 & cccc.charCodeAt(0)) << 18) |
                ((0x3f & cccc.charCodeAt(1)) << 12) |
                ((0x3f & cccc.charCodeAt(2)) << 6) |
                (0x3f & cccc.charCodeAt(3)),
              offset = cp - 0x10000;
            return (
              fromCharCode((offset >>> 10) + 0xd800) +
              fromCharCode((offset & 0x3ff) + 0xdc00)
            );
          case 3:
            return fromCharCode(
              ((0x0f & cccc.charCodeAt(0)) << 12) |
                ((0x3f & cccc.charCodeAt(1)) << 6) |
                (0x3f & cccc.charCodeAt(2))
            );
          default:
            return fromCharCode(
              ((0x1f & cccc.charCodeAt(0)) << 6) | (0x3f & cccc.charCodeAt(1))
            );
        }
      };
      var btou = function (b) {
        return b.replace(re_btou, cb_btou);
      };
      var cb_decode = function (cccc) {
        var len = cccc.length,
          padlen = len % 4,
          n =
            (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) |
            (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) |
            (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) |
            (len > 3 ? b64tab[cccc.charAt(3)] : 0),
          chars = [
            fromCharCode(n >>> 16),
            fromCharCode((n >>> 8) & 0xff),
            fromCharCode(n & 0xff),
          ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
      };
      var _atob = global.atob
        ? function (a) {
            return global.atob(a);
          }
        : function (a) {
            return a.replace(/\S{1,4}/g, cb_decode);
          };
      var atob = function (a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
      };
      var _decode = buffer
        ? buffer.from && Uint8Array && buffer.from !== Uint8Array.from
          ? function (a) {
              return (a.constructor === buffer.constructor
                ? a
                : buffer.from(a, 'base64')
              ).toString();
            }
          : function (a) {
              return (a.constructor === buffer.constructor
                ? a
                : new buffer(a, 'base64')
              ).toString();
            }
        : function (a) {
            return btou(_atob(a));
          };
      var decode = function (a) {
        return _decode(
          String(a)
            .replace(/[-_]/g, function (m0) {
              return m0 == '-' ? '+' : '/';
            })
            .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
      };
      var noConflict = function () {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
      };
      // export Base64
      global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer,
      };
    }

    async function install(isOffline, cb) {
      const installUrl = Href.replace(
        /.+scripts\/(\d+-)([^\/]+).*/,
        'https://greasyfork.org/scripts/$1$2/code/$2.user.js'
      );

      log('install:', installUrl);

      const code = await fetchUrl(installUrl);

      const TEMPLATE = `(async function () {
  try {
    // VERSION
    // EXCLUDE
    if (EXCLUDE && EXCLUDE.test(location.href)) return;
    // MATCH
    if (MATCH.test(location.href)) {
      console.log('match: NAME');
      function addCss(styles) {
        let css;

        styles = styles.replace(/\\n+\\s*/g, ' ');
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

      const unsafeWindow = window;
      const GM_addStyle = addCss;
      const GM_getValue = Store.get;
      const GM_setValue = Store.set;
      const GM_deleteValue = Store.remove;

      // CODE
    }
  } catch (error) {
    console.error(error);
  }
})();
`;

      function parseMeta(metaString) {
        log('parseMeta - metaString:', metaString);

        const meta = {};
        metaString
          .trim()
          .split(/[\s\n]*\n[\s\n]*/)
          .forEach((v) => {
            const matches = v.match(/\/\/\s*@(\S+)\s+(.+)/);
            if (!matches) return;
            const key = matches[1];
            const value = matches[2];
            if (!meta[key]) {
              meta[key] = [];
            }
            meta[key].push(value.trim());
          });

        log('parseMeta - meta:', meta);

        return meta;
      }

      function getUsCode(meta, url) {
        function toRegex(s) {
          return new RegExp(
            s.replace(/\*/g, '(.*?)').replace(/\//g, '\\/'),
            'i'
          );
        }

        let EXCLUDE = '';

        if (meta.exclude) {
          EXCLUDE = toRegex(meta.exclude.join('|'));
        }

        log('EXCLUDE:', EXCLUDE);

        let matchUrls = [];

        if (meta.match) {
          matchUrls = matchUrls.concat(meta.match);
        }
        if (meta.include) {
          matchUrls = matchUrls.concat(meta.include);
        }

        const MATCH = toRegex(matchUrls.join('|'));

        log('MATCH:', MATCH);

        let requireCode = '';
        const newline = '\n      ';

        if (meta.require) {
          requireCode = meta.require
            .map((v) => `eval(request("${v}"));`)
            .join(newline);
        }

        const code = url.startsWith('http')
          ? `eval(request("${url}"));`
          : `eval(decodeURIComponent("${encodeURIComponent(url)}"));`;

        return TEMPLATE.replace('NAME', meta.name[0])
          .replace(/\/\/ EXCLUDE/, `const EXCLUDE = ${EXCLUDE || '""'};`)
          .replace(/\/\/ VERSION/, `const VERSION = "${VERSION}";`)
          .replace(/\/\/ MATCH/, `const MATCH = ${MATCH};`)
          .replace(
            /\/\/ CODE/,
            `${requireCode}${requireCode ? newline : ''}${code}
`
          );
      }

      const matches = code.match(
        /\/\/\s*==\s*UserScript\s*==\n*([\s\S\n]+?)\n*\/\/\s*==\s*\/UserScript\s*==\n*([\s\S]+)/
      );

      const metaString = matches[1];
      const codeString = matches[2];
      const meta = parseMeta(metaString);
      const usName = meta.name && meta.name[0];
      log('name:', usName);

      let usCode = getUsCode(meta, isOffline ? codeString : installUrl);
      usCode = `// ==UserScript==
${metaString}
// ==/UserScript==

// 海阔视界·油猴转换 v${VERSION} - (o˘◡˘o)
${usCode}`;
      log(usCode);

      setBase64(window);

      log('Base64:', Base64);

      usCode = Base64.encode(usCode);

      const rule = `海阔视界 · 油猴脚本转换 (o˘◡˘o) ￥js_url￥global_${usName
        .replace(/\s+/g, '')
        .slice(0, 32)}@base64://${usCode}`;

      log(rule.slice(0, 100) + '...' + rule.slice(-100));

      fy_bridge_app.importRule(rule);

      cb();
    }

    $('#install-area').html(
      `<a class="install-link is-hiker is-offline">安装（本地版）</a>
      <span></span>
      <a class="install-link is-hiker is-online">安装（网络版）</a>
      <a class="install-help-link" title="如何安装" rel="nofollow" href="/zh-CN/help/installing-user-scripts">?</a><p class="install-hint"><strong>网络版</strong> 会每次加载当前脚本在油猴网站上的最新版代码，加载速度取决于你访问油猴网站的网络速度。</p>`
    );

    $('.install-link')
      .off('click')
      .on('click', function (e) {
        e.preventDefault();
        $('#install-area').addClass('is-installing');
        const $this = $(this);
        $this.addClass('is-active').html('正在安装...');

        install($this.hasClass('is-offline'), function () {
          $this
            .addClass('is-success')
            .removeClass('is-installing')
            .html('安装成功 ✔');
        });
      });
  });
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

if (isTop && Is(/greasyfork.org\/.*scripts\/\d/)) {
  addCss(`
.hiker--hide {${PurifyStyle}}

#site-name > a {
  display: none !important;
}

#main-header h1 {
  font-size: 1.5em;
  letter-spacing: 0px;
}

#site-name-text a {
  font-size: 20px;
  letter-spacing: 0;
}

#site-name-text span {
  font-size: 12px;
  letter-spacing: 0;
  color: #FFC107;
  position: absolute;
  right: 1em;
  top: 1em;
}

#script-info header h2 {
  font-size: 1.2em;
  margin-bottom: .5em;
}

#install-area {
  font-size: 14px;
}

#install-area a {
  border-radius: 2px;
}

.install-link {
  margin-right: .5em;
  padding: 5px 10px;
}

.install-link.is-offline {
  background-color: #1971c2 !important;
}

.install-link.is-online {
  background-color: #7950f2 !important;
}

#install-area.is-installing .install-link {
  pointer-events: none;
}

.install-link.is-active {
  background-color: #d9480f !important;
}

.install-link.is-success {
  background-color: #2b8a3e !important;
}

.install-hint {
  font-size: 13px;
  color: #FF5722;
  padding: 5px;
  border-top: 1px dotted #FF5722;
  border-bottom: 1px dotted #FF5722;
}
`);

  try {
    ready(go);
  } catch (error) {
    console.error('油猴脚本转换错误：', error);
  }
}