"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[886], {
		20840: function(e, t, r) {
			r.d(t, {
				ToolProvider: function() {
					return o
				},
				z: function() {
					return s
				}
			});
			var a = r(57437),
				i = r(2265);
			let n = (0,
					i.createContext)(void 0),
				s = () => {
					let e = (0,
						i.useContext)(n);
					if (!e)
						throw Error("useToolContext must be used within a ToolProvider");
					return e
				},
				o = e => {
					let {
						children: t,
						jsonLd: r,
						canonicalUrl: i,
						copy: s
					} = e;
					return (0,
						a.jsx)(n.Provider, {
						value: {
							jsonLd: r,
							canonicalUrl: i,
							copy: s
						},
						children: t
					})
				}
		},
		92873: function(e, t, r) {
			r.d(t, {
				Z: function() {
					return u
				}
			});
			var a = r(57437),
				i = r(7330),
				n = r(54662),
				s = r(55555),
				o = r(78451),
				l = r(60958),
				c = r(71976),
				d = r(66648),
				p = r(2265),
				m = r(20840);

			function u(e) {
				let {
					allowedTimesPerDay: t,
					toolName: r,
					isDialogOpen: u,
					setIsDialogOpen: g,
					deepLinkParams: f
				} = e, {
					copy: h
				} = (0,
					m.z)(), x = (0,
					o.a)("(min-width: 1024px)");
				(0,
					p.useEffect)(() => {
					u && l.r.capture("rate-limit-alert-opened", {
						tool: r
					})
				}, [u, r]);
				let b = (0,
					a.jsxs)(a.Fragment, {
					children: [(0,
						a.jsxs)("div", {
						className: "relative -mt-8",
						children: [(0,
							a.jsx)(d.default, {
							src: "/rate-limit/grid.png",
							alt: "Rate limit alert",
							width: 500,
							height: 160
						}), (0,
							a.jsx)("div", {
							className: "absolute top-12 w-full flex items-center justify-center",
							children: (0,
								a.jsx)("div", {
								className: "bg-background-tertiary border border-background-grouped-tertiary rounded-full p-3 shadow-lg h-[90px] w-[90px] flex items-center justify-center",
								children: (0,
									a.jsx)(d.default, {
									src: "/rate-limit/crown.png",
									alt: "Rate limit alert",
									width: 80,
									height: 80,
									className: "h-[40px] w-[40px]"
								})
							})
						})]
					}), (0,
						a.jsxs)("div", {
						className: "space-y-6 mt-8 p-8",
						children: [(0,
							a.jsxs)("div", {
							className: "space-y-4 text-center",
							children: [(0,
								a.jsx)("h3", {
								className: "text-2xl font-semibold text-text-primary",
								children: "Limited?"
							}), (0,
								a.jsx)("p", {
								className: "text-text-secondary",
								children: "Create an account to keep going."
							})]
						}), (0,
							a.jsx)(i.default, {
							deepLinkSlug: h.deepLinkSlug,
							deepLinkParams: f,
							variant: "primary",
							size: "xl",
							className: "w-full",
							rightIcon: (0,
								a.jsx)(c.Z, {
								size: 16
							}),
							children: "Continue for Free"
						})]
					})]
				});
				return (0,
					a.jsx)(a.Fragment, {
					children: x ? (0,
						a.jsx)(n.Vq, {
						open: u,
						onOpenChange: g,
						children: (0,
							a.jsxs)(n.cZ, {
							children: [(0,
								a.jsx)(n.fK, {
								children: (0,
									a.jsx)(n.$N, {
									className: "hidden",
									children: "Want More Free Runs?"
								})
							}), (0,
								a.jsx)(n.Be, {
								children: b
							})]
						})
					}) : (0,
						a.jsx)(s.dy, {
						open: u,
						onOpenChange: g,
						children: (0,
							a.jsx)(s.sc, {
							className: "max-h-[90vh] overflow-y-auto",
							children: b
						})
					})
				})
			}
		},
		95554: function(e, t, r) {
			r.d(t, {
				default: function() {
					return n
				}
			});
			var a = r(57437),
				i = r(2265);

			function n(e) {
				let {
					title: t,
					description: r,
					badgeText: n,
					headingType: s = "h1"
				} = e;
				return (0,
					a.jsxs)("div", {
					className: "flex flex-col gap-4",
					children: [(0,
						a.jsx)("div", {
						className: "flex"
					}), (0,
						a.jsxs)("div", {
						className: "flex flex-col gap-2 text-center mx-auto lg:max-w-xl max-w-sm",
						children: [i.createElement(s, {
							className: "text-[30px] lg:text-[40px] font-semibold"
						}, t.replaceAll("{{", "").replaceAll("}}", "").replaceAll("<br>", "")), (0,
							a.jsx)("p", {
							className: "text-gray-500",
							children: r
						})]
					})]
				})
			}
		},
		18102: function(e, t, r) {
			r.d(t, {
				default: function() {
					return c
				}
			});
			var a = r(57437),
				i = r(98759),
				n = r(87592),
				s = r(66648);
			r(2265);
			var o = e => {
				let {
					title: t,
					description: r,
					imageUrl: o,
					link: l
				} = e;
				return (0,
					a.jsxs)("a", {
					href: l,
					className: "block bg-background-primary border-2 border-border-primary hover:border-brand-primary rounded-xl overflow-clip shadow-lg",
					children: [(0,
						a.jsx)(s.default, {
						src: o,
						alt: t,
						title: "".concat(t, " - ").concat(r),
						width: 520,
						height: 478,
						className: "mx-auto"
					}), (0,
						a.jsxs)("div", {
						className: "space-y-4 p-4",
						children: [(0,
							a.jsx)("h3", {
							className: "text-[20px] leading-[24px] font-semibold text-text-primary line-clamp-2 h-[48px]",
							style: {
								letterSpacing: "-0.045rem"
							},
							children: t
						}), (0,
							a.jsx)("p", {
							className: "text-[14px] leading-[20px] font-normal text-text-secondary line-clamp-2",
							children: r
						}), (0,
							a.jsx)(i.zx, {
							variant: "gray",
							size: "sm",
							className: "w-full",
							rightIcon: (0,
								a.jsx)(n.Z, {
								className: "w-4 h-4"
							}),
							children: "Try for Free"
						})]
					})]
				})
			};
			let l = [{
				title: "AI Image Generation",
				description: "Generate unique and high-quality images using our AI Image Generation tool. Create stunning visuals in seconds.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/9c480278ffac4bf08164bb231ea8c8da.png",
				link: "/tools/image-generator"
			}, {
				title: "AI Text to Speech",
				description: "Convert text into realistic speech in just seconds. No sign up required.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/169ded9d44d94fefba140b1b8eb11986.png",
				link: "/tools/ai-text-to-speech"
			}, {
				title: "AI Content Detector",
				description: "Use our free AI detector to analyze text and determine if it's likely to be AI generated. Simply paste text, and get a score.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/7e2d65e44bc744bcbec6980a028a32dc.png",
				link: "/tools/ai-content-detector"
			}, {
				title: "SEO Blog Writer",
				description: "Automating the entire process from keyword research to content creation, you can produce high-quality, search engine-friendly articles at scale - driving organic traffic and boosting your online visibility.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/3fe3b9797a574a00908352e3f3990d94.png",
				link: "/products/seo-blog-writer"
			}, {
				title: "Youtube Video to Blog Post",
				description: "Convert webinars, tutorials, or any Youtube video into SEO-optimized blog posts. This tool automatically transcribes the video, extracts key points, and generates a well-structured article to reach a wider audience and drive more traffic to your website.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/192a5ec7f154415eb262263e4ab03a6e.png",
				link: "/products/youtube-to-blog"
			}, {
				title: "Lead Research",
				description: "Enter an email to find out everything you can about that person. This tool uses various data sources to provide comprehensive information.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/73decc692f2d4dcd92285acbbe70f25e.png",
				link: "/tools/lead-research"
			}, {
				title: "AI Paraphrasing Tool",
				description: "Rewrite your paragraphs in various styles such as casual, formal, creative, or concise with our free AI paraphraser.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/721d81e801ef4f59a8f99b8cea0676ce.png",
				link: "/tools/paraphrasing-tool"
			}, {
				title: "AI SEO Topic Cluster Generator",
				description: "Generate SEO-optimized topic clusters for your website and get better search engine visibility with our free AI SEO topic cluster generator.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/ca27e07ee7f64fcca16737b2f4f25140.png",
				link: "/tools/ai-seo-topic-cluster-generator"
			}, {
				title: "AI Meta Description Generator",
				description: "Generate SEO-optimized meta descriptions for your website and get better search engine visibility with our free AI meta description generator.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/09e5af17539d4349bb680c86d294e16d.png",
				link: "/tools/ai-meta-description-generator"
			}, {
				title: "AI Paragraph Generator",
				description: "Generate SEO-optimized paragraphs for your website and blog posts for better search engine visibility with our AI paragraph generator.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/562786e2987444d081357b53e8065dbf.png",
				link: "/tools/ai-paragraph-generator"
			}, {
				title: "AI Paragraph Rewriter",
				description: "Rewrite your paragraphs to make them more SEO-friendly and improve your search engine visibility with our free AI paragraph rewriter.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/2f0ca524e65746909d6f098b005841de.png",
				link: "/tools/ai-paragraph-rewriter"
			}, {
				title: "AI Text Summarizer",
				description: "The Leap AI Summarizer is a free summary generator that can help summarize any text, article, or document in seconds.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/82861833b0c04eca97bc0b32b996d1cc.png",
				link: "/tools/summarize"
			}, {
				title: "AI Translator",
				description: "Translate text from one language to another with our free AI translator. Simply paste text, select the language, and click translate.",
				imageUrl: "https://storage.googleapis.com/public-app-media-assets/template-banners/c01d08f64f4b40c4beb68e0f68a28600.png",
				link: "/tools/translate"
			}];

			function c(e) {
				let {
					limit: t
				} = e;
				return (0,
					a.jsx)("div", {
					className: "space-y-4 flex flex-col items-center",
					children: (0,
						a.jsx)("div", {
						className: "grid md:grid-cols-2 xl:grid-cols-3 gap-8",
						children: l.slice(0, t || l.length).map((e, t) => (0,
							a.jsx)(o, {
							...e
						}, t))
					})
				})
			}
		},
		72588: function(e, t, r) {
			r.d(t, {
				d: function() {
					return a
				}
			});
			let a = Number("2") || 5
		},
		51158: function(e, t, r) {
			r.d(t, {
				Accordion: function() {
					return l
				},
				AccordionContent: function() {
					return p
				},
				AccordionItem: function() {
					return c
				},
				AccordionTrigger: function() {
					return d
				}
			});
			var a = r(57437),
				i = r(2265),
				n = r(64756),
				s = r(42421),
				o = r(49354);
			let l = i.forwardRef((e, t) => {
				let {
					className: r,
					...i
				} = e;
				return (0,
					a.jsx)(n.fC, {
					ref: t,
					className: (0,
						o.cn)("space-y-4", r),
					...i
				})
			});
			l.displayName = "Accordion";
			let c = i.forwardRef((e, t) => {
				let {
					className: r,
					...i
				} = e;
				return (0,
					a.jsx)(n.ck, {
					ref: t,
					className: (0,
						o.cn)("border rounded-2xl px-6 py-5 border-border-primary [&[data-state=open]]:outline-2 [&[data-state=open]]:outline outline-border-primary transition-all", r),
					...i
				})
			});
			c.displayName = "AccordionItem";
			let d = i.forwardRef((e, t) => {
				let {
					className: r,
					children: i,
					...l
				} = e;
				return (0,
					a.jsx)(n.h4, {
					className: "flex",
					children: (0,
						a.jsxs)(n.xz, {
						ref: t,
						className: (0,
							o.cn)("font-medium text-lg flex flex-1 items-center justify-between py-4 transition-all hover:opacity-70 outline-transparent focus:underline focus:outline-none focus:ring-transparent", "[&[data-state=open]>svg]:rotate-180", r),
						...l,
						children: [i, (0,
							a.jsx)(s.Z, {
							className: "ml-4 h-4 w-4 shrink-0 transition-transform duration-200"
						})]
					})
				})
			});
			d.displayName = "AccordionTrigger";
			let p = i.forwardRef((e, t) => {
				let {
					className: r,
					children: i,
					...s
				} = e;
				return (0,
					a.jsx)(n.VY, {
					ref: t,
					className: "overflow-hidden text-md transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
					...s,
					children: (0,
						a.jsx)("div", {
						className: (0,
							o.cn)("pb-4 pt-0", r),
						children: i
					})
				})
			});
			p.displayName = n.VY.displayName
		},
		97114: function(e, t, r) {
			r.d(t, {
				l0: function() {
					return p
				},
				NI: function() {
					return b
				},
				Wi: function() {
					return u
				},
				xJ: function() {
					return h
				},
				lX: function() {
					return x
				},
				zG: function() {
					return y
				}
			});
			var a = r(57437),
				i = r(2265),
				n = r(71538),
				s = r(39343),
				o = r(49354),
				l = r(38364);
			let c = (0,
					r(12218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
				d = i.forwardRef((e, t) => {
					let {
						className: r,
						...i
					} = e;
					return (0,
						a.jsx)(l.f, {
						ref: t,
						className: (0,
							o.cn)(c(), r),
						...i
					})
				});
			d.displayName = l.f.displayName;
			let p = s.RV,
				m = i.createContext({}),
				u = e => {
					let {
						...t
					} = e;
					return (0,
						a.jsx)(m.Provider, {
						value: {
							name: t.name
						},
						children: (0,
							a.jsx)(s.Qr, {
							...t
						})
					})
				},
				g = () => {
					let e = i.useContext(m),
						t = i.useContext(f),
						{
							getFieldState: r,
							formState: a
						} = (0,
							s.Gc)(),
						n = r(e.name, a);
					if (!e)
						throw Error("useFormField should be used within <FormField>");
					let {
						id: o
					} = t;
					return {
						id: o,
						name: e.name,
						formItemId: "".concat(o, "-form-item"),
						formDescriptionId: "".concat(o, "-form-item-description"),
						formMessageId: "".concat(o, "-form-item-message"),
						...n
					}
				},
				f = i.createContext({}),
				h = i.forwardRef((e, t) => {
					let {
						className: r,
						...n
					} = e, s = i.useId();
					return (0,
						a.jsx)(f.Provider, {
						value: {
							id: s
						},
						children: (0,
							a.jsx)("div", {
							ref: t,
							className: (0,
								o.cn)("space-y-2", r),
							...n
						})
					})
				});
			h.displayName = "FormItem";
			let x = i.forwardRef((e, t) => {
				let {
					className: r,
					...i
				} = e, {
					error: n,
					formItemId: s
				} = g();
				return (0,
					a.jsx)(d, {
					ref: t,
					className: (0,
						o.cn)(n && "text-destructive", r),
					htmlFor: s,
					...i
				})
			});
			x.displayName = "FormLabel";
			let b = i.forwardRef((e, t) => {
				let {
					...r
				} = e, {
					error: i,
					formItemId: s,
					formDescriptionId: o,
					formMessageId: l
				} = g();
				return (0,
					a.jsx)(n.g7, {
					ref: t,
					id: s,
					"aria-describedby": i ? "".concat(o, " ").concat(l) : "".concat(o),
					"aria-invalid": !!i,
					...r
				})
			});
			b.displayName = "FormControl",
				i.forwardRef((e, t) => {
					let {
						className: r,
						...i
					} = e, {
						formDescriptionId: n
					} = g();
					return (0,
						a.jsx)("p", {
						ref: t,
						id: n,
						className: (0,
							o.cn)("text-sm text-muted-foreground", r),
						...i
					})
				}).displayName = "FormDescription";
			let y = i.forwardRef((e, t) => {
				let {
					className: r,
					children: i,
					...n
				} = e, {
					error: s,
					formMessageId: l
				} = g(), c = s ? String(null == s ? void 0 : s.message) : i;
				return c ? (0,
					a.jsx)("p", {
					ref: t,
					id: l,
					className: (0,
						o.cn)("text-sm font-medium text-destructive", r),
					...n,
					children: c
				}) : null
			});
			y.displayName = "FormMessage"
		},
		60958: function(e, t, r) {
			r.d(t, {
				l: function() {
					return s
				},
				r: function() {
					return o
				}
			});
			var a = r(42477);
			let i = "phc_7TWmLqfPFKdYTF01wOoYay0qLkenh18leUwxeMFQfZ7";
			if (!i)
				throw Error("NEXT_PUBLIC_POSTHOG_TOKEN not set");
			let n = {
				api_host: "/ingest",
				ui_host: "https://us.posthog.com",
				session_recording: {
					maskAllInputs: !1,
					maskInputOptions: {
						password: !0,
						color: !1,
						date: !1,
						"datetime-local": !1,
						email: !1,
						month: !1,
						number: !1,
						range: !1,
						search: !1,
						tel: !1,
						text: !1,
						time: !1,
						url: !1,
						week: !1,
						textarea: !1,
						select: !1
					}
				}
			};
			a.ZP.init(i, n);
			let s = () => {
					a.ZP.init(i, n)
				},
				o = a.ZP
		}
	}
]);
