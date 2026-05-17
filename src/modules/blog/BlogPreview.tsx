import cfgRaw from "../../../sirizone.config.json";
const cfg: any = cfgRaw;
export default function BlogPreview() {
  const posts = cfg.content?.blog_posts || [{ title: "Welcome", excerpt: "First post." }];
  return (
    <section className="px-6 py-24 bg-gray-950">
      <h2 className="text-4xl font-bold text-center mb-16">Blog</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((p: any, i: number) => (
          <article key={i} className="p-6 bg-gray-900 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
