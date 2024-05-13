import { db } from "~/server/db";
export const dynamic = "force-dynamic";


export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model, { desc }) => desc(model.createdAt)
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

        {images.map((image) => (
            <div key={image.id} className="w-48 p-4 flex flex-col">
              <img src={image.url} alt={image.name} />
              <div>{image.name}</div>
            </div>
          ))}
      </div>
    </main>
  );
}
