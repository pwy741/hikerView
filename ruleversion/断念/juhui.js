var __encode = 'sojson.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Ox89906 = ["\x6A\x73\x6F\x6E\x3D", "\x74\x69\x74\x6C\x65", "\x70\x72\x6F\x67\x72\x61\x6D\x6D\x65", "\x64\x61\x74\x61", "\x76\x65\x72\x74\x69\x63\x61\x6C\x43\x6F\x76\x65\x72", "\x23\x2E\x6A\x70\x67", "\x68\x6F\x72\x69\x7A\x6F\x6E\x74\x61\x6C\x43\x6F\x76\x65\x72", "\x73\x75\x6D\x6D\x61\x72\x79", "\x70\x69\x63\x5F\x31", "\x70\x75\x73\x68", "\x72\x65\x73\x6F\x75\x72\x63\x65\x73", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x69\x70\x66\x73", "\x33\x31", "\x2E\x33\x36\x35\x6B\x71\x7A\x73\x2E\x63\x6E\x3A", "\x39\x30\x38\x31", "\x2F\x69\x70\x66\x73\x2F", "\x6C\x65\x6E\x67\x74\x68", "\x68\x61\x73\x68", "\x64\x69\x73\x70\x6C\x61\x79", "\x31\x30\x38\x30\x50", "\x37\x32\x30\x50", "\x33\x36\x30\x50", "\x74\x65\x78\x74\x5F\x31", "\u7B2C", "\u96C6", "\x23\x2E\x6D\x70\x34", "\x74\x65\x78\x74\x5F\x33", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\x6C\x6F\x67", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x73\x6F\x6A\x73", "\x6F\x6E\x2E\x63\x6F\x6D"];
var json = {};
eval(__Ox89906[0x0] + getResCode());
result[__Ox89906[0x9]]({
    title: json[__Ox89906[0x3]][__Ox89906[0x2]][__Ox89906[0x1]],
    url: json[__Ox89906[0x3]][__Ox89906[0x2]][__Ox89906[0x4]] + __Ox89906[0x5],
    pic_url: json[__Ox89906[0x3]][__Ox89906[0x2]][__Ox89906[0x6]],
    desc: json[__Ox89906[0x3]][__Ox89906[0x2]][__Ox89906[0x7]],
    col_type: __Ox89906[0x8]
});  /*  */
var resources = json[__Ox89906[0x3]][__Ox89906[0x2]][__Ox89906[0xa]];
var vDLArray = new Array(3);
var gateway = __Ox89906[0xb] + "7" + __Ox89906[0xd] + __Ox89906[0xe] + __Ox89906[0xf];
for (var i = 0; i < vDLArray[__Ox89906[0x10]]; i++) {
    vDLArray[i] = new Array(resources[__Ox89906[0x10]])
}
;
for (var i = 0; i < resources[__Ox89906[0x10]]; i++) {
    for (var j = 0; j < resources[i][__Ox89906[0x3]][__Ox89906[0x10]]; j++) {
        switch (resources[i][__Ox89906[0x3]][j][__Ox89906[0x12]]) {
            case 1080:
                vDLArray[0x0][i] = gateway + resources[i][__Ox89906[0x3]][j][__Ox89906[0x11]];
                break;
            case 720:
                vDLArray[0x1][i] = gateway + resources[i][__Ox89906[0x3]][j][__Ox89906[0x11]];
                break;
            case 360:
                vDLArray[0x2][i] = gateway + resources[i][__Ox89906[0x3]][j][__Ox89906[0x11]];
                break
        }
    }
}
;var sourceArray = [__Ox89906[0x13], __Ox89906[0x14], __Ox89906[0x15]];
for (var i = 0; i < sourceArray[__Ox89906[0x10]]; i++) {
    result[__Ox89906[0x9]]({title: sourceArray[i], col_type: __Ox89906[0x16]});
    for (var j = 0; j < vDLArray[i][__Ox89906[0x10]]; j++) {
        if (vDLArray[i][j] != undefined) {
            result[__Ox89906[0x9]]({
                title: __Ox89906[0x17] + (j + 1) + __Ox89906[0x18],
                url: vDLArray[i][j] + __Ox89906[0x19],
                col_type: __Ox89906[0x1a]
            })
        }
    }
}
;
;
;(function (_0x1774x8, _0x1774x9, _0x1774xa, _0x1774xb, _0x1774xc, _0x1774xd) {
    _0x1774xd = __Ox89906[0x1b];
    _0x1774xb = function (_0x1774xe) {
        if (typeof alert !== _0x1774xd) {
            alert(_0x1774xe)
        }
        ;
        if (typeof console !== _0x1774xd) {
            console[__Ox89906[0x1c]](_0x1774xe)
        }
    };
    _0x1774xa = function (_0x1774xf, _0x1774x8) {
        return _0x1774xf + _0x1774x8
    };
    _0x1774xc = _0x1774xa(__Ox89906[0x1d], _0x1774xa(__Ox89906[0x1e], __Ox89906[0x1f]));
    try {
        _0x1774x8 = __encode;
        if (!(typeof _0x1774x8 !== _0x1774xd && _0x1774x8 === _0x1774xa(__Ox89906[0x20], __Ox89906[0x21]))) {
            _0x1774xb(_0x1774xc)
        }
    } catch (e) {
        _0x1774xb(_0x1774xc)
    }
})({})