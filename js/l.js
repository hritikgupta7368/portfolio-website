!(function (t, n) {
  var e,
    r,
    o = void 0 === window.rum,
    a = void 0 === t.TZ24Widgets;
  a || o
    ? (parseInt("1", 10) > 0 &&
        o &&
        ((window.rum = function (t) {
          window.rum.key = t;
        }),
        (e = document.createElement("script")),
        (r = document.getElementsByTagName("script")[0]),
        (e.async = 1),
        (e.src = "https://cdn.perfops.net/rom3/rom3.min.js"),
        r.parentNode.insertBefore(e, r),
        rum("63ec29")),
      a &&
        ((t.TZ24Widgets = (function () {
          "use strict";
          var t = "a",
            n = "d",
            e = "db",
            r = "undefined";
          function o(t) {
            return (
              t instanceof Function ||
              "[object Function]" === Object.prototype.toString.call(t)
            );
          }
          function a(t) {
            return (
              null != t &&
              "[object Object]" === Object.prototype.toString.call(t)
            );
          }
          function i(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
          }
          function s(t, n) {
            for (var e in n) i(n, e) && (t[e] = n[e]);
            return (
              i(n, "toString") && (t.toString = n.toString),
              i(n, "valueOf") && (t.valueOf = n.valueOf),
              t
            );
          }
          var c,
            u = (function () {
              return function t(n, e, r) {
                function o(i, s) {
                  if (!e[i]) {
                    if (!n[i]) {
                      var c = "function" == typeof u && u;
                      if (!s && c) return c(i, !0);
                      if (a) return a(i, !0);
                      var l = new Error("Cannot find module '" + i + "'");
                      throw ((l.code = "MODULE_NOT_FOUND"), l);
                    }
                    var f = (e[i] = { exports: {} });
                    n[i][0].call(
                      f.exports,
                      function (t) {
                        var e = n[i][1][t];
                        return o(e || t);
                      },
                      f,
                      f.exports,
                      t,
                      n,
                      e,
                      r
                    );
                  }
                  return e[i].exports;
                }
                var a = "function" == typeof u && u;
                for (var i = 0; i < r.length; i++) o(r[i]);
                return o;
              };
            })()(
              {
                1: [
                  function (t, n, e) {
                    var r = t("./murmurhash3");
                    function o(t) {
                      if ("object" != typeof t)
                        throw new TypeError("Unrecognized argument");
                      if (!t.vData)
                        throw new TypeError(
                          'Data object should include filter data "vData"'
                        );
                      if (t.vData.length > 8 * o.MAX_BLOOM_FILTER_SIZE)
                        throw new TypeError(
                          '"vData" exceeded max size "' +
                            o.MAX_BLOOM_FILTER_SIZE +
                            '"'
                        );
                      if (((this.vData = t.vData), !t.nHashFuncs))
                        throw new TypeError(
                          'Data object should include number of hash functions "nHashFuncs"'
                        );
                      if (t.nHashFuncs > o.MAX_HASH_FUNCS)
                        throw new TypeError(
                          '"nHashFuncs" exceeded max size "' +
                            o.MAX_HASH_FUNCS +
                            '"'
                        );
                      (this.nHashFuncs = t.nHashFuncs),
                        (this.nTweak = t.nTweak || 0),
                        (this.nFlags = t.nFlags || o.BLOOM_UPDATE_NONE);
                    }
                    (o.prototype.toObject = function () {
                      return {
                        vData: this.vData,
                        nHashFuncs: this.nHashFuncs,
                        nTweak: this.nTweak,
                        nFlags: this.nFlags,
                      };
                    }),
                      (o.create = function (t, n, e, r) {
                        var a = {},
                          i = (-1 / o.LN2SQUARED) * t * Math.log(n),
                          s = Math.floor(i / 8),
                          c = 8 * o.MAX_BLOOM_FILTER_SIZE;
                        s > c && (s = c), (a.vData = []);
                        for (var u = 0; u < s; u++) a.vData.push(0);
                        var l = Math.floor(((8 * a.vData.length) / t) * o.LN2);
                        return (
                          l > o.MAX_HASH_FUNCS && (l = o.MAX_HASH_FUNCS),
                          l < o.MIN_HASH_FUNCS && (l = o.MIN_HASH_FUNCS),
                          (a.nHashFuncs = l),
                          (a.nTweak = e),
                          (a.nFlags = r),
                          new o(a)
                        );
                      }),
                      (o.prototype.hash = function (t, n) {
                        var e = r(
                          (4221880213 * t + this.nTweak) & 4294967295,
                          n
                        );
                        return e % (8 * this.vData.length);
                      }),
                      (o.prototype.insert = function (t) {
                        for (var n = 0; n < this.nHashFuncs; n++) {
                          var e = this.hash(n, t),
                            r = 1 << (7 & e);
                          this.vData[e >> 3] |= r;
                        }
                        return this;
                      }),
                      (o.prototype.contains = function (t) {
                        if (!this.vData.length) return !1;
                        for (var n = 0; n < this.nHashFuncs; n++) {
                          var e = this.hash(n, t);
                          if (!(this.vData[e >> 3] & (1 << (7 & e)))) return !1;
                        }
                        return !0;
                      }),
                      (o.prototype.clear = function () {
                        this.vData = [];
                      }),
                      (o.prototype.inspect = function () {
                        return (
                          "<BloomFilter:" +
                          this.vData +
                          " nHashFuncs:" +
                          this.nHashFuncs +
                          " nTweak:" +
                          this.nTweak +
                          " nFlags:" +
                          this.nFlags +
                          ">"
                        );
                      }),
                      (o.BLOOM_UPDATE_NONE = 0),
                      (o.BLOOM_UPDATE_ALL = 1),
                      (o.BLOOM_UPDATE_P2PUBKEY_ONLY = 2),
                      (o.MAX_BLOOM_FILTER_SIZE = 36e3),
                      (o.MAX_HASH_FUNCS = 50),
                      (o.MIN_HASH_FUNCS = 1),
                      (o.LN2SQUARED = Math.pow(Math.log(2), 2)),
                      (o.LN2 = Math.log(2)),
                      (n.exports = o);
                  },
                  { "./murmurhash3": 2 },
                ],
                2: [
                  function (t, n, e) {
                    n.exports = function (t, n) {
                      var e,
                        r = 3432918353,
                        o = 461845907,
                        a = t;
                      function i(t, n) {
                        return (
                          ((65535 & t) * n +
                            ((((t >>> 16) * n) & 65535) << 16)) &
                          4294967295
                        );
                      }
                      function s(t, n) {
                        return (t << n) | (t >>> (32 - n));
                      }
                      for (var c = 0; c + 4 <= n.length; c += 4)
                        (e = i(
                          (e = s(
                            (e = i(
                              (e =
                                n[c] |
                                (n[c + 1] << 8) |
                                (n[c + 2] << 16) |
                                (n[c + 3] << 24)),
                              r
                            )),
                            15
                          )),
                          o
                        )),
                          (a = i((a = s((a ^= e), 13)), 5)),
                          (a =
                            ((65535 & (u = a)) +
                              ((l = 1801774676) >>> 16) +
                              ((((u >>> 16) + l) & 65535) << 16)) &
                            4294967295);
                      var u, l;
                      switch (((e = 0), 3 & n.length)) {
                        case 3:
                          e ^= n[c + 2] << 16;
                        case 2:
                          e ^= n[c + 1] << 8;
                        case 1:
                          (e = i((e = s((e = i((e ^= n[c]), r)), 15)), o)),
                            (a ^= e);
                      }
                      return (
                        (a ^= n.length),
                        (a = i((a ^= a >>> 16), 2246822507)),
                        (a = i((a ^= a >>> 13), 3266489909)),
                        (a ^= a >>> 16) >>> 0
                      );
                    };
                  },
                  {},
                ],
                "bloom-filter": [
                  function (t, n, e) {
                    (n.exports = {}),
                      (n.exports = t("./filter")),
                      (n.exports.MurmurHash3 = t("./murmurhash3"));
                  },
                  { "./filter": 1, "./murmurhash3": 2 },
                ],
              },
              {},
              []
            ),
            l = {},
            f = {},
            d = {},
            h = {},
            p = [],
            v = !1,
            g = {},
            m = Math.round(1e3 * parseFloat("1719666069.5987")),
            w = 0,
            y = JSON.parse(
              String(
                '{"vData":[66,20,241,171,156,161,220,226,45,244,144,209,19,1,27,96,14,89,123,53,195,12,35,203,203,129,134,236,160,16,159,46,233,234,112,199,247,88,110,135,183,186,128,150,139,6,42,25,30,8,170,12,135,13,78,90,32,203,4,52,1,122,46,119,131,35,132,226,95,138,16,45,139,112,121,218,217,75,111,108,152,92,58,2,67,187,244,192,148,134,167,196,42,121,80,154,15,251,107,207,170,197,12,75,124,162,64,8,0,5,172,43,94,139,63,72,230,17,120,116,19,99,140,75,87,108,74,178,238,112,97,1,127,84,255,208,243,10,9,4,35,203,130,236,29,252,197,0,155,34,208,53,181,164,59,22,120,193,107,5,77,77,228,60,96,35,57,101,120,51,11,37,212,154,163,171,4,112,215,195,152,217,84,45,54,248,226,232,238,244,192,77,136,74,201,147,253,79,5,54,167,184,3,99,60,213,117,25,151,208,23,198,24,195,9,220,201,85,121,27,132,80,79,36,229,134,77,2,181,131,136,64,147,188,56,159,91,139,113,33,226,165,199,37,204,162,92,70,12,63,48,232,51,203,126,40,71,141,8,38,140,93,192,163,195,137,67,187,70,231,229,130,154,85,180,181,238,80,97,123,124,69,13,65,35,107,89,13,197,97,102,75,5,203,87,236,41,163,20,122,16,114,55,31,209,22,33,50,16,89,87,2,119,176,220,241,193,34,32,12,135,10,59,21,144,65,53,89,2,39,138,96,49,206,87,34,140,162,1,187,129,40,197,96,79,92,100,0,84,244,67,201,244,9,91,17,140,123,196,176,137,19,16,230,138,114,43,0,58,180,199,34,102,141,242,16,12,192,21,18,136,68,85,251,97,201,166,18,136,101,159,128,186,224,89,107,103,8,147,78,199,255,198,150,74,181,95,164,53,51,212,160,32,57,108,85,56,12,180,99,52,34,197,46,65,128,132,238,113,72,24,180,93,128,251,32,233,43,15,152,137,64,86,252,51,162,33,41,47,215,151,137,2,154,218,140,4,141,162,6,151,129,28,43,50,226,157,231,255,16,59,85,105,155,195,189,10,178,209,155,240,166,248,109,80,152,85,70,255,144,165,212,4,215,39,199,181,10,20,236,165,58,230,235,38,246,83,37,74,39,172,242,80,138,160,178,144,141,130,173,0,38,5,226,57,226,40,132,48,238,248,236,196,176,177,36,35,182,7,9,51,252,131,24,216,44,206,210,241,243,28,41,131,171,130,146,216,170,43,18,80,225,39,13,147,123,142,187,208,168,123,88,170,128,125,229,105,228,196,75,159,246,230,4,129,143,18,166,239,184,80,200,29,88,45,160,192,141,149,148,124,227,148,254,18,85,167,156,166,4,213,26,94,39,247,181,50,20,56,147,23,40,243,235,175,4,202,93,210,18,120,91,86,85,151,115,211,2,0,227,6,80,18,101,103,100,218,246,76,184,146,207,166,180,251,154,168,46,96,103,107,54,21,206,13,114,231,193,193,95,33,50,226,206,149,64,229,125,36,180,171,113,124,215,161,79,0,96,174,4,42,195,0,165,73,51,147,8,175,170,174,113,80,17,165,90,240,241,50,31,2,168,187,249,160,214,199,230,235,88,52,165,230,36,44,114,208,80,112,41,188,30,152,74,161,5,52,248,182,3,117,25,14,73,51,143,26,224,73,41,231,249,72,223,225,39,96,147,73,74,14,32,249,53,66,39,73,96,20,100,40,2,41,147,110,239,95,113,33,249,125,236,192,241,148,106,232,26,171,75,62,202,7,82,138,13,178,232,20,115,240,4,134,81,39,171,48,43,81,55,162,223,104,16,12,233,162,20,3,175,57,102,54,32,227,140,121,72,149,205,27,29,104,232,255,76,6,145,238,132,224,41,172,228,14,207,86,137,87,246,79,103,80,180,58,184,105,17,52,13,141,57,56,231,171,160,23,221,53,168,250,43,142,188,65,104,129,30,63,193,130,144,12,34,196,78,14,136,130,17,32,97,38,21,5,234,58,156,164,191,226,145,104,114,10,151,83,69,204,161,225,21,98,194,72,68,218,49,2,52,151,173,128,79,56,73,226,102,13,64,142,248,24,2,207,188,173,85,87,98,158,66,167,94,234,17,201,195,165,103,119,53,150,0,210,177,59,5,202,74,243,136,41,63,180,88,161,140,40,64,218,194,141,167,55,72,36,21,174,250,69,23,120,73,136,194,152,89,98,18,189,206,87,0,247,223,221,41,110,34,117,122,33,152,0,46,248,132,48,85,119,54,220,20,55,91,193,5,32,191,54,133,160,104,50,90,254,144,79,220,138,24,103,69,221,23,185,120,149,229,157,136,67,79,4,135,232,80,37,49,200,39,220,143,239,116,215,170,49,132,196,35,100,127,76,144,46,204,35,228,240,98,53,131,124,252,93,18,14,80,83,56,142,87,70,253,14,139,254,24,12,105,85,97,184,250,238,166,210,197,45,157,70,181,72,214,112,88,104,92,70,164,178,31,45,2,12,74,3,8,124,48,200,50,241,214,150,140,204,151,10,240,128,150,17,5,113,109,72,168,179,134,77,81,127,71,67,66,152,156,77,38,204,85,18,182,193,28,2,220,6,189,250,37,188,53,198,82,41,163,174,117,134,203,101,156,2,85,105,159,118,255,163,15,20,90,23,161,9,250,222,212,150,42,37,34,172,101,152,81,65,217,166,244,242,21,242,64,174,7,87,175,29,223,193,235,187,165,104,100,95,94,32,50,87,123,125,178,217,145,147,202,240,230,127,137,153,64,74,10,152,184,217,89,196,142,47,216,114,226,35,0,145,242,88,90,63,246,199,241,64,4,53,1,68,109,58,153,132,94,149,198,77,42,212,0,244,15,171,11,149,156,75,57,72,70,45,168,84,195,31,48,16,28,24,115,214,146,40,99,180,124,27,65,139,12,5,101,35,78,78,147,206,193,32,52,154,104,86,79,208,87,231,9,182,227,233,183,180,240,113,139,28,223,113,75,253,140,190,144,179,161,233,31,29,170,92,240,30,225,186,73,37,183,124,77,88,231,54,251,24,48,74,141,71,146,210,128,222,195,255,163,124,25,236,57,30,164,62,155,224,116,33,168,229,161,245,184,100,75,87,108,226,215,115,213,2,143,123,24,240,76,202,210,197,203,174,127,20,76,54,91,68,26,111,154,82,233,123,250,69,225,40,67,126,39,200,229,90,135,134,169,1,10,64,209,232,161,65,154,23,208,235,163,0,253,4,70,123,249,80,12,95,215,67,6,172,41,76,109,241,63,115,78,85,36,238,170,124,111,8,181,24,10,51,30,71,120,18,36,165,140,16,164,51,149,14,211,77,115,11,52,179,86,13,88,37,148,156,177,155,70,120,156,111,38,147,233,97,184,186,78,23,27,212,193,56,16,10,148,160,159,11,63,203,78,0,123,110,138,235,230,31,133,178,25,27,230,144,5,96,82,63,172,27,135,145,194,120,131,178,141,5,124,92,42,77,210,33,134,144,170,76,168,45,210,10,51,96,212,192,230,209,22,158,178,153,76,45,26,45,254,131,206,127,56,23,191,49,24,64,37,96,182,137,219,11,97,8,58,122,169,219,243,226,32,136,218,6,112,172,32,197,223,85,137,4,115,103,89,82,75,69,189,164,147,198,197,188,129,17,68,25,52,29,184,240,130,125,38,218,104,22,140,177,71,211,229,181,191,208,68,111,74,22,213,25,48,241,84,86,240,196,145,215,44,128,77,165,219,153,222,136,235,90,104,36,202,233,105,224,32,224,205,246,115,132,138,133,68,21,91,187,248,167,3,155,241,149,217,182,200,5,152,63,32,186,109,233,70,93,42,79,81,249,74,95,15,114,48,246,101,15,238,210,17,192,163,180,67,200,168,50,226,126,2,102,19,75,87,0,231,25,16,178,110,47,95,78,157,149,32,180,135,84,169,43,112,156,254,54,57,180,38,248,113,13,48,15,161,181,226,249,109,134,8,49,130,134,130,0,19,111,171,194,64,115,8,249,28,112,81,143,188,77,164,180,18,113,105,84,44,229,182,159,40,184,31,168,80,197,190,21,224,55,163,146,253,22,211,67,51,152,172,234,242,65,18,40,15,208,194,201,200,145,131,172,192,160,129,146,32,53,191,60,4,166,202,132,47,196,65,176,115,142,106,148,47,205,141,73,245,135,34,133,44,94,129,50,231,221,140,149,66,208,178,44,107,2,126,207,97,112,49,24,225,165,5,165,157,136,109,84,87,204,114,221,35,176,7,98,113,206,47,246,216,22,91,4,25,42,3,21,139,176,129,65,58,132,8,147,91,84,137,176,211,129,18,161,104,147,91,168,138,246,226,42,46,98,57,23,94,36,48,161,64,28,201,114,71,171,10,198,35,130,3,140,63,235,90,48,136,55,201,54,226,194,14,142,199,69,2,222,120,115,57,138,44,69,15,98,129,209,137,218,128,73,41,162,69,4,212,74,48,128,216,27,15,185,84,63,102,202,130,155,16,56,13,182,140,218,239,168,19,181,66,199,40,175,72,86,233,60,189,20,66,36,8,208,165,117,210,79,108,66,75,151,152,233,225,168,135,232,134,56,3,24,51,221,121,43,241,56,60,64,173,30,207,141,157,134,30,252,194,42,49,57,149,157,1,240,200,236,88,98,109,37,196,75,244,84,7,201,132,29,84,3,5,204,159,228,13,2,214,59,199,255,48,164,223,93,241,75,69,74,230,3,168,20,207,54,49,152,17,145,173,129,173,16,169,20,161,130,112,241,166,103,103,75,66,139,44,22,41,161,240,25,161,38,59,32,154,52,189,98,130,243,134,212,24,131,117,229,149,26,92,205,137,197,208,20,1,10,56,28,137,149,140,36,221,80,13,246,177,81,171,7,152,168,133,145,0,251,74,48,12,149,11,98,32,208,61,250,230,29,122,112,4,22,145,55,198,40,130,37,26,247,194,185,21,84,249,169,24,189,153,98,191,218,184,68,87,204,33,220,128,130,84,133,26,94,86,168,156,138,122,100,142,31,135,46,183,239,106,208,209,229,140,18,226,200,196,98,37,59,60,44,241,24,158,237,133,110,194,52,2,220,96,108,16,175,0,57,164,193,10,192,129,32,57,119,240,141,179,215,1,124,251,170,4,168,1,202,70,137,124,28,219,139,248,5,93,144,155,236,171,195,126,253,224,143,202,78,210,234,133,103,36,17,236,133,164,6,220,0,129,74,234,41,175,77,140,237,125,35,146,181,13,242,120,7,85,46,6,169,15,90,135,152,223,197,93,238,64,163,40,79,245,98,235,123,213,98,8,245,229,139,208,111,144,112,250,129,249,193,238,30,2,34,9,210,235,247,189,125,66,4,195,238,197,153,144,115,216,158,51,66,83,6,169,68,38,130,91,99,111,224,106,167,5,90,120,232,155,73,70,188,108,66,141,65,255,139,226,226,106,21,106,15,82,148,113,37,238,22,140,193,34,72,60,138,58,31,50,168,245,222,34,129,128,180,77,33,103,38,56,192,224,162,128,47,32,231,47,220,237,132,180,126,49,117,216,240,6,73,144,186,68,201,233,246,68,46,113,141,32,8,170,28,208,166,60,222,246,161,34,17,244,139,172,61,96,157,4,165,15,94,240,46,155,143,129,33,58,124,147,119,82,215,117,17,181,60,243,6,38,11,119,172,50,199,39,186,203,21,80,196,205,1,170,93,139,122,12,218,72,205,57,123,211,50,172,18,100,162,3,207,25,221,208,181,144,109,182,143,37,75,156,134,2,149,91,3,169,229,232,192,236,43,80,14,27,178,214,135,117,20,48,160,175,56,254,13,108,160,21,114,17,140,13,90,63],"nHashFuncs":9,"nTweak":0,"nFlags":0}'
              )
            ),
            _ = u("bloom-filter");
          function S(t) {
            var n,
              e = t.split("-");
            if (e.length > 3 && "tz24" == e[0]) {
              var r = {};
              return (
                (r.generated = e[1]),
                (r.loc = e[2]),
                (n = t.replace(e[0] + "-" + e[1] + "-" + e[2] + "-", "")),
                (r.config = JSON.parse(window.atob(n))),
                r
              );
            }
            return 0;
          }
          function F(t) {
            null != t && this.set(t);
          }
          var E = F.prototype;
          (E.set = function (t) {
            var n, e;
            for (e in t) o((n = t[e])) ? (this[e] = n) : (this["_" + e] = n);
            this._config = t;
          }),
            (E.months = function (t) {
              return this._months[t];
            }),
            (E.weekdays = function (t) {
              return this._weekdays[t];
            });
          var O = {
            weekdays: [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
          };
          function D(t) {
            var n,
              e = (function (t) {
                var n,
                  e = [],
                  r = [],
                  o = [];
                for (n in t)
                  e.push(t[n].loc),
                    -1 == r.indexOf(t[n].config.type) &&
                      r.push(t[n].config.type),
                    -1 == o.indexOf(t[n].config.lang) &&
                      o.push(t[n].config.lang);
                if (e.length > 0 && r.length > 0)
                  return (
                    ("file:" == location.protocol
                      ? "https:"
                      : location.protocol) +
                    "//w.24timezones.com/c.js?l=" +
                    encodeURIComponent(e.join(",")) +
                    "&t=" +
                    encodeURIComponent(r.join(",")) +
                    "&lang=" +
                    encodeURIComponent(o.join(","))
                  );
                return !1;
              })(t);
            if (!1 !== e) {
              var r = document.createElement("script");
              (r.type = "text/javascript"),
                (r.src = e),
                r.readyState
                  ? (r.onreadystatechange = function () {
                      ("loaded" !== r.readyState &&
                        "complete" !== r.readyState) ||
                        ((r.onreadystatechange = null), (w += Date.now() - n));
                    })
                  : (r.onload = function () {
                      w += Date.now() - n;
                    }),
                (r.onerror = function () {
                  console.error("Error loading data for 24tz widget");
                }),
                (n = Date.now()),
                document.getElementsByTagName("head")[0].appendChild(r);
            }
          }
          function T(t) {
            (v = !0), (t.media = "all");
            for (
              var n = document.getElementsByClassName("w24tz-current-time"),
                e = 0,
                r = n.length;
              e < r;
              e++
            )
              n[e].style.cssText += "visibility: visible !important;";
          }
          function M() {
            var t,
              n,
              e,
              o,
              a,
              i,
              s,
              u,
              l = !1,
              h = {},
              p = Date.now() - c + m;
            for (var y in f)
              (t = f[y].loc),
                typeof (n = d[t]) !== r &&
                  ((o = 1e3 * parseInt(n.raw_offset, 10)),
                  (a = 1e3 * parseInt(n.dst_offset, 10)),
                  (i = 1e3 * parseInt(n.dst_starts, 10)),
                  (s = 1e3 * parseInt(n.dst_ends, 10)),
                  (u = n.tz_info || {}),
                  n.has_transitions
                    ? i &&
                      s &&
                      (i < s
                        ? i <= p && p < s
                          ? ((e = p + w + a), (l = !0))
                          : (e = p + w + o)
                        : p < s || p >= i
                        ? ((e = p + w + a), (l = !0))
                        : (e = p + w + o))
                    : (e = p + w + o),
                  !1 === l && "standard" in u
                    ? (h = u.standard)
                    : !0 === l && "dst" in u && (h = u.dst),
                  "compound" in u &&
                    "alias" in h &&
                    (h.alias = u.compound.alias),
                  y in g &&
                    (v
                      ? g[y].render.call(g[y], e, h)
                      : !g[y].waitForCss.call(g[y]) &&
                        g[y].render.call(g[y], e, h)));
            setTimeout(
              M,
              p % 1e3 == 0 ? 1e3 : Math.abs(1e3 * Math.ceil(p / 1e3) - p)
            );
          }
          function A() {
            var t = document.querySelectorAll("a.clock24"),
              n = new _(y),
              e = window.location.hostname;
            (f = (function (t) {
              for (var n, e, r = {}, o = 0, a = t.length; o < a; o++) {
                n = t[o].id;
                try {
                  0 != (e = S(n)) && (r[n] = e);
                } catch (t) {
                  console.warn(t);
                }
              }
              return r;
            })(t)),
              0 === e.indexOf("www.") && (e = e.replace("www.", "")),
              n.contains(
                (function (t) {
                  if (window.TextEncoder)
                    return new TextEncoder("utf-8").encode(t);
                  for (
                    var n = new Uint8Array(t.length), e = 0;
                    e < t.length;
                    e++
                  )
                    n[e] = t.charCodeAt(e);
                  return n;
                })(e)
              ) ||
                (function (t, n, e) {
                  for (var r = 0, o = t.length; r < o; r++)
                    null !== e
                      ? t[r].id in n && "generated" in n[t[r].id]
                        ? n[t[r].id].generated <= 1561939200 &&
                          t[r].setAttribute("rel", e)
                        : t[r].setAttribute("rel", e)
                      : t[r].removeAttribute("rel");
                })(t, f, "nofollow"),
              D(f),
              -1 !==
                (function (t) {
                  var n,
                    e = [];
                  for (n in t)
                    -1 == e.indexOf(t[n].config.type) &&
                      e.push(t[n].config.type);
                  return e;
                })(f).indexOf("db") &&
                (function () {
                  if (0 === p.length) {
                    var t = document.createElement("link");
                    (t.rel = "stylesheet"),
                      (t.type = "text/css"),
                      (t.href =
                        ("file:" == location.protocol
                          ? "https:"
                          : location.protocol) +
                        "//w.24timezones.com/css/clock_widget.css"),
                      (t.media = "none"),
                      t.readyState
                        ? (t.onreadystatechange = function () {
                            T(t);
                          })
                        : (t.onload = function () {
                            T(t);
                          }),
                      document.getElementsByTagName("head")[0].appendChild(t),
                      p.push(t);
                  }
                })();
          }
          var b = function () {
            var t,
              n,
              e,
              r = Date.now();
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? A()
              : ((t = document),
                (n = "DOMContentLoaded"),
                (e = function () {
                  (w = Date.now() - r), A();
                }),
                t.addEventListener
                  ? t.addEventListener(n, e)
                  : t.attachEvent && t.attachEvent("on" + n, e));
          };
          return (
            (b.defineLocale = function (t, n) {
              if (null === n) return delete l[t], null;
              var e = O;
              (n.abbr = t),
                (l[t] = new F(
                  (function (t, n) {
                    var e,
                      r = s({}, t);
                    for (e in n)
                      i(n, e) &&
                        (a(t[e]) && a(n[e])
                          ? ((r[e] = {}), s(r[e], t[e]), s(r[e], n[e]))
                          : null != n[e]
                          ? (r[e] = n[e])
                          : delete r[e]);
                    for (e in t)
                      i(t, e) && !i(n, e) && a(t[e]) && (r[e] = s({}, r[e]));
                    return r;
                  })(e, n)
                ));
            }),
            (b.defineWidgets = function (t, n) {
              o(n) && (h[t] = n);
            }),
            (b.setClocksData = function (o) {
              for (var a in o) d[a] = o[a];
              (function () {
                var o, a, i;
                for (var s in f)
                  (a = f[s].loc),
                    (o = "type" in f[s].config ? f[s].config.type : null),
                    (i = "lang" in f[s].config ? f[s].config.lang : "en"),
                    typeof d[a] !== r &&
                      (d[a],
                      t == o
                        ? (g[s] = new h[o](
                            document.getElementById(s),
                            f[s].config
                          ))
                        : (n != o && e != o) ||
                          (g[s] = new h[o](
                            document.getElementById(s),
                            f[s].config,
                            l[i]
                          )));
              })(),
                (c = Date.now()),
                M();
            }),
            (b.setServerTime = function (t) {
              m = Math.round(1e3 * parseFloat(t));
            }),
            b
          );
        })()),
        t.TZ24Widgets()))
    : TZ24Widgets.setServerTime("1719666069.5987");
})(this);
