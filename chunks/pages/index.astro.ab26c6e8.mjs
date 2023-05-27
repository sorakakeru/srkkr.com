import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../astro.127921cf.mjs';
import 'html-escaper';
import { $ as $$BaseLayouts } from './20230527.md.506eac3f.mjs';

const sortByDate = (a, b) => {
  return new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate);
};

const $$Astro = createAstro("https://srkkr.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./article/20230527.md": () => import('./20230527.md.506eac3f.mjs').then(n => n._)}), () => "./article/*.md");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayouts, { "pageTitle": "srkkr.com" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<nav class="article_list">
		<ul>
			${allPosts.sort(sortByDate).map((post) => renderTemplate`<li><a${addAttribute(post.url, "href")}>
            <time datetime="{post.frontmatter.pubDate}">${post.frontmatter.pubDate}</time>
            <h1 class="article_title">${post.frontmatter.title}</h1>
          </a></li>`)}
		</ul>
	</nav>
` })}`;
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/pages/index.astro");

const $$file = "/Users/tmy/Desktop/_稼働中/srkkr.com/_dev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
