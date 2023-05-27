import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.127921cf.mjs';
import 'html-escaper';
import { $ as $$BaseLayouts } from './20230527.md.506eac3f.mjs';

const $$Astro = createAstro("https://srkkr.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayouts, { "pageTitle": "\u3053\u306E\u30B5\u30A4\u30C8\u306B\u3064\u3044\u3066", ",": true, "pageDescription": "\u3053\u306E\u30B5\u30A4\u30C8\u306B\u3064\u3044\u3066", ";": true }, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<article class="article_conte">
      <div class="article_header">
        <h1 class="article_headline">このサイトについて</h1>
      </div>
      <div class="article_body">
          <p>日々の記録や趣味・関心のあること、プログラミングなどwebに関する情報を自分のための覚書として掲載しています。</p>
          <p>ヤマツ（Yamatsu）/ 関西圏在住のフロントエンドエンジニア<br>
            好きなCMSはMovable Type、好きな本屋は紀伊國屋書店</p>
      </div>
    </article>
` })}`;
}, "/Users/tmy/Desktop/_\u7A3C\u50CD\u4E2D/srkkr.com/_dev/src/pages/about.astro");

const $$file = "/Users/tmy/Desktop/_稼働中/srkkr.com/_dev/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
