webpackJsonp([95], {
  514: function(t, e, i) {
    var n = i(515);
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    i(498)("510fdef1", n, !0, {});
  },
  515: function(t, e, i) {
    (e = t.exports = i(497)(!1)),
      e.push([t.i, ".layout-container{margin-top:1.173333rem}", ""]);
  },
  516: function(t, e, i) {
    var n = i(517);
    "string" == typeof n && (n = [[t.i, n, ""]]),
      n.locals && (t.exports = n.locals);
    i(498)("4e143122", n, !0, {});
  },
  517: function(t, e, i) {
    (e = t.exports = i(497)(!1)),
      e.push([
        t.i,
        "nav.nav-bar{z-index:10;background:#fff;height:1.173333rem;line-height:1.173333rem;border-bottom:1px solid #ededed;position:fixed;top:0;left:0;width:10rem;font-family:PingFangSC-Regular}nav.nav-bar h1{text-align:center;font-family:PingFangSC-Medium;font-size:.453333rem;color:#000;font-weight:700}nav.nav-bar span{display:block;position:absolute;width:40%;top:0}nav.nav-bar span:last-child{right:0;text-align:right}nav.nav-bar i{display:inline-block}nav.nav-bar i.right-title{font-style:normal;font-size:.4rem;color:#333;padding-right:.4rem}nav.nav-bar .left-title{font-style:normal;font-size:.4rem;color:#333;display:inline-block;position:absolute;left:.8rem;top:0}nav.nav-bar .icon{margin:.266667rem .4rem;display:block;width:.586667rem;height:.586667rem;fill:#333}",
        ""
      ]);
  },
  69: function(t, e, i) {
    "use strict";
    function n(t) {
      i(516);
    }
    function o(t) {
      i(514);
    }
    Object.defineProperty(e, "__esModule", { value: !0 });
    var a = i(92),
      s = i.n(a),
      l = {
        props: {
          heading: { type: String, default: "" },
          leftIcon: { type: String, default: "" },
          leftTitle: { type: String, default: "" },
          rightIcon: { type: String, default: "" },
          rightTitle: { type: String, default: "" },
          onLeft: { type: Function },
          onRight: { type: Function }
        },
        methods: {
          leftClick: function(t) {
            this.onLeft && this.onLeft(t);
          },
          rightClick: function(t) {
            this.onRight && this.onRight(t);
          }
        }
      },
      r = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i("nav", { staticClass: "nav-bar" }, [
          i("h1", [t._v(t._s(t.heading))]),
          i("span", [
            i(
              "i",
              { on: { click: t.leftClick } },
              [i("icon", { staticClass: "icon", attrs: { name: t.leftIcon } })],
              1
            ),
            i(
              "i",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.leftTitle,
                    expression: "leftTitle"
                  }
                ],
                staticClass: "left-title",
                on: { click: t.leftClick }
              },
              [t._v(t._s(t.leftTitle))]
            )
          ]),
          i("span", [
            i(
              "i",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.rightIcon,
                    expression: "rightIcon"
                  }
                ],
                on: { click: t.rightClick }
              },
              [
                i("icon", { staticClass: "icon", attrs: { name: t.rightIcon } })
              ],
              1
            ),
            i(
              "i",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.rightTitle,
                    expression: "rightTitle"
                  }
                ],
                staticClass: "right-title",
                on: { click: t.rightClick }
              },
              [t._v(t._s(t.rightTitle))]
            )
          ])
        ]);
      },
      c = [],
      f = { render: r, staticRenderFns: c },
      h = f,
      g = i(60),
      u = n,
      d = g(l, h, !1, u, null, null),
      p = d.exports,
      v = {
        props: { isNav: { type: Boolean, default: !0 } },
        components: { NavigationBar: p },
        created: function() {
          this.$notice.$once("navigation", this.onNavigation);
        },
        beforeRouteLeave: function(t, e, i) {
          s()(this.$data, {
            navClass: "",
            title: "",
            leftIcon: "",
            leftTitle: "",
            rightIcon: "",
            rightTitle: "",
            onLeft: function() {},
            onRight: function() {}
          }),
            i();
        },
        mounted: function() {
          !this.$cookie.get("sessionId") &&
            this.$cookie.get("name") &&
            this.$cookie.set("sessionId", this.$cookie.get("name")),
            this.$notice.$on("navigation", this.onNavigation),
            document
              .querySelector("#app")
              .addEventListener("touchmove", this.touchmoveHandler);
        },
        destroyed: function() {
          this.$notice.$off("SESSIONID_UPDATE", this.update),
            this.$notice.$off("navigation", this.onNavigation),
            document
              .querySelector("#app")
              .removeEventListener("touchmove", this.touchmoveHandler);
        },
        data: function() {
          return {
            navClass: "",
            title: "",
            leftIcon: "",
            leftTitle: "",
            rightIcon: "",
            rightTitle: "",
            onLeft: function() {},
            onRight: function() {},
            isLoginClass: "login-off"
          };
        },
        methods: {
          onNavigation: function(t) {
            s()(this.$data, t);
          },
          onClickLeft: function(t) {
            this.onLeft && this.onLeft(t);
          },
          onClickRight: function(t) {
            this.onRight && this.onRight(t);
          },
          touchmoveHandler: function(t) {
            ("picker-slot picker-slot-center slot-all" != t.target.className &&
              "picker-slot picker-slot-center slot1" != t.target.className &&
              "picker-slot picker-slot-center slot2" != t.target.className &&
              "picker-slot picker-slot-center slot3" != t.target.className &&
              "picker-slot picker-slot-center" != t.target.className &&
              "mint-datetime-action mint-datetime-cancel" !=
                t.target.className &&
              "mint-datetime-action mint-datetime-confirm" !=
                t.target.className &&
              "pop-header" != t.target.className) ||
              t.preventDefault();
          }
        }
      },
      m = function() {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          [
            t.isNav
              ? i("NavigationBar", {
                  class: t.navClass,
                  attrs: {
                    heading: t.title,
                    leftIcon: t.leftIcon,
                    leftTitle: t.leftTitle,
                    rightIcon: t.rightIcon,
                    rightTitle: t.rightTitle,
                    onLeft: t.onClickLeft,
                    onRight: t.onClickRight
                  }
                })
              : t._e(),
            i(
              "div",
              { class: { "layout-container": t.isNav } },
              [i("router-view")],
              1
            )
          ],
          1
        );
      },
      k = [],
      y = { render: m, staticRenderFns: k },
      b = y,
      C = i(60),
      N = o,
      I = C(v, b, !1, N, null, null);
    e.default = I.exports;
  }
});
