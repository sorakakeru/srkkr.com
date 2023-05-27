import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function get() {
    return rss({
        title: 'srkkr.com RSS Feed',
        description: 'srkkr.com RSS Feed',
        site: 'https://srkkr.com',
        items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./article/20230527.md": () => import('./20230527.md.506eac3f.mjs').then(n => n._)})),
        customData: `<language>ja-jp</language>`,
    });
}

export { get };
