import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  if (!context.site) throw new Error('Set site in astro.config.mjs');
  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Cole Hafner',
    description: 'Posts by Cole Hafner.',
    site: context.site,
    items: posts.map((post) => ({ title: post.data.title, description: post.data.description, pubDate: post.data.date, link: `/posts/${post.id}/` })),
  });
}
