"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[2477], {
		42477: function(e, t, n) {
			function i(e, t) {
				var n = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(e);
					t && (i = i.filter(function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					})), n.push.apply(n, i)
				}
				return n
			}

			function r(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = null != arguments[t] ? arguments[t] : {};
					t % 2 ? i(Object(n), !0).forEach(function(t) {
						l(e, t, n[t])
					}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
					})
				}
				return e
			}

			function s(e) {
				return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				})(e)
			}

			function o(e, t) {
				if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
			}

			function a(e, t) {
				for (var n = 0; n < t.length; n++) {
					var i = t[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
				}
			}

			function u(e, t, n) {
				return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", {
					writable: !1
				}), e
			}

			function l(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}

			function c(e, t) {
				return function(e) {
					if (Array.isArray(e)) return e
				}(e) || function(e, t) {
					var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
					if (null != n) {
						var i, r, s = [],
							o = !0,
							a = !1;
						try {
							for (n = n.call(e); !(o = (i = n.next()).done) && (s.push(i.value), !t || s.length !== t); o = !0);
						} catch (e) {
							a = !0, r = e
						} finally {
							try {
								o || null == n.return || n.return()
							} finally {
								if (a) throw r
							}
						}
						return s
					}
				}(e, t) || h(e, t) || function() {
					throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function d(e) {
				return function(e) {
					if (Array.isArray(e)) return f(e)
				}(e) || function(e) {
					if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
				}(e) || h(e) || function() {
					throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}

			function h(e, t) {
				if (e) {
					if ("string" == typeof e) return f(e, t);
					var n = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0
				}
			}

			function f(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var n = 0, i = Array(t); n < t; n++) i[n] = e[n];
				return i
			}

			function v(e, t) {
				var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (!n) {
					if (Array.isArray(e) || (n = h(e)) || t && e && "number" == typeof e.length) {
						n && (e = n);
						var i = 0,
							r = function() {};
						return {
							s: r,
							n: function() {
								return i >= e.length ? {
									done: !0
								} : {
									done: !1,
									value: e[i++]
								}
							},
							e: function(e) {
								throw e
							},
							f: r
						}
					}
					throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}
				var s, o = !0,
					a = !1;
				return {
					s: function() {
						n = n.call(e)
					},
					n: function() {
						var e = n.next();
						return o = e.done, e
					},
					e: function(e) {
						a = !0, s = e
					},
					f: function() {
						try {
							o || null == n.return || n.return()
						} finally {
							if (a) throw s
						}
					}
				}
			}
			n.d(t, {
				ZP: function() {
					return rl
				}
			});
			var p = {
					DEBUG: !1,
					LIB_VERSION: "1.149.1"
				},
				g = Array.isArray,
				_ = Object.prototype,
				m = _.hasOwnProperty,
				y = _.toString,
				b = g || function(e) {
					return "[object Array]" === y.call(e)
				},
				k = function(e) {
					return "function" == typeof e
				},
				w = function(e) {
					return e === Object(e) && !b(e)
				},
				S = function(e) {
					if (w(e)) {
						for (var t in e)
							if (m.call(e, t)) return !1;
						return !0
					}
					return !1
				},
				E = function(e) {
					return void 0 === e
				},
				I = function(e) {
					return "[object String]" == y.call(e)
				},
				F = function(e) {
					return I(e) && 0 === e.trim().length
				},
				R = function(e) {
					return null === e
				},
				x = function(e) {
					return E(e) || R(e)
				},
				P = function(e) {
					return "[object Number]" == y.call(e)
				},
				T = function(e) {
					return "[object Boolean]" === y.call(e)
				},
				C = "undefined" != typeof window ? window : void 0,
				$ = "undefined" != typeof globalThis ? globalThis : C,
				O = Array.prototype,
				A = O.forEach,
				M = O.indexOf,
				D = null == $ ? void 0 : $.navigator,
				L = null == $ ? void 0 : $.document,
				N = null == $ ? void 0 : $.location,
				q = null == $ ? void 0 : $.fetch,
				B = null != $ && $.XMLHttpRequest && "withCredentials" in new $.XMLHttpRequest ? $.XMLHttpRequest : void 0,
				H = null == $ ? void 0 : $.AbortController,
				j = null == D ? void 0 : D.userAgent,
				U = null != C ? C : {},
				W = "[PostHog.js]",
				G = {
					_log: function(e) {
						if (C && (p.DEBUG || U.POSTHOG_DEBUG) && !E(C.console) && C.console) {
							for (var t = ("__rrweb_original__" in C.console[e]) ? C.console[e].__rrweb_original__ : C.console[e], n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
							t.apply(void 0, [W].concat(i))
						}
					},
					info: function() {
						for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						G._log.apply(G, ["log"].concat(t))
					},
					warn: function() {
						for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						G._log.apply(G, ["warn"].concat(t))
					},
					error: function() {
						for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
						G._log.apply(G, ["error"].concat(t))
					},
					critical: function() {
						for (var e, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
						(e = console).error.apply(e, [W].concat(n))
					},
					uninitializedWarning: function(e) {
						G.error("You must initialize PostHog before calling ".concat(e))
					}
				},
				z = {},
				V = function(e) {
					return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
				};

			function Q(e, t, n) {
				if (b(e)) {
					if (A && e.forEach === A) e.forEach(t, n);
					else if ("length" in e && e.length === +e.length) {
						for (var i = 0, r = e.length; i < r; i++)
							if (i in e && t.call(n, e[i], i) === z) return
					}
				}
			}

			function J(e, t, n) {
				if (!x(e)) {
					if (b(e)) return Q(e, t, n);
					if (e instanceof FormData) {
						var i, r = v(e.entries());
						try {
							for (r.s(); !(i = r.n()).done;) {
								var s = i.value;
								if (t.call(n, s[1], s[0]) === z) return
							}
						} catch (e) {
							r.e(e)
						} finally {
							r.f()
						}
					} else
						for (var o in e)
							if (m.call(e, o) && t.call(n, e[o], o) === z) return
				}
			}
			var Y = function(e) {
				for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
				return Q(n, function(t) {
					for (var n in t) void 0 !== t[n] && (e[n] = t[n])
				}), e
			};

			function X(e, t) {
				return -1 !== e.indexOf(t)
			}

			function K(e) {
				for (var t = Object.keys(e), n = t.length, i = Array(n); n--;) i[n] = [t[n], e[t[n]]];
				return i
			}
			var Z, ee = function() {
					return Date.now = Date.now || function() {
						return +new Date
					}, Date.now()
				},
				et = function(e) {
					try {
						return e()
					} catch (e) {
						return
					}
				},
				en = function(e) {
					return function() {
						try {
							for (var t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
							return e.apply(this, n)
						} catch (e) {
							G.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), G.critical(e)
						}
					}
				},
				ei = function(e) {
					var t = {};
					return J(e, function(e, n) {
						I(e) && e.length > 0 && (t[n] = e)
					}), t
				},
				er = function(e) {
					return e.replace(/^\$/, "")
				},
				es = function(e) {
					var t, n, i, r, s = "";
					for (t = n = 0, i = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, r = 0; r < i; r++) {
						var o = e.charCodeAt(r),
							a = null;
						o < 128 ? n++ : a = o > 127 && o < 2048 ? String.fromCharCode(o >> 6 | 192, 63 & o | 128) : String.fromCharCode(o >> 12 | 224, o >> 6 & 63 | 128, 63 & o | 128), R(a) || (n > t && (s += e.substring(t, n)), s += a, t = n = r + 1)
					}
					return n > t && (s += e.substring(t, e.length)), s
				},
				eo = function() {
					function e(t) {
						return t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation), t
					}
					return e.preventDefault = function() {
							this.returnValue = !1
						}, e.stopPropagation = function() {
							this.cancelBubble = !0
						},
						function(t, n, i, r, s) {
							if (t) {
								if (t.addEventListener && !r) t.addEventListener(n, i, !!s);
								else {
									var o = "on" + n,
										a = t[o];
									t[o] = function(n) {
										if (n = n || e(null == C ? void 0 : C.event)) {
											var r, s = !0;
											k(a) && (r = a(n));
											var o = i.call(t, n);
											return !1 !== r && !1 !== o || (s = !1), s
										}
									}
								}
							} else G.error("No valid element provided to register_event")
						}
				}();

			function ea(e, t) {
				for (var n = 0; n < e.length; n++)
					if (t(e[n])) return e[n]
			}(eJ = Z || (Z = {})).GZipJS = "gzip-js", eJ.Base64 = "base64";
			var eu = "$people_distinct_id",
				el = "__alias",
				ec = "__timers",
				ed = "$autocapture_disabled_server_side",
				eh = "$heatmaps_enabled_server_side",
				ef = "$exception_capture_enabled_server_side",
				ev = "$exception_capture_endpoint",
				ep = "$web_vitals_enabled_server_side",
				eg = "$session_recording_enabled_server_side",
				e_ = "$console_log_recording_enabled_server_side",
				em = "$session_recording_network_payload_capture",
				ey = "$session_recording_canvas_recording",
				eb = "$replay_sample_rate",
				ek = "$replay_minimum_duration",
				ew = "$sesid",
				eS = "$session_is_sampled",
				eE = "$enabled_feature_flags",
				eI = "$early_access_features",
				eF = "$stored_person_properties",
				eR = "$stored_group_properties",
				ex = "$surveys",
				eP = "$surveys_activated",
				eT = "$flag_call_reported",
				eC = "$user_state",
				e$ = "$client_session_props",
				eO = "$capture_rate_limit",
				eA = "$initial_campaign_params",
				eM = "$initial_referrer_info",
				eD = "$initial_person_info",
				eL = "$epp",
				eN = "__POSTHOG_TOOLBAR__",
				eq = [eu, el, "__cmpns", ec, eg, eh, ew, eE, eC, eI, eR, eF, ex, eT, e$, eO, eA, eM, eL],
				eB = "$active_feature_flags",
				eH = "$override_feature_flags",
				ej = "$feature_flag_payloads",
				eU = function(e) {
					var t, n = {},
						i = v(K(e || {}));
					try {
						for (i.s(); !(t = i.n()).done;) {
							var r = c(t.value, 2),
								s = r[0],
								o = r[1];
							o && (n[s] = o)
						}
					} catch (e) {
						i.e(e)
					} finally {
						i.f()
					}
					return n
				},
				eW = function() {
					function e(t) {
						o(this, e), this.instance = t, this._override_warning = !1, this.featureFlagEventHandlers = [], this.reloadFeatureFlagsQueued = !1, this.reloadFeatureFlagsInAction = !1
					}
					return u(e, [{
						key: "getFlags",
						value: function() {
							return Object.keys(this.getFlagVariants())
						}
					}, {
						key: "getFlagVariants",
						value: function() {
							var e = this.instance.get_property(eE),
								t = this.instance.get_property(eH);
							if (!t) return e || {};
							for (var n = Y({}, e), i = Object.keys(t), r = 0; r < i.length; r++) n[i[r]] = t[i[r]];
							return this._override_warning || (G.warn(" Overriding feature flags!", {
								enabledFlags: e,
								overriddenFlags: t,
								finalFlags: n
							}), this._override_warning = !0), n
						}
					}, {
						key: "getFlagPayloads",
						value: function() {
							return this.instance.get_property(ej) || {}
						}
					}, {
						key: "reloadFeatureFlags",
						value: function() {
							this.reloadFeatureFlagsQueued || (this.reloadFeatureFlagsQueued = !0, this._startReloadTimer())
						}
					}, {
						key: "setAnonymousDistinctId",
						value: function(e) {
							this.$anon_distinct_id = e
						}
					}, {
						key: "setReloadingPaused",
						value: function(e) {
							this.reloadFeatureFlagsInAction = e
						}
					}, {
						key: "resetRequestQueue",
						value: function() {
							this.reloadFeatureFlagsQueued = !1
						}
					}, {
						key: "_startReloadTimer",
						value: function() {
							var e = this;
							this.reloadFeatureFlagsQueued && !this.reloadFeatureFlagsInAction && setTimeout(function() {
								!e.reloadFeatureFlagsInAction && e.reloadFeatureFlagsQueued && (e.reloadFeatureFlagsQueued = !1, e._reloadFeatureFlagsRequest())
							}, 5)
						}
					}, {
						key: "_reloadFeatureFlagsRequest",
						value: function() {
							var e = this;
							if (!this.instance.config.advanced_disable_feature_flags) {
								this.setReloadingPaused(!0);
								var t = this.instance.config.token,
									n = this.instance.get_property(eF),
									i = this.instance.get_property(eR),
									r = {
										token: t,
										distinct_id: this.instance.get_distinct_id(),
										groups: this.instance.getGroups(),
										$anon_distinct_id: this.$anon_distinct_id,
										person_properties: n,
										group_properties: i,
										disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
									};
								this.instance._send_request({
									method: "POST",
									url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
									data: r,
									compression: this.instance.config.disable_compression ? void 0 : Z.Base64,
									timeout: this.instance.config.feature_flag_request_timeout_ms,
									callback: function(t) {
										e.setReloadingPaused(!1);
										var n, i = !0;
										200 === t.statusCode && (e.$anon_distinct_id = void 0, i = !1), e.receivedFeatureFlags(null !== (n = t.json) && void 0 !== n ? n : {}, i), e._startReloadTimer()
									}
								})
							}
						}
					}, {
						key: "getFeatureFlag",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) {
								var n, i = this.getFlagVariants()[e],
									r = "".concat(i),
									s = this.instance.get_property(eT) || {};
								return !t.send_event && "send_event" in t || e in s && s[e].includes(r) || (b(s[e]) ? s[e].push(r) : s[e] = [r], null === (n = this.instance.persistence) || void 0 === n || n.register(l({}, eT, s)), this.instance.capture("$feature_flag_called", {
									$feature_flag: e,
									$feature_flag_response: i
								})), i
							}
							G.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.")
						}
					}, {
						key: "getFeatureFlagPayload",
						value: function(e) {
							return this.getFlagPayloads()[e]
						}
					}, {
						key: "isFeatureEnabled",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							if (this.instance.decideEndpointWasHit || this.getFlags() && this.getFlags().length > 0) return !!this.getFeatureFlag(e, t);
							G.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.")
						}
					}, {
						key: "addFeatureFlagsHandler",
						value: function(e) {
							this.featureFlagEventHandlers.push(e)
						}
					}, {
						key: "removeFeatureFlagsHandler",
						value: function(e) {
							this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function(t) {
								return t !== e
							})
						}
					}, {
						key: "receivedFeatureFlags",
						value: function(e, t) {
							if (this.instance.persistence) {
								this.instance.decideEndpointWasHit = !0;
								var n = this.getFlagVariants(),
									i = this.getFlagPayloads();
								(function(e, t) {
									var n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
										s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
										o = e.featureFlags,
										a = e.featureFlagPayloads;
									if (o) {
										if (b(o)) {
											var u, c = {};
											if (o)
												for (var d = 0; d < o.length; d++) c[o[d]] = !0;
											t && t.register((l(u = {}, eB, o), l(u, eE, c), u))
										} else {
											var h = o,
												f = a;
											e.errorsWhileComputingFlags && (h = r(r({}, i), h), f = r(r({}, s), f)), t && t.register((l(n = {}, eB, Object.keys(eU(h))), l(n, eE, h || {}), l(n, ej, f || {}), n))
										}
									}
								})(e, this.instance.persistence, n, i), this._fireFeatureFlagsCallbacks(t)
							}
						}
					}, {
						key: "override",
						value: function(e) {
							if (!this.instance.__loaded || !this.instance.persistence) return G.uninitializedWarning("posthog.feature_flags.override");
							if (this._override_warning = !1, !1 === e) this.instance.persistence.unregister(eH);
							else if (b(e)) {
								for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
								this.instance.persistence.register(l({}, eH, t))
							} else this.instance.persistence.register(l({}, eH, e))
						}
					}, {
						key: "onFeatureFlags",
						value: function(e) {
							var t = this;
							if (this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit) {
								var n = this._prepareFeatureFlagsForCallbacks();
								e(n.flags, n.flagVariants)
							}
							return function() {
								return t.removeFeatureFlagsHandler(e)
							}
						}
					}, {
						key: "updateEarlyAccessFeatureEnrollment",
						value: function(e, t) {
							var n, i, s = l({}, "$feature_enrollment/".concat(e), t);
							this.instance.capture("$feature_enrollment_update", {
								$feature_flag: e,
								$feature_enrollment: t,
								$set: s
							}), this.setPersonPropertiesForFlags(s, !1);
							var o = r(r({}, this.getFlagVariants()), {}, l({}, e, t));
							null === (n = this.instance.persistence) || void 0 === n || n.register((l(i = {}, eB, Object.keys(eU(o))), l(i, eE, o), i)), this._fireFeatureFlagsCallbacks()
						}
					}, {
						key: "getEarlyAccessFeatures",
						value: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
								i = this.instance.get_property(eI);
							if (i && !n) return e(i);
							this.instance._send_request({
								transport: "XHR",
								url: this.instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=".concat(this.instance.config.token)),
								method: "GET",
								callback: function(n) {
									var i;
									if (n.json) {
										var r = n.json.earlyAccessFeatures;
										return null === (i = t.instance.persistence) || void 0 === i || i.register(l({}, eI, r)), e(r)
									}
								}
							})
						}
					}, {
						key: "_prepareFeatureFlagsForCallbacks",
						value: function() {
							var e = this.getFlags(),
								t = this.getFlagVariants();
							return {
								flags: e.filter(function(e) {
									return t[e]
								}),
								flagVariants: Object.keys(t).filter(function(e) {
									return t[e]
								}).reduce(function(e, n) {
									return e[n] = t[n], e
								}, {})
							}
						}
					}, {
						key: "_fireFeatureFlagsCallbacks",
						value: function(e) {
							var t = this._prepareFeatureFlagsForCallbacks(),
								n = t.flags,
								i = t.flagVariants;
							this.featureFlagEventHandlers.forEach(function(t) {
								return t(n, i, {
									errorsLoading: e
								})
							})
						}
					}, {
						key: "setPersonPropertiesForFlags",
						value: function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
								n = this.instance.get_property(eF) || {};
							this.instance.register(l({}, eF, r(r({}, n), e))), t && this.instance.reloadFeatureFlags()
						}
					}, {
						key: "resetPersonPropertiesForFlags",
						value: function() {
							this.instance.unregister(eF)
						}
					}, {
						key: "setGroupPropertiesForFlags",
						value: function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
								n = this.instance.get_property(eR) || {};
							0 !== Object.keys(n).length && Object.keys(n).forEach(function(t) {
								n[t] = r(r({}, n[t]), e[t]), delete e[t]
							}), this.instance.register(l({}, eR, r(r({}, n), e))), t && this.instance.reloadFeatureFlags()
						}
					}, {
						key: "resetGroupPropertiesForFlags",
						value: function(e) {
							if (e) {
								var t = this.instance.get_property(eR) || {};
								this.instance.register(l({}, eR, r(r({}, t), {}, l({}, e, {}))))
							} else this.instance.unregister(eR)
						}
					}]), e
				}();
			Math.trunc || (Math.trunc = function(e) {
				return e < 0 ? Math.ceil(e) : Math.floor(e)
			}), Number.isInteger || (Number.isInteger = function(e) {
				return P(e) && isFinite(e) && Math.floor(e) === e
			});
			var eG = "0123456789abcdef",
				ez = function() {
					function e(t) {
						if (o(this, e), this.bytes = t, 16 !== t.length) throw TypeError("not 128-bit length")
					}
					return u(e, [{
						key: "toString",
						value: function() {
							for (var e = "", t = 0; t < this.bytes.length; t++) e = e + eG.charAt(this.bytes[t] >>> 4) + eG.charAt(15 & this.bytes[t]), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
							if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
							return e
						}
					}, {
						key: "clone",
						value: function() {
							return new e(this.bytes.slice(0))
						}
					}, {
						key: "equals",
						value: function(e) {
							return 0 === this.compareTo(e)
						}
					}, {
						key: "compareTo",
						value: function(e) {
							for (var t = 0; t < 16; t++) {
								var n = this.bytes[t] - e.bytes[t];
								if (0 !== n) return Math.sign(n)
							}
							return 0
						}
					}], [{
						key: "fromFieldsV7",
						value: function(t, n, i, r) {
							if (!Number.isInteger(t) || !Number.isInteger(n) || !Number.isInteger(i) || !Number.isInteger(r) || t < 0 || n < 0 || i < 0 || r < 0 || t > 0xffffffffffff || n > 4095 || i > 1073741823 || r > 4294967295) throw RangeError("invalid field value");
							var s = new Uint8Array(16);
							return s[0] = t / 1099511627776, s[1] = t / 4294967296, s[2] = t / 16777216, s[3] = t / 65536, s[4] = t / 256, s[5] = t, s[6] = 112 | n >>> 8, s[7] = n, s[8] = 128 | i >>> 24, s[9] = i >>> 16, s[10] = i >>> 8, s[11] = i, s[12] = r >>> 24, s[13] = r >>> 16, s[14] = r >>> 8, s[15] = r, new e(s)
						}
					}]), e
				}(),
				eV = function() {
					function e() {
						o(this, e), l(this, "timestamp", 0), l(this, "counter", 0), l(this, "random", new eK)
					}
					return u(e, [{
						key: "generate",
						value: function() {
							var e = this.generateOrAbort();
							if (E(e)) {
								this.timestamp = 0;
								var t = this.generateOrAbort();
								if (E(t)) throw Error("Could not generate UUID after timestamp reset");
								return t
							}
							return e
						}
					}, {
						key: "generateOrAbort",
						value: function() {
							var e = Date.now();
							if (e > this.timestamp) this.timestamp = e, this.resetCounter();
							else {
								if (!(e + 1e4 > this.timestamp)) return;
								this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
							}
							return ez.fromFieldsV7(this.timestamp, Math.trunc(this.counter / 1073741824), 1073741823 & this.counter, this.random.nextUint32())
						}
					}, {
						key: "resetCounter",
						value: function() {
							this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
						}
					}]), e
				}(),
				eQ = function(e) {
					if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
					for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
					return e
				};
			C && !E(C.crypto) && crypto.getRandomValues && (eQ = function(e) {
				return crypto.getRandomValues(e)
			});
			var eJ, eY, eX, eK = function() {
					function e() {
						o(this, e), l(this, "buffer", new Uint32Array(8)), l(this, "cursor", 1 / 0)
					}
					return u(e, [{
						key: "nextUint32",
						value: function() {
							return this.cursor >= this.buffer.length && (eQ(this.buffer), this.cursor = 0), this.buffer[this.cursor++]
						}
					}]), e
				}(),
				eZ = function() {
					return e0().toString()
				},
				e0 = function() {
					return (eY || (eY = new eV)).generate()
				},
				e1 = "",
				e2 = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
				e3 = {
					is_supported: function() {
						return !!L
					},
					error: function(e) {
						G.error("cookieStore error: " + e)
					},
					get: function(e) {
						if (L) {
							try {
								for (var t = e + "=", n = L.cookie.split(";").filter(function(e) {
										return e.length
									}), i = 0; i < n.length; i++) {
									for (var r = n[i];
										" " == r.charAt(0);) r = r.substring(1, r.length);
									if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
								}
							} catch (e) {}
							return null
						}
					},
					parse: function(e) {
						var t;
						try {
							t = JSON.parse(e3.get(e)) || {}
						} catch (e) {}
						return t
					},
					set: function(e, t, n, i, r) {
						if (L) try {
							var s = "",
								o = "",
								a = function(e, t) {
									if (t) {
										var n = function(e) {
											var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L;
											if (e1) return e1;
											if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
											for (var n = e.split("."), i = Math.min(n.length, 8), r = "dmn_chk_" + eZ(), s = RegExp("(^|;)\\s*" + r + "=1"); !e1 && i--;) {
												var o = n.slice(i).join("."),
													a = r + "=1;domain=." + o;
												t.cookie = a, s.test(t.cookie) && (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", e1 = o)
											}
											return e1
										}(e);
										if (!n) {
											var i, r = (i = e.match(e2)) ? i[0] : "";
											r !== n && G.info("Warning: cookie subdomain discovery mismatch", r, n), n = r
										}
										return n ? "; domain=." + n : ""
									}
									return ""
								}(L.location.hostname, i);
							if (n) {
								var u = new Date;
								u.setTime(u.getTime() + 24 * n * 36e5), s = "; expires=" + u.toUTCString()
							}
							r && (o = "; secure");
							var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; SameSite=Lax; path=/" + a + o;
							return l.length > 3686.4 && G.warn("cookieStore warning: large cookie, len=" + l.length), L.cookie = l, l
						} catch (e) {
							return
						}
					},
					remove: function(e, t) {
						try {
							e3.set(e, "", -1, t)
						} catch (e) {
							return
						}
					}
				},
				e5 = null,
				e6 = {
					is_supported: function() {
						if (!R(e5)) return e5;
						var e = !0;
						if (E(C)) e = !1;
						else try {
							var t = "__mplssupport__";
							e6.set(t, "xyz"), '"xyz"' !== e6.get(t) && (e = !1), e6.remove(t)
						} catch (t) {
							e = !1
						}
						return e || G.error("localStorage unsupported; falling back to cookie store"), e5 = e, e
					},
					error: function(e) {
						G.error("localStorage error: " + e)
					},
					get: function(e) {
						try {
							return null == C ? void 0 : C.localStorage.getItem(e)
						} catch (e) {
							e6.error(e)
						}
						return null
					},
					parse: function(e) {
						try {
							return JSON.parse(e6.get(e)) || {}
						} catch (e) {}
						return null
					},
					set: function(e, t) {
						try {
							null == C || C.localStorage.setItem(e, JSON.stringify(t))
						} catch (e) {
							e6.error(e)
						}
					},
					remove: function(e) {
						try {
							null == C || C.localStorage.removeItem(e)
						} catch (e) {
							e6.error(e)
						}
					}
				},
				e8 = ["distinct_id", ew, eS, eL],
				e4 = r(r({}, e6), {}, {
					parse: function(e) {
						try {
							var t = {};
							try {
								t = e3.parse(e) || {}
							} catch (e) {}
							var n = Y(t, JSON.parse(e6.get(e) || "{}"));
							return e6.set(e, n), n
						} catch (e) {}
						return null
					},
					set: function(e, t, n, i, r) {
						try {
							e6.set(e, t);
							var s = {};
							e8.forEach(function(e) {
								t[e] && (s[e] = t[e])
							}), Object.keys(s).length && e3.set(e, s, n, i, r)
						} catch (e) {
							e6.error(e)
						}
					},
					remove: function(e, t) {
						try {
							null == C || C.localStorage.removeItem(e), e3.remove(e, t)
						} catch (e) {
							e6.error(e)
						}
					}
				}),
				e7 = {},
				e9 = {
					is_supported: function() {
						return !0
					},
					error: function(e) {
						G.error("memoryStorage error: " + e)
					},
					get: function(e) {
						return e7[e] || null
					},
					parse: function(e) {
						return e7[e] || null
					},
					set: function(e, t) {
						e7[e] = t
					},
					remove: function(e) {
						delete e7[e]
					}
				},
				te = null,
				tt = {
					is_supported: function() {
						if (!R(te)) return te;
						if (te = !0, E(C)) te = !1;
						else try {
							var e = "__support__";
							tt.set(e, "xyz"), '"xyz"' !== tt.get(e) && (te = !1), tt.remove(e)
						} catch (e) {
							te = !1
						}
						return te
					},
					error: function(e) {
						G.error("sessionStorage error: ", e)
					},
					get: function(e) {
						try {
							return null == C ? void 0 : C.sessionStorage.getItem(e)
						} catch (e) {
							tt.error(e)
						}
						return null
					},
					parse: function(e) {
						try {
							return JSON.parse(tt.get(e)) || null
						} catch (e) {}
						return null
					},
					set: function(e, t) {
						try {
							null == C || C.sessionStorage.setItem(e, JSON.stringify(t))
						} catch (e) {
							tt.error(e)
						}
					},
					remove: function(e) {
						try {
							null == C || C.sessionStorage.removeItem(e)
						} catch (e) {
							tt.error(e)
						}
					}
				},
				tn = ["localhost", "127.0.0.1"],
				ti = function(e) {
					var t = null == L ? void 0 : L.createElement("a");
					return E(t) ? null : (t.href = e, t)
				},
				tr = function(e, t) {
					return !! function(e) {
						try {
							new RegExp(e)
						} catch (e) {
							return !1
						}
						return !0
					}(t) && new RegExp(t).test(e)
				},
				ts = function(e) {
					var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
						r = [];
					return J(e, function(e, i) {
						E(e) || E(i) || "undefined" === i || (t = encodeURIComponent(e instanceof File ? e.name : e.toString()), n = encodeURIComponent(i), r[r.length] = n + "=" + t)
					}), r.join(i)
				},
				to = function(e, t) {
					for (var n, i = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), r = 0; r < i.length; r++) {
						var s = i[r].split("=");
						if (s[0] === t) {
							n = s;
							break
						}
					}
					if (!b(n) || n.length < 2) return "";
					var o = n[1];
					try {
						o = decodeURIComponent(o)
					} catch (e) {
						G.error("Skipping decoding for malformed query param: " + o)
					}
					return o.replace(/\+/g, " ")
				},
				ta = function(e, t) {
					var n = e.match(RegExp(t + "=([^&]*)"));
					return n ? n[1] : null
				},
				tu = "Mobile",
				tl = "Android",
				tc = "Tablet",
				td = tl + " " + tc,
				th = "iPad",
				tf = "Apple",
				tv = tf + " Watch",
				tp = "Safari",
				tg = "BlackBerry",
				t_ = "Samsung",
				tm = t_ + "Browser",
				ty = t_ + " Internet",
				tb = "Chrome",
				tk = tb + " OS",
				tw = tb + " iOS",
				tS = "Internet Explorer",
				tE = tS + " " + tu,
				tI = "Opera",
				tF = tI + " Mini",
				tR = "Edge",
				tx = "Microsoft " + tR,
				tP = "Firefox",
				tT = tP + " iOS",
				tC = "Nintendo",
				t$ = "PlayStation",
				tO = "Xbox",
				tA = tl + " " + tu,
				tM = tu + " " + tp,
				tD = "Windows",
				tL = tD + " Phone",
				tN = "Nokia",
				tq = "Ouya",
				tB = "Generic",
				tH = tB + " " + tu.toLowerCase(),
				tj = tB + " " + tc.toLowerCase(),
				tU = "Konqueror",
				tW = "(\\d+(\\.\\d+)?)",
				tG = RegExp("Version/" + tW),
				tz = RegExp(tO, "i"),
				tV = RegExp(t$ + " \\w+", "i"),
				tQ = RegExp(tC + " \\w+", "i"),
				tJ = RegExp(tg + "|PlayBook|BB10", "i"),
				tY = {
					"NT3.51": "NT 3.11",
					"NT4.0": "NT 4.0",
					"5.0": "2000",
					5.1: "XP",
					5.2: "XP",
					"6.0": "Vista",
					6.1: "7",
					6.2: "8",
					6.3: "8.1",
					6.4: "10",
					"10.0": "10"
				},
				tX = function(e, t) {
					var n, i;
					return t = t || "", X(e, " OPR/") && X(e, "Mini") ? tF : X(e, " OPR/") ? tI : tJ.test(e) ? tg : X(e, "IE" + tu) || X(e, "WPDesktop") ? tE : X(e, tm) ? ty : X(e, tR) || X(e, "Edg/") ? tx : X(e, "FBIOS") ? "Facebook " + tu : X(e, "UCWEB") || X(e, "UCBrowser") ? "UC Browser" : X(e, "CriOS") ? tw : X(e, "CrMo") ? tb : X(e, tl) && X(e, tp) ? tA : X(e, tb) ? tb : X(e, "FxiOS") ? tT : X(e.toLowerCase(), tU.toLowerCase()) ? tU : (n = e, (i = t) && X(i, tf) || X(n, tp) && !X(n, tb) && !X(n, tl)) ? X(e, tu) ? tM : tp : X(e, tP) ? tP : X(e, "MSIE") || X(e, "Trident/") ? tS : X(e, "Gecko") ? tP : ""
				},
				tK = (l(eX = {}, tE, [RegExp("rv:" + tW)]), l(eX, tx, [RegExp(tR + "?\\/" + tW)]), l(eX, tb, [RegExp("(" + tb + "|CrMo)\\/" + tW)]), l(eX, tw, [RegExp("CriOS\\/" + tW)]), l(eX, "UC Browser", [RegExp("(UCBrowser|UCWEB)\\/" + tW)]), l(eX, tp, [tG]), l(eX, tM, [tG]), l(eX, tI, [RegExp("(Opera|OPR)\\/" + tW)]), l(eX, tP, [RegExp(tP + "\\/" + tW)]), l(eX, tT, [RegExp("FxiOS\\/" + tW)]), l(eX, tU, [RegExp("Konqueror[:/]?" + tW, "i")]), l(eX, tg, [RegExp(tg + " " + tW), tG]), l(eX, tA, [RegExp("android\\s" + tW, "i")]), l(eX, ty, [RegExp(tm + "\\/" + tW)]), l(eX, tS, [RegExp("(rv:|MSIE )" + tW)]), l(eX, "Mozilla", [RegExp("rv:" + tW)]), eX),
				tZ = [
					[RegExp(tO + "; " + tO + " (.*?)[);]", "i"), function(e) {
						return [tO, e && e[1] || ""]
					}],
					[RegExp(tC, "i"), [tC, ""]],
					[RegExp(t$, "i"), [t$, ""]],
					[tJ, [tg, ""]],
					[RegExp(tD, "i"), function(e, t) {
						if (/Phone/.test(t) || /WPDesktop/.test(t)) return [tL, ""];
						if (new RegExp(tu).test(t) && !/IEMobile\b/.test(t)) return [tD + " " + tu, ""];
						var n = /Windows NT ([0-9.]+)/i.exec(t);
						if (n && n[1]) {
							var i = tY[n[1]] || "";
							return /arm/i.test(t) && (i = "RT"), [tD, i]
						}
						return [tD, ""]
					}],
					[/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, function(e) {
						return e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]
					}],
					[/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, function(e) {
						var t = "";
						return e && e.length >= 3 && (t = E(e[2]) ? e[3] : e[2]), ["watchOS", t]
					}],
					[RegExp("(" + tl + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + tl + ")", "i"), function(e) {
						return e && e[2] ? [tl, [e[2], e[3], e[4] || "0"].join(".")] : [tl, ""]
					}],
					[/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, function(e) {
						var t = ["Mac OS X", ""];
						if (e && e[1]) {
							var n = [e[1], e[2], e[3] || "0"];
							t[1] = n.join(".")
						}
						return t
					}],
					[/Mac/i, ["Mac OS X", ""]],
					[/CrOS/, [tk, ""]],
					[/Linux|debian/i, ["Linux", ""]]
				],
				t0 = function(e) {
					return tQ.test(e) ? tC : tV.test(e) ? t$ : tz.test(e) ? tO : RegExp(tq, "i").test(e) ? tq : RegExp("(" + tL + "|WPDesktop)", "i").test(e) ? tL : /iPad/.test(e) ? th : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? tv : tJ.test(e) ? tg : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : RegExp(tN, "i").test(e) ? tN : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? !new RegExp(tu).test(e) || /(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) ? /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? tl : td : tl : RegExp("(pda|" + tu + ")", "i").test(e) ? tH : RegExp(tc, "i").test(e) && !RegExp(tc + " pc", "i").test(e) ? tj : ""
				},
				t1 = "https?://(.*)",
				t2 = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "gad_source", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "mc_cid", "igshid", "ttclid", "rdt_cid"],
				t3 = {
					campaignParams: function(e) {
						return L ? this._campaignParamsFromUrl(L.URL, e) : {}
					},
					_campaignParamsFromUrl: function(e, t) {
						var n = t2.concat(t || []),
							i = {};
						return J(n, function(t) {
							var n = to(e, t);
							n && (i[t] = n)
						}), i
					},
					_searchEngine: function(e) {
						return e ? 0 === e.search(t1 + "google.([^/?]*)") ? "google" : 0 === e.search(t1 + "bing.com") ? "bing" : 0 === e.search(t1 + "yahoo.com") ? "yahoo" : 0 === e.search(t1 + "duckduckgo.com") ? "duckduckgo" : null : null
					},
					_searchInfoFromReferrer: function(e) {
						var t = t3._searchEngine(e),
							n = {};
						if (!R(t)) {
							n.$search_engine = t;
							var i = L ? to(L.referrer, "yahoo" != t ? "q" : "p") : "";
							i.length && (n.ph_keyword = i)
						}
						return n
					},
					searchInfo: function() {
						var e = null == L ? void 0 : L.referrer;
						return e ? this._searchInfoFromReferrer(e) : {}
					},
					browser: tX,
					browserVersion: function(e, t) {
						var n = tK[tX(e, t)];
						if (E(n)) return null;
						for (var i = 0; i < n.length; i++) {
							var r = n[i],
								s = e.match(r);
							if (s) return parseFloat(s[s.length - 2])
						}
						return null
					},
					browserLanguage: function() {
						return navigator.language || navigator.userLanguage
					},
					os: function(e) {
						for (var t = 0; t < tZ.length; t++) {
							var n = c(tZ[t], 2),
								i = n[0],
								r = n[1],
								s = i.exec(e),
								o = s && (k(r) ? r(s, e) : r);
							if (o) return o
						}
						return ["", ""]
					},
					device: t0,
					deviceType: function(e) {
						var t = t0(e);
						return t === th || t === td || "Kobo" === t || "Kindle Fire" === t || t === tj ? tc : t === tC || t === tO || t === t$ || t === tq ? "Console" : t === tv ? "Wearable" : t ? tu : "Desktop"
					},
					referrer: function() {
						return (null == L ? void 0 : L.referrer) || "$direct"
					},
					referringDomain: function() {
						var e;
						return null != L && L.referrer && (null === (e = ti(L.referrer)) || void 0 === e ? void 0 : e.host) || "$direct"
					},
					referrerInfo: function() {
						return {
							$referrer: this.referrer(),
							$referring_domain: this.referringDomain()
						}
					},
					initialPersonInfo: function() {
						return {
							r: this.referrer(),
							u: null == N ? void 0 : N.href
						}
					},
					initialPersonPropsFromInfo: function(e) {
						var t, n = e.r,
							i = e.u,
							r = {
								$initial_referrer: n,
								$initial_referring_domain: null == n ? void 0 : "$direct" == n ? "$direct" : null === (t = ti(n)) || void 0 === t ? void 0 : t.host
							};
						if (i) {
							r.$initial_current_url = i;
							var s = ti(i);
							r.$initial_host = null == s ? void 0 : s.host, r.$initial_pathname = null == s ? void 0 : s.pathname, J(this._campaignParamsFromUrl(i), function(e, t) {
								r["$initial_" + er(t)] = e
							})
						}
						return n && J(this._searchInfoFromReferrer(n), function(e, t) {
							r["$initial_" + er(t)] = e
						}), r
					},
					properties: function() {
						if (!j) return {};
						var e = c(t3.os(j), 2);
						return Y(ei({
							$os: e[0],
							$os_version: e[1],
							$browser: t3.browser(j, navigator.vendor),
							$device: t3.device(j),
							$device_type: t3.deviceType(j)
						}), {
							$current_url: null == N ? void 0 : N.href,
							$host: null == N ? void 0 : N.host,
							$pathname: null == N ? void 0 : N.pathname,
							$raw_user_agent: j.length > 1e3 ? j.substring(0, 997) + "..." : j,
							$browser_version: t3.browserVersion(j, navigator.vendor),
							$browser_language: t3.browserLanguage(),
							$screen_height: null == C ? void 0 : C.screen.height,
							$screen_width: null == C ? void 0 : C.screen.width,
							$viewport_height: null == C ? void 0 : C.innerHeight,
							$viewport_width: null == C ? void 0 : C.innerWidth,
							$lib: "web",
							$lib_version: p.LIB_VERSION,
							$insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
							$time: ee() / 1e3
						})
					},
					people_properties: function() {
						if (!j) return {};
						var e = c(t3.os(j), 2);
						return Y(ei({
							$os: e[0],
							$os_version: e[1],
							$browser: t3.browser(j, navigator.vendor)
						}), {
							$browser_version: t3.browserVersion(j, navigator.vendor)
						})
					}
				},
				t5 = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
				t6 = function() {
					function e(t) {
						var n;
						o(this, e), this.config = t, this.props = {}, this.campaign_params_saved = !1, this.name = (n = "", t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), t.persistence_name ? "ph_" + t.persistence_name : "ph_" + n + "_posthog"), this.storage = this.buildStorage(t), this.load(), this.update_config(t, t), this.save()
					}
					return u(e, [{
						key: "buildStorage",
						value: function(e) {
							-1 === t5.indexOf(e.persistence.toLowerCase()) && (G.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
							var t = e.persistence.toLowerCase();
							return "localstorage" === t && e6.is_supported() ? e6 : "localstorage+cookie" === t && e4.is_supported() ? e4 : "sessionstorage" === t && tt.is_supported() ? tt : "memory" === t ? e9 : "cookie" === t ? e3 : e4.is_supported() ? e4 : e3
						}
					}, {
						key: "properties",
						value: function() {
							var e = {};
							return J(this.props, function(t, n) {
								if (n === eE && w(t))
									for (var i, r = Object.keys(t), s = 0; s < r.length; s++) e["$feature/".concat(r[s])] = t[r[s]];
								else i = !1, (R(eq) ? i : M && eq.indexOf === M ? -1 != eq.indexOf(n) : (J(eq, function(e) {
									if (i || (i = e === n)) return z
								}), i)) || (e[n] = t)
							}), e
						}
					}, {
    key: "load",
    value: function() {
        if (!this.disabled) {
            const data = this.storage.parse(this.name);
            if (data) {
                this.props = { ...data };
            }
        }
    }
}, {
    key: "save",
    value: function() {
        if (!this.disabled) {
            this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
        }
    }
}, {
    key: "remove",
    value: function() {
        this.storage.remove(this.name, false);
        this.storage.remove(this.name, true);
    }
}, {
    key: "clear",
    value: function() {
        this.remove();
        this.props = {};
    }
}, {
    key: "register_once",
    value: function(properties, defaultValue, expiry) {
        if (!w(properties)) return false;

        if (E(defaultValue)) defaultValue = "None";
        this.expire_days = E(expiry) ? this.default_expiry : expiry;

        let updated = false;
        J(properties, (value, key) => {
            if (!this.props.hasOwnProperty(key) || this.props[key] === defaultValue) {
                this.props[key] = value;
                updated = true;
            }
        });

        if (updated) {
            //this.save();
            return true;
        }
        return false;
    }
}, {
    key: "register",
    value: function(properties, expiry) {
        if (!w(properties)) return false;

        this.expire_days = E(expiry) ? this.default_expiry : expiry;

        let updated = false;
        J(properties, (value, key) => {
            if (properties.hasOwnProperty(key) && this.props[key] !== value) {
                this.props[key] = value;
                updated = true;
            }
        });

        if (updated) {
            this.save();
            return true;
        }
        return false;
    }
}, {
    key: "unregister",
    value: function(key) {
        if (key in this.props) {
            delete this.props[key];
            this.save();
        }
    }
}
, {
						key: "update_campaign_params",
						value: function() {
							this.campaign_params_saved || (this.register(t3.campaignParams(this.config.custom_campaign_params)), this.campaign_params_saved = !0)
						}
					}, {
						key: "update_search_keyword",
						value: function() {
							this.register(t3.searchInfo())
						}
					}, {
						key: "update_referrer_info",
						value: function() {
							this.register_once(t3.referrerInfo(), void 0)
						}
					}, {
						key: "set_initial_person_info",
						value: function() {
							this.props[eA] || this.props[eM] || this.register_once(l({}, eD, t3.initialPersonInfo()), void 0)
						}
					}, {
						key: "get_referrer_info",
						value: function() {
							return ei({
								$referrer: this.props.$referrer,
								$referring_domain: this.props.$referring_domain
							})
						}
					}, {
						key: "get_initial_props",
						value: function() {
							var e = this,
								t = {};
							J([eM, eA], function(n) {
								var i = e.props[n];
								i && J(i, function(e, n) {
									t["$initial_" + er(n)] = e
								})
							});
							var n = this.props[eD];
							return n && Y(t, t3.initialPersonPropsFromInfo(n)), t
						}
					}, {
						key: "safe_merge",
						value: function(e) {
							return J(this.props, function(t, n) {
								n in e || (e[n] = t)
							}), e
						}
					}, {
						key: "update_config",
						value: function(e, t) {
							if (this.default_expiry = this.expire_days = e.cookie_expiration, this.set_disabled(e.disable_persistence), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie), e.persistence !== t.persistence) {
								var n = this.buildStorage(e),
									i = this.props;
								this.clear(), this.storage = n, this.props = i, this.save()
							}
						}
					}, {
						key: "set_disabled",
						value: function(e) {
							this.disabled = e, this.disabled ? this.remove() : this.save()
						}
					}, {
						key: "set_cross_subdomain",
						value: function(e) {
							e !== this.cross_subdomain && (this.cross_subdomain = e, this.remove(), this.save())
						}
					}, {
						key: "get_cross_subdomain",
						value: function() {
							return !!this.cross_subdomain
						}
					}, {
						key: "set_secure",
						value: function(e) {
							e !== this.secure && (this.secure = e, this.remove(), this.save())
						}
					}, {
						key: "set_event_timer",
						value: function(e, t) {
							var n = this.props[ec] || {};
							n[e] = t, this.props[ec] = n, this.save()
						}
					}, {
						key: "remove_event_timer",
						value: function(e) {
							var t = (this.props[ec] || {})[e];
							return E(t) || (delete this.props[ec][e], this.save()), t
						}
					}, {
						key: "get_property",
						value: function(e) {
							return this.props[e]
						}
					}, {
						key: "set_property",
						value: function(e, t) {
							this.props[e] = t, this.save()
						}
					}]), e
				}();

			function t8(e) {
				var t;
				return JSON.stringify(e, (t = [], function(e, n) {
					if (w(n)) {
						for (; t.length > 0 && t.at(-1) !== this;) t.pop();
						return t.includes(n) ? "[Circular]" : (t.push(n), n)
					}
					return n
				})).length
			}
			var t4 = ((nP = t4 || {})[nP.DomContentLoaded = 0] = "DomContentLoaded", nP[nP.Load = 1] = "Load", nP[nP.FullSnapshot = 2] = "FullSnapshot", nP[nP.IncrementalSnapshot = 3] = "IncrementalSnapshot", nP[nP.Meta = 4] = "Meta", nP[nP.Custom = 5] = "Custom", nP[nP.Plugin = 6] = "Plugin", nP),
				t7 = ((nT = t7 || {})[nT.Mutation = 0] = "Mutation", nT[nT.MouseMove = 1] = "MouseMove", nT[nT.MouseInteraction = 2] = "MouseInteraction", nT[nT.Scroll = 3] = "Scroll", nT[nT.ViewportResize = 4] = "ViewportResize", nT[nT.Input = 5] = "Input", nT[nT.TouchMove = 6] = "TouchMove", nT[nT.MediaInteraction = 7] = "MediaInteraction", nT[nT.StyleSheetRule = 8] = "StyleSheetRule", nT[nT.CanvasMutation = 9] = "CanvasMutation", nT[nT.Font = 10] = "Font", nT[nT.Log = 11] = "Log", nT[nT.Drag = 12] = "Drag", nT[nT.StyleDeclaration = 13] = "StyleDeclaration", nT[nT.Selection = 14] = "Selection", nT[nT.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", nT[nT.CustomElement = 16] = "CustomElement", nT);

			function t9(e) {
				return e ? V(e).split(/\s+/) : []
			}

			function ne(e) {
				var t = null == C ? void 0 : C.location.href;
				return !!(t && e && e.some(function(e) {
					return t.match(e)
				}))
			}

			function nt(e) {
				var t = "";
				switch (s(e.className)) {
					case "string":
						t = e.className;
						break;
					case "object":
						t = ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
						break;
					default:
						t = ""
				}
				return t9(t)
			}

			function nn(e) {
				return x(e) ? null : V(e).split(/(\s+)/).filter(function(e) {
					return nm(e)
				}).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
			}

			function ni(e) {
				var t = "";
				return nc(e) && !nd(e) && e.childNodes && e.childNodes.length && J(e.childNodes, function(e) {
					var n;
					no(e) && e.textContent && (t += null !== (n = nn(e.textContent)) && void 0 !== n ? n : "")
				}), V(t)
			}

			function nr(e) {
				return !!e && 1 === e.nodeType
			}

			function ns(e, t) {
				return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
			}

			function no(e) {
				return !!e && 3 === e.nodeType
			}

			function na(e) {
				return !!e && 11 === e.nodeType
			}
			var nu = ["a", "button", "form", "input", "select", "textarea", "label"];

			function nl(e) {
				var t = e.parentNode;
				return !(!t || !nr(t)) && t
			}

			function nc(e) {
				for (var t = e; t.parentNode && !ns(t, "body"); t = t.parentNode) {
					var n = nt(t);
					if (X(n, "ph-sensitive") || X(n, "ph-no-capture")) return !1
				}
				if (X(nt(e), "ph-include")) return !0;
				var i = e.type || "";
				if (I(i)) switch (i.toLowerCase()) {
					case "hidden":
					case "password":
						return !1
				}
				var r = e.name || e.id || "";
				return !(I(r) && /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, "")))
			}

			function nd(e) {
				return !!(ns(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || ns(e, "select") || ns(e, "textarea") || "true" === e.getAttribute("contenteditable"))
			}
			var nh = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
				nf = new RegExp("^(?:".concat(nh, ")$")),
				nv = new RegExp(nh),
				np = "\\d{3}-?\\d{2}-?\\d{4}",
				ng = new RegExp("^(".concat(np, ")$")),
				n_ = new RegExp("(".concat(np, ")"));

			function nm(e) {
				var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return !(x(e) || I(e) && (e = V(e), (t ? nf : nv).test((e || "").replace(/[- ]/g, "")) || (t ? ng : n_).test(e)))
			}

			function ny(e) {
				var t = ni(e);
				return nm(t = "".concat(t, " ").concat(function e(t) {
					var n = "";
					return t && t.childNodes && t.childNodes.length && J(t.childNodes, function(t) {
						var i;
						if (t && "span" === (null === (i = t.tagName) || void 0 === i ? void 0 : i.toLowerCase())) try {
							var r = ni(t);
							n = "".concat(n, " ").concat(r).trim(), t.childNodes && t.childNodes.length && (n = "".concat(n, " ").concat(e(t)).trim())
						} catch (e) {
							G.error(e)
						}
					}), n
				}(e)).trim()) ? t : ""
			}

			function nb(e) {
				return e.replace(/"|\\"/g, '\\"')
			}
			var nk = "[SessionRecording]",
				nw = "redacted",
				nS = {
					initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
					maskRequestFn: function(e) {
						return e
					},
					recordHeaders: !1,
					recordBody: !1,
					recordInitialRequests: !1,
					recordPerformance: !1,
					performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
					payloadSizeLimitBytes: 1e6,
					payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io"]
				},
				nE = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
				nI = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
				nF = ["/s/", "/e/", "/i/"];

			function nR(e, t, n, i) {
				if (x(e)) return e;
				var r = (null == t ? void 0 : t["content-length"]) || new Blob([e]).size;
				return I(r) && (r = parseInt(r)), r > n ? nk + " ".concat(i, " body too large to record (").concat(r, " bytes)") : e
			}

			function nx(e, t) {
				if (x(e)) return e;
				var n = e;
				return nm(n, !1) || (n = nk + " " + t + " body " + nw), J(nI, function(e) {
					var i, r;
					null !== (i = n) && void 0 !== i && i.length && -1 !== (null === (r = n) || void 0 === r ? void 0 : r.indexOf(e)) && (n = nk + " " + t + " body " + nw + " as might contain: " + e)
				}), n
			}
			var nP, nT, nC, n$ = function(e, t) {
					var n, i, s = {
							payloadSizeLimitBytes: nS.payloadSizeLimitBytes,
							performanceEntryTypeToObserve: d(nS.performanceEntryTypeToObserve),
							payloadHostDenyList: [].concat(d(t.payloadHostDenyList || []), d(nS.payloadHostDenyList))
						},
						o = !1 !== e.session_recording.recordHeaders && t.recordHeaders,
						a = !1 !== e.session_recording.recordBody && t.recordBody,
						u = !1 !== e.capture_performance && t.recordPerformance,
						l = (i = Math.min(1e6, null !== (n = s.payloadSizeLimitBytes) && void 0 !== n ? n : 1e6), function(e) {
							return null != e && e.requestBody && (e.requestBody = nR(e.requestBody, e.requestHeaders, i, "Request")), null != e && e.responseBody && (e.responseBody = nR(e.responseBody, e.responseHeaders, i, "Response")), e
						}),
						c = function(e) {
							var t;
							return l(function(e) {
								var t = ti(e.name);
								if (!(t && t.pathname && nF.some(function(e) {
										return 0 === t.pathname.indexOf(e)
									}))) return e
							}((x(t = e.requestHeaders) || J(Object.keys(null != t ? t : {}), function(e) {
								nE.includes(e.toLowerCase()) && (t[e] = nw)
							}), e)))
						},
						h = k(e.session_recording.maskNetworkRequestFn);
					return h && k(e.session_recording.maskCapturedNetworkRequestFn) && G.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."), h && (e.session_recording.maskCapturedNetworkRequestFn = function(t) {
						var n = e.session_recording.maskNetworkRequestFn({
							url: t.name
						});
						return r(r({}, t), {}, {
							name: null == n ? void 0 : n.url
						})
					}), s.maskRequestFn = k(e.session_recording.maskCapturedNetworkRequestFn) ? function(t) {
						var n, i, r, s = c(t);
						return s && null !== (n = null === (i = (r = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === i ? void 0 : i.call(r, s)) && void 0 !== n ? n : void 0
					} : function(e) {
						return function(e) {
							if (!E(e)) return e.requestBody = nx(e.requestBody, "Request"), e.responseBody = nx(e.responseBody, "Response"), e
						}(c(e))
					}, r(r(r({}, nS), s), {}, {
						recordHeaders: o,
						recordBody: a,
						recordPerformance: u,
						recordInitialRequests: u
					})
				},
				nO = u(function e(t) {
					var n, i, r = this,
						s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					o(this, e), l(this, "bucketSize", 100), l(this, "refillRate", 10), l(this, "mutationBuckets", {}), l(this, "loggedTracker", {}), l(this, "refillBuckets", function() {
						Object.keys(r.mutationBuckets).forEach(function(e) {
							r.mutationBuckets[e] = r.mutationBuckets[e] + r.refillRate, r.mutationBuckets[e] >= r.bucketSize && delete r.mutationBuckets[e]
						})
					}), l(this, "getNodeOrRelevantParent", function(e) {
						var t = r.rrweb.mirror.getNode(e);
						if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
							var n = t.closest("svg");
							if (n) return [r.rrweb.mirror.getId(n), n]
						}
						return [e, t]
					}), l(this, "numberOfChanges", function(e) {
						var t, n, i, r, s, o, a, u;
						return (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) + (null !== (i = null === (r = e.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) + (null !== (s = null === (o = e.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (u = e.adds) || void 0 === u ? void 0 : u.length) && void 0 !== a ? a : 0)
					}), l(this, "throttleMutations", function(e) {
						if (3 !== e.type || 0 !== e.data.source) return e;
						var t = e.data,
							n = r.numberOfChanges(t);
						t.attributes && (t.attributes = t.attributes.filter(function(e) {
							var t, n, i, s = c(r.getNodeOrRelevantParent(e.id), 2),
								o = s[0],
								a = s[1];
							return 0 !== r.mutationBuckets[o] && (r.mutationBuckets[o] = null !== (t = r.mutationBuckets[o]) && void 0 !== t ? t : r.bucketSize, r.mutationBuckets[o] = Math.max(r.mutationBuckets[o] - 1, 0), 0 === r.mutationBuckets[o] && (r.loggedTracker[o] || (r.loggedTracker[o] = !0, null === (n = (i = r.options).onBlockedNode) || void 0 === n || n.call(i, o, a))), e)
						}));
						var i = r.numberOfChanges(t);
						return 0 !== i || n === i ? e : void 0
					}), this.rrweb = t, this.options = s, this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate, this.bucketSize = null !== (i = this.options.bucketSize) && void 0 !== i ? i : this.bucketSize, setInterval(function() {
						r.refillBuckets()
					}, 1e3)
				}),
				nA = [t7.MouseMove, t7.MouseInteraction, t7.Scroll, t7.ViewportResize, t7.Input, t7.TouchMove, t7.MediaInteraction, t7.Drag],
				nM = function(e) {
					return {
						rrwebMethod: e,
						enqueuedAt: Date.now(),
						attempt: 1
					}
				},
				nD = "[SessionRecording]",
				nL = function() {
					function e(t) {
						var n = this;
						if (o(this, e), l(this, "queuedRRWebEvents", []), l(this, "isIdle", !1), l(this, "_linkedFlagSeen", !1), l(this, "_lastActivityTimestamp", Date.now()), l(this, "_linkedFlag", null), l(this, "_forceAllowLocalhostNetworkCapture", !1), l(this, "_samplingSessionListener", null), this.instance = t, this._captureStarted = !1, this._endpoint = "/s/", this.stopRrweb = void 0, this.receivedDecide = !1, null == C || C.addEventListener("beforeunload", function() {
								n._flushBuffer()
							}), null == C || C.addEventListener("offline", function() {
								n._tryAddCustomEvent("browser offline", {})
							}), null == C || C.addEventListener("online", function() {
								n._tryAddCustomEvent("browser online", {})
							}), null == C || C.addEventListener("visibilitychange", function() {
								if (null != L && L.visibilityState) {
									var e = "window " + L.visibilityState;
									n._tryAddCustomEvent(e, {})
								}
							}), !this.instance.sessionManager) throw G.error(nD + " started without valid sessionManager"), Error(nD + " started without valid sessionManager. This is a bug.");
						var i = this.sessionManager.checkAndGetSessionAndWindowId(),
							r = i.sessionId,
							s = i.windowId;
						this.sessionId = r, this.windowId = s, this.buffer = this.clearBuffer(), this._setupSampling()
					}
					return u(e, [{
						key: "rrwebRecord",
						get: function() {
							var e;
							return null == U || null === (e = U.rrweb) || void 0 === e ? void 0 : e.record
						}
					}, {
						key: "started",
						get: function() {
							return this._captureStarted
						}
					}, {
						key: "sessionManager",
						get: function() {
							if (!this.instance.sessionManager) throw Error(nD + " must be started with a valid sessionManager.");
							return this.instance.sessionManager
						}
					}, {
						key: "fullSnapshotIntervalMillis",
						get: function() {
							var e;
							return (null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.full_snapshot_interval_millis) || 3e5
						}
					}, {
						key: "isSampled",
						get: function() {
							var e = this.instance.get_property(eS);
							return T(e) ? e : null
						}
					}, {
						key: "sessionDuration",
						get: function() {
							var e, t, n = null === (e = this.buffer) || void 0 === e ? void 0 : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
								i = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
							return n ? n.timestamp - i : null
						}
					}, {
						key: "isRecordingEnabled",
						get: function() {
							var e = !!this.instance.get_property(eg),
								t = !this.instance.config.disable_session_recording;
							return C && e && t
						}
					}, {
						key: "isConsoleLogCaptureEnabled",
						get: function() {
							var e = !!this.instance.get_property(e_),
								t = this.instance.config.enable_recording_console_log;
							return null != t ? t : e
						}
					}, {
						key: "canvasRecording",
						get: function() {
							var e = this.instance.get_property(ey);
							return e && e.fps && e.quality ? {
								enabled: e.enabled,
								fps: e.fps,
								quality: e.quality
							} : void 0
						}
					}, {
						key: "networkPayloadCapture",
						get: function() {
							var e, t, n = this.instance.get_property(em),
								i = {
									recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
									recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
								},
								r = (null == i ? void 0 : i.recordHeaders) || (null == n ? void 0 : n.recordHeaders),
								s = (null == i ? void 0 : i.recordBody) || (null == n ? void 0 : n.recordBody),
								o = w(this.instance.config.capture_performance) ? this.instance.config.capture_performance.network_timing : this.instance.config.capture_performance,
								a = !!(T(o) ? o : null == n ? void 0 : n.capturePerformance);
							return r || s || a ? {
								recordHeaders: r,
								recordBody: s,
								recordPerformance: a
							} : void 0
						}
					}, {
						key: "sampleRate",
						get: function() {
							var e = this.instance.get_property(eb);
							return P(e) ? e : null
						}
					}, {
						key: "minimumDuration",
						get: function() {
							var e = this.instance.get_property(ek);
							return P(e) ? e : null
						}
					}, {
						key: "status",
						get: function() {
							return this.receivedDecide ? this.isRecordingEnabled ? x(this._linkedFlag) || this._linkedFlagSeen ? T(this.isSampled) ? this.isSampled ? "sampled" : "disabled" : "active" : "buffering" : "disabled" : "buffering"
						}
					}, {
						key: "startIfEnabledOrStop",
						value: function() {
							this.isRecordingEnabled ? (this._startCapture(), G.info(nD + " started")) : (this.stopRecording(), this.clearBuffer())
						}
					}, {
						key: "stopRecording",
						value: function() {
							this._captureStarted && this.stopRrweb && (this.stopRrweb(), this.stopRrweb = void 0, this._captureStarted = !1, G.info(nD + " stopped"))
						}
					}, {
						key: "makeSamplingDecision",
						value: function(e) {
							var t, n, i = this.sessionId !== e,
								r = this.sampleRate;
							if (P(r)) {
								var s, o = this.isSampled,
									a = i || !T(o);
								(s = a ? Math.random() < r : o) || !a || G.warn(nD + " Sample rate (".concat(r, ") has determined that this sessionId (").concat(e, ") will not be sent to the server.")), this._tryAddCustomEvent("samplingDecisionMade", {
									sampleRate: r
								}), null === (n = this.instance.persistence) || void 0 === n || n.register(l({}, eS, s))
							} else null === (t = this.instance.persistence) || void 0 === t || t.register(l({}, eS, null))
						}
					}, {
						key: "afterDecideResponse",
						value: function(e) {
							var t, n, i, r = this;
							if (this._persistDecideResponse(e), this._linkedFlag = (null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.linkedFlag) || null, null !== (n = e.sessionRecording) && void 0 !== n && n.endpoint && (this._endpoint = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.endpoint), this._setupSampling(), !x(this._linkedFlag)) {
								var s = I(this._linkedFlag) ? this._linkedFlag : this._linkedFlag.flag,
									o = I(this._linkedFlag) ? null : this._linkedFlag.variant;
								this.instance.onFeatureFlags(function(e, t) {
									var n = w(t) && s in t,
										i = o ? t[s] === o : n;
									if (i) {
										var a = {
												linkedFlag: s,
												linkedVariant: o
											},
											u = "linked flag matched";
										G.info(nD + " " + u, a), r._tryAddCustomEvent(u, a)
									}
									r._linkedFlagSeen = i
								})
							}
							this.receivedDecide = !0, this.startIfEnabledOrStop()
						}
					}, {
						key: "_setupSampling",
						value: function() {
							var e = this;
							P(this.sampleRate) && R(this._samplingSessionListener) && (this._samplingSessionListener = this.sessionManager.onSessionId(function(t) {
								e.makeSamplingDecision(t)
							}))
						}
					}, {
						key: "_persistDecideResponse",
						value: function(e) {
							if (this.instance.persistence) {
								var t = this.instance.persistence,
									n = function() {
										var n, i, s, o, a, u, c, d, h = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.sampleRate,
											f = x(h) ? null : parseFloat(h),
											v = null === (i = e.sessionRecording) || void 0 === i ? void 0 : i.minimumDurationMilliseconds;
										t.register((l(d = {}, eg, !!e.sessionRecording), l(d, e_, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled), l(d, em, r({
											capturePerformance: e.capturePerformance
										}, null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.networkPayloadCapture)), l(d, ey, {
											enabled: null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.recordCanvas,
											fps: null === (u = e.sessionRecording) || void 0 === u ? void 0 : u.canvasFps,
											quality: null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.canvasQuality
										}), l(d, eb, f), l(d, ek, E(v) ? null : v), d))
									};
								n(), this.sessionManager.onSessionId(n)
							}
						}
					}, {
						key: "log",
						value: function(e) {
							var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
							null === (t = this.instance.sessionRecording) || void 0 === t || t.onRRwebEmit({
								type: 6,
								data: {
									plugin: "rrweb/console@1",
									payload: {
										level: n,
										trace: [],
										payload: [JSON.stringify(e)]
									}
								},
								timestamp: ee()
							})
						}
					}, {
						key: "_startCapture",
						value: function() {
							var e = this;
							E(Object.assign) || this._captureStarted || this.instance.config.disable_session_recording || this.instance.consent.isOptedOut() || (this._captureStarted = !0, this.sessionManager.checkAndGetSessionAndWindowId(), this.rrwebRecord ? this._onScriptLoaded() : this.instance.requestRouter.loadScript("/static/recorder.js?v=".concat(p.LIB_VERSION), function(t) {
								if (t) return G.error(nD + " could not load recorder.js", t);
								e._onScriptLoaded()
							}))
						}
					}, {
						key: "isInteractiveEvent",
						value: function(e) {
							var t;
							return 3 === e.type && -1 !== nA.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source)
						}
					}, {
						key: "_updateWindowAndSessionIds",
						value: function(e) {
							var t = this.isInteractiveEvent(e);
							t || this.isIdle || e.timestamp - this._lastActivityTimestamp > 3e5 && (this.isIdle = !0, clearTimeout(this._fullSnapshotTimer), this._flushBuffer());
							var n = !1;
							if (t && (this._lastActivityTimestamp = e.timestamp, this.isIdle && (this.isIdle = !1, this._tryAddCustomEvent("sessionNoLongerIdle", {
									reason: "user activity",
									type: e.type
								}), n = !0)), !this.isIdle) {
								var i = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
									r = i.windowId,
									s = i.sessionId,
									o = this.sessionId !== s,
									a = this.windowId !== r;
								this.windowId = r, this.sessionId = s, (n || -1 === [2, 4].indexOf(e.type) && (a || o || E(this._fullSnapshotTimer))) && this._tryTakeFullSnapshot()
							}
						}
					}, {
						key: "_tryRRWebMethod",
						value: function(e) {
							try {
								return e.rrwebMethod(), !0
							} catch (t) {
								return this.queuedRRWebEvents.length < 10 ? this.queuedRRWebEvents.push({
									enqueuedAt: e.enqueuedAt || Date.now(),
									attempt: e.attempt++,
									rrwebMethod: e.rrwebMethod
								}) : G.warn(nD + " could not emit queued rrweb event.", t, e), !1
							}
						}
					}, {
						key: "_tryAddCustomEvent",
						value: function(e, t) {
							var n = this;
							return this._tryRRWebMethod(nM(function() {
								return n.rrwebRecord.addCustomEvent(e, t)
							}))
						}
					}, {
						key: "_tryTakeFullSnapshot",
						value: function() {
							var e = this;
							return this._tryRRWebMethod(nM(function() {
								return e.rrwebRecord.takeFullSnapshot()
							}))
						}
					}, {
						key: "_onScriptLoaded",
						value: function() {
							for (var e, t = this, n = {
									blockClass: "ph-no-capture",
									blockSelector: void 0,
									ignoreClass: "ph-ignore-input",
									maskTextClass: "ph-mask",
									maskTextSelector: void 0,
									maskTextFn: void 0,
									maskAllInputs: !0,
									maskInputOptions: {},
									maskInputFn: void 0,
									slimDOMOptions: {},
									collectFonts: !1,
									inlineStylesheet: !0,
									recordCrossOriginIframes: !1
								}, i = this.instance.config.session_recording, s = 0, o = Object.entries(i || {}); s < o.length; s++) {
								var a = c(o[s], 2),
									u = a[0],
									l = a[1];
								u in n && (n[u] = l)
							}
							if (this.canvasRecording && this.canvasRecording.enabled && (n.recordCanvas = !0, n.sampling = {
									canvas: this.canvasRecording.fps
								}, n.dataURLOptions = {
									type: "image/webp",
									quality: this.canvasRecording.quality
								}), this.rrwebRecord) {
								this.mutationRateLimiter = null !== (e = this.mutationRateLimiter) && void 0 !== e ? e : new nO(this.rrwebRecord, {
									onBlockedNode: function(e, n) {
										var i = "Too many mutations on node '".concat(e, "'. Rate limiting. This could be due to SVG animations or something similar");
										G.info(i, {
											node: n
										}), t.log(nD + " " + i, "warn")
									}
								});
								var d = this._gatherRRWebPlugins();
								this.stopRrweb = this.rrwebRecord(r({
									emit: function(e) {
										t.onRRwebEmit(e)
									},
									plugins: d
								}, n)), this.instance._addCaptureHook(function(e) {
									try {
										if ("$pageview" === e) {
											var n = C ? t._maskUrl(C.location.href) : "";
											if (!n) return;
											t._tryAddCustomEvent("$pageview", {
												href: n
											})
										}
									} catch (e) {
										G.error("Could not add $pageview to rrweb session", e)
									}
								}), this._lastActivityTimestamp = Date.now(), this.isIdle = !1, this._tryAddCustomEvent("$session_options", {
									sessionRecordingOptions: n,
									activePlugins: d.map(function(e) {
										return null == e ? void 0 : e.name
									})
								}), this._tryAddCustomEvent("$posthog_config", {
									config: this.instance.config
								})
							} else G.error(nD + "onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.")
						}
					}, {
						key: "_scheduleFullSnapshot",
						value: function() {
							var e = this;
							if (this._fullSnapshotTimer && clearInterval(this._fullSnapshotTimer), !this.isIdle) {
								var t = this.fullSnapshotIntervalMillis;
								t && (this._fullSnapshotTimer = setInterval(function() {
									e._tryTakeFullSnapshot()
								}, t))
							}
						}
					}, {
						key: "_gatherRRWebPlugins",
						value: function() {
							var e = [];
							return U.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && e.push(U.rrwebConsoleRecord.getRecordConsolePlugin()), this.networkPayloadCapture && k(U.getRecordNetworkPlugin) && (!tn.includes(location.hostname) || this._forceAllowLocalhostNetworkCapture ? e.push(U.getRecordNetworkPlugin(n$(this.instance.config, this.networkPayloadCapture))) : G.info(nD + " NetworkCapture not started because we are on localhost.")), e
						}
					}, {
						key: "onRRwebEmit",
						value: function(e) {
							if (this._processQueuedEvents(), e && w(e)) {
								if (e.type === t4.Meta) {
									var t = this._maskUrl(e.data.href);
									if (this._lastHref = t, !t) return;
									e.data.href = t
								} else this._pageViewFallBack();
								e.type === t4.FullSnapshot && this._scheduleFullSnapshot();
								var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
								if (n) {
									var i = function(e) {
											if (e && w(e) && 6 === e.type && w(e.data) && "rrweb/console@1" === e.data.plugin) {
												e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
												for (var t = [], n = 0; n < e.data.payload.payload.length; n++) e.data.payload.payload[n] && e.data.payload.payload[n].length > 2e3 ? t.push(e.data.payload.payload[n].slice(0, 2e3) + "...[truncated]") : t.push(e.data.payload.payload[n]);
												return e.data.payload.payload = t, e
											}
											return e
										}(n),
										r = t8(i);
									if (this._updateWindowAndSessionIds(i), !this.isIdle || i.type === t4.Custom) {
										var s = {
											$snapshot_bytes: r,
											$snapshot_data: i,
											$session_id: this.sessionId,
											$window_id: this.windowId
										};
										"disabled" !== this.status ? this._captureSnapshotBuffered(s) : this.clearBuffer()
									}
								}
							}
						}
					}, {
						key: "_pageViewFallBack",
						value: function() {
							if (!this.instance.config.capture_pageview && C) {
								var e = this._maskUrl(C.location.href);
								this._lastHref !== e && (this._tryAddCustomEvent("$url_changed", {
									href: e
								}), this._lastHref = e)
							}
						}
					}, {
						key: "_processQueuedEvents",
						value: function() {
							var e = this;
							if (this.queuedRRWebEvents.length) {
								var t = d(this.queuedRRWebEvents);
								this.queuedRRWebEvents = [], t.forEach(function(t) {
									Date.now() - t.enqueuedAt <= 2e3 && e._tryRRWebMethod(t)
								})
							}
						}
					}, {
						key: "_maskUrl",
						value: function(e) {
							var t = this.instance.config.session_recording;
							if (t.maskNetworkRequestFn) {
								var n, i = {
									url: e
								};
								return null === (n = i = t.maskNetworkRequestFn(i)) || void 0 === n ? void 0 : n.url
							}
							return e
						}
					}, {
						key: "clearBuffer",
						value: function() {
							return this.buffer = {
								size: 0,
								data: [],
								sessionId: this.sessionId,
								windowId: this.windowId
							}, this.buffer
						}
					}, {
						key: "_flushBuffer",
						value: function() {
							var e = this;
							this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), this.flushBufferTimer = void 0);
							var t = this.minimumDuration,
								n = this.sessionDuration,
								i = P(n) && n >= 0,
								r = P(t) && i && n < t;
							return "buffering" === this.status || r ? (this.flushBufferTimer = setTimeout(function() {
								e._flushBuffer()
							}, 2e3), this.buffer) : (this.buffer.data.length > 0 && (function e(t) {
								var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6606028.8;
								if (t.size >= n && t.data.length > 1) {
									var i = Math.floor(t.data.length / 2),
										r = t.data.slice(0, i),
										s = t.data.slice(i);
									return [e({
										size: t8(r),
										data: r,
										sessionId: t.sessionId,
										windowId: t.windowId
									}), e({
										size: t8(s),
										data: s,
										sessionId: t.sessionId,
										windowId: t.windowId
									})].flatMap(function(e) {
										return e
									})
								}
								return [t]
							})(this.buffer).forEach(function(t) {
								e._captureSnapshot({
									$snapshot_bytes: t.size,
									$snapshot_data: t.data,
									$session_id: t.sessionId,
									$window_id: t.windowId
								})
							}), this.clearBuffer())
						}
					}, {
						key: "_captureSnapshotBuffered",
						value: function(e) {
							var t, n = this,
								i = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
							(this.buffer.size + e.$snapshot_bytes + i > 943718.4 || this.buffer.sessionId !== this.sessionId) && (this.buffer = this._flushBuffer()), this.buffer.size += e.$snapshot_bytes, this.buffer.data.push(e.$snapshot_data), this.flushBufferTimer || (this.flushBufferTimer = setTimeout(function() {
								n._flushBuffer()
							}, 2e3))
						}
					}, {
						key: "_captureSnapshot",
						value: function(e) {
							this.instance.capture("$snapshot", e, {
								_url: this.instance.requestRouter.endpointFor("api", this._endpoint),
								_noTruncate: !0,
								_batchKey: "recordings"
							})
						}
					}]), e
				}(),
				nN = function() {
					function e(t) {
						o(this, e), this.instance = t, this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags()
					}
					return u(e, [{
						key: "call",
						value: function() {
							var e = this,
								t = {
									token: this.instance.config.token,
									distinct_id: this.instance.get_distinct_id(),
									groups: this.instance.getGroups(),
									person_properties: this.instance.get_property(eF),
									group_properties: this.instance.get_property(eR),
									disable_flags: this.instance.config.advanced_disable_feature_flags || this.instance.config.advanced_disable_feature_flags_on_first_load || void 0
								};
							this.instance._send_request({
								method: "POST",
								url: this.instance.requestRouter.endpointFor("api", "/decide/?v=3"),
								data: t,
								compression: this.instance.config.disable_compression ? void 0 : Z.Base64,
								timeout: this.instance.config.feature_flag_request_timeout_ms,
								callback: function(t) {
									return e.parseDecideResponse(t.json)
								}
							})
						}
					}, {
						key: "parseDecideResponse",
						value: function(e) {
							var t = this;
							this.instance.featureFlags.setReloadingPaused(!1), this.instance.featureFlags._startReloadTimer();
							var n = !e;
							if (this.instance.config.advanced_disable_feature_flags_on_first_load || this.instance.config.advanced_disable_feature_flags || this.instance.featureFlags.receivedFeatureFlags(null != e ? e : {}, n), n) G.error("Failed to fetch feature flags from PostHog.");
							else {
								if (!L || !L.body) return G.info("document not ready yet, trying again in 500 milliseconds..."), void setTimeout(function() {
									t.parseDecideResponse(e)
								}, 500);
								if (this.instance._afterDecideResponse(e), e.siteApps) {
									if (this.instance.config.opt_in_site_apps) {
										var i, r = v(e.siteApps);
										try {
											for (r.s(); !(i = r.n()).done;)(function() {
												var e = i.value,
													n = e.id,
													r = e.url,
													s = t.instance.requestRouter.endpointFor("api", r);
												U["__$$ph_site_app_".concat(n)] = t.instance, t.instance.requestRouter.loadScript(s, function(e) {
													if (e) return G.error("Error while initializing PostHog app with config id ".concat(n), e)
												})
											})()
										} catch (e) {
											r.e(e)
										} finally {
											r.f()
										}
									} else e.siteApps.length > 0 && G.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
								}
							}
						}
					}]), e
				}(),
				nq = null != C && C.location ? ta(C.location.hash, "__posthog") || ta(location.hash, "state") : null,
				nB = "_postHogToolbarParams";
			(iy = nC || (nC = {}))[iy.UNINITIALIZED = 0] = "UNINITIALIZED", iy[iy.LOADING = 1] = "LOADING", iy[iy.LOADED = 2] = "LOADED";
			var nH = function() {
					function e(t) {
						o(this, e), this.instance = t
					}
					return u(e, [{
						key: "setToolbarState",
						value: function(e) {
							U.ph_toolbar_state = e
						}
					}, {
						key: "getToolbarState",
						value: function() {
							var e;
							return null !== (e = U.ph_toolbar_state) && void 0 !== e ? e : nC.UNINITIALIZED
						}
					}, {
						key: "maybeLoadToolbar",
						value: function() {
							var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
								i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
								r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
							if (!C || !L) return !1;
							n = null !== (e = n) && void 0 !== e ? e : C.location, r = null !== (t = r) && void 0 !== t ? t : C.history;
							try {
								if (!i) {
									try {
										C.localStorage.setItem("test", "test"), C.localStorage.removeItem("test")
									} catch (e) {
										return !1
									}
									i = null == C ? void 0 : C.localStorage
								}
								var s, o = nq || ta(n.hash, "__posthog") || ta(n.hash, "state"),
									a = o ? et(function() {
										return JSON.parse(atob(decodeURIComponent(o)))
									}) || et(function() {
										return JSON.parse(decodeURIComponent(o))
									}) : null;
								return a && "ph_authorize" === a.action ? ((s = a).source = "url", s && Object.keys(s).length > 0 && (a.desiredHash ? n.hash = a.desiredHash : r ? r.replaceState(r.state, "", n.pathname + n.search) : n.hash = "")) : ((s = JSON.parse(i.getItem(nB) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token) && (this.loadToolbar(s), !0)
							} catch (e) {
								return !1
							}
						}
					}, {
						key: "_callLoadToolbar",
						value: function(e) {
							(U.ph_load_toolbar || U.ph_load_editor)(e, this.instance)
						}
					}, {
						key: "loadToolbar",
						value: function(e) {
							var t = this,
								n = !(null == L || !L.getElementById(eN));
							if (!C || n) return !1;
							var i = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
								s = r(r({
									token: this.instance.config.token
								}, e), {}, {
									apiURL: this.instance.requestRouter.endpointFor("ui")
								}, i ? {
									instrument: !1
								} : {});
							if (C.localStorage.setItem(nB, JSON.stringify(r(r({}, s), {}, {
									source: void 0
								}))), this.getToolbarState() === nC.LOADED) this._callLoadToolbar(s);
							else if (this.getToolbarState() === nC.UNINITIALIZED) {
								this.setToolbarState(nC.LOADING);
								var o = 3e5 * Math.floor(Date.now() / 3e5);
								this.instance.requestRouter.loadScript("/static/toolbar.js?t=".concat(o), function(e) {
									if (e) return G.error("Failed to load toolbar", e), void t.setToolbarState(nC.UNINITIALIZED);
									t.setToolbarState(nC.LOADED), t._callLoadToolbar(s)
								}), eo(C, "turbolinks:load", function() {
									t.setToolbarState(nC.UNINITIALIZED), t.loadToolbar(s)
								})
							}
							return !0
						}
					}, {
						key: "_loadEditor",
						value: function(e) {
							return this.loadToolbar(e)
						}
					}, {
						key: "maybeLoadEditor",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
								n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
							return this.maybeLoadToolbar(e, t, n)
						}
					}]), e
				}(),
				nj = function() {
					function e(t) {
						o(this, e), l(this, "isPaused", !0), l(this, "queue", []), l(this, "flushTimeoutMs", 3e3), this.sendRequest = t
					}
					return u(e, [{
						key: "enqueue",
						value: function(e) {
							this.queue.push(e), this.flushTimeout || this.setFlushTimeout()
						}
					}, {
						key: "unload",
						value: function() {
							var e = this;
							this.clearFlushTimeout();
							var t = Object.values(this.queue.length > 0 ? this.formatQueue() : {});
							[].concat(d(t.filter(function(e) {
								return 0 === e.url.indexOf("/e")
							})), d(t.filter(function(e) {
								return 0 !== e.url.indexOf("/e")
							}))).map(function(t) {
								e.sendRequest(r(r({}, t), {}, {
									transport: "sendBeacon"
								}))
							})
						}
					}, {
						key: "enable",
						value: function() {
							this.isPaused = !1, this.setFlushTimeout()
						}
					}, {
						key: "setFlushTimeout",
						value: function() {
							var e = this;
							this.isPaused || (this.flushTimeout = setTimeout(function() {
								if (e.clearFlushTimeout(), e.queue.length > 0) {
									var t = e.formatQueue();
									for (var n in t)(function(n) {
										var i = t[n],
											r = (new Date).getTime();
										i.data && b(i.data) && J(i.data, function(e) {
											e.offset = Math.abs(e.timestamp - r), delete e.timestamp
										}), e.sendRequest(i)
									})(n)
								}
							}, this.flushTimeoutMs))
						}
					}, {
						key: "clearFlushTimeout",
						value: function() {
							clearTimeout(this.flushTimeout), this.flushTimeout = void 0
						}
					}, {
						key: "formatQueue",
						value: function() {
							var e = {};
							return J(this.queue, function(t) {
								var n, i = (t ? t.batchKey : null) || t.url;
								E(e[i]) && (e[i] = r(r({}, t), {}, {
									data: []
								})), null === (n = e[i].data) || void 0 === n || n.push(t.data)
							}), this.queue = [], e
						}
					}]), e
				}(),
				nU = Uint8Array,
				nW = Uint16Array,
				nG = Uint32Array,
				nz = new nU([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
				nV = new nU([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
				nQ = new nU([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
				nJ = function(e, t) {
					for (var n = new nW(31), i = 0; i < 31; ++i) n[i] = t += 1 << e[i - 1];
					var r = new nG(n[30]);
					for (i = 1; i < 30; ++i)
						for (var s = n[i]; s < n[i + 1]; ++s) r[s] = s - n[i] << 5 | i;
					return [n, r]
				},
				nY = nJ(nz, 2),
				nX = nY[0],
				nK = nY[1];
			nX[28] = 258, nK[258] = 28;
			for (var nZ = nJ(nV, 0)[1], n0 = new nW(32768), n1 = 0; n1 < 32768; ++n1) {
				var n2 = (43690 & n1) >>> 1 | (21845 & n1) << 1;
				n2 = (61680 & (n2 = (52428 & n2) >>> 2 | (13107 & n2) << 2)) >>> 4 | (3855 & n2) << 4, n0[n1] = ((65280 & n2) >>> 8 | (255 & n2) << 8) >>> 1
			}
			var n3 = function(e, t, n) {
					for (var i = e.length, r = 0, s = new nW(t); r < i; ++r) ++s[e[r] - 1];
					var o, a = new nW(t);
					for (r = 0; r < t; ++r) a[r] = a[r - 1] + s[r - 1] << 1;
					if (n) {
						o = new nW(1 << t);
						var u = 15 - t;
						for (r = 0; r < i; ++r)
							if (e[r])
								for (var l = r << 4 | e[r], c = t - e[r], d = a[e[r] - 1]++ << c, h = d | (1 << c) - 1; d <= h; ++d) o[n0[d] >>> u] = l
					} else
						for (o = new nW(i), r = 0; r < i; ++r) o[r] = n0[a[e[r] - 1]++] >>> 15 - e[r];
					return o
				},
				n5 = new nU(288);
			for (n1 = 0; n1 < 144; ++n1) n5[n1] = 8;
			for (n1 = 144; n1 < 256; ++n1) n5[n1] = 9;
			for (n1 = 256; n1 < 280; ++n1) n5[n1] = 7;
			for (n1 = 280; n1 < 288; ++n1) n5[n1] = 8;
			var n6 = new nU(32);
			for (n1 = 0; n1 < 32; ++n1) n6[n1] = 5;
			var n8 = n3(n5, 9, 0),
				n4 = n3(n6, 5, 0),
				n7 = function(e) {
					return (e / 8 >> 0) + (7 & e && 1)
				},
				n9 = function(e, t, n) {
					(null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
					var i = new(e instanceof nW ? nW : e instanceof nG ? nG : nU)(n - t);
					return i.set(e.subarray(t, n)), i
				},
				ie = function(e, t, n) {
					n <<= 7 & t;
					var i = t / 8 >> 0;
					e[i] |= n, e[i + 1] |= n >>> 8
				},
				it = function(e, t, n) {
					n <<= 7 & t;
					var i = t / 8 >> 0;
					e[i] |= n, e[i + 1] |= n >>> 8, e[i + 2] |= n >>> 16
				},
				ii = function(e, t) {
					for (var n = [], i = 0; i < e.length; ++i) e[i] && n.push({
						s: i,
						f: e[i]
					});
					var r = n.length,
						s = n.slice();
					if (!r) return [new nU(0), 0];
					if (1 == r) {
						var o = new nU(n[0].s + 1);
						return o[n[0].s] = 1, [o, 1]
					}
					n.sort(function(e, t) {
						return e.f - t.f
					}), n.push({
						s: -1,
						f: 25001
					});
					var a = n[0],
						u = n[1],
						l = 0,
						c = 1,
						d = 2;
					for (n[0] = {
							s: -1,
							f: a.f + u.f,
							l: a,
							r: u
						}; c != r - 1;) a = n[n[l].f < n[d].f ? l++ : d++], u = n[l != c && n[l].f < n[d].f ? l++ : d++], n[c++] = {
						s: -1,
						f: a.f + u.f,
						l: a,
						r: u
					};
					var h = s[0].s;
					for (i = 1; i < r; ++i) s[i].s > h && (h = s[i].s);
					var f = new nW(h + 1),
						v = ir(n[c - 1], f, 0);
					if (v > t) {
						i = 0;
						var p = 0,
							g = v - t,
							_ = 1 << g;
						for (s.sort(function(e, t) {
								return f[t.s] - f[e.s] || e.f - t.f
							}); i < r; ++i) {
							var m = s[i].s;
							if (!(f[m] > t)) break;
							p += _ - (1 << v - f[m]), f[m] = t
						}
						for (p >>>= g; p > 0;) {
							var y = s[i].s;
							f[y] < t ? p -= 1 << t - f[y]++ - 1 : ++i
						}
						for (; i >= 0 && p; --i) {
							var b = s[i].s;
							f[b] == t && (--f[b], ++p)
						}
						v = t
					}
					return [new nU(f), v]
				},
				ir = function e(t, n, i) {
					return -1 == t.s ? Math.max(e(t.l, n, i + 1), e(t.r, n, i + 1)) : n[t.s] = i
				},
				is = function(e) {
					for (var t = e.length; t && !e[--t];);
					for (var n = new nW(++t), i = 0, r = e[0], s = 1, o = function(e) {
							n[i++] = e
						}, a = 1; a <= t; ++a)
						if (e[a] == r && a != t) ++s;
						else {
							if (!r && s > 2) {
								for (; s > 138; s -= 138) o(32754);
								s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
							} else if (s > 3) {
								for (o(r), --s; s > 6; s -= 6) o(8304);
								s > 2 && (o(s - 3 << 5 | 8208), s = 0)
							}
							for (; s--;) o(r);
							s = 1, r = e[a]
						} return [n.subarray(0, i), t]
				},
				io = function(e, t) {
					for (var n = 0, i = 0; i < t.length; ++i) n += e[i] * t[i];
					return n
				},
				ia = function(e, t, n) {
					var i = n.length,
						r = n7(t + 2);
					e[r] = 255 & i, e[r + 1] = i >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
					for (var s = 0; s < i; ++s) e[r + s + 4] = n[s];
					return 8 * (r + 4 + i)
				},
				iu = function(e, t, n, i, r, s, o, a, u, l, c) {
					ie(t, c++, n), ++r[256];
					for (var d = ii(r, 15), h = d[0], f = d[1], v = ii(s, 15), p = v[0], g = v[1], _ = is(h), m = _[0], y = _[1], b = is(p), k = b[0], w = b[1], S = new nW(19), E = 0; E < m.length; ++E) S[31 & m[E]]++;
					for (E = 0; E < k.length; ++E) S[31 & k[E]]++;
					for (var I = ii(S, 7), F = I[0], R = I[1], x = 19; x > 4 && !F[nQ[x - 1]]; --x);
					var P, T, C, $, O = l + 5 << 3,
						A = io(r, n5) + io(s, n6) + o,
						M = io(r, h) + io(s, p) + o + 14 + 3 * x + io(S, F) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
					if (O <= A && O <= M) return ia(t, c, e.subarray(u, u + l));
					if (ie(t, c, 1 + (M < A)), c += 2, M < A) {
						P = n3(h, f, 0), T = h, C = n3(p, g, 0), $ = p;
						var D = n3(F, R, 0);
						for (ie(t, c, y - 257), ie(t, c + 5, w - 1), ie(t, c + 10, x - 4), c += 14, E = 0; E < x; ++E) ie(t, c + 3 * E, F[nQ[E]]);
						c += 3 * x;
						for (var L = [m, k], N = 0; N < 2; ++N) {
							var q = L[N];
							for (E = 0; E < q.length; ++E) {
								var B = 31 & q[E];
								ie(t, c, D[B]), c += F[B], B > 15 && (ie(t, c, q[E] >>> 5 & 127), c += q[E] >>> 12)
							}
						}
					} else P = n8, T = n5, C = n4, $ = n6;
					for (E = 0; E < a; ++E)
						if (i[E] > 255) {
							it(t, c, P[(B = i[E] >>> 18 & 31) + 257]), c += T[B + 257], B > 7 && (ie(t, c, i[E] >>> 23 & 31), c += nz[B]);
							var H = 31 & i[E];
							it(t, c, C[H]), c += $[H], H > 3 && (it(t, c, i[E] >>> 5 & 8191), c += nV[H])
						} else it(t, c, P[i[E]]), c += T[i[E]];
					return it(t, c, P[256]), c + T[256]
				},
				il = new nG([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
				ic = new nU(0),
				id = function() {
					for (var e = new nG(256), t = 0; t < 256; ++t) {
						for (var n = t, i = 9; --i;) n = (1 & n && 3988292384) ^ n >>> 1;
						e[t] = n
					}
					return e
				}(),
				ih = function(e, t, n) {
					for (; n; ++t) e[t] = n, n >>>= 8
				},
				iv = !!B || !!q,
				ip = "text/plain",
				ig = function(e, t) {
					var n = c(e.split("?"), 2),
						i = n[0],
						s = n[1],
						o = r({}, t);
					null == s || s.split("&").forEach(function(e) {
						var t = c(e.split("="), 1)[0];
						delete o[t]
					});
					var a = ts(o);
					return a = a ? (s ? s + "&" : "") + a : s, "".concat(i, "?").concat(a)
				},
				i_ = function(e) {
					var t, n, i, r, s, o, a, u, l, c = e.data,
						d = e.compression;
					if (c) return d === Z.GZipJS ? {
						contentType: ip,
						body: new Blob([(t = function(e, t) {
							var n = e.length;
							if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(e);
							for (var i = new nU(e.length + (e.length >>> 1)), r = 0, s = function(e) {
									i[r++] = e
								}, o = 0; o < n; ++o) {
								if (r + 5 > i.length) {
									var a = new nU(r + 8 + (n - o << 1));
									a.set(i), i = a
								}
								var u = e.charCodeAt(o);
								u < 128 ? s(u) : (u < 2048 ? s(192 | u >>> 6) : (u > 55295 && u < 57344 ? (s(240 | (u = 65536 + (1047552 & u) | 1023 & e.charCodeAt(++o)) >>> 18), s(128 | u >>> 12 & 63)) : s(224 | u >>> 12), s(128 | u >>> 6 & 63)), s(128 | 63 & u))
							}
							return n9(i, 0, r)
						}(JSON.stringify(c)), n = {
							mtime: 0
						}, i = 4294967295, r = {
							p: function(e) {
								for (var t = i, n = 0; n < e.length; ++n) t = id[255 & t ^ e[n]] ^ t >>> 8;
								i = t
							},
							d: function() {
								return 4294967295 ^ i
							}
						}, s = t.length, r.p(t), u = (o = 10 + (n.filename && n.filename.length + 1 || 0), a = function(e, t, n, i, r, s) {
							var o = e.length,
								a = new nU(i + o + 5 * (1 + Math.floor(o / 7e3)) + 8),
								u = a.subarray(i, a.length - 8),
								l = 0;
							if (!t || o < 8)
								for (var c = 0; c <= o; c += 65535) {
									var d = c + 65535;
									d < o ? l = ia(u, l, e.subarray(c, d)) : (u[c] = s, l = ia(u, l, e.subarray(c, o)))
								} else {
									for (var h = il[t - 1], f = h >>> 13, v = 8191 & h, p = (1 << n) - 1, g = new nW(32768), _ = new nW(p + 1), m = Math.ceil(n / 3), y = 2 * m, b = function(t) {
											return (e[t] ^ e[t + 1] << m ^ e[t + 2] << y) & p
										}, k = new nG(25e3), w = new nW(288), S = new nW(32), E = 0, I = 0, F = (c = 0, 0), R = 0, x = 0; c < o; ++c) {
										var P = b(c),
											T = 32767 & c,
											C = _[P];
										if (g[T] = C, _[P] = T, R <= c) {
											var $ = o - c;
											if ((E > 7e3 || F > 24576) && $ > 423) {
												l = iu(e, u, 0, k, w, S, I, F, x, c - x, l), F = E = I = 0, x = c;
												for (var O = 0; O < 286; ++O) w[O] = 0;
												for (O = 0; O < 30; ++O) S[O] = 0
											}
											var A = 2,
												M = 0,
												D = v,
												L = T - C & 32767;
											if ($ > 2 && P == b(c - L))
												for (var N = Math.min(f, $) - 1, q = Math.min(32767, c), B = Math.min(258, $); L <= q && --D && T != C;) {
													if (e[c + A] == e[c + A - L]) {
														for (var H = 0; H < B && e[c + H] == e[c + H - L]; ++H);
														if (H > A) {
															if (A = H, M = L, H > N) break;
															var j = Math.min(L, H - 2),
																U = 0;
															for (O = 0; O < j; ++O) {
																var W = c - L + O + 32768 & 32767,
																	G = W - g[W] + 32768 & 32767;
																G > U && (U = G, C = W)
															}
														}
													}
													L += (T = C) - (C = g[T]) + 32768 & 32767
												}
											if (M) {
												k[F++] = 268435456 | nK[A] << 18 | nZ[M];
												var z = 31 & nK[A],
													V = 31 & nZ[M];
												I += nz[z] + nV[V], ++w[257 + z], ++S[V], R = c + A, ++E
											} else k[F++] = e[c], ++w[e[c]]
										}
									}
									l = iu(e, u, s, k, w, S, I, F, x, c - x, l), s || (l = ia(u, l, ic))
								}
							return n9(a, 0, i + n7(l) + r)
						}(t, null == n.level ? 6 : n.level, null == n.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + n.mem, o, 8, !0)).length, function(e, t) {
							var n = t.filename;
							if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0, e[9] = 3, 0 != t.mtime && ih(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), n) {
								e[3] = 8;
								for (var i = 0; i <= n.length; ++i) e[i + 10] = n.charCodeAt(i)
							}
						}(a, n), ih(a, u - 8, r.d()), ih(a, u - 4, s), a)], {
							type: ip
						})
					} : d === Z.Base64 ? {
						contentType: "application/x-www-form-urlencoded",
						body: "data=" + encodeURIComponent("string" == typeof(l = function(e) {
							var t, n, i, r, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
								a = 0,
								u = 0,
								l = "",
								c = [];
							if (!e) return e;
							e = es(e);
							do t = (s = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, n = s >> 12 & 63, i = s >> 6 & 63, r = 63 & s, c[u++] = o.charAt(t) + o.charAt(n) + o.charAt(i) + o.charAt(r); while (a < e.length);
							switch (l = c.join(""), e.length % 3) {
								case 1:
									l = l.slice(0, -2) + "==";
									break;
								case 2:
									l = l.slice(0, -1) + "="
							}
							return l
						}(JSON.stringify(c))) ? l : JSON.stringify(l))
					} : {
						contentType: "application/json",
						body: JSON.stringify(c)
					}
				},
				im = [];
			B && im.push({
				transport: "XHR",
				method: function(e) {
					var t, n = new B;
					n.open(e.method || "GET", e.url, !0);
					var i = null !== (t = i_(e)) && void 0 !== t ? t : {},
						r = i.contentType,
						s = i.body;
					J(e.headers, function(e, t) {
						n.setRequestHeader(t, e)
					}), r && n.setRequestHeader("Content-Type", r), e.timeout && (n.timeout = e.timeout), n.withCredentials = !0, n.onreadystatechange = function() {
						if (4 === n.readyState) {
							var t, i = {
								statusCode: n.status,
								text: n.responseText
							};
							if (200 === n.status) try {
								i.json = JSON.parse(n.responseText)
							} catch (e) {}
							null === (t = e.callback) || void 0 === t || t.call(e, i)
						}
					}, n.send(s)
				}
			}), q && im.push({
				transport: "fetch",
				method: function(e) {
					var t, n, i = null !== (t = i_(e)) && void 0 !== t ? t : {},
						r = i.contentType,
						s = i.body,
						o = new Headers;
					J(o, function(e, t) {
						o.append(t, e)
					}), r && o.append("Content-Type", r);
					var a = e.url,
						u = null;
					if (H) {
						var l = new H;
						u = {
							signal: l.signal,
							timeout: setTimeout(function() {
								return l.abort()
							}, e.timeout)
						}
					}
					q(a, {
						method: (null == e ? void 0 : e.method) || "GET",
						headers: o,
						keepalive: "POST" === e.method,
						body: s,
						signal: null === (n = u) || void 0 === n ? void 0 : n.signal
					}).then(function(t) {
						return t.text().then(function(n) {
							var i, r = {
								statusCode: t.status,
								text: n
							};
							if (200 === t.status) try {
								r.json = JSON.parse(n)
							} catch (e) {
								G.error(e)
							}
							null === (i = e.callback) || void 0 === i || i.call(e, r)
						})
					}).catch(function(t) {
						var n;
						G.error(t), null === (n = e.callback) || void 0 === n || n.call(e, {
							statusCode: 0,
							text: t
						})
					}).finally(function() {
						return u ? clearTimeout(u.timeout) : null
					})
				}
			}), null != D && D.sendBeacon && im.push({
				transport: "sendBeacon",
				method: function(e) {
					var t = ig(e.url, {
						beacon: "1"
					});
					try {
						var n, i = null !== (n = i_(e)) && void 0 !== n ? n : {},
							r = i.contentType,
							s = i.body,
							o = "string" == typeof s ? new Blob([s], {
								type: r
							}) : s;
						D.sendBeacon(t, o)
					} catch (e) {}
				}
			});
			var iy, ib, ik = ["retriesPerformedSoFar"],
				iw = function() {
					function e(t) {
						var n = this;
						o(this, e), l(this, "isPolling", !1), l(this, "pollIntervalMs", 3e3), l(this, "queue", []), this.instance = t, this.queue = [], this.areWeOnline = !0, !E(C) && "onLine" in C.navigator && (this.areWeOnline = C.navigator.onLine, C.addEventListener("online", function() {
							n.areWeOnline = !0, n.flush()
						}), C.addEventListener("offline", function() {
							n.areWeOnline = !1
						}))
					}
					return u(e, [{
						key: "retriableRequest",
						value: function(e) {
							var t = this,
								n = e.retriesPerformedSoFar,
								i = function(e, t) {
									if (null == e) return {};
									var n, i, r = function(e, t) {
										if (null == e) return {};
										var n, i, r = {},
											s = Object.keys(e);
										for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
										return r
									}(e, t);
									if (Object.getOwnPropertySymbols) {
										var s = Object.getOwnPropertySymbols(e);
										for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
									}
									return r
								}(e, ik);
							P(n) && n > 0 && (i.url = ig(i.url, {
								retry_count: n
							})), this.instance._send_request(r(r({}, i), {}, {
								callback: function(e) {
									var s;
									200 !== e.statusCode && (e.statusCode < 400 || e.statusCode >= 500) && (null != n ? n : 0) < 10 ? t.enqueue(r({
										retriesPerformedSoFar: n
									}, i)) : null === (s = i.callback) || void 0 === s || s.call(i, e)
								}
							}))
						}
					}, {
						key: "enqueue",
						value: function(e) {
							var t, n, i, r = e.retriesPerformedSoFar || 0;
							e.retriesPerformedSoFar = r + 1;
							var s = (i = (Math.random() - .5) * ((n = Math.min(18e5, t = 3e3 * Math.pow(2, r))) - t / 2), Math.ceil(n + i)),
								o = Date.now() + s;
							this.queue.push({
								retryAt: o,
								requestOptions: e
							});
							var a = "Enqueued failed request for retry in ".concat(s);
							navigator.onLine || (a += " (Browser is offline)"), G.warn(a), this.isPolling || (this.isPolling = !0, this.poll())
						}
					}, {
						key: "poll",
						value: function() {
							var e = this;
							this.poller && clearTimeout(this.poller), this.poller = setTimeout(function() {
								e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll()
							}, this.pollIntervalMs)
						}
					}, {
						key: "flush",
						value: function() {
							var e = Date.now(),
								t = [],
								n = this.queue.filter(function(n) {
									return n.retryAt < e || (t.push(n), !1)
								});
							if (this.queue = t, n.length > 0) {
								var i, r = v(n);
								try {
									for (r.s(); !(i = r.n()).done;) {
										var s = i.value.requestOptions;
										this.retriableRequest(s)
									}
								} catch (e) {
									r.e(e)
								} finally {
									r.f()
								}
							}
						}
					}, {
						key: "unload",
						value: function() {
							this.poller && (clearTimeout(this.poller), this.poller = void 0);
							var e, t = v(this.queue);
							try {
								for (t.s(); !(e = t.n()).done;) {
									var n = e.value.requestOptions;
									try {
										this.instance._send_request(r(r({}, n), {}, {
											transport: "sendBeacon"
										}))
									} catch (e) {
										G.error(e)
									}
								}
							} catch (e) {
								t.e(e)
							} finally {
								t.f()
							}
							this.queue = []
						}
					}]), e
				}(),
				iS = function() {
					function e(t, n, i, r) {
						o(this, e), l(this, "_sessionIdChangedHandlers", []), this.config = t, this.persistence = n, this._windowId = void 0, this._sessionId = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this._sessionIdGenerator = i || eZ, this._windowIdGenerator = r || eZ;
						var s, a = t.persistence_name || t.token,
							u = t.session_idle_timeout_seconds || 1800;
						if (P(u) ? u > 1800 ? G.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.") : u < 60 && G.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.") : (G.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), u = 1800), this._sessionTimeoutMs = 1e3 * Math.min(Math.max(u, 60), 1800), this._window_id_storage_key = "ph_" + a + "_window_id", this._primary_window_exists_storage_key = "ph_" + a + "_primary_window_exists", this._canUseSessionStorage()) {
							var c = tt.parse(this._window_id_storage_key),
								d = tt.parse(this._primary_window_exists_storage_key);
							c && !d ? this._windowId = c : tt.remove(this._window_id_storage_key), tt.set(this._primary_window_exists_storage_key, !0)
						}
						if (null !== (s = this.config.bootstrap) && void 0 !== s && s.sessionID) try {
							var h = function(e) {
								var t = e.replace(/-/g, "");
								if (32 !== t.length) throw Error("Not a valid UUID");
								if ("7" !== t[12]) throw Error("Not a UUIDv7");
								return parseInt(t.substring(0, 12), 16)
							}(this.config.bootstrap.sessionID);
							this._setSessionId(this.config.bootstrap.sessionID, (new Date).getTime(), h)
						} catch (e) {
							G.error("Invalid sessionID in bootstrap", e)
						}
						this._listenToReloadWindow()
					}
					return u(e, [{
						key: "onSessionId",
						value: function(e) {
							var t = this;
							return E(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []), this._sessionIdChangedHandlers.push(e), this._sessionId && e(this._sessionId, this._windowId),
								function() {
									t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function(t) {
										return t !== e
									})
								}
						}
					}, {
						key: "_canUseSessionStorage",
						value: function() {
							return "memory" !== this.config.persistence && !this.persistence.disabled && tt.is_supported()
						}
					}, {
						key: "_setWindowId",
						value: function(e) {
							e !== this._windowId && (this._windowId = e, this._canUseSessionStorage() && tt.set(this._window_id_storage_key, e))
						}
					}, {
						key: "_getWindowId",
						value: function() {
							return this._windowId ? this._windowId : this._canUseSessionStorage() ? tt.parse(this._window_id_storage_key) : null
						}
					}, {
						key: "_setSessionId",
						value: function(e, t, n) {
							e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp || (this._sessionStartTimestamp = n, this._sessionActivityTimestamp = t, this._sessionId = e, this.persistence.register(l({}, ew, [t, e, n])))
						}
					}, {
						key: "_getSessionId",
						value: function() {
							if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp) return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
							var e = this.persistence.props[ew];
							return b(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
						}
					}, {
						key: "resetSessionId",
						value: function() {
							this._setSessionId(null, null, null)
						}
					}, {
						key: "_listenToReloadWindow",
						value: function() {
							var e = this;
							null == C || C.addEventListener("beforeunload", function() {
								e._canUseSessionStorage() && tt.remove(e._primary_window_exists_storage_key)
							})
						}
					}, {
						key: "checkAndGetSessionAndWindowId",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || (new Date).getTime(),
								n = c(this._getSessionId(), 3),
								i = n[0],
								r = n[1],
								s = n[2],
								o = this._getWindowId(),
								a = s && s > 0 && Math.abs(t - s) > 864e5,
								u = !1,
								l = !r,
								d = !e && Math.abs(t - i) > this._sessionTimeoutMs;
							l || d || a ? (r = this._sessionIdGenerator(), o = this._windowIdGenerator(), G.info("[SessionId] new session ID generated", {
								sessionId: r,
								windowId: o,
								changeReason: {
									noSessionId: l,
									activityTimeout: d,
									sessionPastMaximumLength: a
								}
							}), s = t, u = !0) : o || (o = this._windowIdGenerator(), u = !0);
							var h = 0 === i || !e || a ? t : i,
								f = 0 === s ? (new Date).getTime() : s;
							return this._setWindowId(o), this._setSessionId(r, h, f), u && this._sessionIdChangedHandlers.forEach(function(e) {
								return e(r, o)
							}), {
								sessionId: r,
								windowId: o,
								sessionStartTimestamp: f
							}
						}
					}]), e
				}();
			(iT = ib || (ib = {})).US = "us", iT.EU = "eu", iT.CUSTOM = "custom";
			var iE = "i.posthog.com",
				iI = function() {
					function e(t) {
						o(this, e), l(this, "_regionCache", {}), this.instance = t
					}
					return u(e, [{
						key: "apiHost",
						get: function() {
							return this.instance.config.api_host.trim().replace(/\/$/, "")
						}
					}, {
						key: "uiHost",
						get: function() {
							var e, t = null === (e = this.instance.config.ui_host) || void 0 === e ? void 0 : e.replace(/\/$/, "");
							return "https://app.posthog.com" === t ? "https://us.posthog.com" : t
						}
					}, {
						key: "region",
						get: function() {
							return this._regionCache[this.apiHost] || (/https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = ib.US : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? this._regionCache[this.apiHost] = ib.EU : this._regionCache[this.apiHost] = ib.CUSTOM), this._regionCache[this.apiHost]
						}
					}, {
						key: "endpointFor",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
							if (t && (t = "/" === t[0] ? t : "/".concat(t)), "ui" === e) return (this.uiHost || this.apiHost.replace(".".concat(iE), ".posthog.com")) + t;
							if (this.region === ib.CUSTOM) return this.apiHost + t;
							var n = iE + t;
							switch (e) {
								case "assets":
									return "https://".concat(this.region, "-assets.").concat(n);
								case "api":
									return "https://".concat(this.region, ".").concat(n)
							}
						}
					}, {
						key: "loadScript",
						value: function(e, t) {
							if (this.instance.config.disable_external_dependency_loading) return G.warn("".concat(e, " was requested but loading of external scripts is disabled.")), t("Loading of external scripts is disabled");
							var n = "/" === e[0] ? this.endpointFor("assets", e) : e,
								i = function() {
									if (!L) return t("document not found");
									var e = L.createElement("script");
									e.type = "text/javascript", e.src = n, e.onload = function(e) {
										return t(void 0, e)
									}, e.onerror = function(e) {
										return t(e)
									};
									var i, r = L.querySelectorAll("body > script");
									r.length > 0 ? null === (i = r[0].parentNode) || void 0 === i || i.insertBefore(e, r[0]) : L.body.appendChild(e)
								};
							null != L && L.body ? i() : null == L || L.addEventListener("DOMContentLoaded", i)
						}
					}]), e
				}(),
				iF = "[Exception Capture]",
				iR = function() {
					function e(t) {
						var n, i, r = this;
						o(this, e), l(this, "originalOnUnhandledRejectionHandler", void 0), l(this, "startCapturing", function() {
							var e;
							if (C && r.isEnabled && !r.hasHandlers && (null === (e = C.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)) {
								var t = C.posthogErrorWrappingFunctions.wrapOnError,
									n = C.posthogErrorWrappingFunctions.wrapUnhandledRejection;
								if (t && n) try {
									r.unwrapOnError = t(r.captureException.bind(r)), r.unwrapUnhandledRejection = n(r.captureException.bind(r))
								} catch (e) {
									G.error(iF + " failed to start", e), r.stopCapturing()
								} else G.error(iF + " failed to load error wrapping functions - cannot start")
							}
						}), this.instance = t, this.remoteEnabled = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[ef]), this._endpoint = (null === (i = this.instance.persistence) || void 0 === i ? void 0 : i.props[ev]) || "/e/", this.startIfEnabled()
					}
					return u(e, [{
						key: "endpoint",
						get: function() {
							return this._endpoint
						}
					}, {
						key: "isEnabled",
						get: function() {
							var e;
							return null !== (e = this.remoteEnabled) && void 0 !== e && e
						}
					}, {
						key: "isCapturing",
						get: function() {
							var e;
							return !(null == C || null === (e = C.onerror) || void 0 === e || !e.__POSTHOG_INSTRUMENTED__)
						}
					}, {
						key: "hasHandlers",
						get: function() {
							return this.originalOnUnhandledRejectionHandler || this.unwrapOnError
						}
					}, {
						key: "startIfEnabled",
						value: function() {
							this.isEnabled && !this.isCapturing && (G.info(iF + " enabled, starting..."), this.loadScript(this.startCapturing))
						}
					}, {
						key: "loadScript",
						value: function(e) {
							this.hasHandlers && e(), this.instance.requestRouter.loadScript(this.instance.requestRouter.endpointFor("assets", "/static/exception-autocapture.js?v=".concat(p.LIB_VERSION)), function(t) {
								if (t) return G.error(iF + " failed to load script", t);
								e()
							})
						}
					}, {
						key: "stopCapturing",
						value: function() {
							var e, t;
							null === (e = this.unwrapOnError) || void 0 === e || e.call(this), null === (t = this.unwrapUnhandledRejection) || void 0 === t || t.call(this)
						}
					}, {
						key: "afterDecideResponse",
						value: function(e) {
							var t = e.autocaptureExceptions;
							this.remoteEnabled = !!t, this._endpoint = w(t) && t.endpoint || "/e/", this.instance.persistence && (this.instance.persistence.register(l({}, ef, this.remoteEnabled)), this.instance.persistence.register(l({}, ev, this._endpoint))), this.startIfEnabled()
						}
					}, {
						key: "captureException",
						value: function(e) {
							var t = this.instance.requestRouter.endpointFor("ui");
							e.$exception_personURL = "".concat(t, "/project/").concat(this.instance.config.token, "/person/").concat(this.instance.get_distinct_id()), this.sendExceptionEvent(e)
						}
					}, {
						key: "sendExceptionEvent",
						value: function(e) {
							this.instance.capture("$exception", e, {
								_noTruncate: !0,
								_batchKey: "exceptionEvent",
								_url: this.endpoint
							})
						}
					}]), e
				}(),
				ix = "posthog-js";

			function iP(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					n = t.organization,
					i = t.projectId,
					r = t.prefix,
					s = t.severityAllowList,
					o = void 0 === s ? ["error"] : s;
				return function(t) {
					if (!("*" === o || o.includes(t.level)) || !e.__loaded) return t;
					t.tags || (t.tags = {});
					var s, a, u, l, c, d, h = e.requestRouter.endpointFor("ui", "/project/".concat(e.config.token, "/person/").concat(e.get_distinct_id()));
					t.tags["PostHog Person URL"] = h, e.sessionRecordingStarted() && (t.tags["PostHog Recording URL"] = e.get_session_replay_url({
						withTimestamp: !0
					}));
					var f = (null === (s = t.exception) || void 0 === s ? void 0 : s.values) || [],
						v = {
							$exception_message: (null === (a = f[0]) || void 0 === a ? void 0 : a.value) || t.message,
							$exception_type: null === (u = f[0]) || void 0 === u ? void 0 : u.type,
							$exception_personURL: h,
							$exception_level: t.level,
							$sentry_event_id: t.event_id,
							$sentry_exception: t.exception,
							$sentry_exception_message: (null === (l = f[0]) || void 0 === l ? void 0 : l.value) || t.message,
							$sentry_exception_type: null === (c = f[0]) || void 0 === c ? void 0 : c.type,
							$sentry_tags: t.tags,
							$level: t.level
						};
					return n && i && (v.$sentry_url = (r || "https://sentry.io/organizations/") + n + "/issues/?project=" + i + "&query=" + t.event_id), e.capture("$exception", v, {
						_url: (null === (d = e.exceptionObserver) || void 0 === d ? void 0 : d.endpoint) || "/e/"
					}), t
				}
			}
			var iT, iC, i$, iO, iA = u(function e(t, n, i, r, s) {
					o(this, e), this.name = ix, this.setupOnce = function(e) {
						e(iP(t, {
							organization: n,
							projectId: i,
							prefix: r,
							severityAllowList: s
						}))
					}
				}),
				iM = function() {
					function e(t) {
						o(this, e), this._instance = t
					}
					return u(e, [{
						key: "doPageView",
						value: function() {
							var e, t = this._previousScrollProperties();
							return this._currentPath = null !== (e = null == C ? void 0 : C.location.pathname) && void 0 !== e ? e : "", this._instance.scrollManager.resetContext(), t
						}
					}, {
						key: "doPageLeave",
						value: function() {
							return this._previousScrollProperties()
						}
					}, {
						key: "_previousScrollProperties",
						value: function() {
							var e = this._currentPath,
								t = this._instance.scrollManager.getContext();
							if (!e || !t) return {};
							var n = t.maxScrollHeight,
								i = t.lastScrollY,
								r = t.maxScrollY,
								s = t.maxContentHeight,
								o = t.lastContentY,
								a = t.maxContentY;
							return E(n) || E(i) || E(r) || E(s) || E(o) || E(a) ? {} : (n = Math.ceil(n), i = Math.ceil(i), r = Math.ceil(r), s = Math.ceil(s), o = Math.ceil(o), a = Math.ceil(a), {
								$prev_pageview_pathname: e,
								$prev_pageview_last_scroll: i,
								$prev_pageview_last_scroll_percentage: n <= 1 ? 1 : iD(i / n, 0, 1),
								$prev_pageview_max_scroll: r,
								$prev_pageview_max_scroll_percentage: n <= 1 ? 1 : iD(r / n, 0, 1),
								$prev_pageview_last_content: o,
								$prev_pageview_last_content_percentage: s <= 1 ? 1 : iD(o / s, 0, 1),
								$prev_pageview_max_content: a,
								$prev_pageview_max_content_percentage: s <= 1 ? 1 : iD(a / s, 0, 1)
							})
						}
					}]), e
				}();

			function iD(e, t, n) {
				return Math.max(t, Math.min(e, n))
			}(i0 = iC || (iC = {})).Popover = "popover", i0.API = "api", i0.Widget = "widget", (i1 = i$ || (i$ = {})).Open = "open", i1.MultipleChoice = "multiple_choice", i1.SingleChoice = "single_choice", i1.Rating = "rating", i1.Link = "link", (i2 = iO || (iO = {})).NextQuestion = "next_question", i2.End = "end", i2.ResponseBased = "response_based", i2.SpecificQuestion = "specific_question";
			var iL = function() {
					function e() {
						o(this, e), l(this, "events", {}), this.events = {}
					}
					return u(e, [{
						key: "on",
						value: function(e, t) {
							var n = this;
							return this.events[e] || (this.events[e] = []), this.events[e].push(t),
								function() {
									n.events[e] = n.events[e].filter(function(e) {
										return e !== t
									})
								}
						}
					}, {
						key: "emit",
						value: function(e, t) {
							var n, i = v(this.events[e] || []);
							try {
								for (i.s(); !(n = i.n()).done;)(0, n.value)(t)
							} catch (e) {
								i.e(e)
							} finally {
								i.f()
							}
							var r, s = v(this.events["*"] || []);
							try {
								for (s.s(); !(r = s.n()).done;)(0, r.value)(e, t)
							} catch (e) {
								s.e(e)
							} finally {
								s.f()
							}
						}
					}]), e
				}(),
				iN = function() {
					function e(t) {
						var n = this;
						o(this, e), l(this, "_debugEventEmitter", new iL), l(this, "checkStep", function(e, t) {
							return n.checkStepEvent(e, t) && n.checkStepUrl(e, t) && n.checkStepElement(e, t)
						}), l(this, "checkStepEvent", function(e, t) {
							return null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event)
						}), this.instance = t, this.actionEvents = new Set, this.actionRegistry = new Set
					}
					return u(e, [{
						key: "init",
						value: function() {
							var e, t, n = this;
							E(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || null === (e = this.instance) || void 0 === e || e._addCaptureHook(function(e, t) {
								n.on(e, t)
							})
						}
					}, {
						key: "register",
						value: function(e) {
							var t, n, i = this;
							if (!E(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) && (e.forEach(function(e) {
									var t, n;
									null === (t = i.actionRegistry) || void 0 === t || t.add(e), null === (n = e.steps) || void 0 === n || n.forEach(function(e) {
										var t;
										null === (t = i.actionEvents) || void 0 === t || t.add((null == e ? void 0 : e.event) || "")
									})
								}), null !== (n = this.instance) && void 0 !== n && n.autocapture)) {
								var r, s = new Set;
								e.forEach(function(e) {
									var t;
									null === (t = e.steps) || void 0 === t || t.forEach(function(e) {
										null != e && e.selector && s.add(null == e ? void 0 : e.selector)
									})
								}), null === (r = this.instance) || void 0 === r || r.autocapture.setElementSelectors(s)
							}
						}
					}, {
						key: "on",
						value: function(e, t) {
							var n, i = this;
							null != t && 0 != e.length && (this.actionEvents.has(e) || this.actionEvents.has(null == t ? void 0 : t.event)) && this.actionRegistry && (null === (n = this.actionRegistry) || void 0 === n ? void 0 : n.size) > 0 && this.actionRegistry.forEach(function(e) {
								i.checkAction(t, e) && i._debugEventEmitter.emit("actionCaptured", e.name)
							})
						}
					}, {
						key: "_addActionHook",
						value: function(e) {
							this.onAction("actionCaptured", function(t) {
								return e(t)
							})
						}
					}, {
						key: "checkAction",
						value: function(e, t) {
							if (null == (null == t ? void 0 : t.steps)) return !1;
							var n, i = v(t.steps);
							try {
								for (i.s(); !(n = i.n()).done;) {
									var r = n.value;
									if (this.checkStep(e, r)) return !0
								}
							} catch (e) {
								i.e(e)
							} finally {
								i.f()
							}
							return !1
						}
					}, {
						key: "onAction",
						value: function(e, t) {
							return this._debugEventEmitter.on(e, t)
						}
					}, {
						key: "checkStepUrl",
						value: function(t, n) {
							if (null != n && n.url) {
								var i, r = null == t || null === (i = t.properties) || void 0 === i ? void 0 : i.$current_url;
								if (!r || "string" != typeof r || !e.matchString(r, null == n ? void 0 : n.url, (null == n ? void 0 : n.url_matching) || "contains")) return !1
							}
							return !0
						}
					}, {
						key: "checkStepElement",
						value: function(t, n) {
							if ((null != n && n.href || null != n && n.tag_name || null != n && n.text) && !this.getElementsList(t).some(function(t) {
									return !(null != n && n.href && !e.matchString(t.href || "", null == n ? void 0 : n.href, (null == n ? void 0 : n.href_matching) || "exact")) && (null == n || !n.tag_name || t.tag_name === (null == n ? void 0 : n.tag_name)) && !(null != n && n.text && !e.matchString(t.text || "", null == n ? void 0 : n.text, (null == n ? void 0 : n.text_matching) || "exact") && !e.matchString(t.$el_text || "", null == n ? void 0 : n.text, (null == n ? void 0 : n.text_matching) || "exact"))
								})) return !1;
							if (null != n && n.selector) {
								var i, r = null == t || null === (i = t.properties) || void 0 === i ? void 0 : i.$element_selectors;
								if (!r || !r.includes(null == n ? void 0 : n.selector)) return !1
							}
							return !0
						}
					}, {
						key: "getElementsList",
						value: function(e) {
							return null == (null == e ? void 0 : e.properties.$elements) ? [] : null == e ? void 0 : e.properties.$elements
						}
					}], [{
						key: "matchString",
						value: function(t, n, i) {
							switch (i) {
								case "regex":
									return !!C && tr(t, n);
								case "exact":
									return n === t;
								case "contains":
									return tr(t, e.escapeStringRegexp(n).replace(/_/g, ".").replace(/%/g, ".*"));
								default:
									return !1
							}
						}
					}, {
						key: "escapeStringRegexp",
						value: function(e) {
							return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")
						}
					}]), e
				}(),
				iq = function() {
					function e(t) {
						o(this, e), this.instance = t, this.eventToSurveys = new Map, this.actionToSurveys = new Map
					}
					return u(e, [{
						key: "register",
						value: function(e) {
							var t;
							E(null === (t = this.instance) || void 0 === t ? void 0 : t._addCaptureHook) || (this.setupEventBasedSurveys(e), this.setupActionBasedSurveys(e))
						}
					}, {
						key: "setupActionBasedSurveys",
						value: function(e) {
							var t = this,
								n = e.filter(function(e) {
									var t, n, i, r;
									return (null === (t = e.conditions) || void 0 === t ? void 0 : t.actions) && (null === (n = e.conditions) || void 0 === n || null === (i = n.actions) || void 0 === i || null === (r = i.values) || void 0 === r ? void 0 : r.length) > 0
								});
							0 !== n.length && (null == this.actionMatcher && (this.actionMatcher = new iN(this.instance), this.actionMatcher.init(), this.actionMatcher._addActionHook(function(e) {
								t.onAction(e)
							})), n.forEach(function(e) {
								var n, i, r, s, o, a, u, l, c, d;
								e.conditions && null !== (n = e.conditions) && void 0 !== n && n.actions && null !== (i = e.conditions) && void 0 !== i && null !== (r = i.actions) && void 0 !== r && r.values && (null === (s = e.conditions) || void 0 === s || null === (o = s.actions) || void 0 === o || null === (a = o.values) || void 0 === a ? void 0 : a.length) > 0 && (null === (u = t.actionMatcher) || void 0 === u || u.register(e.conditions.actions.values), null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c || null === (d = c.values) || void 0 === d || d.forEach(function(n) {
									if (n && n.name) {
										var i = t.actionToSurveys.get(n.name);
										i && i.push(e.id), t.actionToSurveys.set(n.name, i || [e.id])
									}
								}))
							}))
						}
					}, {
						key: "setupEventBasedSurveys",
						value: function(e) {
							var t, n = this;
							0 !== e.filter(function(e) {
								var t, n, i, r;
								return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (n = e.conditions) || void 0 === n || null === (i = n.events) || void 0 === i || null === (r = i.values) || void 0 === r ? void 0 : r.length) > 0
							}).length && (null === (t = this.instance) || void 0 === t || t._addCaptureHook(function(e) {
								n.onEvent(e)
							}), e.forEach(function(e) {
								var t, i, r;
								null === (t = e.conditions) || void 0 === t || null === (i = t.events) || void 0 === i || null === (r = i.values) || void 0 === r || r.forEach(function(t) {
									if (t && t.name) {
										var i = n.eventToSurveys.get(t.name);
										i && i.push(e.id), n.eventToSurveys.set(t.name, i || [e.id])
									}
								})
							}))
						}
					}, {
						key: "onEvent",
						value: function(t, n) {
							var i, r, s = (null === (i = this.instance) || void 0 === i || null === (r = i.persistence) || void 0 === r ? void 0 : r.props[eP]) || [];
							if (e.SURVEY_SHOWN_EVENT_NAME == t && n && s.length > 0) {
								var o, a = null == n || null === (o = n.properties) || void 0 === o ? void 0 : o.$survey_id;
								if (a) {
									var u = s.indexOf(a);
									u >= 0 && (s.splice(u, 1), this._updateActivatedSurveys(s))
								}
							} else this.eventToSurveys.has(t) && this._updateActivatedSurveys(s.concat(this.eventToSurveys.get(t) || []))
						}
					}, {
						key: "onAction",
						value: function(e) {
							var t, n, i = (null === (t = this.instance) || void 0 === t || null === (n = t.persistence) || void 0 === n ? void 0 : n.props[eP]) || [];
							this.actionToSurveys.has(e) && this._updateActivatedSurveys(i.concat(this.actionToSurveys.get(e) || []))
						}
					}, {
						key: "_updateActivatedSurveys",
						value: function(e) {
							var t, n;
							null === (t = this.instance) || void 0 === t || null === (n = t.persistence) || void 0 === n || n.register(l({}, eP, d(new Set(e))))
						}
					}, {
						key: "getSurveys",
						value: function() {
							var e, t;
							return (null === (e = this.instance) || void 0 === e || null === (t = e.persistence) || void 0 === t ? void 0 : t.props[eP]) || []
						}
					}, {
						key: "getEventToSurveys",
						value: function() {
							return this.eventToSurveys
						}
					}, {
						key: "_getActionMatcher",
						value: function() {
							return this.actionMatcher
						}
					}]), e
				}();
			l(iq, "SURVEY_SHOWN_EVENT_NAME", "survey shown");
			var iB = "[Surveys]",
				iH = {
					icontains: function(e) {
						return !!C && C.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1
					},
					not_icontains: function(e) {
						return !!C && -1 === C.location.href.toLowerCase().indexOf(e.toLowerCase())
					},
					regex: function(e) {
						return !!C && tr(C.location.href, e)
					},
					not_regex: function(e) {
						return !!C && !tr(C.location.href, e)
					},
					exact: function(e) {
						return (null == C ? void 0 : C.location.href) === e
					},
					is_not: function(e) {
						return (null == C ? void 0 : C.location.href) !== e
					}
				},
				ij = function() {
					function e(t) {
						o(this, e), this.instance = t, this._surveyEventReceiver = null
					}
					return u(e, [{
						key: "afterDecideResponse",
						value: function(e) {
							this._decideServerResponse = !!e.surveys, this.loadIfEnabled()
						}
					}, {
						key: "loadIfEnabled",
						value: function() {
							var e = this,
								t = null == U ? void 0 : U.extendPostHogWithSurveys;
							this.instance.config.disable_surveys || !this._decideServerResponse || t || (null == this._surveyEventReceiver && (this._surveyEventReceiver = new iq(this.instance)), this.instance.requestRouter.loadScript("/static/surveys.js", function(t) {
								if (t) return G.error(iB, "Could not load surveys script", t);
								U.extendPostHogWithSurveys(e.instance)
							}))
						}
					}, {
						key: "getSurveys",
						value: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							if (this.instance.config.disable_surveys) return e([]);
							null == this._surveyEventReceiver && (this._surveyEventReceiver = new iq(this.instance));
							var i = this.instance.get_property(ex);
							if (i && !n) return e(i);
							this.instance._send_request({
								url: this.instance.requestRouter.endpointFor("api", "/api/surveys/?token=".concat(this.instance.config.token)),
								method: "GET",
								transport: "XHR",
								callback: function(n) {
									if (200 !== n.statusCode || !n.json) return e([]);
									var i, r, s = n.json.surveys || [],
										o = s.filter(function(e) {
											var t, n, i, r, s, o, a, u, l, c, d, h;
											return (null === (t = e.conditions) || void 0 === t ? void 0 : t.events) && (null === (n = e.conditions) || void 0 === n || null === (i = n.events) || void 0 === i ? void 0 : i.values) && (null === (r = e.conditions) || void 0 === r || null === (s = r.events) || void 0 === s || null === (o = s.values) || void 0 === o ? void 0 : o.length) > 0 || (null === (a = e.conditions) || void 0 === a ? void 0 : a.actions) && (null === (u = e.conditions) || void 0 === u || null === (l = u.actions) || void 0 === l ? void 0 : l.values) && (null === (c = e.conditions) || void 0 === c || null === (d = c.actions) || void 0 === d || null === (h = d.values) || void 0 === h ? void 0 : h.length) > 0
										});
									return o.length > 0 && (null === (r = t._surveyEventReceiver) || void 0 === r || r.register(o)), null === (i = t.instance.persistence) || void 0 === i || i.register(l({}, ex, s)), e(s)
								}
							})
						}
					}, {
						key: "getActiveMatchingSurveys",
						value: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							this.getSurveys(function(n) {
								var i, r = n.filter(function(e) {
										return !(!e.start_date || e.end_date)
									}).filter(function(e) {
										if (!e.conditions) return !0;
										var t, n, i, r, s = null === (t = e.conditions) || void 0 === t || !t.url || iH[null !== (n = null === (i = e.conditions) || void 0 === i ? void 0 : i.urlMatchType) && void 0 !== n ? n : "icontains"](e.conditions.url),
											o = null === (r = e.conditions) || void 0 === r || !r.selector || (null == L ? void 0 : L.querySelector(e.conditions.selector));
										return s && o
									}),
									s = null === (i = t._surveyEventReceiver) || void 0 === i ? void 0 : i.getSurveys();
								return e(r.filter(function(e) {
									if (!e.linked_flag_key && !e.targeting_flag_key && !e.internal_targeting_flag_key) return !0;
									var n, i, r, o, a, u, l, c, d, h, f = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
										v = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key),
										p = (null === (n = e.conditions) || void 0 === n ? void 0 : n.events) && (null === (i = e.conditions) || void 0 === i || null === (r = i.events) || void 0 === r ? void 0 : r.values) && (null === (o = e.conditions) || void 0 === o || null === (a = o.events) || void 0 === a ? void 0 : a.values.length) > 0,
										g = (null === (u = e.conditions) || void 0 === u ? void 0 : u.actions) && (null === (l = e.conditions) || void 0 === l || null === (c = l.actions) || void 0 === c ? void 0 : c.values) && (null === (d = e.conditions) || void 0 === d || null === (h = d.actions) || void 0 === h ? void 0 : h.values.length) > 0,
										_ = !p && !g || (null == s ? void 0 : s.includes(e.id)),
										m = t._canActivateRepeatedly(e),
										y = !(e.internal_targeting_flag_key && !m) || t.instance.featureFlags.isFeatureEnabled(e.internal_targeting_flag_key);
									return f && v && y && _
								}))
							}, n)
						}
					}, {
						key: "getNextSurveyStep",
						value: function(e, t, n) {
							var i, r = e.questions[t],
								s = t + 1;
							if (null === (i = r.branching) || void 0 === i || !i.type) return t === e.questions.length - 1 ? iO.End : s;
							if (r.branching.type === iO.End) return iO.End;
							if (r.branching.type === iO.SpecificQuestion) {
								if (Number.isInteger(r.branching.index)) return r.branching.index
							} else if (r.branching.type === iO.ResponseBased) {
								if (r.type === i$.SingleChoice) {
									var o, a, u = r.choices.indexOf("".concat(n));
									if (null !== (o = r.branching) && void 0 !== o && null !== (a = o.responseValues) && void 0 !== a && a.hasOwnProperty(u)) {
										var l = r.branching.responseValues[u];
										return Number.isInteger(l) ? l : l === iO.End ? iO.End : s
									}
								} else if (r.type === i$.Rating) {
									if ("number" != typeof n || !Number.isInteger(n)) throw Error("The response type must be an integer");
									var c, d, h = function(e, t) {
										if (3 === t) {
											if (e < 1 || e > 3) throw Error("The response must be in range 1-3");
											return 1 === e ? "negative" : 2 === e ? "neutral" : "positive"
										}
										if (5 === t) {
											if (e < 1 || e > 5) throw Error("The response must be in range 1-5");
											return e <= 2 ? "negative" : 3 === e ? "neutral" : "positive"
										}
										if (10 === t) {
											if (e < 0 || e > 10) throw Error("The response must be in range 0-10");
											return e <= 6 ? "detractors" : e <= 8 ? "passives" : "promoters"
										}
										throw Error("The scale must be one of: 3, 5, 10")
									}(n, r.scale);
									if (null !== (c = r.branching) && void 0 !== c && null !== (d = c.responseValues) && void 0 !== d && d.hasOwnProperty(h)) {
										var f = r.branching.responseValues[h];
										return Number.isInteger(f) ? f : f === iO.End ? iO.End : s
									}
								}
								return s
							}
							return G.warn(iB, "Falling back to next question index due to unexpected branching type"), s
						}
					}, {
						key: "_canActivateRepeatedly",
						value: function(e) {
							return x(U.__PosthogExtensions__.canActivateRepeatedly) && G.warn(iB, "canActivateRepeatedly is not defined, must init before calling"), U.__PosthogExtensions__.canActivateRepeatedly(e)
						}
					}]), e
				}(),
				iU = function() {
					function e(t) {
						var n, i, r = this;
						o(this, e), l(this, "serverLimits", {}), l(this, "lastEventRateLimited", !1), l(this, "checkForLimiting", function(e) {
							var t = e.text;
							if (t && t.length) try {
								(JSON.parse(t).quota_limited || []).forEach(function(e) {
									G.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), r.serverLimits[e] = (new Date).getTime() + 6e4
								})
							} catch (e) {
								return void G.warn('[RateLimiter] could not rate limit - continuing. Error: "'.concat(null == e ? void 0 : e.message, '"'), {
									text: t
								})
							}
						}), this.instance = t, this.captureEventsPerSecond = (null === (n = t.config.rate_limiting) || void 0 === n ? void 0 : n.events_per_second) || 10, this.captureEventsBurstLimit = Math.max((null === (i = t.config.rate_limiting) || void 0 === i ? void 0 : i.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond), this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
					}
					return u(e, [{
						key: "clientRateLimitContext",
						value: function() {
							var e, t, n, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								r = (new Date).getTime(),
								s = null !== (e = null === (t = this.instance.persistence) || void 0 === t ? void 0 : t.get_property(eO)) && void 0 !== e ? e : {
									tokens: this.captureEventsBurstLimit,
									last: r
								};
							s.tokens += (r - s.last) / 1e3 * this.captureEventsPerSecond, s.last = r, s.tokens > this.captureEventsBurstLimit && (s.tokens = this.captureEventsBurstLimit);
							var o = s.tokens < 1;
							return o || i || (s.tokens = Math.max(0, s.tokens - 1)), !o || this.lastEventRateLimited || i || this.instance.capture("$$client_ingestion_warning", {
								$$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to ".concat(this.captureEventsPerSecond, " events per second and ").concat(this.captureEventsBurstLimit, " events burst limit.")
							}, {
								skip_client_rate_limiting: !0
							}), this.lastEventRateLimited = o, null === (n = this.instance.persistence) || void 0 === n || n.set_property(eO, s), {
								isRateLimited: o,
								remainingTokens: s.tokens
							}
						}
					}, {
						key: "isServerRateLimited",
						value: function(e) {
							var t = this.serverLimits[e || "events"] || !1;
							return !1 !== t && (new Date).getTime() < t
						}
					}]), e
				}(),
				iW = function() {
					return r({
						initialPathName: (null == N ? void 0 : N.pathname) || "",
						referringDomain: t3.referringDomain()
					}, t3.campaignParams())
				},
				iG = function() {
					function e(t, n, i) {
						var r = this;
						o(this, e), l(this, "_onSessionIdCallback", function(e) {
							var t = r._getStoredProps();
							if (!t || t.sessionId !== e) {
								var n = {
									sessionId: e,
									props: r._sessionSourceParamGenerator()
								};
								r._persistence.register(l({}, e$, n))
							}
						}), this._sessionIdManager = t, this._persistence = n, this._sessionSourceParamGenerator = i || iW, this._sessionIdManager.onSessionId(this._onSessionIdCallback)
					}
					return u(e, [{
						key: "_getStoredProps",
						value: function() {
							return this._persistence.props[e$]
						}
					}, {
						key: "getSessionProps",
						value: function() {
							var e, t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
							return t ? {
								$client_session_initial_referring_host: t.referringDomain,
								$client_session_initial_pathname: t.initialPathName,
								$client_session_initial_utm_source: t.utm_source,
								$client_session_initial_utm_campaign: t.utm_campaign,
								$client_session_initial_utm_medium: t.utm_medium,
								$client_session_initial_utm_content: t.utm_content,
								$client_session_initial_utm_term: t.utm_term
							} : {}
						}
					}]), e
				}(),
				iz = ["ahrefsbot", "ahrefssiteaudit", "applebot", "baiduspider", "bingbot", "bingpreview", "bot.htm", "bot.php", "crawler", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "gptbot", "http://yandex.com/bots", "hubspot", "ia_archiver", "linkedinbot", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "semrushbot", "sitebulb", "slurp", "turnitin", "twitterbot", "vercelbot", "yahoo! slurp", "yandexbot", "Google-HotelAdsVerifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleweblight", "mediapartners-google", "storebot-google", "Bytespider;"],
				iV = function(e, t) {
					if (!e) return !1;
					var n = e.toLowerCase();
					return iz.concat(t || []).some(function(e) {
						var t = e.toLowerCase();
						return -1 !== n.indexOf(t)
					})
				},
				iQ = function() {
					function e() {
						o(this, e), this.clicks = []
					}
					return u(e, [{
						key: "isRageClick",
						value: function(e, t, n) {
							var i = this.clicks[this.clicks.length - 1];
							if (i && Math.abs(e - i.x) + Math.abs(t - i.y) < 30 && n - i.timestamp < 1e3) {
								if (this.clicks.push({
										x: e,
										y: t,
										timestamp: n
									}), 3 === this.clicks.length) return !0
							} else this.clicks = [{
								x: e,
								y: t,
								timestamp: n
							}];
							return !1
						}
					}]), e
				}();

			function iJ(e) {
				var t;
				return e.id === eN || !(null === (t = e.closest) || void 0 === t || !t.call(e, "#" + eN))
			}
			var iY = function() {
					function e(t) {
						var n, i = this;
						o(this, e), l(this, "rageclicks", new iQ), l(this, "_enabledServerSide", !1), l(this, "_initialized", !1), l(this, "_flushInterval", null), this.instance = t, this._enabledServerSide = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[eh]), null == C || C.addEventListener("beforeunload", function() {
							i.flush()
						})
					}
					return u(e, [{
						key: "flushIntervalMilliseconds",
						get: function() {
							var e = 5e3;
							return w(this.instance.config.capture_heatmaps) && this.instance.config.capture_heatmaps.flush_interval_milliseconds && (e = this.instance.config.capture_heatmaps.flush_interval_milliseconds), e
						}
					}, {
						key: "isEnabled",
						get: function() {
							return E(this.instance.config.capture_heatmaps) ? E(this.instance.config.enable_heatmaps) ? this._enabledServerSide : this.instance.config.enable_heatmaps : !1 !== this.instance.config.capture_heatmaps
						}
					}, {
						key: "startIfEnabled",
						value: function() {
							if (this.isEnabled) this._initialized || (G.info("[heatmaps] starting..."), this._setupListeners(), this._flushInterval = setInterval(this.flush.bind(this), this.flushIntervalMilliseconds));
							else {
								var e;
								clearInterval(null !== (e = this._flushInterval) && void 0 !== e ? e : void 0), this.getAndClearBuffer()
							}
						}
					}, {
						key: "afterDecideResponse",
						value: function(e) {
							var t = !!e.heatmaps;
							this.instance.persistence && this.instance.persistence.register(l({}, eh, t)), this._enabledServerSide = t, this.startIfEnabled()
						}
					}, {
						key: "getAndClearBuffer",
						value: function() {
							var e = this.buffer;
							return this.buffer = void 0, e
						}
					}, {
						key: "_setupListeners",
						value: function() {
							var e = this;
							C && L && (eo(L, "click", function(t) {
								return e._onClick(t || (null == C ? void 0 : C.event))
							}, !1, !0), eo(L, "mousemove", function(t) {
								return e._onMouseMove(t || (null == C ? void 0 : C.event))
							}, !1, !0), this._initialized = !0)
						}
					}, {
						key: "_getProperties",
						value: function(e, t) {
							var n = this.instance.scrollManager.scrollY(),
								i = this.instance.scrollManager.scrollX(),
								r = this.instance.scrollManager.scrollElement(),
								s = function(e, t, n) {
									for (var i = e; i && !ns(i, "body") && i !== n;) {
										if (X(t, null == C ? void 0 : C.getComputedStyle(i).position)) return !0;
										i = nl(i)
									}
									return !1
								}(e.target, ["fixed", "sticky"], r);
							return {
								x: e.clientX + (s ? 0 : i),
								y: e.clientY + (s ? 0 : n),
								target_fixed: s,
								type: t
							}
						}
					}, {
						key: "_onClick",
						value: function(e) {
							var t;
							if (!iJ(e.target)) {
								var n = this._getProperties(e, "click");
								null !== (t = this.rageclicks) && void 0 !== t && t.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._capture(r(r({}, n), {}, {
									type: "rageclick"
								})), this._capture(n)
							}
						}
					}, {
						key: "_onMouseMove",
						value: function(e) {
							var t = this;
							iJ(e.target) || (clearTimeout(this._mouseMoveTimeout), this._mouseMoveTimeout = setTimeout(function() {
								t._capture(t._getProperties(e, "mousemove"))
							}, 500))
						}
					}, {
						key: "_capture",
						value: function(e) {
							if (C) {
								var t = C.location.href;
								this.buffer = this.buffer || {}, this.buffer[t] || (this.buffer[t] = []), this.buffer[t].push(e)
							}
						}
					}, {
						key: "flush",
						value: function() {
							this.buffer && !S(this.buffer) && this.instance.capture("$$heatmap", {
								$heatmap_data: this.getAndClearBuffer()
							})
						}
					}]), e
				}(),
				iX = function() {
					function e(t) {
						var n = this;
						o(this, e), l(this, "_updateScrollData", function() {
							n.context || (n.context = {});
							var e, t, i, r, s = n.scrollElement(),
								o = n.scrollY(),
								a = s ? Math.max(0, s.scrollHeight - s.clientHeight) : 0,
								u = o + ((null == s ? void 0 : s.clientHeight) || 0),
								l = (null == s ? void 0 : s.scrollHeight) || 0;
							n.context.lastScrollY = Math.ceil(o), n.context.maxScrollY = Math.max(o, null !== (e = n.context.maxScrollY) && void 0 !== e ? e : 0), n.context.maxScrollHeight = Math.max(a, null !== (t = n.context.maxScrollHeight) && void 0 !== t ? t : 0), n.context.lastContentY = u, n.context.maxContentY = Math.max(u, null !== (i = n.context.maxContentY) && void 0 !== i ? i : 0), n.context.maxContentHeight = Math.max(l, null !== (r = n.context.maxContentHeight) && void 0 !== r ? r : 0)
						}), this.instance = t
					}
					return u(e, [{
						key: "getContext",
						value: function() {
							return this.context
						}
					}, {
						key: "resetContext",
						value: function() {
							var e = this.context;
							return setTimeout(this._updateScrollData, 0), e
						}
					}, {
						key: "startMeasuringScrollPosition",
						value: function() {
							null == C || C.addEventListener("scroll", this._updateScrollData, !0), null == C || C.addEventListener("scrollend", this._updateScrollData, !0), null == C || C.addEventListener("resize", this._updateScrollData)
						}
					}, {
						key: "scrollElement",
						value: function() {
							if (!this.instance.config.scroll_root_selector) return null == C ? void 0 : C.document.documentElement;
							var e, t = v(b(this.instance.config.scroll_root_selector) ? this.instance.config.scroll_root_selector : [this.instance.config.scroll_root_selector]);
							try {
								for (t.s(); !(e = t.n()).done;) {
									var n = e.value,
										i = null == C ? void 0 : C.document.querySelector(n);
									if (i) return i
								}
							} catch (e) {
								t.e(e)
							} finally {
								t.f()
							}
						}
					}, {
						key: "scrollY",
						value: function() {
							if (this.instance.config.scroll_root_selector) {
								var e = this.scrollElement();
								return e && e.scrollTop || 0
							}
							return C && (C.scrollY || C.pageYOffset || C.document.documentElement.scrollTop) || 0
						}
					}, {
						key: "scrollX",
						value: function() {
							if (this.instance.config.scroll_root_selector) {
								var e = this.scrollElement();
								return e && e.scrollLeft || 0
							}
							return C && (C.scrollX || C.pageXOffset || C.document.documentElement.scrollLeft) || 0
						}
					}]), e
				}(),
				iK = "$copy_autocapture";

			function iZ(e, t) {
				return t.length > e ? t.slice(0, e) + "..." : t
			}
			var i0, i1, i2, i3, i5 = function() {
					function e(t) {
						o(this, e), l(this, "_initialized", !1), l(this, "_isDisabledServerSide", null), l(this, "rageclicks", new iQ), l(this, "_elementsChainAsString", !1), this.instance = t, this._elementSelectors = null
					}
					return u(e, [{
						key: "config",
						get: function() {
							var e, t, n = w(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
							return n.url_allowlist = null === (e = n.url_allowlist) || void 0 === e ? void 0 : e.map(function(e) {
								return new RegExp(e)
							}), n.url_ignorelist = null === (t = n.url_ignorelist) || void 0 === t ? void 0 : t.map(function(e) {
								return new RegExp(e)
							}), n
						}
					}, {
						key: "_addDomEventHandlers",
						value: function() {
							var e = this;
							if (this.isBrowserSupported()) {
								if (C && L) {
									var t = function(t) {
											t = t || (null == C ? void 0 : C.event);
											try {
												e._captureEvent(t)
											} catch (e) {
												G.error("Failed to capture event", e)
											}
										},
										n = function(t) {
											t = t || (null == C ? void 0 : C.event), e._captureEvent(t, iK)
										};
									eo(L, "submit", t, !1, !0), eo(L, "change", t, !1, !0), eo(L, "click", t, !1, !0), this.config.capture_copied_text && (eo(L, "copy", n, !1, !0), eo(L, "cut", n, !1, !0))
								}
							} else G.info("Disabling Automatic Event Collection because this browser is not supported")
						}
					}, {
						key: "startIfEnabled",
						value: function() {
							this.isEnabled && !this._initialized && (this._addDomEventHandlers(), this._initialized = !0)
						}
					}, {
						key: "afterDecideResponse",
						value: function(e) {
							e.elementsChainAsString && (this._elementsChainAsString = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register(l({}, ed, !!e.autocapture_opt_out)), this._isDisabledServerSide = !!e.autocapture_opt_out, this.startIfEnabled()
						}
					}, {
						key: "setElementSelectors",
						value: function(e) {
							this._elementSelectors = e
						}
					}, {
						key: "getElementSelectors",
						value: function(e) {
							var t, n = [];
							return null === (t = this._elementSelectors) || void 0 === t || t.forEach(function(t) {
								var i = null == L ? void 0 : L.querySelectorAll(t);
								null == i || i.forEach(function(i) {
									e === i && n.push(t)
								})
							}), n
						}
					}, {
						key: "isEnabled",
						get: function() {
							var e, t, n = null === (e = this.instance.persistence) || void 0 === e ? void 0 : e.props[ed];
							if (R(this._isDisabledServerSide) && !T(n) && !this.instance.config.advanced_disable_decide) return !1;
							var i = null !== (t = this._isDisabledServerSide) && void 0 !== t ? t : !!n;
							return !!this.instance.config.autocapture && !i
						}
					}, {
						key: "_previousElementSibling",
						value: function(e) {
							if (e.previousElementSibling) return e.previousElementSibling;
							var t = e;
							do t = t.previousSibling; while (t && !nr(t));
							return t
						}
					}, {
						key: "_getAugmentPropertiesFromElement",
						value: function(e) {
							if (!nc(e)) return {};
							var t = {};
							return J(e.attributes, function(e) {
								if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
									var n = e.name.replace("data-ph-capture-attribute-", ""),
										i = e.value;
									n && i && nm(i) && (t[n] = i)
								}
							}), t
						}
					}, {
						key: "_getPropertiesFromElement",
						value: function(e, t, n) {
							var i, r = e.tagName.toLowerCase(),
								s = {
									tag_name: r
								};
							nu.indexOf(r) > -1 && !n && ("a" === r.toLowerCase() || "button" === r.toLowerCase() ? s.$el_text = iZ(1024, ny(e)) : s.$el_text = iZ(1024, ni(e)));
							var o = nt(e);
							o.length > 0 && (s.classes = o.filter(function(e) {
								return "" !== e
							}));
							var a = null === (i = this.config) || void 0 === i ? void 0 : i.element_attribute_ignorelist;
							J(e.attributes, function(n) {
								var i;
								if ((!nd(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(n.name)) && (null == a || !a.includes(n.name)) && !t && nm(n.value) && (!I(i = n.name) || "_ngcontent" !== i.substring(0, 10) && "_nghost" !== i.substring(0, 7))) {
									var r = n.value;
									"class" === n.name && (r = t9(r).join(" ")), s["attr__" + n.name] = iZ(1024, r)
								}
							});
							for (var u = 1, l = 1, c = e; c = this._previousElementSibling(c);) u++, c.tagName === e.tagName && l++;
							return s.nth_child = u, s.nth_of_type = l, s
						}
					}, {
						key: "_getDefaultProperties",
						value: function(e) {
							return {
								$event_type: e,
								$ce_version: 1
							}
						}
					}, {
						key: "_getEventTarget",
						value: function(e) {
							var t;
							return E(e.target) ? e.srcElement || null : null !== (t = e.target) && void 0 !== t && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
						}
					}, {
						key: "_captureEvent",
						value: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "$autocapture";
							if (this.isEnabled) {
								var i, o = this._getEventTarget(e);
								no(o) && (o = o.parentNode || null), "$autocapture" === n && "click" === e.type && e instanceof MouseEvent && this.instance.config.rageclick && null !== (i = this.rageclicks) && void 0 !== i && i.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && this._captureEvent(e, "$rageclick");
								var a = n === iK;
								if (o && function(e, t) {
										var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
											i = arguments.length > 3 ? arguments[3] : void 0,
											r = arguments.length > 4 ? arguments[4] : void 0;
										if (!C || !e || ns(e, "html") || !nr(e) || null != n && n.url_allowlist && !ne(n.url_allowlist) || null != n && n.url_ignorelist && ne(n.url_ignorelist)) return !1;
										if (null != n && n.dom_event_allowlist) {
											var o = n.dom_event_allowlist;
											if (o && !o.some(function(e) {
													return t.type === e
												})) return !1
										}
										for (var a = !1, u = [e], l = !0, c = e; c.parentNode && !ns(c, "body");)
											if (na(c.parentNode)) u.push(c.parentNode.host), c = c.parentNode.host;
											else {
												if (!(l = nl(c))) break;
												if (i || nu.indexOf(l.tagName.toLowerCase()) > -1) a = !0;
												else {
													var d = C.getComputedStyle(l);
													d && "pointer" === d.getPropertyValue("cursor") && (a = !0)
												}
												u.push(l), c = l
											} if (! function(e, t) {
												var n = null == t ? void 0 : t.element_allowlist;
												if (E(n)) return !0;
												var i, r = v(e);
												try {
													for (r.s(); !(i = r.n()).done;) {
														var o = function() {
															var e = i.value;
															if (n.some(function(t) {
																	return e.tagName.toLowerCase() === t
																})) return {
																v: !0
															}
														}();
														if ("object" === s(o)) return o.v
													}
												} catch (e) {
													r.e(e)
												} finally {
													r.f()
												}
												return !1
											}(u, n) || ! function(e, t) {
												var n = null == t ? void 0 : t.css_selector_allowlist;
												if (E(n)) return !0;
												var i, r = v(e);
												try {
													for (r.s(); !(i = r.n()).done;) {
														var o = function() {
															var e = i.value;
															if (n.some(function(t) {
																	return e.matches(t)
																})) return {
																v: !0
															}
														}();
														if ("object" === s(o)) return o.v
													}
												} catch (e) {
													r.e(e)
												} finally {
													r.f()
												}
												return !1
											}(u, n)) return !1;
										var h = C.getComputedStyle(e);
										if (h && "pointer" === h.getPropertyValue("cursor") && "click" === t.type) return !0;
										var f = e.tagName.toLowerCase();
										switch (f) {
											case "html":
												return !1;
											case "form":
												return (r || ["submit"]).indexOf(t.type) >= 0;
											case "input":
											case "select":
											case "textarea":
												return (r || ["change", "click"]).indexOf(t.type) >= 0;
											default:
												return a ? (r || ["click"]).indexOf(t.type) >= 0 : (r || ["click"]).indexOf(t.type) >= 0 && (nu.indexOf(f) > -1 || "true" === e.getAttribute("contenteditable"))
										}
									}(o, e, this.config, a, a ? ["copy", "cut"] : void 0)) {
									for (var u, l, d = [o], h = o; h.parentNode && !ns(h, "body");) na(h.parentNode) ? (d.push(h.parentNode.host), h = h.parentNode.host) : (d.push(h.parentNode), h = h.parentNode);
									var f, p, g = [],
										_ = {},
										m = !1;
									if (J(d, function(e) {
											var n = nc(e);
											"a" === e.tagName.toLowerCase() && (f = e.getAttribute("href"), f = n && nm(f) && f), X(nt(e), "ph-no-capture") && (m = !0), g.push(t._getPropertiesFromElement(e, t.instance.config.mask_all_element_attributes, t.instance.config.mask_all_text)), Y(_, t._getAugmentPropertiesFromElement(e))
										}), this.instance.config.mask_all_text || ("a" === o.tagName.toLowerCase() || "button" === o.tagName.toLowerCase() ? g[0].$el_text = ny(o) : g[0].$el_text = ni(o)), f) {
										g[0].attr__href = f;
										var y, k, w = null === (y = ti(f)) || void 0 === y ? void 0 : y.host,
											S = null == C || null === (k = C.location) || void 0 === k ? void 0 : k.host;
										w && S && w !== S && (p = f)
									}
									if (m) return !1;
									var I = Y(this._getDefaultProperties(e.type), this._elementsChainAsString ? {
											$elements_chain: g.map(function(e) {
												var t, n, i, r = {
													text: null === (n = e.$el_text) || void 0 === n ? void 0 : n.slice(0, 400),
													tag_name: e.tag_name,
													href: null === (i = e.attr__href) || void 0 === i ? void 0 : i.slice(0, 2048),
													attr_class: (t = e.attr__class) ? b(t) ? t : t9(t) : void 0,
													attr_id: e.attr__id,
													nth_child: e.nth_child,
													nth_of_type: e.nth_of_type,
													attributes: {}
												};
												return K(e).filter(function(e) {
													return 0 === c(e, 1)[0].indexOf("attr__")
												}).forEach(function(e) {
													var t = c(e, 2),
														n = t[0],
														i = t[1];
													return r.attributes[n] = i
												}), r
											}).map(function(e) {
												var t, n, i = "";
												if (e.tag_name && (i += e.tag_name), e.attr_class) {
													e.attr_class.sort();
													var s, o = v(e.attr_class);
													try {
														for (o.s(); !(s = o.n()).done;) {
															var a = s.value;
															i += ".".concat(a.replace(/"/g, ""))
														}
													} catch (e) {
														o.e(e)
													} finally {
														o.f()
													}
												}
												var u = r(r(r(r({}, e.text ? {
														text: e.text
													} : {}), {}, {
														"nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
														"nth-of-type": null !== (n = e.nth_of_type) && void 0 !== n ? n : 0
													}, e.href ? {
														href: e.href
													} : {}), e.attr_id ? {
														attr_id: e.attr_id
													} : {}), e.attributes),
													l = {};
												return K(u).sort(function(e, t) {
													var n = c(e, 1)[0],
														i = c(t, 1)[0];
													return n.localeCompare(i)
												}).forEach(function(e) {
													var t = c(e, 2),
														n = t[0],
														i = t[1];
													return l[nb(n.toString())] = nb(i.toString())
												}), i += ":" + K(u).map(function(e) {
													var t = c(e, 2),
														n = t[0],
														i = t[1];
													return "".concat(n, '="').concat(i, '"')
												}).join("")
											}).join(";")
										} : {
											$elements: g
										}, null !== (u = g[0]) && void 0 !== u && u.$el_text ? {
											$el_text: null === (l = g[0]) || void 0 === l ? void 0 : l.$el_text
										} : {}, p && "click" === e.type ? {
											$external_click_url: p
										} : {}, _),
										F = this.getElementSelectors(o);
									if (F && F.length > 0 && (I.$element_selectors = F), n === iK) {
										var R, x = nn(null == C || null === (R = C.getSelection()) || void 0 === R ? void 0 : R.toString()),
											P = e.type || "clipboard";
										if (!x) return !1;
										I.$selected_content = x, I.$copy_type = P
									}
									return this.instance.capture(n, I), !0
								}
							}
						}
					}, {
						key: "isBrowserSupported",
						value: function() {
							return k(null == L ? void 0 : L.querySelectorAll)
						}
					}]), e
				}(),
				i6 = function() {
					function e(t) {
						var n = this;
						o(this, e), l(this, "_restoreXHRPatch", void 0), l(this, "_restoreFetchPatch", void 0), l(this, "_startCapturing", function() {
							E(n._restoreXHRPatch) && U.postHogTracingHeadersPatchFns._patchXHR(n.instance.sessionManager), E(n._restoreFetchPatch) && U.postHogTracingHeadersPatchFns._patchFetch(n.instance.sessionManager)
						}), this.instance = t
					}
					return u(e, [{
						key: "_loadScript",
						value: function(e) {
							U.postHogTracingHeadersPatchFns && e(), this.instance.requestRouter.loadScript("/static/tracing-headers.js?v=".concat(p.LIB_VERSION), function(t) {
								if (t) return G.error("[TRACING-HEADERS] failed to load script", t);
								e()
							})
						}
					}, {
						key: "startIfEnabledOrStop",
						value: function() {
							var e, t;
							this.instance.config.__add_tracing_headers ? this._loadScript(this._startCapturing) : (null === (e = this._restoreXHRPatch) || void 0 === e || e.call(this), null === (t = this._restoreFetchPatch) || void 0 === t || t.call(this), this._restoreXHRPatch = void 0, this._restoreFetchPatch = void 0)
						}
					}]), e
				}();
			(ra = i3 || (i3 = {}))[ra.PENDING = -1] = "PENDING", ra[ra.DENIED = 0] = "DENIED", ra[ra.GRANTED = 1] = "GRANTED";
			var i8 = function() {
					function e(t) {
						o(this, e), this.instance = t
					}
					return u(e, [{
						key: "config",
						get: function() {
							return this.instance.config
						}
					}, {
						key: "consent",
						get: function() {
							return this.getDnt() ? i3.DENIED : this.storedConsent
						}
					}, {
						key: "isOptedOut",
						value: function() {
							return this.consent === i3.DENIED || this.consent === i3.PENDING && this.config.opt_out_capturing_by_default
						}
					}, {
						key: "isOptedIn",
						value: function() {
							return !this.isOptedOut()
						}
					}, {
						key: "optInOut",
						value: function(e) {
							this.storage.set(this.storageKey, e ? 1 : 0, this.config.cookie_expiration, this.config.cross_subdomain_cookie, this.config.secure_cookie)
						}
					}, {
						key: "reset",
						value: function() {
							this.storage.remove(this.storageKey, this.config.cross_subdomain_cookie)
						}
					}, {
						key: "storageKey",
						get: function() {
							var e = this.instance.config,
								t = e.token;
							return (e.opt_out_capturing_cookie_prefix || "__ph_opt_in_out_") + t
						}
					}, {
						key: "storedConsent",
						get: function() {
							var e = this.storage.get(this.storageKey);
							return "1" === e ? i3.GRANTED : "0" === e ? i3.DENIED : i3.PENDING
						}
					}, {
						key: "storage",
						get: function() {
							if (!this._storage) {
								var e = this.config.opt_out_capturing_persistence_type;
								this._storage = "localStorage" === e ? e6 : e3;
								var t = "localStorage" === e ? e3 : e6;
								t.get(this.storageKey) && (this._storage.get(this.storageKey) || this.optInOut("1" === t.get(this.storageKey)), t.remove(this.storageKey, this.config.cross_subdomain_cookie))
							}
							return this._storage
						}
					}, {
						key: "getDnt",
						value: function() {
							return !!this.config.respect_dnt && !!ea([null == D ? void 0 : D.doNotTrack, null == D ? void 0 : D.msDoNotTrack, U.doNotTrack], function(e) {
								return X([!0, 1, "1", "yes"], e)
							})
						}
					}]), e
				}(),
				i4 = "[Web Vitals]",
				i7 = function() {
					function e(t) {
						var n, i = this;
						o(this, e), l(this, "_enabledServerSide", !1), l(this, "_initialized", !1), l(this, "buffer", {
							url: void 0,
							metrics: [],
							firstMetricTimestamp: void 0
						}), l(this, "_flushToCapture", function() {
							clearTimeout(i._delayedFlushTimer), 0 !== i.buffer.metrics.length && (i.instance.capture("$web_vitals", i.buffer.metrics.reduce(function(e, t) {
								var n;
								return r(r({}, e), {}, (l(n = {}, "$web_vitals_".concat(t.name, "_event"), r({}, t)), l(n, "$web_vitals_".concat(t.name, "_value"), t.value), n))
							}, {})), i.buffer = {
								url: void 0,
								metrics: [],
								firstMetricTimestamp: void 0
							})
						}), l(this, "_addToBuffer", function(e) {
							var t, n = null === (t = i.instance.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0);
							if (E(n)) G.error(i4 + "Could not read session ID. Dropping metrics!");
							else {
								i.buffer = i.buffer || {};
								var s = i._currentURL();
								E(s) || (x(null == e ? void 0 : e.name) || x(null == e ? void 0 : e.value) ? G.error(i4 + "Invalid metric received", e) : i._maxAllowedValue && e.value >= i._maxAllowedValue ? G.error(i4 + "Ignoring metric with value >= " + i._maxAllowedValue, e) : (i.buffer.url !== s && (i._flushToCapture(), i._delayedFlushTimer = setTimeout(i._flushToCapture, 8e3)), E(i.buffer.url) && (i.buffer.url = s), i.buffer.firstMetricTimestamp = E(i.buffer.firstMetricTimestamp) ? Date.now() : i.buffer.firstMetricTimestamp, i.buffer.metrics.push(r(r({}, e), {}, {
									$current_url: s,
									$session_id: n.sessionId,
									$window_id: n.windowId,
									timestamp: Date.now()
								})), 4 === i.buffer.metrics.length && i._flushToCapture()))
							}
						}), l(this, "_startCapturing", function() {
							var e = U.postHogWebVitalsCallbacks,
								t = e.onLCP,
								n = e.onCLS,
								r = e.onFCP,
								s = e.onINP;
							t && n && r && s ? (t(i._addToBuffer), n(i._addToBuffer), r(i._addToBuffer), s(i._addToBuffer), i._initialized = !0) : G.error(i4 + "web vitals callbacks not loaded - not starting")
						}), this.instance = t, this._enabledServerSide = !(null === (n = this.instance.persistence) || void 0 === n || !n.props[ep]), this.startIfEnabled()
					}
					return u(e, [{
						key: "_maxAllowedValue",
						get: function() {
							var e = w(this.instance.config.capture_performance) && P(this.instance.config.capture_performance.__web_vitals_max_value) ? this.instance.config.capture_performance.__web_vitals_max_value : 9e5;
							return 0 < e && e <= 6e4 ? 9e5 : e
						}
					}, {
						key: "isEnabled",
						get: function() {
							var e = w(this.instance.config.capture_performance) ? this.instance.config.capture_performance.web_vitals : void 0;
							return T(e) ? e : this._enabledServerSide
						}
					}, {
						key: "startIfEnabled",
						value: function() {
							this.isEnabled && !this._initialized && (G.info(i4 + " enabled, starting..."), this.loadScript(this._startCapturing))
						}
					}, {
						key: "afterDecideResponse",
						value: function(e) {
							var t = w(e.capturePerformance) && !!e.capturePerformance.web_vitals;
							this.instance.persistence && this.instance.persistence.register(l({}, ep, t)), this._enabledServerSide = t, this.startIfEnabled()
						}
					}, {
						key: "loadScript",
						value: function(e) {
							C.postHogWebVitalsCallbacks && e(), this.instance.requestRouter.loadScript(this.instance.requestRouter.endpointFor("assets", "/static/web-vitals.js?v=".concat(p.LIB_VERSION)), function(t) {
								t ? G.error(i4 + " failed to load script", t) : e()
							})
						}
					}, {
						key: "_currentURL",
						value: function() {
							var e = C ? C.location.href : void 0;
							return e || G.error(i4 + "Could not determine current URL"), e
						}
					}]), e
				}(),
				i9 = {},
				re = function() {},
				rt = "posthog",
				rn = !iv && -1 === (null == j ? void 0 : j.indexOf("MSIE")) && -1 === (null == j ? void 0 : j.indexOf("Mozilla")),
				ri = function() {
					var e, t, n;
					return {
						api_host: "https://us.i.posthog.com",
						ui_host: null,
						token: "",
						autocapture: !0,
						rageclick: !0,
						cross_subdomain_cookie: !!I(n = null == (t = null == L ? void 0 : L.location) ? void 0 : t.hostname) && "herokuapp.com" !== n.split(".").slice(-2).join("."),
						persistence: "localStorage+cookie",
						persistence_name: "",
						loaded: re,
						store_google: !0,
						custom_campaign_params: [],
						custom_blocked_useragents: [],
						save_referrer: !0,
						capture_pageview: !0,
						capture_pageleave: "if_capture_pageview",
						debug: N && I(null == N ? void 0 : N.search) && -1 !== N.search.indexOf("__posthog_debug=true") || !1,
						verbose: !1,
						cookie_expiration: 365,
						upgrade: !1,
						disable_session_recording: !1,
						disable_persistence: !1,
						disable_surveys: !1,
						enable_recording_console_log: void 0,
						secure_cookie: "https:" === (null == C || null === (e = C.location) || void 0 === e ? void 0 : e.protocol),
						ip: !0,
						opt_out_capturing_by_default: !1,
						opt_out_persistence_by_default: !1,
						opt_out_useragent_filter: !1,
						opt_out_capturing_persistence_type: "localStorage",
						opt_out_capturing_cookie_prefix: null,
						opt_in_site_apps: !1,
						property_denylist: [],
						respect_dnt: !1,
						sanitize_properties: null,
						request_headers: {},
						inapp_protocol: "//",
						inapp_link_new_window: !1,
						request_batching: !0,
						properties_string_max_length: 65535,
						session_recording: {},
						mask_all_element_attributes: !1,
						mask_all_text: !1,
						advanced_disable_decide: !1,
						advanced_disable_feature_flags: !1,
						advanced_disable_feature_flags_on_first_load: !1,
						advanced_disable_toolbar_metrics: !1,
						feature_flag_request_timeout_ms: 3e3,
						on_request_error: function(e) {
							var t = "Bad HTTP status: " + e.statusCode + " " + e.text;
							G.error(t)
						},
						get_device_id: function(e) {
							return e
						},
						_onCapture: re,
						capture_performance: void 0,
						name: "posthog",
						bootstrap: {},
						disable_compression: !1,
						session_idle_timeout_seconds: 1800,
						person_profiles: "always",
						__add_tracing_headers: !1
					}
				},
				rr = function(e) {
					var t = {};
					E(e.process_person) || (t.person_profiles = e.process_person), E(e.xhr_headers) || (t.request_headers = e.xhr_headers), E(e.cookie_name) || (t.persistence_name = e.cookie_name), E(e.disable_cookie) || (t.disable_persistence = e.disable_cookie);
					var n = Y({}, t, e);
					return b(e.property_blacklist) && (E(e.property_denylist) ? n.property_denylist = e.property_blacklist : b(e.property_denylist) ? n.property_denylist = [].concat(d(e.property_blacklist), d(e.property_denylist)) : G.error("Invalid value for property_denylist config: " + e.property_denylist)), n
				},
				rs = function() {
					function e() {
						o(this, e), l(this, "__forceAllowLocalhost", !1)
					}
					return u(e, [{
						key: "_forceAllowLocalhost",
						get: function() {
							return this.__forceAllowLocalhost
						},
						set: function(e) {
							G.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
						}
					}]), e
				}(),
				ro = function() {
					function e() {
						var t = this;
						o(this, e), l(this, "webPerformance", new rs), l(this, "_internalEventEmitter", new iL), this.config = ri(), this.decideEndpointWasHit = !1, this.SentryIntegration = iA, this.sentryIntegration = function(e) {
							var n;
							return n = iP(t, e), {
								name: ix,
								processEvent: function(e) {
									return n(e)
								}
							}
						}, this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.featureFlags = new eW(this), this.toolbar = new nH(this), this.scrollManager = new iX(this), this.pageViewManager = new iM(this), this.surveys = new ij(this), this.rateLimiter = new iU(this), this.requestRouter = new iI(this), this.consent = new i8(this), this.people = {
							set: function(e, n, i) {
								var r = I(e) ? l({}, e, n) : e;
								t.setPersonProperties(r), null == i || i({})
							},
							set_once: function(e, n, i) {
								var r = I(e) ? l({}, e, n) : e;
								t.setPersonProperties(void 0, r), null == i || i({})
							}
						}, this.on("eventCaptured", function(e) {
							return G.info("send", e)
						})
					}
					return u(e, [{
						key: "init",
						value: function(t, n, i) {
							if (i && i !== rt) {
								var r, s = null !== (r = i9[i]) && void 0 !== r ? r : new e;
								return s._init(t, n, i), i9[i] = s, i9[rt][i] = s, s
							}
							return this._init(t, n, i)
						}
					}, {
						key: "_init",
						value: function(e) {
							var t, n, i = this,
								s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								o = arguments.length > 2 ? arguments[2] : void 0;
							if (E(e) || F(e)) return G.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
							if (this.__loaded) return G.warn("You have already initialized PostHog! Re-initializing is a no-op"), this;
							if (this.__loaded = !0, this.config = {}, this._triggered_notifs = [], this.set_config(Y({}, ri(), rr(s), {
									name: o,
									token: e
								})), this.config.on_xhr_error && G.error("[posthog] on_xhr_error is deprecated. Use on_request_error instead"), this.compression = s.disable_compression ? void 0 : Z.Base64, this.persistence = new t6(this.config), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new t6(r(r({}, this.config), {}, {
									persistence: "sessionStorage"
								})), this._requestQueue = new nj(function(e) {
									return i._send_retriable_request(e)
								}), this._retryQueue = new iw(this), this.__request_queue = [], this.sessionManager = new iS(this.config, this.persistence), this.sessionPropsManager = new iG(this.sessionManager, this.persistence), new i6(this).startIfEnabledOrStop(), this.sessionRecording = new nL(this), this.sessionRecording.startIfEnabledOrStop(), this.config.disable_scroll_properties || this.scrollManager.startMeasuringScrollPosition(), this.autocapture = new i5(this), this.autocapture.startIfEnabled(), this.surveys.loadIfEnabled(), this.heatmaps = new iY(this), this.heatmaps.startIfEnabled(), this.webVitalsAutocapture = new i7(this), this.exceptionObserver = new iR(this), this.exceptionObserver.startIfEnabled(), p.DEBUG = p.DEBUG || this.config.debug, this._sync_opt_out_with_persistence(), void 0 !== (null === (t = s.bootstrap) || void 0 === t ? void 0 : t.distinctID)) {
								var a, u, l = this.config.get_device_id(eZ()),
									c = null !== (a = s.bootstrap) && void 0 !== a && a.isIdentifiedID ? l : s.bootstrap.distinctID;
								this.persistence.set_property(eC, null !== (u = s.bootstrap) && void 0 !== u && u.isIdentifiedID ? "identified" : "anonymous"), this.register({
									distinct_id: s.bootstrap.distinctID,
									$device_id: c
								})
							}
							if (this._hasBootstrappedFeatureFlags()) {
								var d, h, f = Object.keys((null === (d = s.bootstrap) || void 0 === d ? void 0 : d.featureFlags) || {}).filter(function(e) {
										var t, n;
										return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e])
									}).reduce(function(e, t) {
										var n, i;
										return e[t] = (null === (n = s.bootstrap) || void 0 === n || null === (i = n.featureFlags) || void 0 === i ? void 0 : i[t]) || !1, e
									}, {}),
									v = Object.keys((null === (h = s.bootstrap) || void 0 === h ? void 0 : h.featureFlagPayloads) || {}).filter(function(e) {
										return f[e]
									}).reduce(function(e, t) {
										var n, i, r, o;
										return null !== (n = s.bootstrap) && void 0 !== n && null !== (i = n.featureFlagPayloads) && void 0 !== i && i[t] && (e[t] = null === (r = s.bootstrap) || void 0 === r || null === (o = r.featureFlagPayloads) || void 0 === o ? void 0 : o[t]), e
									}, {});
								this.featureFlags.receivedFeatureFlags({
									featureFlags: f,
									featureFlagPayloads: v
								})
							}
							if (!this.get_distinct_id()) {
								var g = this.config.get_device_id(eZ());
								this.register_once({
									distinct_id: g,
									$device_id: g
								}, ""), this.persistence.set_property(eC, "anonymous")
							}
							return null == C || null === (n = C.addEventListener) || void 0 === n || n.call(C, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)), this.toolbar.maybeLoadToolbar(), s.segment ? function(e, t) {
								var n = e.config.segment;
								if (!n) return t();
								! function(e, t) {
									var n = e.config.segment;
									if (!n) return t();
									var i = function(n) {
											var i = function() {
												return n.anonymousId() || eZ()
											};
											e.config.get_device_id = i, n.id() && (e.register({
												distinct_id: n.id(),
												$device_id: i()
											}), e.persistence.set_property(eC, "identified")), t()
										},
										r = n.user();
									"then" in r && k(r.then) ? r.then(function(e) {
										return i(e)
									}) : i(r)
								}(e, function() {
									var i;
									n.register((Promise && Promise.resolve || G.warn("This browser does not have Promise support, and can not use the segment integration"), i = function(t, n) {
										if (!n) return t;
										t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(), t.event.userId && t.event.userId !== e.get_distinct_id() && (e.register({
											distinct_id: t.event.userId
										}), e.reloadFeatureFlags());
										var i, r = e._calculate_event_properties(n, null !== (i = t.event.properties) && void 0 !== i ? i : {});
										return t.event.properties = Object.assign({}, r, t.event.properties), t
									}, {
										name: "PostHog JS",
										type: "enrichment",
										version: "1.0.0",
										isLoaded: function() {
											return !0
										},
										load: function() {
											return Promise.resolve()
										},
										track: function(e) {
											return i(e, e.event.event)
										},
										page: function(e) {
											return i(e, "$pageview")
										},
										identify: function(e) {
											return i(e, "$identify")
										},
										screen: function(e) {
											return i(e, "$screen")
										}
									})).then(function() {
										t()
									})
								})
							}(this, function() {
								return i._loaded()
							}) : this._loaded(), k(this.config._onCapture) && this.on("eventCaptured", function(e) {
								return i.config._onCapture(e.event, e)
							}), this
						}
					}, {
						key: "_afterDecideResponse",
						value: function(e) {
							var t, n, i, r, s, o, a;
							this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = X(e.supportedCompression, Z.GZipJS) ? Z.GZipJS : X(e.supportedCompression, Z.Base64) ? Z.Base64 : void 0), null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), null === (n = this.sessionRecording) || void 0 === n || n.afterDecideResponse(e), null === (i = this.autocapture) || void 0 === i || i.afterDecideResponse(e), null === (r = this.heatmaps) || void 0 === r || r.afterDecideResponse(e), null === (s = this.surveys) || void 0 === s || s.afterDecideResponse(e), null === (o = this.webVitalsAutocapture) || void 0 === o || o.afterDecideResponse(e), null === (a = this.exceptionObserver) || void 0 === a || a.afterDecideResponse(e)
						}
					}, {
						key: "_loaded",
						value: function() {
							var e = this,
								t = this.config.advanced_disable_decide;
							t || this.featureFlags.setReloadingPaused(!0);
							try {
								this.config.loaded(this)
							} catch (e) {
								G.critical("`loaded` function failed", e)
							}
							this._start_queue_if_opted_in(), this.config.capture_pageview && setTimeout(function() {
								L && e.capture("$pageview", {
									title: L.title
								}, {
									send_instantly: !0
								})
							}, 1), t || (new nN(this).call(), this.featureFlags.resetRequestQueue())
						}
					}, {
						key: "_start_queue_if_opted_in",
						value: function() {
							var e;
							this.has_opted_out_capturing() || this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.enable())
						}
					}, {
						key: "_dom_loaded",
						value: function() {
							var e = this;
							this.has_opted_out_capturing() || Q(this.__request_queue, function(t) {
								return e._send_retriable_request(t)
							}), this.__request_queue = [], this._start_queue_if_opted_in()
						}
					}, {
						key: "_handle_unload",
						value: function() {
							var e, t;
							this.config.request_batching ? (this._shouldCapturePageleave() && this.capture("$pageleave"), null === (e = this._requestQueue) || void 0 === e || e.unload(), null === (t = this._retryQueue) || void 0 === t || t.unload()) : this._shouldCapturePageleave() && this.capture("$pageleave", null, {
								transport: "sendBeacon"
							})
						}
					}, {
						key: "_send_request",
						value: function(e) {
							var t = this;
							this.__loaded && (rn ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) || (e.transport = e.transport || this.config.api_transport, e.url = ig(e.url, {
								ip: this.config.ip ? 1 : 0
							}), e.headers = this.config.request_headers, e.compression = "best-available" === e.compression ? this.compression : e.compression, function(e) {
								var t, n, i, s = r({}, e);
								s.timeout = s.timeout || 6e4, s.url = ig(s.url, {
									_: (new Date).getTime().toString(),
									ver: p.LIB_VERSION,
									compression: s.compression
								});
								var o = null !== (t = s.transport) && void 0 !== t ? t : "XHR",
									a = null !== (n = null === (i = ea(im, function(e) {
										return e.transport === o
									})) || void 0 === i ? void 0 : i.method) && void 0 !== n ? n : im[0].method;
								if (!a) throw Error("No available transport method");
								a(s)
							}(r(r({}, e), {}, {
								callback: function(n) {
									var i, r, s;
									t.rateLimiter.checkForLimiting(n), n.statusCode >= 400 && (null === (r = (s = t.config).on_request_error) || void 0 === r || r.call(s, n)), null === (i = e.callback) || void 0 === i || i.call(e, n)
								}
							}))))
						}
					}, {
						key: "_send_retriable_request",
						value: function(e) {
							this._retryQueue ? this._retryQueue.retriableRequest(e) : this._send_request(e)
						}
					}, {
						key: "_execute_array",
						value: function(e) {
							var t, n = this,
								i = [],
								r = [],
								s = [];
							Q(e, function(e) {
								e && (b(t = e[0]) ? s.push(e) : k(e) ? e.call(n) : b(e) && "alias" === t ? i.push(e) : b(e) && -1 !== t.indexOf("capture") && k(n[t]) ? s.push(e) : r.push(e))
							});
							var o = function(e, t) {
								Q(e, function(e) {
									if (b(e[0])) {
										var n = t;
										J(e, function(e) {
											n = n[e[0]].apply(n, e.slice(1))
										})
									} else this[e[0]].apply(this, e.slice(1))
								}, t)
							};
							o(i, this), o(r, this), o(s, this)
						}
					}, {
						key: "_hasBootstrappedFeatureFlags",
						value: function() {
							var e, t;
							return (null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) && Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0 || !1
						}
					}, {
						key: "push",
						value: function(e) {
							this._execute_array([e])
						}
					}, {
						key: "capture",
						value: function(e, t, n) {
							var i;
							if (!(this.__loaded && this.persistence && this.sessionPersistence && this._requestQueue)) return G.uninitializedWarning("posthog.capture");
							if (!this.consent.isOptedOut()) {
								if (!E(e) && I(e)) {
									if (!j || this.config.opt_out_useragent_filter || !iV(j, this.config.custom_blocked_useragents)) {
										var s = null != n && n.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
										if (null == s || !s.isRateLimited) {
											this.sessionPersistence.update_search_keyword(), this.config.store_google && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.store_google || this.config.save_referrer) && this.persistence.set_initial_person_info();
											var o, a, u, l, c = {
												uuid: eZ(),
												event: e,
												properties: this._calculate_event_properties(e, t || {})
											};
											s && (c.properties.$lib_rate_limit_remaining_tokens = s.remainingTokens), (null == n ? void 0 : n.$set) && (c.$set = null == n ? void 0 : n.$set);
											var d = this._calculate_set_once_properties(null == n ? void 0 : n.$set_once);
											d && (c.$set_once = d), (o = c, a = null != n && n._noTruncate ? null : this.config.properties_string_max_length, u = function(e) {
												return I(e) && !R(a) ? e.slice(0, a) : e
											}, l = new Set, c = function e(t, n) {
												var i;
												return t !== Object(t) ? u ? u(t, n) : t : l.has(t) ? void 0 : (l.add(t), b(t) ? (i = [], Q(t, function(t) {
													i.push(e(t))
												})) : (i = {}, J(t, function(t, n) {
													l.has(t) || (i[n] = e(t, n))
												})), i)
											}(o)).timestamp = (null == n ? void 0 : n.timestamp) || new Date, E(null == n ? void 0 : n.timestamp) || (c.properties.$event_time_override_provided = !0, c.properties.$event_time_override_system_time = new Date);
											var h = r(r({}, c.properties.$set), c.$set);
											S(h) || this.setPersonPropertiesForFlags(h), this._internalEventEmitter.emit("eventCaptured", c);
											var f = {
												method: "POST",
												url: null !== (i = null == n ? void 0 : n._url) && void 0 !== i ? i : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
												data: c,
												compression: "best-available",
												batchKey: null == n ? void 0 : n._batchKey
											};
											return !this.config.request_batching || n && (null == n || !n._batchKey) || null != n && n.send_instantly ? this._send_retriable_request(f) : this._requestQueue.enqueue(f), c
										}
										G.critical("This capture call is ignored due to client rate limiting.")
									}
								} else G.error("No event name provided to posthog.capture")
							}
						}
					}, {
						key: "_addCaptureHook",
						value: function(e) {
							this.on("eventCaptured", function(t) {
								return e(t.event, t)
							})
						}
					}, {
						key: "_calculate_event_properties",
						value: function(e, t) {
							if (!this.persistence || !this.sessionPersistence) return t;
							var n = this.persistence.remove_event_timer(e),
								i = r({}, t);
							if (i.token = this.config.token, "$snapshot" === e) {
								var s = r(r({}, this.persistence.properties()), this.sessionPersistence.properties());
								return i.distinct_id = s.distinct_id, (!I(i.distinct_id) && !P(i.distinct_id) || F(i.distinct_id)) && G.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), i
							}
							var o = t3.properties();
							if (this.sessionManager) {
								var a = this.sessionManager.checkAndGetSessionAndWindowId(),
									u = a.sessionId,
									l = a.windowId;
								i.$session_id = u, i.$window_id = l
							}
							if (this.requestRouter.region === ib.CUSTOM && (i.$lib_custom_api_host = this.config.api_host), this.sessionPropsManager && this.config.__preview_send_client_session_params && ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)) {
								var c = this.sessionPropsManager.getSessionProps();
								i = Y(i, c)
							}
							if (!this.config.disable_scroll_properties) {
								var d = {};
								"$pageview" === e ? d = this.pageViewManager.doPageView() : "$pageleave" === e && (d = this.pageViewManager.doPageLeave()), i = Y(i, d)
							}
							if ("$pageview" === e && L && (i.title = L.title), !E(n)) {
								var h = (new Date).getTime() - n;
								i.$duration = parseFloat((h / 1e3).toFixed(3))
							}
							j && this.config.opt_out_useragent_filter && (i.$browser_type = iV(j, this.config.custom_blocked_useragents) ? "bot" : "browser"), (i = Y({}, o, this.persistence.properties(), this.sessionPersistence.properties(), i)).$is_identified = this._isIdentified(), b(this.config.property_denylist) ? J(this.config.property_denylist, function(e) {
								delete i[e]
							}) : G.error("Invalid value for property_denylist config: " + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
							var f = this.config.sanitize_properties;
							return f && (i = f(i, e)), i.$process_person_profile = this._hasPersonProcessing(), i
						}
					}, {
						key: "_calculate_set_once_properties",
						value: function(e) {
							if (!this.persistence || !this._hasPersonProcessing()) return e;
							var t = Y({}, this.persistence.get_initial_props(), e || {});
							return S(t) ? void 0 : t
						}
					}, {
						key: "register",
						value: function(e, t) {
							var n;
							null === (n = this.persistence) || void 0 === n || n.register(e, t)
						}
					}, {
						key: "register_once",
						value: function(e, t, n) {
							var i;
							null === (i = this.persistence) || void 0 === i || i.register_once(e, t, n)
						}
					}, {
						key: "register_for_session",
						value: function(e) {
							var t;
							null === (t = this.sessionPersistence) || void 0 === t || t.register(e)
						}
					}, {
						key: "unregister",
						value: function(e) {
							var t;
							null === (t = this.persistence) || void 0 === t || t.unregister(e)
						}
					}, {
						key: "unregister_for_session",
						value: function(e) {
							var t;
							null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e)
						}
					}, {
						key: "_register_single",
						value: function(e, t) {
							this.register(l({}, e, t))
						}
					}, {
						key: "getFeatureFlag",
						value: function(e, t) {
							return this.featureFlags.getFeatureFlag(e, t)
						}
					}, {
						key: "getFeatureFlagPayload",
						value: function(e) {
							var t = this.featureFlags.getFeatureFlagPayload(e);
							try {
								return JSON.parse(t)
							} catch (e) {
								return t
							}
						}
					}, {
						key: "isFeatureEnabled",
						value: function(e, t) {
							return this.featureFlags.isFeatureEnabled(e, t)
						}
					}, {
						key: "reloadFeatureFlags",
						value: function() {
							this.featureFlags.reloadFeatureFlags()
						}
					}, {
						key: "updateEarlyAccessFeatureEnrollment",
						value: function(e, t) {
							this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
						}
					}, {
						key: "getEarlyAccessFeatures",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							return this.featureFlags.getEarlyAccessFeatures(e, t)
						}
					}, {
						key: "on",
						value: function(e, t) {
							return this._internalEventEmitter.on(e, t)
						}
					}, {
						key: "onFeatureFlags",
						value: function(e) {
							return this.featureFlags.onFeatureFlags(e)
						}
					}, {
						key: "onSessionId",
						value: function(e) {
							var t, n;
							return null !== (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) && void 0 !== t ? t : function() {}
						}
					}, {
						key: "getSurveys",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							this.surveys.getSurveys(e, t)
						}
					}, {
						key: "getActiveMatchingSurveys",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							this.surveys.getActiveMatchingSurveys(e, t)
						}
					}, {
						key: "getNextSurveyStep",
						value: function(e, t, n) {
							return this.surveys.getNextSurveyStep(e, t, n)
						}
					}, {
						key: "identify",
						value: function(e, t, n) {
							if (!this.__loaded || !this.persistence) return G.uninitializedWarning("posthog.identify");
							if (P(e) && (e = e.toString(), G.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), e) {
								if (["distinct_id", "distinctid"].includes(e.toLowerCase())) G.critical('The string "'.concat(e, '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'));
								else if (this._requirePersonProcessing("posthog.identify")) {
									var i = this.get_distinct_id();
									this.register({
										$user_id: e
									}), this.get_property("$device_id") || this.register_once({
										$had_persisted_distinct_id: !0,
										$device_id: i
									}, ""), e !== i && e !== this.get_property(el) && (this.unregister(el), this.register({
										distinct_id: e
									}));
									var r = "anonymous" === (this.persistence.get_property(eC) || "anonymous");
									e !== i && r ? (this.persistence.set_property(eC, "identified"), this.setPersonPropertiesForFlags(t || {}, !1), this.capture("$identify", {
										distinct_id: e,
										$anon_distinct_id: i
									}, {
										$set: t || {},
										$set_once: n || {}
									}), this.featureFlags.setAnonymousDistinctId(i)) : (t || n) && this.setPersonProperties(t, n), e !== i && (this.reloadFeatureFlags(), this.unregister(eT))
								}
							} else G.error("Unique user id has not been set in posthog.identify")
						}
					}, {
						key: "setPersonProperties",
						value: function(e, t) {
							(e || t) && this._requirePersonProcessing("posthog.setPersonProperties") && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", {
								$set: e || {},
								$set_once: t || {}
							}))
						}
					}, {
						key: "group",
						value: function(e, t, n) {
							if (e && t) {
								if (this._requirePersonProcessing("posthog.group")) {
									var i = this.getGroups();
									i[e] !== t && this.resetGroupPropertiesForFlags(e), this.register({
										$groups: r(r({}, i), {}, l({}, e, t))
									}), n && (this.capture("$groupidentify", {
										$group_type: e,
										$group_key: t,
										$group_set: n
									}), this.setGroupPropertiesForFlags(l({}, e, n))), i[e] === t || n || this.reloadFeatureFlags()
								}
							} else G.error("posthog.group requires a group type and group key")
						}
					}, {
						key: "resetGroups",
						value: function() {
							this.register({
								$groups: {}
							}), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
						}
					}, {
						key: "setPersonPropertiesForFlags",
						value: function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
							this._requirePersonProcessing("posthog.setPersonPropertiesForFlags") && this.featureFlags.setPersonPropertiesForFlags(e, t)
						}
					}, {
						key: "resetPersonPropertiesForFlags",
						value: function() {
							this.featureFlags.resetPersonPropertiesForFlags()
						}
					}, {
						key: "setGroupPropertiesForFlags",
						value: function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
							this._requirePersonProcessing("posthog.setGroupPropertiesForFlags") && this.featureFlags.setGroupPropertiesForFlags(e, t)
						}
					}, {
						key: "resetGroupPropertiesForFlags",
						value: function(e) {
							this.featureFlags.resetGroupPropertiesForFlags(e)
						}
					}, {
						key: "reset",
						value: function(e) {
							if (!this.__loaded) return G.uninitializedWarning("posthog.reset");
							var t, n, i, r, s = this.get_property("$device_id");
							this.consent.reset(), null === (t = this.persistence) || void 0 === t || t.clear(), null === (n = this.sessionPersistence) || void 0 === n || n.clear(), null === (i = this.persistence) || void 0 === i || i.set_property(eC, "anonymous"), null === (r = this.sessionManager) || void 0 === r || r.resetSessionId();
							var o = this.config.get_device_id(eZ());
							this.register_once({
								distinct_id: o,
								$device_id: e ? o : s
							}, "")
						}
					}, {
						key: "get_distinct_id",
						value: function() {
							return this.get_property("distinct_id")
						}
					}, {
						key: "getGroups",
						value: function() {
							return this.get_property("$groups") || {}
						}
					}, {
						key: "get_session_id",
						value: function() {
							var e, t;
							return null !== (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) && void 0 !== e ? e : ""
						}
					}, {
						key: "get_session_replay_url",
						value: function(e) {
							if (!this.sessionManager) return "";
							var t = this.sessionManager.checkAndGetSessionAndWindowId(!0),
								n = t.sessionId,
								i = t.sessionStartTimestamp,
								r = this.requestRouter.endpointFor("ui", "/project/".concat(this.config.token, "/replay/").concat(n));
							if (null != e && e.withTimestamp && i) {
								var s, o = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
								if (!i) return r;
								var a = Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - o, 0);
								r += "?t=".concat(a)
							}
							return r
						}
					}, {
						key: "alias",
						value: function(e, t) {
							return e === this.get_property(eu) ? (G.critical("Attempting to create alias for existing People user - aborting."), -2) : this._requirePersonProcessing("posthog.alias") ? (E(t) && (t = this.get_distinct_id()), e !== t ? (this._register_single(el, e), this.capture("$create_alias", {
								alias: e,
								distinct_id: t
							})) : (G.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
						}
					}, {
						key: "set_config",
						value: function(e) {
							var t, n, i, s, o = r({}, this.config);
							w(e) && (Y(this.config, rr(e)), null === (t = this.persistence) || void 0 === t || t.update_config(this.config, o), this.sessionPersistence = "sessionStorage" === this.config.persistence ? this.persistence : new t6(r(r({}, this.config), {}, {
								persistence: "sessionStorage"
							})), e6.is_supported() && "true" === e6.get("ph_debug") && (this.config.debug = !0), this.config.debug && (p.DEBUG = !0), null === (n = this.sessionRecording) || void 0 === n || n.startIfEnabledOrStop(), null === (i = this.autocapture) || void 0 === i || i.startIfEnabled(), null === (s = this.heatmaps) || void 0 === s || s.startIfEnabled(), this.surveys.loadIfEnabled(), this._sync_opt_out_with_persistence())
						}
					}, {
						key: "startSessionRecording",
						value: function(e) {
							if (null != e && e.sampling) {
								var t, n, i = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId();
								null === (n = this.persistence) || void 0 === n || n.register(l({}, eS, !0)), G.info("Session recording started with sampling override for session: ", null == i ? void 0 : i.sessionId)
							}
							this.set_config({
								disable_session_recording: !1
							})
						}
					}, {
						key: "stopSessionRecording",
						value: function() {
							this.set_config({
								disable_session_recording: !0
							})
						}
					}, {
						key: "sessionRecordingStarted",
						value: function() {
							var e;
							return !(null === (e = this.sessionRecording) || void 0 === e || !e.started)
						}
					}, {
						key: "loadToolbar",
						value: function(e) {
							return this.toolbar.loadToolbar(e)
						}
					}, {
						key: "get_property",
						value: function(e) {
							var t;
							return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e]
						}
					}, {
						key: "getSessionProperty",
						value: function(e) {
							var t;
							return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e]
						}
					}, {
						key: "toString",
						value: function() {
							var e, t = null !== (e = this.config.name) && void 0 !== e ? e : rt;
							return t !== rt && (t = rt + "." + t), t
						}
					}, {
						key: "_isIdentified",
						value: function() {
							var e, t;
							return "identified" === (null === (e = this.persistence) || void 0 === e ? void 0 : e.get_property(eC)) || "identified" === (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.get_property(eC))
						}
					}, {
						key: "_hasPersonProcessing",
						value: function() {
							var e, t, n, i;
							return !("never" === this.config.person_profiles || "identified_only" === this.config.person_profiles && !this._isIdentified() && S(this.getGroups()) && (null === (e = this.persistence) || void 0 === e || null === (t = e.props) || void 0 === t || !t[el]) && (null === (n = this.persistence) || void 0 === n || null === (i = n.props) || void 0 === i || !i[eL]))
						}
					}, {
						key: "_shouldCapturePageleave",
						value: function() {
							return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && this.config.capture_pageview
						}
					}, {
						key: "createPersonProfile",
						value: function() {
							this._hasPersonProcessing() || this._requirePersonProcessing("posthog.createPersonProfile") && this.setPersonProperties({}, {})
						}
					}, {
						key: "_requirePersonProcessing",
						value: function(e) {
							return "never" === this.config.person_profiles ? (G.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this._register_single(eL, !0), !0)
						}
					}, {
						key: "_sync_opt_out_with_persistence",
						value: function() {
							var e, t, n, i, r = this.consent.isOptedOut(),
								s = this.config.opt_out_persistence_by_default,
								o = this.config.disable_persistence || r && !!s;
							(null === (e = this.persistence) || void 0 === e ? void 0 : e.disabled) !== o && (null === (n = this.persistence) || void 0 === n || n.set_disabled(o)), (null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.disabled) !== o && (null === (i = this.sessionPersistence) || void 0 === i || i.set_disabled(o))
						}
					}, {
						key: "opt_in_capturing",
						value: function(e) {
							var t;
							this.consent.optInOut(!0), this._sync_opt_out_with_persistence(), (E(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null !== (t = null == e ? void 0 : e.captureEventName) && void 0 !== t ? t : "$opt_in", null == e ? void 0 : e.captureProperties, {
								send_instantly: !0
							})
						}
					}, {
						key: "opt_out_capturing",
						value: function() {
							this.consent.optInOut(!1), this._sync_opt_out_with_persistence()
						}
					}, {
						key: "has_opted_in_capturing",
						value: function() {
							return this.consent.isOptedIn()
						}
					}, {
						key: "has_opted_out_capturing",
						value: function() {
							return this.consent.isOptedOut()
						}
					}, {
						key: "clear_opt_in_out_capturing",
						value: function() {
							this.consent.reset(), this._sync_opt_out_with_persistence()
						}
					}, {
						key: "debug",
						value: function(e) {
							!1 === e ? (null == C || C.console.log("You've disabled debug mode."), localStorage && localStorage.removeItem("ph_debug"), this.set_config({
								debug: !1
							})) : (null == C || C.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), localStorage && localStorage.setItem("ph_debug", "true"), this.set_config({
								debug: !0
							}))
						}
					}]), e
				}();
			! function(e, t) {
				for (var n = 0; n < t.length; n++) e.prototype[t[n]] = en(e.prototype[t[n]])
			}(ro, ["identify"]);
			var ra, ru, rl = (ru = i9[rt] = new ro, function() {
				function e() {
					e.done || (e.done = !0, rn = !1, J(i9, function(e) {
						e._dom_loaded()
					}))
				}
				null != L && L.addEventListener && ("complete" === L.readyState ? e() : L.addEventListener("DOMContentLoaded", e, !1)), C && eo(C, "load", e, !0)
			}(), ru)
		}
	}
]);
