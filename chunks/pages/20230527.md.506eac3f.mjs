import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, e as renderSlot, f as renderHead, g as createVNode, s as spreadAttributes, F as Fragment } from '../astro.127921cf.mjs';
import 'html-escaper';

const $$Astro$4 = createAstro("https://srkkr.com");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="menu" role="navigation">
  <ul>
    <li><a href="/about/">このサイトについて</a></li>
    <li><a href="/rss.xml">RSS</a></li>
  </ul>
</nav>`;
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/components/_Navigation.astro");

const $$Astro$3 = createAstro("https://srkkr.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { siteTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="header" role="banner">
    <div class="header_logo"><a${addAttribute(Astro2.site, "href")}>${siteTitle}</a></div>
    ${renderComponent($$result, "Navigation", $$Navigation, {})}
</header>`;
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/components/_Header.astro");

const $$Astro$2 = createAstro("https://srkkr.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { siteTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" role="contentinfo">
	<small>&copy; <a${addAttribute(Astro2.site, "href")}>${siteTitle}</a>.</small>
</footer>`;
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/components/_Footer.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://srkkr.com");
const $$BaseLayouts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseLayouts;
  const { pageTitle } = Astro2.props;
  const { pageDescription } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="ja">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="IE=Edge">\n<meta name="format-detection" content="telephone=no">\n<meta name="description"', ">\n<title>", '</title>\n<link rel="stylesheet" href="/css/style.css">\n<!-- Google tag (gtag.js) -->\n<script async src="https://www.googletagmanager.com/gtag/js?id=G-NCPZPQJ12F"><\/script>\n\n', '</head>\n<body>\n\n    <div class="wrapper">\n\n        ', '\n        <main class="main" role="main">\n            ', "\n        </main>\n\n        ", "\n\n    </div>\n\n</body></html>"])), addAttribute(pageDescription, "content"), pageTitle, renderHead($$result), renderComponent($$result, "Header", $$Header, { "siteTitle": "srkkr.com" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "siteTitle": "srkkr.com" }));
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/layouts/_BaseLayouts.astro");

const $$Astro = createAstro("https://srkkr.com");
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayouts, { "pageTitle": frontmatter.title, ";": true }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<article class="article_conte">
      <div class="article_header">
        <h1 class="article_headline">${frontmatter.title}</h1>
        <time datetime="{frontmatter.pubDate.slice(0, 10)}">${frontmatter.pubDate.slice(0, 10)}</time>
      </div>
      <div class="article_body">
        ${renderSlot($$result2, $$slots["default"])}
      </div>
    </article>
` })}`;
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/layouts/_MarkdownPostLayout.astro");

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>最近のこと。</p>\n<ul>\n<li>ゲームいろいろ遊んでいる / たくさん詰んでる</li>\n<li>技術のインプットだけじゃなくてアウトプットもとても大事だなとおもってる</li>\n<li>書き留めておこうと思うことをすぐ忘れる</li>\n<li>寒暖差でめちゃくちゃ体調崩している</li>\n</ul>\n<p>ここもゆるゆると続けていきます。</p>");

				const frontmatter = {"layout":"../../layouts/_MarkdownPostLayout.astro","title":"日記","description":null,"tag":"diary","pubDate":"2023/05/27"};
				const file = "/Users/tmy/Desktop/_稼働中/srkkr.com/_dev/src/pages/article/20230527.md";
				const url = "/article/20230527";
				function rawContent() {
					return "\n最近のこと。\n\n- ゲームいろいろ遊んでいる / たくさん詰んでる\n- 技術のインプットだけじゃなくてアウトプットもとても大事だなとおもってる\n- 書き留めておこうと思うことをすぐ忘れる\n- 寒暖差でめちゃくちゃ体調崩している\n\nここもゆるゆると続けていきます。";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return createVNode($$MarkdownPostLayout, {
									file,
									url,
									content,
									frontmatter: content,
									headings: getHeadings(),
									rawContent,
									compiledContent,
									'server:root': true,
									children: contentFragment
								});
				}
				Content[Symbol.for('astro.needsHeadRendering')] = false;

const _20230527 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  images,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayouts as $, _20230527 as _ };
