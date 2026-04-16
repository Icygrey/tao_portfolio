export type Locale = "en" | "zh";

export type TimelineItem = {
	period: string;
	organization: string;
	role: string;
	location: string;
	summary: string;
	theme: string;
};

export type ContactLink = {
	label: string;
	href: string;
};

export type HomeWorkItem = {
	index: string;
	title: string;
	subtitle: string;
	tone: string;
	position: string;
	aspectRatio: string;
};

export type HomeService = {
	title: string;
	body: string;
};

type LocaleContent = {
	locale: Locale;
	navigation: {
		about: string;
		resume: string;
		contact: string;
		brand: string;
	};
	home: {
		eyebrow: string;
		emailLabel: string;
		marquee: string;
		badge: string;
		intro: string;
		stripLabel: string;
		stripItems: string[];
		works: HomeWorkItem[];
		statement: string;
		statementMuted: string;
		resumeLinkLabel: string;
		services: HomeService[];
		footerMailLabel: string;
		footerSocialLabel: string;
		footerPrompt: string;
		footerLegal: string;
	};
	timeline: {
		label: string;
		heading: string;
		intro: string;
		items: TimelineItem[];
		moreLabel: string;
	};
	about: {
		heading: string;
		intro: string;
		note: string;
	};
	resume: {
		heading: string;
		intro: string;
		downloadLabel: string;
		filename: string;
		details: string[];
	};
	contact: {
		heading: string;
		intro: string;
		invitation: string;
	};
	brand: {
		heading: string;
		intro: string;
		futureLine: string;
		homeLabel: string;
	};
	footerNote: string;
	contactLinks: ContactLink[];
	seo: {
		homeTitle: string;
		homeDescription: string;
		aboutTitle: string;
		aboutDescription: string;
		resumeTitle: string;
		resumeDescription: string;
		contactTitle: string;
		contactDescription: string;
		brandTitle: string;
		brandDescription: string;
	};
};

export const resumeFile = "/resume/Tao_Huang_2025.pdf";

export const siteContent: Record<Locale, LocaleContent> = {
	en: {
		locale: "en",
		navigation: {
			about: "About",
			resume: "Resume",
			contact: "Contact",
			brand: "Brand",
		},
		home: {
			eyebrow: "INDEPENDENT FULL STACK ENGINEER",
			emailLabel: "THUANG0209@OUTLOOK.COM",
			marquee: "TAO HUANG",
			badge: "@",
			intro:
				"Based in San Jose, working globally — I am a full stack engineer shaping quiet digital products, structured interfaces, and future-facing brand systems. Available for thoughtful collaborations.",
			stripLabel: "SELECTED SIGNALS",
			stripItems: ["SYSTEMS", "PRODUCT", "BRAND"],
			works: [
				{
					index: "(1)",
					title: "FULL STACK PRODUCT SYSTEM",
					subtitle: "Placeholder visual",
					tone: "sky",
					position: "md:ml-[34%] md:mt-0",
					aspectRatio: "0.78",
				},
				{
					index: "(2)",
					title: "GLOBAL INTERFACE SURFACE",
					subtitle: "Placeholder visual",
					tone: "architecture",
					position: "md:ml-auto md:mr-0 md:mt-[6rem]",
					aspectRatio: "0.66",
				},
				{
					index: "(3)",
					title: "ENTERPRISE WORKFLOW",
					subtitle: "Placeholder visual",
					tone: "black",
					position: "md:-mt-[8rem] md:ml-0",
					aspectRatio: "0.74",
				},
				{
					index: "(4)",
					title: "FUTURE LABEL DIRECTION",
					subtitle: "Placeholder visual",
					tone: "violet",
					position: "md:ml-[51%] md:-mt-[4rem]",
					aspectRatio: "0.92",
				},
			],
			statement:
				"I am a full stack engineer building digital systems with a strong sense of structure, typography, rhythm, and restraint. My work connects product logic, interaction design, and implementation quality to create experiences that feel both usable and composed.",
			statementMuted:
				"By combining engineering thinking with visual sensitivity, I turn software into a clearer, quieter, and more memorable medium.",
			resumeLinkLabel: "CHECK OUT MY RESUME",
			services: [
				{
					title: "FULL STACK ENGINEERING",
					body: "I build applications from interface to backend integration with an emphasis on clean system structure, scalability, and long-term maintainability.",
				},
				{
					title: "WEB DESIGN & DEVELOPMENT",
					body: "I design and build web experiences that balance brand clarity, interface calmness, and implementation precision across desktop and mobile.",
				},
			],
			footerMailLabel: "MAIL TO THUANG0209@OUTLOOK.COM\nFOR COLLABORATION",
			footerSocialLabel: "LET'S CONNECT ON LINKEDIN, OR TEXT ME ON WHATSAPP",
			footerPrompt: "LET'S GET CREATIVE.",
			footerLegal: "LEGAL NOTICE",
		},
		timeline: {
			label: "Timeline",
			heading: "A quieter index of the same path.",
			intro:
				"The homepage keeps only essential signals. This page arranges the same career markers in a more readable timeline.",
			moreLabel: "Open full timeline",
			items: [
				{
					period: "2024 — Present",
					organization: "ByteDance / TikTok",
					role: "Frontend Software Engineer",
					location: "San Jose, CA",
					summary:
						"Current chapter focused on global product surfaces, internal platforms, and systems that need scale with clarity.",
					theme: "Global systems",
				},
				{
					period: "2022 — 2024",
					organization: "US Bank",
					role: "Software Engineer",
					location: "United States",
					summary:
						"Enterprise-facing work across onboarding, product delivery, and platform-oriented interface systems.",
					theme: "Enterprise systems",
				},
				{
					period: "2021 — 2022",
					organization: "USC CSSE",
					role: "Frontend Engineer",
					location: "Los Angeles, CA",
					summary:
						"An early phase of sharpening interface instincts through implementation, structure, and front-end craft.",
					theme: "Foundation",
				},
				{
					period: "2021",
					organization: "University of Southern California",
					role: "M.S. Biostatistics",
					location: "Los Angeles, CA",
					summary:
						"Graduate study that expanded analytical rigor and the way systems are framed, read, and reasoned through.",
					theme: "Graduate chapter",
				},
				{
					period: "2018",
					organization: "Yangtze University",
					role: "B.S. Economics",
					location: "China",
					summary:
						"The earlier framework: logic, incentives, and long-range thinking that still shape my way of building.",
					theme: "Origin",
				},
			],
		},
		about: {
			heading: "A quieter index of the same path.",
			intro:
				"The homepage gives the immediate impression. This page slows the rhythm down and lets the same trajectory breathe in a more readable format.",
			note: "Specific project details are intentionally omitted here and remain available inside the downloadable resume.",
		},
		resume: {
			heading: "Resume, kept within reach.",
			intro:
				"This site stays compressed on purpose. Concrete scope, responsibilities, and fuller chronology remain in the PDF.",
			downloadLabel: "Download PDF resume",
			filename: "Resume_Tao_Huang_2025.pdf",
			details: [
				"Experience across TikTok, US Bank, and USC.",
				"Full stack orientation with React, Next.js, TypeScript, Node, AWS, and CI/CD.",
				"Structured for thoughtful opportunities that value both clarity and taste.",
			],
		},
		contact: {
			heading: "Open to thoughtful conversations.",
			intro:
				"If the work, the direction, or the future label resonates, the next step is simple: a direct note.",
			invitation: "Email first. Everything else can follow.",
		},
		brand: {
			heading: "A future fashion label already has a reserved place here.",
			intro:
				"The portfolio stays centered on software today, while keeping a clean route for a future external fashion design brand.",
			futureLine: "For now, this is a holding note rather than a launch.",
			homeLabel: "Future label",
		},
		footerNote:
			"Built as a restrained object for software, identity, and future expansion.",
		contactLinks: [
			{ label: "Email", href: "mailto:thuang0209@outlook.com" },
			{ label: "GitHub", href: "https://github.com/Icygrey" },
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/tao-huang-usc/" },
		],
		seo: {
			homeTitle: "Tao Huang — Full Stack Engineer",
			homeDescription:
				"A restrained bilingual portfolio for Tao Huang, shaped like a personal brand object.",
			aboutTitle: "About — Tao Huang",
			aboutDescription:
				"A quieter timeline-led overview of Tao Huang’s path across USC, US Bank, and ByteDance / TikTok.",
			resumeTitle: "Resume — Tao Huang",
			resumeDescription:
				"Download Tao Huang’s resume and view a concise professional summary.",
			contactTitle: "Contact — Tao Huang",
			contactDescription:
				"Contact Tao Huang for thoughtful opportunities and conversations.",
			brandTitle: "Future Label — Tao Huang",
			brandDescription:
				"A holding page for Tao Huang’s future fashion design brand.",
		},
	},
	zh: {
		locale: "zh",
		navigation: {
			about: "关于",
			resume: "简历",
			contact: "联系",
			brand: "品牌",
		},
		home: {
			eyebrow: "独立全栈工程师",
			emailLabel: "THUANG0209@OUTLOOK.COM",
			marquee: "TAO HUANG",
			badge: "TH",
			intro:
				"立足 San Jose，面向全球工作 —— 我是一名全栈工程师，关注克制的数字产品、清晰的界面结构，以及未来可延展的品牌系统。欢迎有质量的合作。",
			stripLabel: "关键线索",
			stripItems: ["系统", "产品", "品牌"],
			works: [
				{
					index: "(1)",
					title: "全栈产品系统",
					subtitle: "占位视觉",
					tone: "sky",
					position: "md:ml-[34%] md:mt-0",
					aspectRatio: "0.78",
				},
				{
					index: "(2)",
					title: "全球化界面表层",
					subtitle: "占位视觉",
					tone: "architecture",
					position: "md:ml-auto md:mr-0 md:mt-[6rem]",
					aspectRatio: "0.66",
				},
				{
					index: "(3)",
					title: "企业级工作流",
					subtitle: "占位视觉",
					tone: "black",
					position: "md:-mt-[8rem] md:ml-0",
					aspectRatio: "0.74",
				},
				{
					index: "(4)",
					title: "未来品牌方向",
					subtitle: "占位视觉",
					tone: "violet",
					position: "md:ml-[51%] md:-mt-[4rem]",
					aspectRatio: "0.92",
				},
			],
			statement:
				"我是一名全栈工程师，专注于用结构、排版、节奏与克制感来塑造数字系统。我的工作把产品逻辑、交互体验与工程实现连接起来，让软件既可用，也更有秩序与记忆点。",
			statementMuted:
				"当工程思维和视觉敏感度并置时，软件也可以成为一种更清晰、更安静、但更有辨识度的媒介。",
			resumeLinkLabel: "查看我的简历",
			services: [
				{
					title: "全栈工程",
					body: "我从界面到后端集成构建应用，重点关注系统结构的清晰性、可扩展性和长期可维护性。",
				},
				{
					title: "Web 设计与开发",
					body: "我设计并实现 Web 体验，在品牌表达、界面秩序和实现精度之间找到平衡，并兼顾桌面与移动端。",
				},
			],
			footerMailLabel: "发送邮件到 THUANG0209@OUTLOOK.COM\n以进行合作",
			footerSocialLabel:
				"也可以在 LINKEDIN 上联系我，或通过 WHATSAPP 给我发消息",
			footerPrompt: "一起做点有意思的。",
			footerLegal: "法律声明",
		},
		timeline: {
			label: "时间线",
			heading: "同一条路径，更安静的展开方式。",
			intro:
				"首页只保留关键信号，这一页则把同样的轨迹放慢下来，用更可阅读的方式整理出来。",
			moreLabel: "查看完整时间线",
			items: [
				{
					period: "2024 — 至今",
					organization: "ByteDance / TikTok",
					role: "Frontend Software Engineer",
					location: "San Jose, CA",
					summary:
						"当前阶段聚焦全球化产品界面、内部平台以及需要在规模与清晰度之间取得平衡的系统。",
					theme: "全球化系统",
				},
				{
					period: "2022 — 2024",
					organization: "US Bank",
					role: "Software Engineer",
					location: "United States",
					summary: "围绕企业级 onboarding、产品交付与平台化界面系统展开工作。",
					theme: "企业系统",
				},
				{
					period: "2021 — 2022",
					organization: "USC CSSE",
					role: "Frontend Engineer",
					location: "Los Angeles, CA",
					summary:
						"更早的阶段里，通过前端实现、结构搭建与界面表达形成基础能力。",
					theme: "基础阶段",
				},
				{
					period: "2021",
					organization: "University of Southern California",
					role: "M.S. Biostatistics",
					location: "Los Angeles, CA",
					summary:
						"研究生学习强化了分析与系统思维，也改变了我理解复杂问题的方式。",
					theme: "研究生阶段",
				},
				{
					period: "2018",
					organization: "Yangtze University",
					role: "B.S. Economics",
					location: "China",
					summary:
						"更早的框架来自逻辑、激励机制与长期思维，这些仍然影响我今天的构建方式。",
					theme: "起点",
				},
			],
		},
		about: {
			heading: "同一条路径，更安静的展开方式。",
			intro:
				"首页负责建立第一印象，这一页则把同样的轨迹放慢下来，用更可阅读的方式整理出来。",
			note: "具体项目与职责细节在这里被刻意省略，统一保留在可下载简历中。",
		},
		resume: {
			heading: "把简历放在随手可取的位置。",
			intro:
				"这个网站有意保持克制。更具体的范围、职责与完整履历仍然以 PDF 简历为主。",
			downloadLabel: "下载 PDF 简历",
			filename: "Resume_Tao_Huang_2025.pdf",
			details: [
				"覆盖 TikTok、US Bank 与 USC 的职业经历。",
				"以 Full Stack 视角连接 React、Next.js、TypeScript、Node 与云端能力。",
				"面向重视清晰表达与审美判断的机会。",
			],
		},
		contact: {
			heading: "欢迎更有质量的对话。",
			intro:
				"如果你对这份工作方式、这个方向，或未来品牌路径感兴趣，最好的开始方式就是直接写信。",
			invitation: "先发邮件，其他都可以往后接。",
		},
		brand: {
			heading: "未来的 fashion design 品牌，已经在这里预留了位置。",
			intro:
				"当前 portfolio 仍然以软件身份为中心，同时为未来独立的时尚品牌保留一条干净的延伸路径。",
			futureLine: "现在它还是一则保留说明，而不是正式发布。",
			homeLabel: "未来品牌",
		},
		footerNote:
			"这个网站以克制的方式搭建，同时为软件身份与未来品牌延展预留空间。",
		contactLinks: [
			{ label: "邮箱", href: "mailto:thuang0209@outlook.com" },
			{ label: "GitHub", href: "https://github.com/Icygrey" },
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/tao-huang-usc/" },
		],
		seo: {
			homeTitle: "Tao Huang — Full Stack Engineer",
			homeDescription:
				"Tao Huang 的双语个人作品站：克制、极简、具有个人品牌感。",
			aboutTitle: "关于 — Tao Huang",
			aboutDescription:
				"以时间线方式呈现 Tao Huang 在 USC、US Bank 与 ByteDance / TikTok 的职业路径。",
			resumeTitle: "简历 — Tao Huang",
			resumeDescription: "下载 Tao Huang 的简历，并查看精简职业概览。",
			contactTitle: "联系 — Tao Huang",
			contactDescription: "联系 Tao Huang，开启新的机会与对话。",
			brandTitle: "未来品牌 — Tao Huang",
			brandDescription: "为 Tao Huang 未来时尚设计品牌保留的入口。",
		},
	},
};

export function getLocaleContent(locale: Locale) {
	return siteContent[locale];
}
