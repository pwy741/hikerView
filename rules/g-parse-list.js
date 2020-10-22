/**
 * mode 通用设置说明
 *  0  : 解析集合页 
 * 数字(1-4...) : 网页解析表   
 * '①' : ①HTV009  '②' : ②迪奥解析 ...
 *  ①  ②  ③  ④  ⑤  ⑥  ⑦  ⑧  ⑨  ⑩
 *  ⑪  ⑫  ⑬  ⑭  ⑮  ⑯  ⑰  ⑱  ⑲  ⑳
 * */

// 爱奇艺设置
var iqiyi_mode = 0;
var iqiyi_coding = '8191'; // (仅③有效)视频编码 ：8191 - H265(可能只有声音没有画面) 8196 - H264(可能没有4K地址)
var iqiyi_Resolution = '800'; // (仅③有效)分辨率：800-4k  600-蓝光  500-超清
// 腾讯设置
var qq_mode = 0;
var qq_sharpness = 'fhd'; // (仅③有效)sd-标清 hd-高清 shd-超清 fhd-蓝光
// 优酷设置
var youku_mode = 0;
// 芒果设置
var mgtv_mode = 0;
// 咪咕设置
var migu_mode = 0;
var sharpness = 1; // 1-最清 2-最低 3-可选

// 全局网页解析列表(可按格式添加修改)
var parsing_list = [
    '我爱解析￥https://vip.52jiexi.top/?url=',
    '菜鸟￥https://jiexi.bm6ig.cn/?url=',
    '久播￥https://jx.jiubojx.com/vip.php?url='
];
var HTV009_pre = [
    'https://user.htv009.com/json?url=',
    'http://5.nmgbq.com/j1/api.php?url=',
    'https://jx.ikancloud.cn/api.php?url=',
    'https://zhima18.cn/plugin/jiexi.php?url='
];
// 全局直链解析列表(可按格式添加修改)
var parse_list = [
    `①HTV009￥` + HTV009_pre[Math.floor(Math.random() * 4)] + `￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = HTV009.toUrl(input);url!=''?url:getUrl(input)`,
    `②迪奥￥http://api.1dior.cn/analysis/first/api.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 迪奥.toUrl(input);url!=''?url:getUrl(input)`,
    `③北极XS￥http://beijixs.cnn?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 北极XS.toUrl(input);url!=''?url:getUrl(input)`,
    `④Mao全网￥https://www.cuan.la/m3u8.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = Mao全网.toUrl(input);url!=''?url:getUrl(input)`,
    `⑤TX￥https://qq.79da.com/api.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = TX.toUrl(input);url!=''?url:getUrl(input)`,
    `⑥黑云￥https://jiexi.380k.com/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 黑云.toUrl(input);url!=''?url:getUrl(input)`,
    `⑦Maosp￥http://39.maosp.me/jx/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = Maosp.toUrl(input);url!=''?url:getUrl(input)`,
    `⑧wkjx￥https://www.wkjx.me/api/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = wkjx.toUrl(input);url!=''?url:getUrl(input)`,
    `⑨qinian￥http://jx.qinian.cc/jx/ckflv/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = qinian.toUrl(input);url!=''?url:getUrl(input)`,
    `⑩涂叶￥https://1717.ntryjd.net/0526/api.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 涂叶.toUrl(input);url!=''?url:getUrl(input)`,
    `⑪huayue360￥https://jx.huayue360.cn/player/analysis.php?v=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = huayue360.toUrl(input);url!=''?url:getUrl(input)`,
    `⑫qnzfs￥https://jxcn.qnzfs.cn/player/analysis.php?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = qnzfs.toUrl(input);url!=''?url:getUrl(input)`,
    `⑬ds973￥https://play.ds163.cc/973/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = ds973.toUrl(input);url!=''?url:getUrl(input)`,
    `⑭星驰￥https://vip.cjys.top/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 星驰.toUrl(input);url!=''?url:getUrl(input)`,
    `⑮全民￥https://jx.gepubbs.com/jiexi/?url=￥@lazyRule=.js:eval(fetch('hiker://files/rules/js/g-parse-list.js',{}));var url = 全民.toUrl(input);url!=''?url:getUrl(input)`
];

eval(getCryptoJS());
var tools = {
    kem: 'https://gitee.com/KemPetrichor/hiker.resolver/raw/master/kem.js',
    MD5: function (data) {
        return CryptoJS.MD5(data).toString(CryptoJS.enc.Hex);
    },
    decrypt: function (text, key, iv) {
        var result = CryptoJS.AES.decrypt(text, CryptoJS.enc.Utf8.parse(key), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return result.toString(CryptoJS.enc.Utf8);
    }
};

var HTV009 = {
    toUrl: function (input) {
        try {
            var json = JSON.parse(fetch(input, {}));
            var url = (json.code == '200' ? json.url + '#HTV009.mp4' : '');
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@' + json.domain + '}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 迪奥 = {
    toUrl: function (input) {
        try {
            var in_url = input.indexOf('migu') > -1 ? (input.split('cid=')[1] + '@miguvideo') : input.split('url=')[1];
            var json = JSON.parse(fetch(input.split('?url=')[0], { body: 'url=' + in_url, method: 'POST' }));
            var url = (json.code == 200 ? json.url + '#迪奥.mp4' : '');
            if (url != '') {
                url = (url.indexOf('http') > -1 ? url : 'http:' + url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 北极XS = {
    Init: function () {
        if (getVar('VIEWSTATE').length == 0) {
            var beiji_html = fetch('http://beijixs.cn', {});
            putVar({ key: 'VIEWSTATE', value: parseDomForHtml(beiji_html, 'body&&form&&input&&value') });
            putVar({ key: 'EVENTVALIDATION', value: parseDomForHtml(beiji_html, 'body&&form&&input,2&&value') });
        }
    },
    toUrl: function (input) {
        try {
            this.Init();
            var html = fetch('http://beijixs.cn/?url=', { body: 'Button1=解析&TextBox4=' + iqiyi_Resolution + '&DropDownList2=' + iqiyi_coding + '&DropDownList1=' + qq_sharpness + '&TextBox1=' + input.split('url=')[1] + '&__VIEWSTATE=' + getVar('VIEWSTATE') + '&__EVENTVALIDATION=' + getVar('EVENTVALIDATION'), method: 'POST' });
            var json = JSON.parse(parseDomForHtml(html, 'body&&#TextBox2&&value'));
            return json.videos[0].url + '#北极XS.mp4';
        } catch (e) {
            return '';
        }

    }
};
var Mao全网 = {
    toUrl: function (input) {
        try {
            var html = fetch(input, {});
            var url = decodeURIComponent(tools.decrypt(html.split('"url":"')[1].split('"')[0], "dvyYRQlnPRCMdQSe", html.split('bt_token = "')[1].split('"')[0])) + '#Mao全网.mp4';
            return url.indexOf('url=') > -1 ? url.split('url=')[1] : url;
        } catch (e) {
            return '';
        }
    }
};
var TX = {
    toUrl: function (input) {
        try {
            var json = JSON.parse(fetch(input.split('url=')[0], { body: 'url=' + input.split('url=')[1], method: 'POST' }));
            var url = ((json.code == 200 && /m3u8/.test(json.url)) ? (json.url + '#TX.mp4') : '');
            if (url != '') {
                url = (url.indexOf('http') > -1 ? url : 'http:' + url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 黑云 = { //此解析来自KEM大佬和Reborn吐大佬, 特此感谢
    mode: 1, // kem大佬网络版：0 , 本地：1
    api: "https://jx.shunyiwenxiu.com/dhyjx_ver_9.1.php",
    parse_url_prefix: 'https://jiexi.380k.com/?url=',
    encrypt_file: "https://jx.shunyiwenxiu.com/js/ACCot.js",
    base_key: "daheiyunjiexi0614",
    local_got_key: "daheiyun1888",
    local_token_key: "_wp6f",
    keyEncryption: function (key) {
        key = tools.MD5(key + this.local_got_key);
        key = tools.MD5(key + this.local_got_key);
        return key;
    },
    tokenEncryption: function (key) {
        return tools.MD5(key + this.local_token_key);
    },
    toUrl: function (src_url) {
        try {
            if (this.mode) {
                src_url = this.rebuildUrl(src_url);
                let url = src_url.split('=')[1];
                let time = parseInt((new Date().getTime() / 1000).toString());
                let key = this.keyEncryption(url + time + this.base_key);
                let data = 'url=' + url
                    + '&tm=' + time
                    + '&key=' + key
                    // + '&key2=' + this.key2
                    + '&token=' + this.tokenEncryption(key)
                    + '&sdky=' + this.tokenEncryption(time);
                let options = {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                    body: data,
                    method: "POST"
                };
                let result = fetch(this.api, options);
                let playUrl = JSON.parse(result).url;
                if (playUrl.indexOf("http") === -1) {
                    playUrl = "https://" + playUrl;
                }
                return playUrl + '#黑云.mp4';
            } else {
                eval(fetch(tools.kem, {}));
                return daheiyun.getUrl(src_url) + '#黑云w.mp4';
            }
        } catch (e) {
            return '';
        }
    },
    rebuildUrl: function (old_url) {
        return old_url.indexOf(this.parse_url_prefix) > -1 ? old_url : this.parse_url_prefix + old_url;
    },
};
var Maosp = {
    mode: 1, // kem大佬网络版：0 , 本地：1
    toUrl: function (input) {
        try {
            if (this.mode) {
                var html = fetch(input, {});
                var url = decodeURIComponent(tools.decrypt(html.split('"url":"')[1].split('"')[0], "dvyYRQlnPRCMdQSe", html.split('bt_token = "')[1].split('"')[0])) + '#Maosp.mp4';
                if (url.indexOf('titan.mgtv') > -1) {
                    url = url + ';{Referer@http://39.maosp.me}';
                }
                return url.indexOf('url=') > -1 ? url.split('url=')[1] : url;
            } else {
                eval(fetch(tools.kem, {}));
                return maosp.getUrl(input);
            }
        } catch (e) {
            return '';
        }
    }
};
var wkjx = {
    toUrl: function (input) {
        try {
            var html = fetch(input, {});
            var vkey = html.split("vkey = '")[1].split("'")[0];
            var json = JSON.parse(fetch('https://www.wkjx.me/api/api.php', { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'vkey=' + vkey, method: 'POST' }));
            var url = (json.ckflv == 200 ? json.url + '#wkjx.mp4' : '');
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://www.wkjx.me}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var qinian = {
    toUrl: function (input) {
        try {
            var html = fetch(input, {});
            var vkey = html.split("vkey = '")[1].split("'")[0];
            var json = JSON.parse(fetch('http://jx.qinian.cc/jx/ckflv/api.php', { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'vkey=' + vkey, method: 'POST' }));
            var url = (json.ckflv == 200 ? json.url + '#qinian.mp4' : '');
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@http://jx.qinian.cc}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 涂叶 = {
    toUrl: function (input) {
        try {
            if (input.indexOf('mgtv') > 0)
                return '';
            var in_url = input.indexOf('migu') > -1 ? (input.split('cid=')[1] + '@miguvideo') : input.split('url=')[1];
            var json = JSON.parse(fetch(input.split('?')[0], { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'url=' + in_url, method: 'POST' }));
            var url = (json.code == 200 ? json.url + '#涂叶.mp4' : '');
            if (url != '' && url.indexOf('ykplay') > 0) {
                url = decodeURIComponent(url.split('url=')[1]);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var huayue360 = {
    toUrl: function (input) {
        try {
            var html = fetch(input, { headers: { 'Referer': 'http://www.k1080.net/' }, method: 'GET' });
            var vod = html.match(/vod_\w{10}/g);
            var a = vod[0].split('_')[1];
            var b = vod[1].split('_')[1];
            var c = [];
            for (var i = 0; i < b.length; i++) {
                c[b[i]] = a[i];
            }
            var d = c.join('');
            var e = CryptoJS.MD5(d).toString();
            var key = e.substring(0x10);
            var iv = e.substring(0x0, 0x10);
            eval(html.match(/var config[\s\S]*?}/)[0]);
            var url = tools.decrypt(config.url, key, iv) + '#huayue360.mp4';
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@http://www.k1080.net}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var qnzfs = { //此解析来源：段念大佬，感谢
    toUrl: function (input) {
        try {
            var html = fetch(input.replace('url=','v='), { headers: { 'Referer': 'https://jx.qnzfs.cn' }, method: 'GET' });
            var vod = html.match(/vod_\w{10}/g);
            var a = vod[0].split('_')[1];
            var b = vod[1].split('_')[1];
            var c = [];
            for (var i = 0; i < b.length; i++) {
                c[b[i]] = a[i];
            }
            var d = c.join('');
            var e = CryptoJS.MD5(d).toString();
            var key = e.substring(0x10);
            var iv = e.substring(0x0, 0x10);
            eval(html.match(/var config[\s\S]*?}/)[0]);
            var url = tools.decrypt(config.url, key, iv) + '#qnzfs.mp4';
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://jx.qnzfs.cn}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var ds973 = { //可以解析B站番剧
    getK2: function (url_h2_key_time_domain, k1) {
        function _0x4e0925(_0x578dc8, _0x5d0281) {
            return (((((_0x578dc8 >> 0x1) + (_0x5d0281 >> 0x1)) << 0x1) + (0x1 & _0x578dc8)) + (0x1 & _0x5d0281));
        }
        for (var _0x5d0281 = [], _0x50ce0e = 0x0; _0x50ce0e < 0x40;)
            _0x5d0281[_0x50ce0e] = (0x0 | (0x100000000 * Math['abs'](Math['sin'](++_0x50ce0e))));
        var _0x8d6c5d = url_h2_key_time_domain;
        for (var _0x50ce0e, _0x1c2154, _0x3abfc3, _0x36e659, _0x39a787 = [], _0x27a6ea = unescape(encodeURI(_0x8d6c5d)), _0x368518 = _0x27a6ea['length'], _0x35a362 = [_0x50ce0e = 0x67452301, _0x1c2154 = -0x10325477, ~_0x50ce0e, ~_0x1c2154], _0x29ba8c = 0x0; _0x29ba8c <= _0x368518;)
            _0x39a787[_0x29ba8c >> 0x2] |= (_0x27a6ea['charCodeAt'](_0x29ba8c) || 0x80) << (_0x29ba8c++ % 0x4 * 0x8);
        for (_0x39a787[_0x8d6c5d = (0x10 * ((_0x368518 + 0x8) >> 0x6)) + 0xe] = 0x8 * _0x368518, _0x29ba8c = 0x0; _0x29ba8c < _0x8d6c5d; _0x29ba8c += 0x10) {
            for (_0x368518 = _0x35a362, _0x36e659 = 0x0; _0x36e659 < 0x40;)
                _0x368518 = [_0x3abfc3 = _0x368518[0x3], _0x4e0925(_0x50ce0e = _0x368518[0x1], ((_0x3abfc3 = _0x4e0925(_0x4e0925(_0x368518[0x0], [((_0x50ce0e & (_0x1c2154 = _0x368518[0x2])) | (~_0x50ce0e & _0x3abfc3)), ((_0x3abfc3 & _0x50ce0e) | (~_0x3abfc3 & _0x1c2154)), ((_0x50ce0e ^ _0x1c2154) ^ _0x3abfc3), (_0x1c2154 ^ (_0x50ce0e | ~_0x3abfc3))][_0x368518 = (_0x36e659 >> 0x4)]), _0x4e0925(_0x5d0281[_0x36e659], _0x39a787[(([_0x36e659, ((0x5 * _0x36e659) + 0x1), ((0x3 * _0x36e659) + 0x5), (0x7 * _0x36e659)][_0x368518] % 0x10) + _0x29ba8c)]))) << (_0x368518 = [0x7, 0xc, 0x11, 0x16, 0x5, 0x9, 0xe, 0x14, 0x4, 0xb, 0x10, 0x17, 0x6, 0xa, 0xf, 0x15][((0x4 * _0x368518) + (_0x36e659++ % 0x4))])) | (_0x3abfc3 >>> (0x20 - _0x368518))), _0x50ce0e, _0x1c2154];
            for (_0x36e659 = 0x4; _0x36e659;)
                _0x35a362[--_0x36e659] = _0x4e0925(_0x35a362[_0x36e659], _0x368518[_0x36e659]);
        }
        for (_0x8d6c5d = ''; _0x36e659 < 0x20;)
            _0x8d6c5d += ((_0x35a362[_0x36e659 >> 0x3] >> (0x4 * (0x1 ^ (0x7 & _0x36e659++)))) & 0xf).toString(0x10);
        _0x8d6c5d = _0x8d6c5d.substring(0x0, 0x10);
        h2_bbe = k1.substring(0x0, 0x10);
        var c = '';
        for (var i in _0x8d6c5d) {
            c += _0x8d6c5d[i] + h2_bbe[i];
        }
        return c;
    },
    toUrl: function (input) {
        try {
            if (/bilibili.*?p=/.test(input)) {
                return xbeibeix.toUrl(input);
            } else {
                var html = fetch(input, {});
                var h2 = fetch('https://play.ds163.cc/973/' + html.match(/src="(.*?)"/)[1], {});
                eval('k1="' + h2.match(/eval\("(.*?)"\);/)[1] + '"');
                k1 = k1.split("'")[3];
                eval(h2.match(/var h2_param[\s\S]*?}/)[0].replace(/document\.domain/g, '"play.ds163.cc"'));
                var body_parse = 'apiname=api_jx_client.php&url=' + h2_param.url + '&time=' + h2_param.time + '&referer=https://play.ds163.cc&key=' + h2_param.h2_key + '&key2=' + this.getK2(h2_param.url + h2_param.h2_key + h2_param.time + h2_param.domain, k1) + '&pltfrom=1100';
                var json = JSON.parse(fetch('https://play.ds163.cc/973/api_jx_client.php', { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: body_parse, method: 'POST' }));
                var url = json.code == 200 ? (json.data + '#ds973.mp4') : '';
                //setError(JSON.stringify(json));
                return url;
            }
        } catch (e) {
            return '';
        }
    }
};
var 星驰 = {
    getToken_Keep: function (key) {
        function lco(t) {
            var a = lcb(1) + t;
            return a.replace(/[\-|\,]/g, '');
        }
        function lcl(x, y) {
            var a = (x & 0xFFFF) + (y & 0xFFFF);
            var b = (x >> 16) + (y >> 16) + (a >> 16);
            return (b << 16) | (a & 0xFFFF);
        }
        function lcc(a, b) {
            return (a << b) | (a >>> (32 - b));
        }
        function lcf(a, b, c, d, x, s, t) {
            return lce((b & c) | ((~b) & d), a, b, x, s, t);
        }
        function lcg(a, b, c, d, x, s, t) {
            return lce((b & d) | (c & (~d)), a, b, x, s, t);
        }
        function lce(q, a, b, x, s, t) {
            return lcl(lcc(lcl(lcl(a, q), lcl(x, t)), s), b);
        }
        function lch(a, b, c, d, x, s, t) {
            return lce(b ^ c ^ d, a, b, x, s, t);
        }
        function lci(a, b, c, d, x, s, t) {
            return lce(c ^ (b | (~d)), a, b, x, s, t);
        }
        function lcb(x) {
            var a = 1732584193;
            var b = -271733879;
            var c = -1732584194;
            var d = 271733878;
            if (x !== '1') {
                for (var i = 0; i < x.length; i += 16) {
                    var a1 = a;
                    var b1 = b;
                    var c1 = c;
                    var d1 = d;
                    a = lcf(a, b, c, d, x[i + 0], 7, -680876936);
                    d = lcf(d, a, b, c, x[i + 1], 12, -389564586);
                    c = lcf(c, d, a, b, x[i + 2], 17, 606105819);
                    b = lcf(b, c, d, a, x[i + 3], 22, -1044525330);
                    a = lcf(a, b, c, d, x[i + 4], 7, -176418897);
                    d = lcf(d, a, b, c, x[i + 5], 12, 1200080426);
                    c = lcf(c, d, a, b, x[i + 6], 17, -1473231341);
                    b = lcf(b, c, d, a, x[i + 7], 22, -45705983);
                    a = lcf(a, b, c, d, x[i + 8], 7, 1770035416);
                    d = lcf(d, a, b, c, x[i + 9], 12, -1958414417);
                    c = lcf(c, d, a, b, x[i + 10], 17, -42063);
                    b = lcf(b, c, d, a, x[i + 11], 22, -1990404162);
                    a = lcf(a, b, c, d, x[i + 12], 7, 1804603682);
                    d = lcf(d, a, b, c, x[i + 13], 12, -40341101);
                    c = lcf(c, d, a, b, x[i + 14], 17, -1502002290);
                    b = lcf(b, c, d, a, x[i + 15], 22, 1236535329);
                    a = lcg(a, b, c, d, x[i + 1], 5, -165796510);
                    d = lcg(d, a, b, c, x[i + 6], 9, -1069501632);
                    c = lcg(c, d, a, b, x[i + 11], 14, 643717713);
                    b = lcg(b, c, d, a, x[i + 0], 20, -373897302);
                    a = lcg(a, b, c, d, x[i + 5], 5, -701558691);
                    d = lcg(d, a, b, c, x[i + 10], 9, 38016083);
                    c = lcg(c, d, a, b, x[i + 15], 14, -660478335);
                    b = lcg(b, c, d, a, x[i + 4], 20, -405537848);
                    a = lcg(a, b, c, d, x[i + 9], 5, 568446438);
                    d = lcg(d, a, b, c, x[i + 14], 9, -1019803690);
                    c = lcg(c, d, a, b, x[i + 3], 14, -187363961);
                    b = lcg(b, c, d, a, x[i + 8], 20, 1163531501);
                    a = lcg(a, b, c, d, x[i + 13], 5, -1444681467);
                    d = lcg(d, a, b, c, x[i + 2], 9, -51403784);
                    c = lcg(c, d, a, b, x[i + 7], 14, 1735328473);
                    b = lcg(b, c, d, a, x[i + 12], 20, -1926607734);
                    a = lch(a, b, c, d, x[i + 5], 4, -378558);
                    d = lch(d, a, b, c, x[i + 8], 11, -2022574463);
                    c = lch(c, d, a, b, x[i + 11], 16, 1839030562);
                    b = lch(b, c, d, a, x[i + 14], 23, -35309556);
                    a = lch(a, b, c, d, x[i + 1], 4, -1530992060);
                    d = lch(d, a, b, c, x[i + 4], 11, 1272893353);
                    c = lch(c, d, a, b, x[i + 7], 16, -155497632);
                    b = lch(b, c, d, a, x[i + 10], 23, -1094730640);
                    a = lch(a, b, c, d, x[i + 13], 4, 681279174);
                    d = lch(d, a, b, c, x[i + 0], 11, -358537222);
                    c = lch(c, d, a, b, x[i + 3], 16, -722521979);
                    b = lch(b, c, d, a, x[i + 6], 23, 76029189);
                    a = lch(a, b, c, d, x[i + 9], 4, -640364487);
                    d = lch(d, a, b, c, x[i + 12], 11, -421815835);
                    c = lch(c, d, a, b, x[i + 15], 16, 530742520);
                    b = lch(b, c, d, a, x[i + 2], 23, -995338651);
                    a = lci(a, b, c, d, x[i + 0], 6, -198630844);
                    d = lci(d, a, b, c, x[i + 7], 10, 1126891415);
                    c = lci(c, d, a, b, x[i + 14], 15, -1416354905);
                    b = lci(b, c, d, a, x[i + 5], 21, -57434055);
                    a = lci(a, b, c, d, x[i + 12], 6, 1700485571);
                    d = lci(d, a, b, c, x[i + 3], 10, -1894986606);
                    c = lci(c, d, a, b, x[i + 10], 15, -1051523);
                    b = lci(b, c, d, a, x[i + 1], 21, -2054922799);
                    a = lci(a, b, c, d, x[i + 8], 6, 1873313359);
                    d = lci(d, a, b, c, x[i + 15], 10, -30611744);
                    c = lci(c, d, a, b, x[i + 6], 15, -1560198380);
                    b = lci(b, c, d, a, x[i + 13], 21, 1309151649);
                    a = lci(a, b, c, d, x[i + 4], 6, -145523070);
                    d = lci(d, a, b, c, x[i + 11], 10, -1120210379);
                    c = lci(c, d, a, b, x[i + 2], 15, 718787259);
                    b = lci(b, c, d, a, x[i + 9], 21, -343485551);
                    a = lcl(a, a1);
                    b = lcl(b, b1);
                    c = lcl(c, c1);
                    d = lcl(d, d1);
                }
                return [a, b, c, d];
            } else {
                return [a, d, c, b];
            }
        }
        function lcd(t) {
            var a = ((t.length + 8) >> 6) + 1;
            var b = new Array(a * 16);
            for (var i = 0; i < a * 16; i++)
                b[i] = 0;
            for (var i = 0; i < t.length; i++)
                b[i >> 2] |= (t.charCodeAt(i) & 0xFF) << ((i % 4) * 8);
            b[i >> 2] |= 0x80 << ((i % 4) * 8);
            b[a * 16 - 2] = t.length * 8;
            return b;
        }
        function lca(t) {
            var a = "0123456789abcdef";
            var b = "";
            for (var i = 0; i < t.length * 4; i++) {
                b += a.charAt((t[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) + a.charAt((t[i >> 2] >> ((i % 4) * 8)) & 0xF);
            }
            return b;
        }
        return lca(lcb(lcd(lco(CryptoJS.MD5(key).toString()))));
    },
    toUrl: function (input) {
        try {
            var html = fetch(input, {});
            eval(html.match(/<script type="text\/javascript">([\s\S]*?)<\/script>/)[1].replace('document.domain', '"vip.cjys.top"'));
            var token = this.getToken_Keep(host + time + domain);
            var keep = this.getToken_Keep(host + time);
            var form = '1';
            eval('body_json = ' + html.match(/\$.post\("api.php",({[\s\S]*?})/)[1].replace('y.encode(other_l)', "'" + CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(url)) + "'"));
            var body_parse = JSON.stringify(body_json).replace(/[{}]/g, '').replace(/":"/g, '=').replace(/","/g, '&').replace(/"/g, '');
            var json = JSON.parse(fetch('https://vip.cjys.top/api.php', { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: body_parse, method: 'POST' }));
            var url = json.code == 200 ? (json.url + '#星驰.mp4') : '';
            url = url.indexOf('v=') > 0 ? decodeURIComponent(url.split('php?v=')[1]) : url;
            url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://vip.cjys.top}' : url);
            return url;
        } catch (e) {
            return '';
        }
    }
};
var 全民 = {
    toUrl: function (input) {
        try {
            if (input.indexOf('mgtv') > 0)
                return '';
            var json = JSON.parse(fetch('https://jx.gepubbs.com/jiexi/4080.php', { headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: 'url=' + input.split('url=')[1], method: 'POST' }));
            var url = json.code == 200 ? (json.url + '#全民.mp4') : '';
            if (url != '') {
                url = (url.indexOf('titan.mgtv') > -1 ? url + ';{Referer@https://jx.qnzfs.cn}' : url);
            }
            return url;
        } catch (e) {
            return '';
        }
    }
};
var xbeibeix = { // 只能解析B站非番剧类视频 
    toUrl: function (input) {
        try {
            input = input.indexOf('url=') > 0 ? input.split('url=')[1] : input;
            var html = fetch('https://xbeibeix.com/api/bilibili/biliplayer/?url=' + input, {});
            var url = tools.decrypt(html.match(/var hahaha = '(.*?)';/)[1], 'beibeidouyu12345', 'beibei1234567890').replace(/\\\//g, '/');
            return url;
        } catch (e) {
            return '';
        }
    }
};

function getUrl(input) {
    var input_arr = input.split('url=');
    for (var i in parse_list) {
        var parse_list_arr = parse_list[i].split('￥');
        if (parse_list_arr[1].indexOf(input_arr[0]) > -1)
            continue;
        input = parse_list_arr[1] + input_arr[1];
        var str = 'var url = ' + parse_list_arr[0].substr(1) + '.toUrl("' + input + '")';
        eval(str);
        if (url !== '')
            return url;
    }
    return parsing_list[0] + input_arr[1];
}