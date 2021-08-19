void function (e){
    var t = {}; //連想配列

    function n(o) {
        if(t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: 0,
            exports:{}
        };
        return e[o].call(i.exports, i, i.exports, n), //各function(e, t, n)と何らかのやり取りをしている
        l = 1,
        i.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e_1, t_1, o_1) {
		n.o(e_1, t_1) || Object.defineProperty(e_1, t_1, {
			enumerable: 1,
			get: o_1
		})
    },

    n.r = function(e_2) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e_2, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e_2, "__esModule", {
			value: 1
		})
    },

    n.t = function(e_3, t_3) {
		if(1 & t_3 && (e_3 = n(e_3)), 8 & t_3) return e_3;
		if(4 & t_3 && "object" == typeof e_3 && e_3 && e_3.__esModule) return e_3;
		var o_3 = Object.create(null);
		if(n.r(o_3), Object.defineProperty(o_3, "default", {
				enumerable: 1,
				value: e_3
			}), 2 & t_3 && "string" != typeof e_3)
			for(var i in e_3) n.d(o_3, i, function(t_3) {
				return e_3[t_3]
			}.bind(null, i));
		return o_3
    },
    n.n = function(e_4) {
		var t = e_4 && e_4.__esModule ? function() {
			return e_4.default
		} : function() {
			return e_4
		};
		return n.d(t, "a", t), t
    },
     n.o = function(e_5, t) {
		return Object.prototype.hasOwnProperty.call(e_5, t)
    },
     n.p = "", n(n.s = 11)
}//void function ここまで

([function(e_6, t_6, n_6) { //ここから最後の行まで([]);の中   即時関数！！このカッコ内からスタート！！
	//"use strict";//厳格モード（厳しめにエラーが出る）
	t_6.a = function(e_6_1) {
		const t_6_1 = Object.keys(e_6_1);
		return new Promise(function(n_6_1) {
			chrome.storage.sync.get(t_6_1, function(o_6_1) {
				chrome.storage.local.get(t_6_1, function(t_6_1) {
					const i_6_1 = {...e_6_1,
						...o_6_1,
						...t_6_1
					};
					n_6_1(i_6_1)
				})
			})
		})
	}
}, 
function(e_7, t_7, n_7) {
	"use strict";

	function o_7(e_7_1, t_7_1) {
		if(e_7_1.hasOwnProperty(t_7_1)) return e_7_1[t_7_1];
		throw `${t_7_1} missing on ${JSON.stringify(e_7_1)}`
    }
    
	n_7.d(t_7, "a", function() {
		return o_7
	})
},

function(e_8, t_8, n_8) {
	"use strict";

	function o_8() {
	}

	function i_8(e_8_2) {
		return void 0 !== e_8_2
	}
	n_8.d(t_8, "a", function() {
		return o_8
	}), n_8.d(t_8, "b", function() {
		return i_8
	})
},

function(module, __webpack_exports__, __webpack_require__) {
	"use strict";
	__webpack_require__.d(__webpack_exports__, "a", function() {
		return currentUserId
    }),
    __webpack_require__.d(__webpack_exports__, "b", function() {
		return currentUserScreenName
    });
    
	var _lib_dig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4),
        _lib_find_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
    
    const scripts = document.querySelectorAll("script");
    
	scripts.forEach(function(script) {
		script.innerHTML.includes("__INITIAL_STATE__") && eval(script.innerHTML) //エラー出てる...
	});
    const session = Object(_lib_dig__WEBPACK_IMPORTED_MODULE_0__.a)(window, "__INITIAL_STATE__", "session"),
		  users = Object(_lib_dig__WEBPACK_IMPORTED_MODULE_0__.a)(window, "__INITIAL_STATE__", "entities", "users", "entities"),
		  currentUserId = () =>Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(session, "user_id"); //アローを直したらエラー出たﾋﾟｴﾝ

	function currentUserScreenName() {
		const e = users ? Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(users, currentUserId()) : Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(session, "user");
		return Object(_lib_find_property__WEBPACK_IMPORTED_MODULE_1__.a)(e, "screen_name")
	}
}, 

function(e_9, t_9, n_9) {
	"use strict";
	t_9.a = function(e_9_1, ...t_9_1) {
		for(let n_9_1 = 0; n_9_1 < t_9_1.length; n_9_1++)
			if(void 0 === (e_9_1 = e_9_1[t_9_1[n_9_1]])) return;
		return e_9_1
	}
},
function(e_10, t_10, n_10) {
	"use strict";
	n_10.d(t_10, "b", function() {
		return o_10
	}), n_10.d(t_10, "a", function() {
		return i_10
	});
	const o_10 = "autopilotActions";

	function i_10() {
		return new Promise(function(e) {
			chrome.storage.sync.get([o_10], function(t) {e(t_10_1[o_10])})
		})
	}
},
function(e_11, t_11, n_11) {
	"use strict";
},

function(e_12, t_12, n_12) {
	"use strict";
},


function(e_13, t_13, n_13) {
	"use strict";
	var o_13 = n_13(0);
	const i_13 = {
		followBlacklist: "@username1,@username2",
		followBioRequired: 0,
		followIntervalMax: 50,
		followIntervalMin: 40,
		followLimit: 300,
		// フォロワー数判定基準
		followMaxFollowers: 500, 
		followMaxFollowings: 500,
		followPauseWhenTwitterLimitExceeded: 5,
		followProfileImageRequired: 1,
		followSkipFollowed: 1,
		followSkipFollower: 0,
		followSkipProtected: 0,
		followSkipVerified: 1,
		followTweetLanguageWhitelist: ""
	};
	t_13.a = {
		all: () => Object(o_13.a)(i_13)
	}
},
function(e_14, t_14, n_14) {
	"use strict";
	var o_14 = n_14(0);
	const i_14 = {
		unfollowBlacklist: "@username1,@username2",
		unfollowIntervalMax: .5,
		unfollowIntervalMin: .1,
		unfollowLimit: "",
		unfollowMassFollowedRequired: 0,
		unfollowMinDaysFollowed: 2,
		unfollowSkipFollower: 1,
		unfollowSkipVerified: 0
	};
	t_14.a = {
		all: () => Object(o_14.a)(i_14)
	}
},
function(e_15, t_15, n_15) {
	"use strict";
	n_15.d(t_15, "a", function() {
		return a_15
	});
	var o_15 = n_15(0);
	const i_15 = {
		autopilotRepeatAfter: 60
	};

	function a_15() {
		return Object(o_15.a)(i_15)
	}
},
function(e_16, t_16, n_16) {
	n_16(15), e_16.exports_1 = n_16(12)
},
function(e_17, t_17, n_17) {}, , ,//なぜか「,」が三つ必要

function(e_18, t_18, n_18) {//ここから最後まで
	"use strict";
	n_18.r(t_18);
	var o_18 = n_18(3),
		i_18 = n_18(5);
	const a_18 = function e_18_1(){
			switch(e_18_1.type) {
				case "mass_follow":
				case "mass_unfollow":
					return 1;
				default:
					return 0
			}
		},
	s_18 = async function() {
		const i_object = await Object(i_18.a)();//n_18(5);を呼び出し
		return Array.isArray(i_object) ? i_object.filter(a_18_1) : []
	};

	async function r_18() {
		return(await s_18())[0]
	}

	const l_18 = function(e){`https://www.twitter.com${e}`;}
	const c_18 = "SuperpowersForTwitterAutopilotActionId";
	async function u_18() {
			const e_18_3 = sessionStorage.getItem(c_18);//1回目 "SuperpowersForTwitterAutopilotActionId" を呼び出し、sessionStorage.removeItem(c_18)を返す
			if("string" == typeof e_18_3) return sessionStorage.removeItem(c_18),
			await async function(e_18_4) {
				return(await s_18()).find(function(t) {t.id === e_18_4})
			}(e_18_3)
		}

	function f_18(e_18_5) {
		switch(sessionStorage.setItem(c_18, e_18_5.id), e_18_5.type) {
			case "mass_follow":
			case "mass_unfollow":
				location.href = (t_18_5 = Object(o_18_1.b)(), l_18(`/${t_18_5}/following`))
		}
		var t_18_3
	}

	var d_18 = n_18(2);

	const w_18 = 2;

	async function p_18() {
		const s_length = await async function() {
			return(await s_18()).length
		}();
		if(s_length <= w_18) return s_length;
		const t_18_6 = await Object(d_18.a)();
		return Object(d_18.b)(t_18_6) ? s_length : w_18
	}

	function b_18() {
		return location.pathname.toUpperCase() == `/${Object(o_18.b)()}/following`.toUpperCase()
	}

	function y_18() {
		return location.pathname.includes("/lists/")
	}

	var m_18 = n_18(4);

	function g_18(e_18_7) {  //インターバルの処理
		return new Promise(function (t){
			console.log(`Sleeping ${e_18_7} ms ...`),
			// 202108 setTimeout→chrome.alarms
			// setTimeout(
			chrome.alarms(
				function() {t()},
				e_18_7
				)
		})
	}

	const c_ = function({
			text: e_18_8,
			title: t_18_8,
			action: n_18_8
		}) {
			`\n    <div class="sft-ad animated fadeInRight">\n      <div class="sft-ad__title">${t_18_8}</div>\n      <div class="sft-ad__text">${e_18_8}</div>\n      <a class="sft-ad__action" href="${n_18_8.url}" target="_blank">${n_18_8.text}</a>\n    </div>\n  `;
		}
	
	const v_18 = function(){
		const e = document.querySelectorAll(".sft-ad");
		e.forEach(function(e1) {e1.classList.remove("fadeInRight")}),
		window.requestAnimationFrame(function(){
			window.requestAnimationFrame(function(){
				e.forEach(function (e2) {e2.classList.add("fadeInRight")})
			})
		})
	};

	function E_18(e_18_10) {
		if(e_18_10 < 60) return e_18_10;
		const t_18_10 = e_18_10 / 60 / 60,
		  	  n_18_10 = Math.floor(t_18_10),
			  o_18_10 = 60 * (t_18_10 - n_18_10),
			  i_18_10 = Math.floor(o_18_10),
			  a_18_10 = 60 * (o_18_10 - i_18_10),
			  s_18_10 = Math.round(a_18_10);
		let r_18_10;
		return n_18_10 > 0 ? (r_18_10 = String(n_18_10), r_18_10 += ":", r_18_10 += String(i_18_10).padStart(2, 0)) : (r_18_10 = String(i_18_10),r_18_10 += ":", r_18_10 += String(s_18_10).padStart(2, 0))
	}
	const L_18 = document.createElement("div");

//j_18はat();のcase選択要素

	let j_18;

	function O_18() {
		j_18 = "follow"
	}

	function M_18() {
		j_18 = "unfollow"
	}
	L_18.classList.add("sft-status-bar__label");

	var I_18 = n_18(1);

	function T_18(e_18_11) {
		return 1 == e_18_11.followed_by //相手がフォローしているかの判定
	}

	function S_18(e) {
		return Object(I_18.a)(e, "id_str")
	}

	function x_18(e_18_13) {  //公式の判定（おそらく公式ならtrueを返す）
		return 1 == e_18_13.verified
	}

	function $_18(e_18_14) {
		return `/${Object(I_18.a)(e_18_14,"screen_name")}`
	}

	function A_18(e) {
		const t = `[data-testid="${e.id_str}-follow"]`;
		return console.log(`Querying follow button of ${e.screen_name} with ${t}`),
		document.querySelector(t)
	}

	function D_18(e_18_16) {
		const t_18_16 = `[data-testid="UserCell"] a[href="${$_18(e_18_16)}"][role="link"]`;
		return console.log(`ボタンが見つからないため、${e_18_16.screen_name}をフォローできません。${t_18_16}`),
		document.querySelector(t_18_16)
	}

	function P_18(e_18_17) {
		const t_18_17 = `[aria-modal="true"] [data-testid="UserCell"] a[href="${$_18(e_18_17)}"][role="link"]`;
		return console.log(`プロフィールリンクが見つからないため${e_18_17.screen_name}をフォローできません。${t_18_17}`),
		document.querySelector(t_18_17)
	}

	function C_18(e_18_18) {
		return e_18_18.focusableEl.closest('[data-testid="UserCell"]')
	}

	const q_18 = document.createElement("script");
	q_18.type = "text/javascript",
	q_18.innerHTML = "\n(function() {\n  var XHR = XMLHttpRequest.prototype\n  var open = XHR.open\n  XHR.open = function(method, url) {\n    this.url = url\n    this.origin = location.href.toUpperCase()\n    return open.apply(this, arguments)\n  }\n  var send = XHR.send\n  XHR.send = function(body) {\n    this.addEventListener('load', function() {\n      window.postMessage({body: body, origin: this.origin, response: this.response, status: this.status, url: this.url}, '*')\n    })\n    return send.apply(this, arguments)\n  }\n})()\n",
	document.head.prepend(q_18);
	const U_18 = {};

	function W_18(e_18_19, t_18_19) {
		U_18[e_18_19] = U_18[e_18_19] || [], U_18[e_18_19].push(t_18_19)
	}

	window.addEventListener("message", function(e) {
		e.data.origin && "string" == typeof e.data.response && e.data.url && e.data.status && (function({
			body: e_1,
			origin: t_1,
			response: n_1,
			status: o_1,
			url: i_1
		}) {
			Object.keys(U_18).forEach(function(a) {
				if(!i_1.includes(a)) return;
				let s = {};
				if(n_1.length > 0) try {
					s = JSON.parse(n_1)
				} catch(e_2) {
					U_18[a].forEach(function(n_2) {n_2({
						body: e_2,
						origin: t_1,
						parsedResponse: s,
						status: o_1,
						url: i_1
					})})
				}
				U_18[a].forEach(function(n_1) {n_1({
					body: e_1,
					origin: t_1,
					parsedResponse: s,
					status: o_1,
					url: i_1
				})})
			})
		})(e.data)
	});

	const H_18 = {},
		  B_18 = function(e_18_21, t_18_21) {
			t_18_21 && 0 != t_18_21.length && (H_18[e_18_21] ? H_18[e_18_21] = H_18[e_18_21].concat(t_18_21) : H_18[e_18_21] = t_18_21)
		},
		  K_18 = function(e_18_22) {
			const t_18_22 = [];
			return e_18_22.timeline.instructions[0].addEntries.entries.forEach(function(n) {
				const o_18_22 = Object(m_18.a)(n, "content", "item", "content", "user", "id");
				if(o_18_22) {
					const n_1 = e_18_22.globalObjects.users[o_18_22];
					n_1 && t_18_22.push(n_1)
				}
			}), t_18_22
		},
		  N_18 = function(e_18_23, t_18_23) {
			const n_18_23 = Object(m_18.a)(t_18_23, "data", "user", "followers_timeline", "timeline", "instructions") || Object(m_18.a)(t_18_23, "data", "user", "following_timeline", "timeline", "instructions");
			if(!n_18_23) return;
			const o_18_23 = [];
			return n_18_23.forEach(function(t_18_23)  {
				"TimelineAddEntries" == t_18_23.type ? 
					t_18_23.entries.forEach(function(e_18_23) {
						const t_18_23_1 = Object(m_18.a)(e_18_23, "content", "itemContent", "user");
						t_18_23_1 && (t_18_23_1.legacy.id_str = t_18_23_1.rest_id, o_18_23.push(t_18_23_1.legacy))
					}) :"TimelineClearCache" == t_18_23.type && (H_18[e_18_23] = void 0)
			}), o_18_23
		};
	W_18("/lists/members.json",
		function({origin: e, parsedResponse: t}) {
			B_18(e, t.users)
		}
	),
	W_18("/lists/subscribers.json",
		function({origin: e, parsedResponse: t}) {
			B_18(e, t.users)
		}
	),
	W_18("followers/list.json",
		function({origin: e, parsedResponse: t}) {
			B_18(e, t.users)
		}
	),
	W_18("friends/list.json",
		function({origin: e, parsedResponse: t}) {
			B_18(e, K_18(t))
		}
	),
	W_18("search/adaptive.json",
		function({origin: e, parsedResponse: t}) {
			B_18(e, K_18(t))
		}
	),
	W_18("/Followers",
		function({origin: e, parsedResponse: t}) {
			B_18(e, N_18(e, t))
		}
	),
	W_18("/Following",
		function({origin: e, parsedResponse: t}) {
			B_18(e, N_18(e, t))
		}
	),
	W_18("/users/recommendations.json",
		function({origin: e, parsedResponse: t}) {
			B_18(e, (function(e, t) {
				if(!e.includes("/i/related_users/")) return;
				if(0 === Array.isArray(t)) return;
				const n = [];
				return t.forEach(function(e) {
					const t = e.user;
					t && n.push(t)
				}),n
			})(e, t))
		}
	);

	const V_18 = () => H_18[location.href.toUpperCase()]; //アロー外すとエラー出た
	
	async function X_18(e) {
		await $t_18({
			callback: e,
			getFocusableEl: D_18,
			getList: V_18
		})
	}
	let Q_18;
	const J_18 = function(e, t) {
		const n = document.createElement("div");
		n.classList.add("sft-notification", `sft-notification--${t}`), n.innerHTML = e;
		try {
			Q_18.appendChild(n)
		} catch(e) {
			console.log(e), J_18(e, "success")
		}
	};

	function G_18(e) {
		console.log(e), J_18(e, "success")
	}

	function z_18(e) {
		console.log(e), J_18(e, "warning")
	}

	function Y_18(e) {
		Q_18 = e
	}

	function Z_18(e) {
		return Object(I_18.a)(e, "lang")
	}

	const ee_18 = function(e) {0 === e.trim().length};//文字列が存在するかの判定

	function te_18(e) {//言語指定の文字列判定
		if(!ee_18(e)) return e.split(",").map(function(e){e.trim()})
	}

	function ne_18(e, t) {
		return t.includes(Z_18(e))
	}

	var oe_18 = function(e) {
		return e[Math.floor(Math.random() * e.length)]
	};

	function ie_18(e, t) {
		let n = 1e3 * parseFloat(e);
		const o = 1e3 * parseFloat(t),
			i = [n];
		for(; n < o;) n += 100, i.push(n);
		return i
	}

	function ae_18(e) {
		return oe_18(e)
	}

	
	function se_18(e) {
		const t = `[data-testid="tweet"] a[href$="/status/${e.retweeted_status_id_str||Object(I_18.a)(e,"id_str")}"][role="link"]`;
		return console.log(`Querying tweet link with ${t}`), document.querySelector(t)
	}
	

	function re_18(e) {
		return e.focusableEl.closest('[data-testid="tweet"]').lastElementChild
	}

	const we_18 = function(e, t, n, o) {
		const i = e();
		if(i) n(i);
		else {
			if("number" == typeof t) {
				if(t <= 0) return void o("要求がタイムアウトしました。");
				t -= 100
			}
			// 202108 settimeoutはchrome.alarmsへ変更
			// setTimeout(function() {we_18(e, t, n, o)}, 100)
			chrome.alarms(function() {we_18(e, t, n, o)}, 100)
		}
	};
	var pe_18
	 = function(e, t) {
			return new Promise(function(n, o){
				we_18(e, t, n, o)
			})
		};

	function he_18(e) {
		return e.split(",").map(function(e) {e.trim().toUpperCase()})
	}

	function ve_18(e, t) {
		return t.includes(`@${Object(I_18.a)(e,"screen_name").toUpperCase()}`)
	}
	
	const ke_18 = window.indexedDB.open("MassFollowForTwitter", 3);

	let Ee_18;

	ke_18.onupgradeneeded = (function(e) {
		(Ee_18 = e.target.result).createObjectStore("v2FollowRecord", {
			keyPath: ["creatorId", "userId"]
		})
	}),
	ke_18.onerror = (function(e) {
		console.log(e), J_18(e, "success")
	}), 
	ke_18.onsuccess = (function(e) {
		Ee_18 = e.target.result
	});
	var Le_18 = {
		add(e, t) {
			Ee_18.transaction([e], "readwrite").objectStore(e).add(t)
		},
		get: function(e, t) {new Promise(function(n) {
			if(!Ee_18.objectStoreNames.contains(e)) return void n(null);
			const o = Ee_18.transaction([e]).objectStore(e).get(t);
			o.onsuccess = (function(){n(o.result)}
			)
		})}
	};

	const je_18 = "v2FollowRecord";

	function Oe_18(e) {
		return function(e, t) {
			Ee_18.transaction([e], "readwrite").objectStore(e).delete(t)
		}(je_18, [Object(o_18.a)(), e])
	}
	var Me_18 = {
			add(e) {
				const t = {
					createdAt: Date.now(),
					creatorId: Object(o_18.a)(),
					userId: S_18(e)
				};
				return Le_18.add(je_18, t)
			},
			get: function (e) {Le_18.get(je_18, [Object(o_18.a)(), S_18(e)])}//ここのエラーが起きたらフォロワー数の確認はするがフォローを行わない
		};
	var	Fe_18 = {
			get: function (e) {Le_18.get("followRecord", e.id_str)}
		};

	async function Re_18(e, t) {
		if(! function(e){return Object(I_18.a)(e, "screen_name") == Object(o_18.b)()} (e) && function(e) {return 1 != e.following && 1 != e.follow_request_sent} (e)){
			if(function(e) {return 1 == e.blocked_by}(e)) return "ブロックされています。";
			if(t.followBioRequired && function(e) {return "" === Object(I_18.a)(e, "description")}(e)) return "プロフィール欄未記入のためスキップ";
			if(t.followSkipVerified && x_18(e)) return "公式アカウントのためスキップ";
			if(ve_18(e, t.blacklist)) return "ブラックリストのためスキップ";
			if(t.followProfileImageRequired && function(e) {return 1 == e.default_profile_image}(e)) return "プロフィール画像未設定のためスキップ";
			if(t.followSkipProtected && function(e) {return 1 == e.protected}(e)) return "鍵アカウントのためスキップ";
			if(t.followSkipFollower && T_18(e)) return "あなたをフォローしているためスキップ";
			if(t.maxFollowers) {
				const n = function(e) {
					return e.followers_count}(e);
				if("number" == typeof n && n > t.maxFollowers) return `${n} フォロワーで、 ${t.maxFollowers} 人以上であるためフォロースキップ`;
				const s = function(e) {
					return e.friends_count}(e);
				if("number" == typeof s && s > t.maxFollowings) return `${s} フォローで,${t.maxFollowings} 人以上であるためフォロースキップ`
			}
			if(t.followSkipFollowed) {
				if(await Me_18.get(e)) return "すでにフォローしたことがあります。";
				if(await Fe_18.get(e)) return "すでにフォローしたことがあります。"
			}
			return 1
		}
	}

	function Ie_18(e) {
		Me_18.add(e), 
		Ft_18()
	}
	async function Te_18(e) {
		await qt_18(async function (t){
			let n;
			if(1 == (n = e.tweetLanguageWhitelist && !ne_18(t, e.tweetLanguageWhitelist) ? `language "${Z_18(t)}" not whitelisted` : await Re_18(t.user, e))) {
				let n;
				Mt_18($_18(t.user)),
					function(e) {
						const t = `a[href="${$_18(e.user)}"][role="link"]`;
						return e.focusableEl.closest('[data-testid="tweet"]').querySelector(t)
					}(t).click();
				try {
					n = await pe_18(function() { A_18(t.user)}, 2e3)
				} catch(e) {
					console.log(e), J_18(e, "success")
				}
				if(n && n.click(), window.history.back(), await pe_18(function() {Rt_18()}), t.focusableEl = await pe_18(function() {se_18(t)}), t.focusableEl.focus(), Y_18(re_18(t)), !n) return z_18("follow button not found");
				Ie_18(t.user), G_18("フォロー成功");
				const o = ae_18(e.intervalDurationRange);
				await kt_18(o)
			} else Y_18(re_18(t)), n && (z_18(n), await kt_18(500))
		})
	}

	const Se_18 = async function(e) {
		if(!yt_18) {
			for(let t = e; t >= 0; t--) {
				const n = V_18()[t];
				if(n.focusableEl = P_18(n), n.focusableEl) {
					if(n.focusableEl.scrollIntoView(), t === e) return;
					break
				}
			}
			await kt_18(40), await Se_18(e)
		}
	};
	var xe_18 = n_18(8);

	//followのリミットやインターバルに関する構文はここから
	const $e_18 = async function() {
		const e = await xe_18.a.all();
		return e.blacklist = he_18(e.followBlacklist),
			   e.tweetLanguageWhitelist = te_18(e.followTweetLanguageWhitelist),
			   e.intervalDurationRange = ie_18(e.followIntervalMin, e.followIntervalMax),
			   e.maxFollowers = parseInt(e.followMaxFollowers),
			   e.maxFollowings = parseInt(e.followMaxFollowings),
			   e
	};

	async function Ae_18(e_1, t_1) { //follow limit
		const n_1 = await $e_18();

		await _t_18(),
  			  n_1.followLimit && Ot_18(n_1.followLimit),
			  e_1 && Ot_18(e_1),
			  t_1 && vt_18(t_1),
			  Lt_18(n_1.followPauseWhenTwitterLimitExceeded), 
			  y_18() && V_18() ? 
				await async function(e_2) {
					await X_18(async function(t_2, n_2) {
						const o_1 = await Re_18(t_2, e_2);
						if(1 == o_1) {
							let o_2 = A_18(t_2);
							if(o_2) o_2.click(),
				      			    Ie_18(t_2);
							else {
								Mt_18($_18(t_2)),
								t_2.focusableEl.click();
								try {
									o_2 = await pe_18(function() {A_18(t_2)}, 4e3)
								} catch(e_3) {
									console.log(e_3), J_18(e_3, "success")
								}
								o_2 && (o_2.click(), Ie_18(t_2)),
								window.history.back(),
								await pe_18(function() {Rt_18()}),
								await Se_18(n_2)
							}
						if(Y_18(C_18(t_2)), !o_2) return z_18("フォローボタンが見つかりません。");
						G_18("フォロー成功");
						const i_1 = ae_18(e_2.intervalDurationRange);
						await kt_18(i_1)
					} else Y_18(C_18(t_2)), o_1 && (z_18(o_1), await kt_18(500))
			})
		}(n_1) : Ct_18() ? await Te_18(n_1) : await async function(e_4) {
			await X_18(async function(t_3) {
				const n_3 = await Re_18(t_3, e_4);
				if(Y_18(C_18(t_3)), 1 == n_3) {
					const n_4 = A_18(t_3);
					if(!n_4) return z_18("フォローボタンが見つかりません。");
					n_4.click(), Ie_18(t_3), G_18("フォロー成功");
					const o_3 = ae_18(e_4.intervalDurationRange);
					await kt_18(o_3)
				} else n_3 && z_18(n_3)
			})
		}(n_1)
	}
	
	const De_18 = document.createElement("div");//ボタン設定（多分ここの真似したら複数個作れるんじゃね）
		  De_18.innerText = "一括フォロー",
		  De_18.setAttribute("role", "button"),
		   De_18.classList.add("sft-button", "sft-button--follow");
		   
	const Rs_18 = document.createElement("div");
		  Rs_18.innerText = "リセット",
		  Rs_18.setAttribute("role","button"),
		  Rs_18.classList.add("sft-button", "sft-button--unfollow");
		  Rs_18.style.display = "initial",
		  Rs_18.addEventListener(
			  "click",
			  function(){
				L_18.style.display = "none",
				localStorage.removeItem(`lt`),
				localStorage.lt = 0,
				lt_18 = 0
			  }
		  )


	const Pe = function(){
		De_18.style.display = "none"
	};
	
	De_18.addEventListener(
		"click",
		async function() {
			lt_18 =	Number(localStorage.lt);
			if (isNaN(lt_18)) {
				lt_18 = 0
			}
			
			Rs_18.style.display = "none",
			O_18(),
			Pe(),
			gt_18_U(),
			await Ae_18()
		}
	);

	//unfollowのフィルター関係
	const Ce_18 = function(e) {Math.floor((Date.now() - e.createdAt) / 864e5)};

	async function qe_18(e, t) {
		if(function(e) {
				return Object(I_18.a)(e, "following")
			}(e)) {
			if(t.unfollowSkipFollower && T_18(e)) return "あなたをフォローしているためスキップ";
			if(t.unfollowSkipVerified && x_18(e)) return "公式アカウントのためスキップ";
			if(ve_18(e, t.blacklist)) return "ブラックリストのためスキップ";
			if(t.unfollowMassFollowedRequired || t.minDaysFollowed) {
				const n = await Me_18.get(e),
					  o = await Fe_18.get(e);
				if(t.unfollowMassFollowedRequired && !n && !o) return "このツールを使ってフォローした人でないためスキップ";
				if(t.minDaysFollowed && n) {
					const e = Ce_18(n);
					if(e < t.minDaysFollowed) return `${e}日フォローしていますが、${t.minDaysFollowed} 日以内にフォローしたためスキップ`
				}
				if(t.minDaysFollowed && o) {
					const e = Ce_18(o);
					if(e < t.minDaysFollowed) return `${e} 日フォローしていますが、 ${t.minDaysFollowed} 日以内にフォローしたためスキップ`
				}
			}
			return 1
		}
	}

	//unfollowのリミットやインターバルに関する構文はここから
	var Ue_18 = n_18(9);
	const We_18 = async function() {
		const e = await Ue_18.a.all();
		return e.blacklist = he_18(e.unfollowBlacklist),
						   		   e.intervalDurationRange = ie_18(e.unfollowIntervalMin, e.unfollowIntervalMax),
								   e.minDaysFollowed = parseInt(e.unfollowMinDaysFollowed),
								   e
	};
	async function He_18(e, t) { //unfollow limit
		const n = await We_18();
		await _t_18(),
		n.unfollowLimit && Ot_18(n.unfollowLimit),
		e && Ot_18(e),
		t && vt_18(t),
		await X_18(async function(e) {
			Y_18(C_18(e));
			const t = await qe_18(e, n);
			if(1 == t) {
				const t = function(e) {
					const t = `[data-testid="${e.id_str}-unfollow"]`;
					return console.log(`Querying unfollow button of ${e.screen_name} with ${t}`), document.querySelector(t)
				}(e);
				if(!t) return z_18("フォロー解除ボタンが見つかりません");
				t.click(),
				document.querySelector('div[data-testid="confirmationSheetConfirm"]').click(),
				Ft_18(),
				G_18("フォロー解除成功");
				const o = ae_18(n.intervalDurationRange);
				await kt_18(o)
			} else t && z_18(t)
		})
	}
	const Be_18 = document.createElement("div");
	Be_18.innerText = "一括フォロー解除",
	Be_18.setAttribute("role", "button"),
	Be_18.classList.add("sft-button", "sft-button--unfollow");
	const Ke = function() {
		Be_18.style.display = "none"
	};
	Be_18.addEventListener(
		"click",
		async function() {
			M_18(),
			Ke(),
			await He_18()
		}
	);

	const Ne_18 = document.createElement("div");
	Ne_18.innerText = "自動操作",
	Ne_18.setAttribute("role", "button"),
	Ne_18.classList.add("sft-button", "sft-button--autopilot");

	const Ve_18 = function() {
		Ne_18.style.display = "none"
	};
	
	async function Xe_18() {
		
		"/home" == location.pathname && !V_18() && await async function() {
			return "object" == typeof await r_18()
		}
		() ? Ne_18.style.display = "initial" : Ve_18()
	}
	
	Ne_18.addEventListener("click", function() {
		Ve_18(), Bt_18()
	});
	const Qe_18 = document.createElement("aside");
	Qe_18.setAttribute("role", "complementary"),
	Qe_18.classList.add("sft-panel"),
	document.body.appendChild(Qe_18);
	const Je_18 = function() {
			Qe_18.style.display = "none"
		};
	const Ge_18 = function() {
			Qe_18.style.display = "flex"
		};
	
	function ze_18() {
		yt_18 || (
			 Xe_18(),
			( V_18() && !b_18()) ||
			(Ct_18() && !y_18()) ? De_18.style.display = "initial" : Pe(),
			( V_18() &&  b_18()) ? Be_18.style.display = "initial" : Ke(),
			   (
					"initial" == Ne_18.style.display || 
			   		"initial" == De_18.style.display || 
			   		"initial" == Be_18.style.display) ? (
						   	Ye_18.style.display = "none",
							Qe_18.classList.toggle("sft-panel--search-page", "/search" == location.pathname),
			   				Ge_18()
			   		) : Je_18()
			   )
	}
	
	const Ye_18 = document.createElement("div");
	Ye_18.classList.add("stf-button");
	const Ze_18 = document.createElement("div");
	Ze_18.innerText = "中止",
	Ze_18.setAttribute("role", "button"),
	Ze_18.classList.add("sft-button","sft-button--unfollow"),
	Ye_18.append(Ze_18),
	Ze_18.addEventListener("click", function() {
		gt_18(), //動作終了のために必要っぽい
		Kt_18(),
		Je_18(),
		Re_Follow()
	});

	const Re_Follow = function (){
		Qe_18.style.display = "flex",
		Ye_18.style.display = "flex",
		De_18.style.display = "initial",
		Rs_18.style.display = "initial",
		Ze_18.style.display = "none",
		localStorage.lt = lt_18 
	}

	const et_18 = document.createElement("div");

	function tt_18() {
		Ze_18.style.display = "initial",
		et_18.style.display = "none",
			function() {
				switch(j_18) {
					case "follow":
						L_18.innerHTML = `Twitterのフォロー上限に達したため、${E_18(mt_18)} 秒待つ必要があります。`;
				}
			}()
	}

	function nt_18(e) {
		Ze_18.style.display = "initial", 
		et_18.style.display = "none",
			function(e) {
				L_18.innerHTML = `Repeating autopilot in ${E_18(e)} ...`
			}(e)
	}

	function ot_18(e, t) {
		Ze_18.style.display = "none", 
		et_18.style.display = "none",
			function(e, t) {
				L_18.innerHTML = `Autopilot ${e}/${t} ...`
			}(e, t)
	}

	function it_18() {
		Ze_18.style.display = "none", 
		et_18.style.display = "initial",
		localStorage.lt = 0,
			function() {
				switch(j_18) {
					case "follow":
						L_18.innerHTML = `${lt_18}人フォロー完了`;
						break;
					case "unfollow":
						L_18.innerHTML = `${lt_18}人フォロー解除完了`;
				}
			}()
	}

	function at_18() {
		Ze_18.style.display = "initial", 
		et_18.style.display = "none",
		L_18.style.display = "initial",
			function() {
				const e = ct_18 ? `${lt_18}/${ct_18}` : lt_18;
				switch(j_18) {
					case "follow":
						L_18.innerHTML = `${e}人フォロー済`;
						break;
					case "unfollow":
						L_18.innerHTML = `${e}人フォロー解除済`;
						break
				}
			}()
	}

	function st_18() {
		Ye_18.style.display = "flex",
		Pe(),
		Ke()
	}
	et_18.innerText = "閉じる",
	et_18.setAttribute("role", "button"),
	et_18.classList.add("sft-status-bar__button"),
	Ye_18.append(et_18),
	et_18.addEventListener("click", function() {Je_18()});
	var KeyLimit = "";
	let lt_18, 
		lt_tmp, ct_18, ut_18, ft_18, dt_18, wt_18, pt_18, bt_18, yt_18 = 0,
		mt_18 = 0;

	function gt_18() {//動作停止
		yt_18 = 1
	}

	function gt_18_U() {//動作停止からの復帰
		yt_18 = 0
	}

	async function _t_18() {
		//lt_18 = 0,
		localStorage.lt = lt_18 
		mt_18 = 0,
		ut_18 = location.href,
		ft_18 = void 0,
		dt_18 = void 0,
		pt_18 = void 0;
		const e = await Object(d_18.a)();
		(wt_18 = Object(d_18.b)(e)) || (ct_18 = KeyLimit, v_18()),
		at_18(),
		st_18()
	}
	const ht_18 = function() {
		dt_18 = ft_18 ? Date.now() + ft_18 : void 0
	};

	function vt_18(e) {
		ft_18 = 1e3 * parseFloat(e),
		ht_18()
	}
	async function kt_18(e) {
		dt_18 && (dt_18 += e), await g_18(e)
	}

	function Et_18() {
		dt_18 && dt_18 <= Date.now() && (console.log("Idle timeout"), dt_18 = void 0, yt_18 = 1)
	}

	function Lt_18(e) {
		bt_18 = 60 * parseFloat(e)
	}

	function jt_18() {
		mt_18 = bt_18;
		const e = setInterval(function() {
			mt_18 -= 1, tt_18(), (mt_18 <= 0 || yt_18) && (clearInterval(e), mt_18 = 0)
		}, 1e3)
	}

	function Ot_18(e) {
		wt_18 = (ct_18 = e),// : ct_18 && e < ct_18 && (ct_18 = e),
		at_18()
	}

	function Mt_18(e) {
		pt_18 = e
	}

	function Ft_18() {
		lt_18 += 1,
		ct_18 && ct_18 <= lt_18 ? (yt_18 = 1, it_18()) : at_18(),
		ht_18()
	}

	function Rt_18() {
		return location.href == ut_18
	}
	const It_18 = function({getList: e,	getFocusableEl: t}) {
		console.log("Find index for iteration ...");
		for(let n = 0; n < e().length; n++) {
			if(t(e()[n])) return n
		}
	};
	const Tt_18 = async function({getList: e, getFocusableEl: t, oldIndex: n}) {
		if(yt_18) return;
		Et_18(),
		console.log("Scan list for usable index ...");
		for(let o = n + 1; o < e().length; o++) {
			if(t(e()[o])) return o
		}
		const o = e()[n - 1].focusableEl;
		return o && document.body.contains(o) && o.scrollIntoView(), await g_18(500), await Tt_18({
			getList: e,
			getFocusableEl: t,
			oldIndex: n
		})
	};
	const St_18 = async function({callback: e, getList: t, getFocusableEl: n, index: o}) {
		if(yt_18) return;
		if(Et_18(), mt_18) return void await xt_18({
			callback: e,
			getList: t,
			getFocusableEl: n,
			index: o,
			milliseconds: 500
		});
		if(void 0 === t()) return;
		const i = t()[o];
		if(void 0 === i) await xt_18({
			callback: e,
			getList: t,
			getFocusableEl: n,
			index: o,
			milliseconds: 100
		});
		else {
			try {
				i.focusableEl = await pe_18(() => n(i), 2e3)
				} catch(i) {
				console.log(i);
				const a = await Tt_18({
					getList: t,
					getFocusableEl: n,
					oldIndex: o
				});
				return void await St_18({
					callback: e,
					getList: t,
					getFocusableEl: n,
					index: a
				})
			}
				i.focusableEl.focus(), await e(i, o), await St_18({
					callback: e,
					getList: t,
					getFocusableEl: n,
					index: o + 1
				})
			}
		};
	const xt_18 = async function({callback: e, getList: t, getFocusableEl: n, index: o, milliseconds: i}) {
			await g_18(i),
			await St_18({callback: e, getList: t, getFocusableEl: n, index: o})
		};

	async function $t_18({callback: e, getFocusableEl: t, getList: n}) {
		let o;
		await pe_18(() => "number" == typeof(o = It_18({getFocusableEl: t, getList: n})), 2e3),
		await St_18({callback: e, getList: n, getFocusableEl: t, index: o})
	}
	const At_18 = {};
	const Dt_18 = function(e, t) {
			t && 0 != t.length && (At_18[e] ? At_18[e] = At_18[e].concat(t) : At_18[e] = t)
		};
	const Pt_18 = function(e) {
		const t = [];
		return e.timeline.instructions[0].addEntries.entries.forEach(function(n) {
			const o = Object(m_18.a)(n, "content", "item", "content", "tweet");
			if(void 0 === o) return;
			if(o.promotedMetadata) return;
			if(void 0 === o.id) return;
			const i = e.globalObjects.tweets[o.id];
			if(void 0 === i) return;
			const a = Object(I_18.a)(i, "user_id_str");
			i.user = Object(I_18.a)(e.globalObjects.users, a), t.push(i)
		}), t
	};

	W_18("search/adaptive.json",
		function({
			origin: e,
			parsedResponse: t
		})
		{
			Dt_18(e, Pt_18(t))
		}
	), 
	W_18("/timeline/list.json", 
		function({
			origin: e,
			parsedResponse: t
		}) {
			Dt_18(e, Pt_18(t))
		}
	);

	const Ct_18 = () => At_18[location.href.toUpperCase()];
	
	async function qt_18(e) {
		await $t_18({
			callback: e,
			getFocusableEl: se_18,
			getList: Ct_18
		})
	}
	
	var Ut_18 = n_18(10);

	let Wt_18, Ht_18 = 0;

	const Bt_18 = async function() {
		Wt_18 = await r(),
		Ht_18 = 0;
		const e = await p();
		ot_18(Wt_18.number, e),
		Ge_18(),
		st_18(),
		f_18(Wt_18)
	};

	const Kt_18 = function() {//動作停止
		Ht_18 = 1
	};
	
	const Nt_18 = async function() {
		const e = await Object(Ut_18.a)();
		if(!e.autopilotRepeatAfter) return void Kt_18();
		const t = await Object(d.a)();
		if(!Object(d.b)(t)) return void Kt_18();
		let n = 60 * parseFloat(e.autopilotRepeatAfter);
		nt_18(n);
		const o = setInterval(function() {
			Ht_18 ? clearInterval(o) : (nt_18(n -= 1), n <= 0 && (clearInterval(o), Bt_18()))
		}, 1e3)
	};
	async function Vt_18() {
		if(Wt_18 = await u_18()) { //比較していない！u_18の値をWt_18に代入するために一呼吸おいているもの(0またはfalseを代入したときのみスルー)
			   					   //1回目 sessionStorage.removeItem(c_18)がu_18に帰ってくる(おそらくリセットの構文（"SuperpowersForTwitterAutopilotActionId"に対応するKeyの削除）)
			const e_1 = await p_18();
			if(ot_18(Wt_18.number, e_1),
				Ge_18(),
				st_18(),
				await async function(e) {
					switch(e.type) {
						case "mass_follow":
							await pe_18(function () {Ct_18()} || V_18(), 9999), O_18(), await Ae_18(e.limit, e.idleTimeout);
							break;
						case "mass_unfollow":
							await pe_18(function () {V_18()} && b(), 9999), M_18(), await He_18(e.limit, e.idleTimeout)
					}
				}(Wt_18), Ht_18
			) return;//ここまでif文

				const t = await async function(e) {
					const t = await s(),
						n = t.map(function(e) {e.id}).indexOf(e);
					if(-1 !== n) return t[n + 1]
				}(Wt_18.id);
				t && t.number <= e ? (ot_18(t.number, e), f_18(t)) : await Nt_18()
			}
		}
	

	function Xt_18() {
		return "object" == typeof Wt_18 && 0 === Ht_18
	}
	const Qt_18 = function(e) {
		if("object" != typeof e) return;
		const t = e.errors
		if(!Array.isArray(t)) return;
		const n = t[0];
		return "object" == typeof n ? 162 === n.code : void 0
	};

	Ye_18.prepend(L_18),
	Qe_18.append(Ye_18, Ne_18, De_18, Rs_18, Be_18),
	W_18("friendships/create.json",
		function({body: e, parsedResponse: t, status: n}) {
			200 != n && (Oe_18(e.match(/&id=(\d+)/)[1]), Qt_18(t) || (jt_18(), Xt_18() ? gt_18() : jt_18()))
		}
	),
	W_18("favorites/create.json",
		function({status: e}) {
			200 != e && (Xt_18() ? gt_18() : jt_18())
		}
	);
	
	!async function () { //start (感嘆符で優先順位が上がる＆下から動く)
	await Vt_18(),
	setInterval(async function(){
		Xt_18() || location.href != ut_18 && location.pathname != pt_18 && (yt_18 = 0, 1) && (await ze_18())
	},200)
}
	
	()
}]);

