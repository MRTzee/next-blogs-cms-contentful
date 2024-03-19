import { getEntries } from "@/api/getEntries";
import CardBlog from "./components/CardBlog";
import { findAsset } from "@/utils/findAsset";

export default async function Home() {
  const blogs = await getEntries();
  return (
    <main className="container mx-auto px-4">
      {/* JUMBOTRON */}
      <section className="mt-10 space-y-2 text-center">
        <h1 className="text-3xl font-bold md:text-5xl">The FoodHub Blogs</h1>
        <p className="md:text-xl">
          A blog about food, experiences, and recipes
        </p>
      </section>

      {/* BLOG LIST */}
      <section className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {blogs.items.map((blog, index) => {
          const assetId = blog.fields.thumbnail.sys.id;
          const assets = blogs.includes.Asset;
          const image = findAsset(assetId, assets);
          return (
            <CardBlog
              key={index}
              slug={blog.fields.slug}
              title={blog.fields.title}
              author={blog.fields.author}
              category={blog.fields.category}
              createdAt={blog.fields.createdAt}
              description={blog.fields.description}
              imageUrl={`https:${image?.fields.file.url}`}
            />
          );
        })}
      </section>
    </main>
  );
}
