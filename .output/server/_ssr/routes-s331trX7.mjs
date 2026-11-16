import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-s331trX7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
if (typeof window !== "undefined") gsapWithCSS.registerPlugin(ScrollTrigger);
function useReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduced(mq.matches);
		const on = () => setReduced(mq.matches);
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return reduced;
}
function useIsFinePointer() {
	const [fine, setFine] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
		setFine(mq.matches);
		const on = () => setFine(mq.matches);
		mq.addEventListener("change", on);
		return () => mq.removeEventListener("change", on);
	}, []);
	return fine;
}
function SmoothScroll({ children }) {
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		const lenis = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
			touchMultiplier: 1.4
		});
		lenis.on("scroll", ScrollTrigger.update);
		const raf = (time) => lenis.raf(time * 1e3);
		gsapWithCSS.ticker.add(raf);
		gsapWithCSS.ticker.lagSmoothing(0);
		const onAnchor = (e) => {
			const el = e.target?.closest?.("a[href^=\"#\"]");
			if (!el) return;
			const id = el.getAttribute("href");
			if (!id || id === "#") return;
			const target = document.querySelector(id);
			if (!target) return;
			e.preventDefault();
			lenis.scrollTo(target, { offset: -20 });
		};
		document.addEventListener("click", onAnchor);
		return () => {
			document.removeEventListener("click", onAnchor);
			gsapWithCSS.ticker.remove(raf);
			lenis.destroy();
		};
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function Preloader({ onDone }) {
	const root = (0, import_react.useRef)(null);
	const leftPanel = (0, import_react.useRef)(null);
	const rightPanel = (0, import_react.useRef)(null);
	const content = (0, import_react.useRef)(null);
	const line = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (reduced) {
			onDone();
			return;
		}
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline().to(content.current, {
				opacity: 1,
				y: 0,
				duration: .35,
				ease: "power3.out"
			}).to(line.current, {
				scaleX: 1,
				duration: .6,
				ease: "power3.inOut"
			}, "-=0.15").to({}, { duration: .01 }).to(leftPanel.current, {
				xPercent: -100,
				duration: .85,
				ease: "power4.inOut"
			}, "open").to(rightPanel.current, {
				xPercent: 100,
				duration: .85,
				ease: "power4.inOut"
			}, "open").call(onDone, [], "open+=0.15").set(root.current, { display: "none" });
		}, root);
		return () => {
			ctx.revert();
		};
	}, [onDone, reduced]);
	if (reduced) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "fixed inset-0 z-[200] overflow-hidden bg-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: leftPanel,
				className: "absolute inset-y-0 left-0 z-20 w-1/2 bg-ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: rightPanel,
				className: "absolute inset-y-0 right-0 z-20 w-1/2 bg-ink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: content,
				className: "absolute inset-0 z-30 flex flex-col justify-between px-6 py-8 md:px-12 md:py-10",
				style: {
					opacity: 0,
					transform: "translateY(12px)"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between label-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Aryan Aritro" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2026" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs tracking-[0.3em]",
							children: "PORTFOLIO"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 h-px w-full bg-hairline md:mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: line,
								className: "h-px w-full origin-center scale-x-0 bg-primary"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between label-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "001" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden md:block",
							children: "DEVELOPER · INNOVATOR · TECHNOLOGIST"
						})]
					})
				]
			})
		]
	});
}
/** Desktop-only two-part cursor: hard dot + soft trailing aura. */
function CustomCursor() {
	const dot = (0, import_react.useRef)(null);
	const aura = (0, import_react.useRef)(null);
	const label = (0, import_react.useRef)(null);
	const fine = useIsFinePointer();
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (!fine || reduced) return;
		const d = dot.current;
		const a = aura.current;
		const l = label.current;
		document.documentElement.style.cursor = "none";
		const pos = {
			x: innerWidth / 2,
			y: innerHeight / 2
		};
		const auraPos = { ...pos };
		let raf = 0;
		const move = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
		};
		const loop = () => {
			auraPos.x += (pos.x - auraPos.x) * .12;
			auraPos.y += (pos.y - auraPos.y) * .12;
			gsapWithCSS.set(d, {
				x: pos.x,
				y: pos.y
			});
			gsapWithCSS.set(a, {
				x: auraPos.x,
				y: auraPos.y
			});
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		const over = (e) => {
			const t = e.target?.closest?.("[data-cursor],a,button");
			const text = t?.getAttribute?.("data-cursor");
			if (text) {
				l.textContent = text;
				gsapWithCSS.to(a, {
					scale: 3.4,
					opacity: .95,
					duration: .5,
					ease: "power3.out"
				});
				gsapWithCSS.to(l, {
					opacity: 1,
					duration: .3
				});
				gsapWithCSS.to(d, {
					scale: 0,
					duration: .3
				});
			} else if (t) {
				gsapWithCSS.to(a, {
					scale: 1.9,
					opacity: .8,
					duration: .45,
					ease: "power3.out"
				});
				gsapWithCSS.to(d, {
					scale: 1.4,
					duration: .3
				});
			}
		};
		const out = (e) => {
			if (!e.target?.closest?.("[data-cursor],a,button")) return;
			gsapWithCSS.to(a, {
				scale: 1,
				opacity: .55,
				duration: .45,
				ease: "power3.out"
			});
			gsapWithCSS.to(d, {
				scale: 1,
				duration: .3
			});
			gsapWithCSS.to(l, {
				opacity: 0,
				duration: .2
			});
		};
		window.addEventListener("mousemove", move, { passive: true });
		document.addEventListener("mouseover", over);
		document.addEventListener("mouseout", out);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", move);
			document.removeEventListener("mouseover", over);
			document.removeEventListener("mouseout", out);
			document.documentElement.style.cursor = "";
		};
	}, [fine, reduced]);
	if (!fine || reduced) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-[100] hidden md:block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: aura,
			className: "absolute -left-6 -top-6 grid h-12 w-12 place-items-center rounded-full opacity-55",
			style: { background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent) 0%, transparent 70%)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref: label,
				className: "font-mono text-[3.2px] tracking-[0.2em] text-foreground opacity-0 uppercase"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -left-[2px] -top-[2px] h-1 w-1 rounded-full bg-foreground",
			ref: dot
		})]
	});
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const on = () => {
			const h = document.documentElement.scrollHeight - window.innerHeight;
			setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
		};
		on();
		window.addEventListener("scroll", on, { passive: true });
		window.addEventListener("resize", on);
		return () => {
			window.removeEventListener("scroll", on);
			window.removeEventListener("resize", on);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] tracking-[0.2em] text-muted-foreground",
			children: String(Math.round(p * 100)).padStart(3, "0")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-32 w-px bg-hairline",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute left-0 top-0 w-px bg-primary transition-[height] duration-150",
				style: { height: `${p * 100}%` }
			})
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var work_03_default = "/assets/work-03-B4X9pBtK.jpg";
var Arshi_Nagar_default = "/assets/Arshi_Nagar-KbIKQyEg.png";
var Arythic_default = "/assets/Arythic-50UjJ348.png";
var Resource_Library_default = "/assets/Resource_Library-CBEjckGP.png";
var profile = {
	name: "Aryan Aritro",
	roles: " Developer / Innovator / Technologist",
	eyebrow: "Hi, I'm Aryan Aritro.",
	tagline: "Enthusiast, Developer, Innovator.",
	headline: [
		"I turn",
		"imaginations",
		"into systems."
	],
	location: "Mymensingh, Bangladesh",
	email: "v.aryankabir@gmail.com",
	github: "https://github.com/v-aryank",
	linkedin: "https://linkedin.com/in/v-aryan-kabir",
	bookcall: "https://cal.com/v.-aryan-kabir-ebhxxk/30min"
};
var capabilities = [
	{
		index: "01",
		title: "Frontend Development",
		description: "Responsive interfaces and digital experiences built with modern frontend technologies.",
		tech: [
			"React",
			"TypeScript",
			"TypeScript JSX",
			"Tailwind CSS",
			"Vite"
		]
	},
	{
		index: "02",
		title: "Backend & Data Systems",
		description: "Application logic, server-side systems and data-driven services built for practical use.",
		tech: [
			"Python",
			"Flask",
			"Node.js",
			"REST APIs",
			"SQLite",
			"MySQL",
			"PostgreSQL"
		]
	},
	{
		index: "03",
		title: "CMS, E-commerce & Integrations",
		description: "Connecting applications, services and intelligent systems through APIs, real-time communication and automation.",
		tech: [
			"WordPress",
			"WooCommerce",
			"REST API",
			"Saas",
			"Payment",
			"Automation"
		]
	},
	{
		index: "04",
		title: "UI / Graphic Design",
		description: "Interface design, visual systems and digital graphics focused on clarity, consistency and visual identity.",
		tech: [
			"Figma",
			"UI Design",
			"Graphic Design",
			"Visual Systems"
		]
	},
	{
		index: "05",
		title: "AI & Smart Assistants",
		description: "Intelligent tools and personal assistant systems combining voice interaction, automation and application logic.",
		tech: [
			"Python",
			"AI Integration",
			"Voice Interfaces",
			"Automation"
		]
	},
	{
		index: "06",
		title: "Embedded Systems & Mechatronics",
		description: "Microcontroller-based systems combining electronics, firmware, control logic and physical hardware.",
		tech: ["Microcontrollers", "Hardware-software integration"]
	}
];
var projects = [
	{
		index: "01",
		name: "ARYTHIC.",
		category: "Websites",
		description: "A Platform for Digital Solutions, Ideas, and Research.",
		tech: [
			"TypeScript JSX",
			"TypeScript",
			"HTML",
			"CSS",
			"React",
			"Vite",
			"Vercel Web Analytics",
			"Vercel"
		],
		year: "2026",
		status: "Live",
		role: "Design & Development",
		image: Arythic_default,
		url: "https://arythic.vercel.app"
	},
	{
		index: "02",
		name: "Arshi Nagar",
		category: "Websites",
		description: "A modern & contemporary fashion E-commerce website blending classical aesthetics with contemporary design.",
		tech: [
			"TypeScript JSX",
			"TypeScript",
			"HTML",
			"CSS",
			"Tailwind CSS",
			"React",
			"Vite",
			"Vercel"
		],
		role: "Design & Development",
		year: "2026",
		status: "Under development",
		image: Arshi_Nagar_default,
		url: "https://arshinagar-fashion.vercel.app"
	},
	{
		index: "03",
		name: "Resource Library-MEC",
		category: "Websites",
		description: "Academic resources, assignment tools, printing services, and student communities — brought together for MEC students.",
		tech: [
			"TypeScript JSX",
			"TypeScript",
			"HTML",
			"CSS",
			"Tailwind CSS",
			"React",
			"Vite",
			"Vercel",
			"Supabase",
			"PostgreSQL",
			"REST API",
			"Backblaze B2"
		],
		role: "Design & Development",
		year: "2026",
		status: "Live",
		image: Resource_Library_default,
		url: "https://resourcelibrary-mec.vercel.app/resources"
	},
	{
		index: "04",
		name: "NEXUS 2.0",
		category: "Embedded Systems",
		description: "A modular Microcontroller-based control hub designed as the central interface for embedded hardware systems, and expandable modules for robotics, automation, and IoT experiments.",
		tech: [
			"Microcontrollers",
			"Arduino C++",
			"Embedded Systems"
		],
		year: "2025",
		status: "Version 2.0",
		role: "Lead Developer",
		image: work_03_default
	}
];
var LINKS = [
	{
		label: "About",
		href: "/#about"
	},
	{
		label: "Projects",
		href: "/#projects"
	},
	{
		label: "Contact",
		href: "/#contact"
	}
];
function Navigation() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setSolid(window.scrollY > window.innerHeight * .7);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	(0, import_react.useEffect)(() => {
		if (window.location.pathname === "/" && window.location.hash) window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-700", solid ? "border-b border-hairline bg-background/70 backdrop-blur-md" : "border-b border-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 md:px-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				onClick: (event) => {
					if (window.location.pathname === "/") {
						event.preventDefault();
						window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}`);
						window.scrollTo({
							top: 0,
							behavior: "smooth"
						});
					}
				},
				className: "label-xs min-w-0 truncate !text-foreground transition-opacity hover:opacity-60",
				children: profile.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-8 md:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "label-xs link-underline hover:!text-foreground",
						children: l.label
					}) }, l.href))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px w-5 bg-foreground transition-transform duration-500", open && "translate-y-[3px] rotate-45") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px w-5 bg-foreground transition-transform duration-500", open && "-translate-y-[3px] -rotate-45") })]
				})]
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("fixed inset-0 z-40 bg-ink transition-[opacity,visibility] duration-500", open ? "visible opacity-100" : "invisible opacity-0"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex h-full flex-col justify-center gap-4 px-6 md:px-12",
			children: LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "overflow-hidden transition-transform duration-700",
				style: {
					transform: open ? "translateY(0)" : "translateY(60%)",
					transitionDelay: `${i * 60}ms`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "display block py-2 text-2xl transition-colors hover:text-primary sm:text-4xl",
					children: l.label
				})
			}, l.href))
		})
	})] });
}
var portrait_default = "/assets/portrait-BIJUik3b.png";
function Hero({ ready }) {
	const root = (0, import_react.useRef)(null);
	const img = (0, import_react.useRef)(null);
	const copy = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (!ready || reduced) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).fromTo(img.current, {
				clipPath: "inset(100% 0% 0% 0%)",
				scale: 1.12,
				y: 40
			}, {
				clipPath: "inset(0% 0% 0% 0%)",
				scale: 1,
				y: 0,
				duration: 3
			}).fromTo(".hero-line", { yPercent: 110 }, {
				yPercent: 0,
				duration: 1.2,
				stagger: .12
			}, .35).fromTo(".hero-fade", {
				opacity: 0,
				y: 18
			}, {
				opacity: 1,
				y: 0,
				duration: .9,
				stagger: .1
			}, .9);
			gsapWithCSS.to(img.current, {
				y: -1,
				duration: 15,
				yoyo: true,
				repeat: -1,
				ease: "sine.inOut"
			});
		}, root);
		return () => ctx.revert();
	}, [ready, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: root,
		id: "top",
		className: "relative flex min-h-dvh items-center overflow-hidden pt-24 pb-16 md:pt-0 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid w-full max-w-[1600px] items-center gap-10 px-6 md:grid-cols-[1fr_1fr] md:gap-6 md:px-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: copy,
					className: "order-2 min-w-0 md:order-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero-fade label-xs mb-6 opacity-0",
							children: [
								profile.eyebrow,
								" — ",
								profile.tagline
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display text-[13vw] leading-[0.9] sm:text-[9vw] md:text-[5.6vw]",
							children: profile.headline.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero-line block",
									children: line
								})
							}, line))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-fade mt-8 max-w-md text-sm leading-relaxed text-muted-foreground opacity-0",
							children: "Developer, innovator and technologist, building softwares, websites and intelligent systems — with an engineer's instinct underneath."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-fade mt-10 flex flex-wrap gap-x-8 gap-y-2 opacity-0" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "order-1 min-w-0 md:order-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: img,
						className: "relative mx-auto w-full max-w-[520px] md:max-w-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: portrait_default,
							alt: "Portrait of Aryan Aritro in profile, lit against a black background",
							width: 1024,
							height: 1024,
							className: "w-full contrast-125 grayscale",
							style: {
								WebkitMaskImage: "radial-gradient(ellipse 68% 72% at 50% 48%, black 25%, rgba(0,0,0,0.95) 48%, rgba(0,0,0,0.55) 70%, transparent 100%)",
								maskImage: "radial-gradient(ellipse 68% 72% at 50% 48%, black 25%, rgba(0,0,0,0.95) 48%, rgba(0,0,0,0.55) 70%, transparent 100%)"
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							"aria-hidden": true,
							className: "pointer-events-none absolute inset-0",
							style: { background: `
                radial-gradient(
                circle at 62% 42%,
                rgba(80, 140, 180, 0.045),
                transparent 28%
               ),
                linear-gradient(
                to bottom,
                transparent 55%,
                var(--background) 96%
               ),
                linear-gradient(
                to right,
                var(--background) 0%,
                transparent 22%
                )` }
						})]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-6 bottom-6 flex items-end justify-between md:inset-x-12 md:bottom-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "animate-pulse text-lg text-primary",
					children: "↓"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-x-0 bottom-0 h-px bg-hairline"
			})
		]
	});
}
function Footprints() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "footprints",
		className: "mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-12 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-hairline pb-5 md:mb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-xs mb-4",
				children: "04"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-4xl sm:text-5xl md:text-6xl",
				children: "My Skills and expertise"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "label-xs hidden max-w-[16rem] text-right md:block",
				children: "Areas I work across"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-hairline",
			children: capabilities.map((capability) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-4 border-b border-hairline py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8 md:py-9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-xs text-muted-foreground",
						children: capability.index
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-medium leading-snug sm:text-xl",
						children: capability.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:pl-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-2xl text-sm leading-relaxed text-muted-foreground",
							children: capability.description
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-3 flex flex-wrap gap-x-3 gap-y-1.5",
							children: capability.tech.map((technology) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "label-xs !tracking-[0.12em]",
								children: technology
							}, technology))
						})]
					})
				]
			}, capability.index))
		})]
	});
}
/** Scroll-triggered fade + rise. With `stagger`, direct children animate in sequence. */
function Reveal({ children, className, as: Tag = "div", delay = 0, y = 28, stagger = false, start = "top 85%" }) {
	const ref = (0, import_react.useRef)(null);
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (reduced) {
			gsapWithCSS.set(el, { opacity: 1 });
			return;
		}
		const targets = stagger ? Array.from(el.children) : [el];
		const ctx = gsapWithCSS.context(() => {
			if (stagger) gsapWithCSS.set(el, { opacity: 1 });
			gsapWithCSS.fromTo(targets, {
				opacity: 0,
				y,
				filter: "blur(6px)"
			}, {
				opacity: 1,
				y: 0,
				filter: "blur(0px)",
				duration: 1.1,
				delay,
				ease: "power3.out",
				stagger: stagger ? .09 : 0,
				scrollTrigger: {
					trigger: el,
					start,
					once: true
				}
			});
		}, el);
		return () => ctx.revert();
	}, [
		reduced,
		delay,
		y,
		stagger,
		start
	]);
	(0, import_react.useEffect)(() => {
		ScrollTrigger.refresh();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("opacity-0", className),
		style: { opacity: void 0 },
		children
	});
}
function SectionHeading({ index, title, aside }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mb-14 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b border-hairline pb-5 md:mb-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-xs mb-4",
				children: index
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display text-4xl sm:text-5xl md:text-6xl",
				children: title
			})]
		}), aside ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "label-xs hidden max-w-[16rem] text-right md:block",
			children: aside
		}) : null]
	});
}
function SelectedWork() {
	const [showAll, setShowAll] = (0, import_react.useState)(false);
	const visibleProjects = showAll ? projects : projects.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "mx-auto max-w-[1800px] px-6 py-24 md:px-12 md:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				index: "03",
				title: "My Projects",
				aside: "Projects, platforms and experiments."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3",
				children: visibleProjects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: index % 3 * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group flex h-full min-w-0 flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/10] overflow-hidden border border-white/10 bg-[#050505] transition-colors duration-500 group-hover:border-primary/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.image,
									alt: `${project.name} preview`,
									loading: "lazy",
									className: "absolute inset-0 h-full w-full object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": "true",
									className: "pointer-events-none absolute inset-0 bg-black/15 transition-opacity duration-500 group-hover:opacity-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "label-xs absolute left-4 top-4 z-10 text-white/80",
									children: project.index
								}),
								project.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: project.url,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": `Visit ${project.name}`,
									className: "absolute inset-0 z-20"
								}) : null
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col border-b border-white/10 py-5 transition-colors duration-500 group-hover:border-primary/30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "label-xs mb-2 text-muted-foreground transition-colors group-hover:text-primary",
									children: [
										project.category,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-1 text-white/25",
											children: "/"
										}),
										" ",
										project.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display text-2xl leading-tight sm:text-3xl",
									children: project.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm leading-relaxed text-muted-foreground",
									children: project.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs leading-relaxed text-muted-foreground/80",
									children: project.tech.join(" · ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-auto flex items-center justify-between gap-3 pt-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-xs !tracking-[0.12em]",
										children: project.status
									}), project.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: project.url,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "label-xs inline-flex min-h-11 items-center gap-2 text-muted-foreground transition-colors hover:text-primary",
										children: ["Visit ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": "true",
											children: "↗"
										})]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-xs text-muted-foreground/60",
										children: "In progress"
									})]
								})
							]
						})]
					})
				}, project.index))
			}),
			projects.length > 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 flex justify-center md:mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setShowAll((current) => !current),
					"aria-expanded": showAll,
					className: "label-xs inline-flex min-h-11 items-center gap-3 border border-white/15 px-6 text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-primary",
					children: [showAll ? "Show less" : "See more", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: showAll ? "↑" : "↓"
					})]
				})
			}) : null
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "mx-auto max-w-[1600px] px-6 py-24 md:px-12 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "02",
			title: "About",
			aside: "Engineering foundation, software identity"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "display text-[9vw] leading-[0.95] sm:text-5xl md:text-6xl",
						children: [
							"An engineer's mindset.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "A developer's toolkit."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 max-w-xl space-y-6 text-sm leading-relaxed text-muted-foreground md:text-base",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm Aryan Aritro. I build things that I find interesting — websites, software, interfaces, small tools, and systems that usually starts as an idea and gradually becomes something usefull, and every project gives me something new to learn." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "My engineering background has probably influenced the way I approach all of this. I like understanding the parts, seeing how they connect, finding what is getting in the way, and then building a better solution. And this is which makes me choosing development as a career path, because it allows me to build things that my mind desires." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Still learning, still experimenting, and still figuring out what I want to build next. That is probably the part of this work I enjoy most." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 border-t border-hairline pt-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-xs mb-4",
								children: "Education"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-base",
								children: "Mymensingh Engineering College"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "label-xs mt-1",
								children: "Electrical & Electronic Engineering"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "min-w-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"aria-hidden": "true",
					className: "relative flex aspect-square max-h-[34rem] items-center justify-center overflow-hidden border border-white/10 bg-white/[0.02]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-orbit about-orbit-outer" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-orbit about-orbit-inner" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-orbit-node about-node-one" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-orbit-node about-node-two" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-orbit-node about-node-three" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-core",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-xs !text-primary",
								children: "IDEA"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block font-mono text-[10px] tracking-[0.2em] text-muted-foreground",
								children: "→ SYSTEM"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs absolute left-[12%] top-[24%]",
							children: "DESIGN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs absolute right-[10%] top-[40%]",
							children: "BUILD"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-xs absolute bottom-[18%] left-[22%]",
							children: "ITERATE"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-5 right-5 font-mono text-[10px] tracking-[0.16em] text-muted-foreground/60",
							children: "PROCESS / 001"
						})
					]
				})
			})]
		})]
	});
}
function MagneticLink({ href, children, className, external }) {
	const ref = (0, import_react.useRef)(null);
	const fine = useIsFinePointer();
	const reduced = useReducedMotion();
	(0, import_react.useEffect)(() => {
		if (!fine || reduced) return;
		const el = ref.current;
		if (!el) return;
		const move = (e) => {
			const r = el.getBoundingClientRect();
			gsapWithCSS.to(el, {
				x: (e.clientX - (r.left + r.width / 2)) * .18,
				y: (e.clientY - (r.top + r.height / 2)) * .28,
				duration: .8,
				ease: "power3.out"
			});
		};
		const leave = () => gsapWithCSS.to(el, {
			x: 0,
			y: 0,
			duration: .9,
			ease: "elastic.out(1, 0.6)"
		});
		el.addEventListener("mousemove", move);
		el.addEventListener("mouseleave", leave);
		return () => {
			el.removeEventListener("mousemove", move);
			el.removeEventListener("mouseleave", leave);
		};
	}, [fine, reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref,
		href,
		...external ? {
			target: "_blank",
			rel: "noreferrer noopener"
		} : {},
		className: cn("inline-flex items-center gap-3", className),
		children
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "mx-auto flex min-h-[85dvh] max-w-[1600px] flex-col justify-center px-6 py-28 md:px-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "label-xs mb-10",
				children: "06 — Contact"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				stagger: true,
				y: 40,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-[15vw] leading-[0.88] sm:text-[11vw] md:text-[5.5vw]",
					children: "Let's build"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-[15vw] leading-[0.88] text-muted-foreground sm:text-[11vw] md:text-[5.5vw]",
					children: "something."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .1,
				className: "mt-12 max-w-md text-sm leading-relaxed text-muted-foreground",
				children: "For collaborations, software projects, web development, experiments or interesting technical ideas."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-hairline pt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticLink, {
					href: profile.bookcall,
					external: true,
					className: "display link-underline text-3xl md:text-4xl",
					children: ["Book a Call ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "→"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: .2,
				className: "mt-16 flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-hairline pt-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
						href: `mailto:${profile.email}`,
						className: "display link-underline text-3xl md:text-3xl",
						children: "Email me"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
						href: profile.linkedin,
						external: true,
						className: "label-xs link-underline !text-foreground",
						children: "LinkedIn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
						href: profile.github,
						external: true,
						className: "label-xs link-underline !text-foreground",
						children: "GitHub"
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-hairline bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1600px] px-6 py-12 md:px-12 md:py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 md:grid-cols-[1fr_auto] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "display text-2xl md:text-3xl",
						children: profile.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "label-xs mt-3",
						children: profile.roles
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Footer",
					className: "flex flex-wrap gap-x-8 gap-y-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.github,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "label-xs link-underline hover:!text-foreground",
							children: "GitHub"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: profile.linkedin,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "label-xs link-underline hover:!text-foreground",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${profile.email}`,
							className: "label-xs link-underline hover:!text-foreground",
							children: "Email"
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "label-xs",
					children: ["© 2026 ", profile.name]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "label-xs link-underline hover:!text-foreground",
					children: "Back to top ↑"
				})]
			})]
		})
	});
}
function Index() {
	const [ready, setReady] = (0, import_react.useState)(false);
	const done = (0, import_react.useCallback)(() => setReady(true), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SmoothScroll, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, { onDone: done }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomCursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { ready }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectedWork, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footprints, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
