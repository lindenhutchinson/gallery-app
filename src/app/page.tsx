import Link from "next/link";
import { db } from "~/server/db";


const mockUrls = [
  "https://utfs.io/f/f293a6cf-befd-4c60-ab28-209cae7763dd-bnl7tt.webp",
  "https://utfs.io/f/79176063-1ec5-4cdd-8293-0a4d1dd210b3-pu9k7h.png",
  "https://utfs.io/f/9d427a31-8cc1-4abd-9169-9a3a4d3aabdf-qnt1iq.jpg",
  "https://utfs.io/f/204664ce-d89c-48c0-9c12-8284fe0217f4-pd3sim.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();


  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48 p-4">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
