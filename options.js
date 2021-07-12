! function(e) {
	var t = {};//t:配列

	function n(i) {
		//i:何かしらの変数
		if(t[i]) return t[i].exports;//tのi番目がTRUEなら、tのi番目をexportして返す。
		var o = t[i] = {//変数oを定義+変数oはtのi番目
			i: i,//console.log(o);→「変数iの値」を表す。
			l: !1,//lはFALESを表す。
			exports: {}//「export」を配列宣言
		};
		return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
	}

	//アクティベーションロック　怪しい
	n.m = e, n.c = t, n.d = function(e, t, i) {
		n.o(e, t) || Object.defineProperty(e, t, {
			//Object.defineProperty...
			enumerable: !0,
			get: i
		})
	}, n.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, 
	
	/*鍵関係ない*/
	n.t = function(e, t) {
		if(1 & t && (e = n(e)), 8 & t) return e;
		if(4 & t && "object" == typeof e && e && e.__esModule) return e;
		var i = Object.create(null);
		if(n.r(i), Object.defineProperty(i, "default", {
				enumerable: !0,
				value: e
			}), 2 & t && "string" != typeof e)
			for(var o in e) n.d(i, o, function(t) {
				return e[t]
			}.bind(null, o));
		return i
	},
	
	n.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return n.d(t, "a", t), t
	},
	/* 鍵関係ない */


	 n.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, 
	
	
	n.p = "", n(n.s = 13)
}([function(e, t, n) {
			"use strict";
			t.a = function(e) {
				const t = Object.keys(e);
				return new Promise(n => {
					chrome.storage.sync.get(t, i => {
						chrome.storage.local.get(t, t => {
							const o = {...e,
								...i,
								...t
							};
							n(o)
						})
					})
				})
			}
		}, , function(e, t, n) {
			//アクティベーション認証
			"use strict";

			function i() {
			}

			function o(e) {
				return void 0 !== e //書き換えた。
			}
			n.d(t, "a", function() {
				return o//iをoに書き換えた。
			}), n.d(t, "b", function() {
				return o
			})
		}, , , function(e, t, n) {
			"use strict";
			n.d(t, "b", function() {
				return o
			}), n.d(t, "a", function() {
				return o
			});
			const i = "autopilotActions";

			function o() {
				return new Promise(e => {
					chrome.storage.sync.get([i], t => e(t[i]))
				})
			}
		},
		 function(e, t, n) {
			"use strict";
		}, function(e, t, n) {
			"use strict";
		}, function(e, t, n) {
			"use strict";
			var i = n(0);
			const o = {
				followBlacklist: "@username1,@username2",
				followBioRequired: !1,
				followIntervalMax: 50,
				followIntervalMin: 40,
				followLimit: 300,
				followMaxFollowers: 500,
				followMaxFollowings: 500,
				followPauseWhenTwitterLimitExceeded: 5,
				followProfileImageRequired: !0,
				followSkipFollowed: !0,
				followSkipFollower: !1,
				followSkipProtected: !1,
				followSkipVerified: !0,
				followTweetLanguageWhitelist: ""
			};
			t.a = {
				all: () => Object(i.a)(o)
			}
		}, function(e, t, n) {
			"use strict";
			var i = n(0);
			const o = {
				unfollowBlacklist: "@username1,@username2",
				unfollowIntervalMax: .5,
				unfollowIntervalMin: .1,
				unfollowLimit: "",
				unfollowMassFollowedRequired: !1,
				unfollowMinDaysFollowed: 2,
				unfollowSkipFollower: !0,
				unfollowSkipVerified: !1
			};
			t.a = {
				all: () => Object(i.a)(o)
			}
		}, function(e, t, n) {
			"use strict";
			n.d(t, "a", function() {
				return a
			});
			var i = n(0);
			const o = {
				autopilotRepeatAfter: 60
			};

			function a() {
				return Object(i.a)(o)
			}
		}, , , function(e, t, n) {
			n(16), e.exports = n(14)
		}, function(e, t, n) {}, , function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(5);
			let o = [];

			function a() {
				const e = {
					number: o.length + 1,
					id: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16))
				};
				return o.push(e), e
			}

			function l() {
				return new Promise(e => {
					const t = {};
					t[i.b] = o, chrome.storage.sync.set(t, () => e())
				})
			}
			const r = {},
				s = {},
				c = {},
				u = (e, t) => {
					const n = document.createElement("img");
					return n.classList.add("icon"), n.setAttribute("alt", t), n.setAttribute("src", e), n.setAttribute("title", t), n.style.display = "none", n
				};
			var d = {
				addAlias: (e, t) => {
					r[e] = t
				},
				hide: e => {
					r[e] && (e = r[e]), s[e].style.display = "none", c[e].style.display = "none"
				},
				animateProcess: e => {
					r[e] && (e = r[e]), s[e].style.display = "none", c[e].style.display = "initial"
				},
				animateSuccess: e => {
					r[e] && (e = r[e]), c[e].style.display = "none", s[e].style.display = "initial"
				},
				create: e => {
					if(r[e]) return;
					const t = document.querySelector(`label[for="${e}"]`);
					s[e] = u("check.svg", "Successfully updated"),
					c[e] = u("spinner.svg", "Updating..."),
					c[e].classList.add("icon--spin")
				}
			};

			function f(e) {
				let t;
				return() => {
					clearTimeout(t), t = setTimeout(e, 200)
				}
			}
			const m = ({
				id: e
			}) => `action_${e}_url`;
			const p = e => {
				const t = document.getElementById(m(e));
				["mass_follow",].includes(e.type) ? t.style.display = "initial" : t.style.display = "none"
			};
			const w = ({
				id: e
			}) => `action_${e}_type`;
			const y = e => `${w(e)}_label`;
			const v = ({
				id: e
			}) => `action_${e}_idle_timeout`;
			const g = ({
				id: e
			}) => `action_${e}_limit`;
			const b = ({
				id: e
			}) => `action_${e}_remove`;

			function h(e) {
				const t = document.getElementById(b(e));
				t.addEventListener("click", async() => {
					d.animateProcess(w(e)), t.disabled = !0,
						function({
							id: e
						}) {
							o.forEach((t, n) => {
								t.id === e && o.splice(n, 1)
							}), o.forEach((e, t) => {
								e.number = t + 1
							})
						}(e), await l(), t.closest(".action").remove(), o.forEach(e => (function(e) {
							document.getElementById(y(e)).innerHTML = `#${e.number}`
						})(e))
				})
			}
			const E = document.getElementById("actions");

			function L(e) {
				const t = document.createElement("tr");
                t.classList.add("action"), t.innerHTML = `\n
                    <td>${
                        function(e){
                            return`<label id="${y(e)}" for="${w(e)}">#${e.number}</label>`
                        }(e)
                    }
                    </td>\n
                    <td>${
                        function(e){
                            return`\n
                             <select id="${w(e)}" required>\n
                                <option value="" disabled selected>Select action</option>\n
                                <option value="mass_follow">Mass follow</option>\n
                                <option value="mass_unfollow">Mass unfollow</option>\n
                            </select>\n  `
                                    }(e)
                            }
                    </td>\n
                    <td>${
                        function(e){
                            return`<input class="action__url-field" type="text" id="${m(e)}" placeholder="URL">`
                                    }(e)
                    }
                    </td>\n
                    <td>${
                        function(e){ 
                        return`<input type="number" step="1" id="${g(e)}" placeholder="Limit">`
                                    }(e)
                        }
                    </td>\n
                    <td>${
                        function(e){
                            return`<input type="number" step="0.1" id="${v(e)}" placeholder="Idle timeout">`
                        }(e)
                        }
                    </td>\n
                    <td>${function(e){
                            return`<button id="${b(e)}" class="button button--remove">Remove</a>`
                        }(e)
                    }
                    </td>\n  `,
                    E.append(t),
                    function(e){
                        d.create(w(e))
                    }(e),
                    function(e){
                        const t=document.getElementById(w(e));
                        e.type&&(t.value=e.type),
                        t.addEventListener("change",()=>{e.type=t.value,d.animateProcess(w(e)),p(e)}),
                        t.addEventListener("change",f(async()=>{await l(),d.animateSuccess(w(e))}))
                    }(e),
                    function(e){
                        const t=document.getElementById(m(e));
                        e.url&&(t.value=e.url),
                        d.addAlias(m(e),w(e)),
                        t.addEventListener("input",()=>{e.url=t.value,d.animateProcess(m(e))}),
                        t.addEventListener("input",f(async()=>{await l(),d.animateSuccess(m(e))})),
                        p(e)}(e),
                        function(e){
                            const t=document.getElementById(g(e));
                            e.limit&&(t.value=e.limit),
                            d.addAlias(g(e),w(e)),
                            t.addEventListener("input",()=>{e.limit=t.value,d.animateProcess(g(e))}),
                            t.addEventListener("input",f(async()=>{await l(),d.animateSuccess(g(e))}))
                        }(e),
                        function(e){
                            const t=document.getElementById(v(e));e.idleTimeout&&(t.value=e.idleTimeout),
                            d.addAlias(v(e),w(e)),
                            t.addEventListener("input",()=>{e.idleTimeout=t.value,d.animateProcess(v(e))})
                            t.addEventListener("input",f(async()=>{await l(),d.animateSuccess(v(e))}))
                        }(e),
                        h(e)
                        }async function _(){
                            const e=await async function(){
                                const e=await Object(i.a)();return Array.isArray(e)&&(o=e),o
                            }();
                            for(let t=e.length;t<3;t++)a();
                            e.forEach(e=>L(e)),
                            document.getElementById("add_action").addEventListener("click",()=>{L(a())})
                        }
                        let M="https://www.clemensteichmann.com/";
                        M+="api/superpowers_for_twitter/";
                        const k=e=>new Promise(t=>{fetch(`https://www.clemensteichmann.com/api/superpowers_for_twitter/${e}`,{method:"PATCH",headers:{"content-type":"application/json"}})
                        .then(e=>{
							e.json().then(e=>t(e))
						})});
                        async function I(e){
                            const t=await async function(e){
                                return k(`subscriptions/${e}/activate`)
                            }(e);
                            return new Promise((e,n)=>{
                                if(t.activation_key){
									chrome.storage.sync.set(n,()=>e(n))
                                }else
                                    n(t.error_message)
                                })
                            }
							var P=n(2);

                            var O=n(8),T=n(6),B=n(7),R=n(9),F=n(10);
                            d.addAlias("followIntervalMax","followIntervalMin"),
                            d.addAlias("unfollowIntervalMax","unfollowIntervalMin");
                            const H=(e,t)=>{
								const n={};
								n[e]=t,"followBlacklist"==e||"unfollowBlacklist"==e?chrome.storage.local.set(n,()=>d.animateSuccess(e)):chrome.storage.sync.set(n,()=>d.animateSuccess(e))};
                                (async()=>{
									let e=await O.a.all();
                            		e={...e,...await R.a.all()},
									e={...e,...await Object(F.a)()},
                                	Object.keys(e).forEach(t=>{
                                    	const n=document.getElementById(t);d.create(t),
                                    	"checkbox"===n.type?(n.checked=e[t],n.addEventListener("change",()=>d.animateProcess(t)),
                                    	n.addEventListener("change",f(()=>H(t,n.checked)))):(n.value=e[t],
                                        n.addEventListener("input",()=>d.animateProcess(t)),
                                        n.addEventListener("input",f(()=>H(t,n.value))))
                                    }),
                                    await _()
                                }
                                )()
                            }
                        ]
                        );
